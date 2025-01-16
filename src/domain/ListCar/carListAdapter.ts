import { CarTypeApi, CarType } from "./carListTypes";

function toCar(carApi: CarTypeApi): CarType[] {
  const car = carApi.modelos.map((car) => ({
    id: car.codigo.toString(),
    name: car.nome,
  }));
  return car;
}

export const carAdapter = { toCar };
