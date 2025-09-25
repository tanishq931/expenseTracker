export interface TRANSACTION {
  accountDebitedFrom?: string;
  accountCreditedTo?: string;
  amount: number;
  billPath?: string;
  category: string;
  createdAt: string;
  description: string;
  id: string;
  transactionType: string;
}
