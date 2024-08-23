// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDeFiPlatform {
    function deposit(address token, uint256 amount) external;
    function withdraw(address token, uint256 amount) external;
    function getInterestRate(address token) external view returns (uint256);
}

contract CryptoChama {
    using SafeMath for uint256;

    address public owner;

    address[] public members;
    mapping(address => uint256) public contributions;
    mapping(address => uint256) public savings;
    mapping(address => uint256) public tokenBalances;
    uint256 public contributionAmount;
    uint256 public cycleDuration;
    uint256 public currentCycle;
    uint256 public nextDistributionTime;
    address public currentRecipient;
    uint256 public totalCollected;
    address public defiPlatform;

    event ContributionMade(
        address indexed member,
        uint256 amount,
        address token
    );
    event SavingsDeposited(
        address indexed member,
        uint256 amount,
        address token
    );
    event SavingsWithdrawn(
        address indexed member,
        uint256 amount,
        address token
    );
    event FundsDistributed(
        address indexed recipient,
        uint256 amount,
        address token
    );
    event InterestEarned(address indexed member, uint256 amount, address token);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(
        address[] memory _members,
        uint256 _contributionAmount,
        uint256 _cycleDuration,
        address _defiPlatform
    ) {
        owner = msg.sender;
        members = _members;
        contributionAmount = _contributionAmount;
        cycleDuration = _cycleDuration;
        currentCycle = 1;
        nextDistributionTime = block.timestamp + cycleDuration;
        currentRecipient = members[0];
        defiPlatform = _defiPlatform;
    }

    function contribute(address token) public payable {
        require(
            msg.value == contributionAmount,
            "Incorrect contribution amount"
        );
        require(
            block.timestamp < nextDistributionTime,
            "Contribution window has closed"
        );
        require(contributions[msg.sender] == 0, "Contribution already made");

        contributions[msg.sender] = msg.value;
        totalCollected += msg.value;
        tokenBalances[token] += msg.value;

        emit ContributionMade(msg.sender, msg.value, token);
    }

    function depositSavings(address token) public payable {
        require(msg.value > 0, "Must deposit a positive amount");

        savings[msg.sender] += msg.value;
        tokenBalances[token] += msg.value;

        emit SavingsDeposited(msg.sender, msg.value, token);
    }

    function withdrawSavings(address token, uint256 amount) public {
        require(savings[msg.sender] >= amount, "Insufficient savings balance");

        savings[msg.sender] -= amount;
        tokenBalances[token] -= amount;
        payable(msg.sender).transfer(amount);

        emit SavingsWithdrawn(msg.sender, amount, token);
    }

    function distribute(address token) public onlyOwner {
        require(
            block.timestamp >= nextDistributionTime,
            "Distribution not yet allowed"
        );
        require(
            totalCollected == contributionAmount * members.length,
            "Not all contributions made"
        );

        payable(currentRecipient).transfer(totalCollected);
        tokenBalances[token] -= totalCollected;

        totalCollected = 0;
        for (uint256 i = 0; i < members.length; i++) {
            contributions[members[i]] = 0;
        }

        emit FundsDistributed(currentRecipient, totalCollected, token);

        currentCycle++;
        currentRecipient = members[currentCycle % members.length];
        nextDistributionTime = block.timestamp + cycleDuration;
    }

    function investInDeFi(address token, uint256 amount) public {
        require(savings[msg.sender] >= amount, "Insufficient savings balance");

        IDeFiPlatform(defiPlatform).deposit(token, amount);
        savings[msg.sender] -= amount;

        emit SavingsDeposited(msg.sender, amount, token);
    }

    function withdrawFromDeFi(address token, uint256 amount) public {
        IDeFiPlatform(defiPlatform).withdraw(token, amount);
        savings[msg.sender] += amount;

        emit InterestEarned(msg.sender, amount, token);
    }

    function getInterestRate(address token) public view returns (uint256) {
        return IDeFiPlatform(defiPlatform).getInterestRate(token);
    }

    function getMembers() public view returns (address[] memory) {
        return members;
    }

    function getSavingsBalance(address member) public view returns (uint256) {
        return savings[member];
    }
}

library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }
}
