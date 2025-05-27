export const emailRegex: RegExp =
  /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;

export const stringWithOneNum: RegExp = /.*\d.*/;
export const stringWithOneSpecialChar: RegExp = /^(?!.*\s).*[@!#$&].*$/;
export const stringWithOneUppercase: RegExp = /.*[A-Z].*/;
export const stringWithOneLowercase: RegExp = /.*[a-z].*/;
export const passRegex: RegExp =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$&])[^\s]{6,16}$/;
