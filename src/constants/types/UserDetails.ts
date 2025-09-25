export interface USER_DETAILS {
  userId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNo: string;
  currency: string;
}

export interface USER_ACCOUNT {
  id: string;
  name: string;
  icon: string;
  currentBalance: number;
  startingBalance: number;
}

export interface CATEGORY {
  id: string;
  name: string;
}
