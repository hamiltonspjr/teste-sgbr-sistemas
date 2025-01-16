export interface MutationOptions<TDATA> {
  onSuccess?: (data: TDATA) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export enum QueryKeys {
  BrandList = "BrandList",
  CarList = "CarList",
}
