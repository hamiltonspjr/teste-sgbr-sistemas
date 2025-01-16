import { useList } from "../../../infra/hooks/useList";
import { QueryKeys } from "../../../infra/infraTypes";
import { brandService } from "../brandService";
import { Brand } from "../brandTypes";

export function useBrandList() {
  return useList<Brand>([QueryKeys.BrandList], brandService.getList);
}
