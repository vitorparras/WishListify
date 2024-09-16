import { Erros } from "./Erros";

export interface GenericResponse<TData> {
  success: boolean;
  data?: TData;
  erros?: Erros[];
}
