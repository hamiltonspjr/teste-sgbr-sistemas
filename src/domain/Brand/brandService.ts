import { brandAdapter } from "./brandAdapter";
import { brandApi } from "./brandApi";
import { Brand } from "./brandTypes";

async function getList(): Promise<Brand[]> {
  const brandApiData = await brandApi.getList();
  return brandAdapter.toBrand(brandApiData);
}

export const brandService = {
  getList,
};
