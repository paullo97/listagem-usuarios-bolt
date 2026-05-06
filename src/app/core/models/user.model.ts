export enum DocumentType {
  CPF = 'cpf',
  CNPJ = 'cnpj'
}

export interface User {
  id: string;
  name: string;
  email: string;
  document?: string;
  docType?: DocumentType;
  phone: string;
  createdAt: string;
  updatedAt: string;
}