import { api } from "../../api/apiConfig";
import { CarTypeApi } from "./carListTypes";

async function getList(id: string): Promise<CarTypeApi> {
  const response = await api.get(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`
  );
  return response.data;
}

export const carApi = {
  getList,
};
