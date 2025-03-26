export interface USER_DETAILS {
  userId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNo: string;
}

export interface USER_ACCOUNT {
  id: string;
  name: string;
  icon?: string;
  remainingbalance: number;
  startingBalance: number;
}
