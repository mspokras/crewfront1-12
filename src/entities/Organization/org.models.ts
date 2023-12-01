export interface IOrganization {
  _id?: string;
  balance?: number;
  city: string;
  commercialReg: string;
  commercialRegExpiryDate: Date;
  creationDate?: Date;
  creditLimit?: number;
  employeesAmount: number;
  invoices?: any[];
  name: string;
  payments?: any[];
  taxReg: string;
}
