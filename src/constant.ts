
export type FnPredicate = (x: any) => boolean;
export type FnToString = () => string;

export const MAX_ARRAY_LENGTH: number = 4294967295;
export const MAX_ARRAY_INDEX: number = MAX_ARRAY_LENGTH - 1;


// short hands

export const funcToString: FnToString = Function.prototype.toString;
export const objToString: FnToString = Object.prototype.toString;
