import { api } from "../../api/apiConfig";
import { BrandType } from "./brandTypes";

async function getList(): Promise<BrandType[]> {
  const response = await api.get<BrandType[]>(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  return response.data;
}

export const brandApi = {
  getList,
};
