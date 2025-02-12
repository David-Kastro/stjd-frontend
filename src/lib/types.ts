export type Image = {
  id: number
  documentId: string
  name: string
  url: string
  width: number
  height: number
  size: number
  mime: string
}

export type File = {
  id: number
  documentId: string
  name: string
  url: string
  size: number
  mime: string
}

export type Member = {
  id: number
  documentId: string
  publishedAt: string
  nome: string
  orgao: string
  associacao: string
  cargo: string
  bio: string
  avatar?: Image
  createdAt: string
  updatedAt: string
}

export interface Article {
  id: number
  documentId: string
  headline: string
  corpo: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  lead: string
  imagem: Image
  slug: string
  tipo: 'Notícia' | 'Publicação'
}

export interface News extends Article {
  tipo: 'Notícia'
}

export interface Publication extends Article {
  tipo: 'Publicação'
}

export interface Session {
  id: number
  documentId: string
  titulo: string
  data: string
  duracao: string
  link: string
  createdAt: string
  updatedAt: string
}

export interface Doc {
  id: number
  documentId: string
  titulo: string
  subtitulo: string
  tipo: string
  categoria: string
  documento: File
  createdAt: string
  updatedAt: string
}

export interface Edital extends Doc {
  categoria: 'Editais'
}
