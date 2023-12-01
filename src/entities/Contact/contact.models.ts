export interface IContact {
  branch?: string;
  creationDate?: Date;
  email: string;
  firstName: string;
  isPrimary?: boolean;
  lastName: string;
  orders?: string[];
  phone: string;
  _id?: string;
}