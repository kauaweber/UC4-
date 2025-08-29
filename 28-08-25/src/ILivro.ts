export interface ILivro {
    titulo: string;              // obrigatorio
    autor: string;               // obrigatorio
    anoPublicacao: number;       // obrigatorio
    disponivel?: boolean;        // opcional
} 