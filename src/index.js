export const makeCodeA = phonenumber => `A${phonenumber}`;
export const makeCodeB = (phonenumber, amount) => `B${phonenumber};${amount}`;
export const makeCodeC = (phonenumber, amount, message, editableFields = 0) =>
  `C${phonenumber};${amount};${message};${editableFields}`;

export const PHONENUMBER_EDITABLE = 0b001;
export const AMOUNT_EDITABLE = 0b010;
export const MESSAGE_EDITABLE = 0b100;
