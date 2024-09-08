export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  photo?: string;
  chamaId?: string;
  walletAddress?: string;
  refreshToken?: string;
  recoveryCode?: string;
  recoveryCodeExpiry?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
