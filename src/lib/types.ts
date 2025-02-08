export type Member = {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    nome: string;
    orgao: string;
    associacao: string;
    cargo: string;
    bio: string;
}

export type Image = {
    id: number;
    documentId: string;
    name: string;
    url: string;
    width: number;
    height: number;
    size: number;
    mime: string;
};

export type Article = {
    id: number;
    documentId: string;
    headline: string;
    corpo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    lead: string;
    imagem: Image;
};