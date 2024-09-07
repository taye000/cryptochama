export interface IChama {
  _id: string;
  name: string;
  description: string;
  photo?: string;
  members: string[];
  createdAt: Date;
  updatedAt: Date;
}
