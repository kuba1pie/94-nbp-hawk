export interface Rate {
  currency: string;
  code: string;
  mid: number;
}

export interface Response {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}
