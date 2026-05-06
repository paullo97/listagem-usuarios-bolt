export interface User {
  id: number;
  name: string;
  email: string;
  cpf?: string;
  cnpj?: string;
  dataCreation: string;
  dataUpdate: string;
}