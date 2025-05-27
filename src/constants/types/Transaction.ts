export interface TRANSACTION {
  accountDebitedFrom?: string;
  accountCreditedTo?: string;
  amount: number;
  billId?: string;
  category: string;
  createdAt: Date;
  description?: string;
  id: string;
  title: string;
  transactionType: string;
}