import { carAdapter } from "./carListAdapter";
import { carApi } from "./carListApi";
import { CarType } from "./carListTypes";

async function getList(id: string): Promise<CarType[]> {
  const carApiData = await carApi.getList(id);
  return carAdapter.toCar(carApiData);
}

export const carListService = {
  getList,
};
