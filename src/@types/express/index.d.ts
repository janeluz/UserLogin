declare namespace Express {

  export interface Request {
    user: {
      id: string;
    };
  }
}
// esse arquivo e essas pastas foram criados para sobrescrever o express, na verdade adicionar uma tipagem
