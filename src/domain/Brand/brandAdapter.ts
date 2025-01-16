import { Brand, BrandType } from "./brandTypes";

function toBrand(brandApi: BrandType[]): Brand[] {
  return brandApi.map((brand) => ({
    id: brand.codigo,
    name: brand.nome,
  }));
}

export const brandAdapter = { toBrand };
