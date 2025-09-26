import BillIcon from '../../assets/icons/BillIcon';
import EntertainmentIcon from '../../assets/icons/EntertainmentIcon';
import FoodIcon from '../../assets/icons/FoodIcon';
import GroceryIcon from '../../assets/icons/GroceryIcon';
import PaymentIcon_1 from '../../assets/icons/PaymentIcon_1';
import PaymentIcon_2 from '../../assets/icons/PaymentIcon_2';
import PaymentIcon_3 from '../../assets/icons/PaymentIcon_3';
import PaymentIcon_4 from '../../assets/icons/PaymentIcon_4';
import PaymentIcon_5 from '../../assets/icons/PaymentIcon_5';
import PaymentIcon_6 from '../../assets/icons/PaymentIcon_6';
import PaymentIcon_7 from '../../assets/icons/PaymentIcon_7';
import ShoppingIcon from '../../assets/icons/ShoppingIcon';
import TravelIcon from '../../assets/icons/TravelIcon';
import {CATEGORY, USER_ACCOUNT} from './types/UserDetails';

export const TRANSACTION_TYPE = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  TRANSFER: 'TRANSFER',
};

export const PLATFORM_TYPE = {
  ANDROID: 'android',
  IOS: 'ios',
};

export const KEYBOARD_TYPE = {
  DEFAULT: 'default',
  NUMBER_PAD: 'number-pad',
  DECIMAL_PAD: 'decimal-pad',
  NUMBERIC: 'numeric',
  EMAIL: 'email-address',
  PHONE_PAD: 'phone-pad',
  URL: 'url',
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  CUSTOM_CATEGORIES: 'custom_categories',
  CUSTOM_ACCOUNTS: 'custom_accounts',
  TRANSACTIONS: 'transactions',
};

export const BOTTOMSHEET_TYPES = {
  CATEGORY_LIST: 'CATEGORY_LIST',
  IMAGE_PICKER: 'IMAGE_PICKER',
  IMAGE_VIEWER: 'IMAGE_VIEWER',
};

export const ICON_DATA: any = {
  Bill: BillIcon,
  Entertainment: EntertainmentIcon,
  Food: FoodIcon,
  Grocery: GroceryIcon,
  Shopping: ShoppingIcon,
  Travel: TravelIcon,
};

export const ACCOUNTS_ICON: any = {
  PI_1: PaymentIcon_1,
  PI_2: PaymentIcon_2,
  PI_3: PaymentIcon_3,
  PI_4: PaymentIcon_4,
  PI_5: PaymentIcon_5,
  PI_6: PaymentIcon_6,
  PI_7: PaymentIcon_7,
};

export const DEFAULT_CATEGORIES: Array<CATEGORY> = [
  {
    id: '1',
    name: 'Bill',
  },
  {
    id: '2',
    name: 'Entertainment',
  },
  {
    id: '3',
    name: 'Food',
  },
  {id: '4', name: 'Grocery'},
  {
    id: '5',
    name: 'Shopping',
  },
  {
    id: '6',
    name: 'Travel',
  },
];

export const DEFAULT_ACCOUNTS: Array<USER_ACCOUNT> = [
  {
    id: 'AC_1',
    name: 'CASH',
    icon: 'PI_2',
    startingBalance: 0,
    currentBalance: 0,
  },
  {
    id: 'AC_2',
    name: 'CARD',
    icon: 'PI_3',
    startingBalance: 0,
    currentBalance: 0,
  },
  {
    id: 'AC_3',
    name: 'BANK',
    icon: 'PI_1',
    startingBalance: 0,
    currentBalance: 0,
  },
];
