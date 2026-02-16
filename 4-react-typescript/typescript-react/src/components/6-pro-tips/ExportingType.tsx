//--------------------- 1ST WAY
// type Name = {
//   first: string;
//   second: string;
// };

// export type PersonProp = {
//   names: Name[]; /* is like = names ke andar :  array of name object ko in karo  */
// };

// --------------------- 2ND WAY
export type PersonProp = {
  names: {
    first: string;
    second: string;
  }[];
};
