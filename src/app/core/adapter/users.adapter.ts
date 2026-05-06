import { User } from "../models/user.model";
import { validateCPF } from "../validators/cpf-cnpj.validator";

export class UsersAdapter {
  static fromApi(user: any): User {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      document: UsersAdapter.generateValidCpf(),
      phone: UsersAdapter.formatPhone(user.phone),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  static generateValidCpf(): string {
    let cpf;
    do {
      cpf = UsersAdapter.generateCpfDigits();
    } while (!validateCPF(cpf));
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  static generateCpfDigits(): string {
    const randomDigit = () => Math.floor(Math.random() * 10);
    const cpfArray = Array.from({ length: 9 }, randomDigit);
    
    // Evitar CPFs com todos os dígitos iguais
    if (new Set(cpfArray).size === 1) {
      return UsersAdapter.generateCpfDigits();
    }

    const calcCheckDigit = (base: number[]) => {
      const sum = base.reduce((acc, num, index) => {
        return acc + num * (base.length + 1 - index);
      }, 0);
      const remainder = (sum * 10) % 11;
      return remainder === 10 ? 0 : remainder;
    };

    const digit1 = calcCheckDigit(cpfArray);
    const digit2 = calcCheckDigit([...cpfArray, digit1]);
    
    return [...cpfArray, digit1, digit2].join('');
  }

  static formatPhone(phone: string): string {
    if (!phone) return '';

    let digits = phone.replace(/\D/g, '');

    if (digits.length > 11) {
      digits = digits.slice(-11);
    }

    if (digits.length < 10) return digits;

    const ddd = digits.slice(0, 2);
    const firstPart = digits.slice(2, digits.length === 10 ? 6 : 7);
    const secondPart = digits.slice(digits.length === 10 ? 6 : 7);

    return `(${ddd}) ${firstPart}-${secondPart}`;
  }
}