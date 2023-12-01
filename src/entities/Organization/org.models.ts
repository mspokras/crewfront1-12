export interface IOrganization {
  _id?: string;
  balance: number;
  commercialReg?: string;
  commercialRegExpiryDate?: Date;
  creationDate?: Date;
  creditLimit?: number;
  employeesAmount?: number;
  invoices?: any[];
  name: string;
  ordersAmount?: number;
  payments?: any[];
  primaryContact?: any;
  ratingsAmount?: number;
  ratingsAverage?: number;
  taxReg?: string;
}
