import { useList } from "../../../infra/hooks/useList";
import { QueryKeys } from "../../../infra/infraTypes";
import { carListService } from "../carListService";

export function useCarList(id: string) {
  function getList() {
    return carListService.getList(id);
  }
  return useList([QueryKeys.CarList, id], getList);
}
