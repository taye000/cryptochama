import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const TermsPage = () => {
    return (
        <TermsContainer>
            <Typography variant="h4" gutterBottom>
                Terms and Conditions
            </Typography>
            <TermsContent>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id tortor sed libero feugiat
                    pellentesque. Donec nec sapien at ante aliquet malesuada. Quisque id risus sed turpis elementum
                    luctus. Phasellus vitae nisl eu elit suscipit ullamcorper vel id eros. Sed pharetra congue lectus,
                    quis congue mauris feugiat ac. Morbi condimentum nisl sed libero consequat, id rhoncus est ultricies.
                    Duis vitae felis in felis luctus sagittis ac a felis. Donec ullamcorper augue ut orci porttitor
                    feugiat.
                </Typography>
                <Typography variant="body1" paragraph>
                    Duis tristique tincidunt tortor, in blandit magna fermentum in. Integer convallis sapien nec justo
                    bibendum eleifend. Ut et commodo sem. Vestibulum malesuada lectus libero, eu mollis quam commodo sit
                    amet. Sed ultrices odio a efficitur sodales. Donec id mauris ex. Fusce sed ipsum ut ante ultricies
                    faucibus. Integer et sodales nisi, eu consequat sem. Nulla laoreet mi a nunc facilisis, vel molestie
                    libero tempor.
                </Typography>
                <Typography variant="body1">
                    Vivamus euismod lobortis enim vel molestie. Ut tincidunt ante id dolor maximus, in mattis orci
                    vulputate. Nam pulvinar eros sit amet nulla dictum, in aliquet leo feugiat. Integer fermentum felis
                    nec lectus iaculis, ac efficitur risus commodo. Nulla facilisi. Donec ultrices scelerisque urna nec
                    lobortis. Mauris tincidunt ultricies semper. Proin non rutrum dui. Duis vestibulum vestibulum arcu
                    eget pellentesque. Integer quis metus lectus.
                </Typography>
            </TermsContent>
        </TermsContainer>
    );
};

const TermsContainer = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TermsContent = styled.div`
    max-width: 800px;
    width: 100%;
`;

export default TermsPage;
