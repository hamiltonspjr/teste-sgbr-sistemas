export interface CarTypeApi {
  anos: Ano[];
  modelos: Modelo[];
}

export interface CarType {
  id: string;
  name: string;
}
interface Ano {
  codigo: string;
  nome: string;
}
interface Modelo {
  codigo: number;
  nome: string;
}
