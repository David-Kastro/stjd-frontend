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
  data_publicacao: string
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
  data: string
  categoria: string
  documento: File
  createdAt: string
  updatedAt: string
}

export interface Edital extends Doc {
  categoria: 'Editais'
}

export interface Galeria {
  titulo: string
  data: string
  slug: string
  lugar: string
  imagens: Image[]
}

export interface Process {
  id: number
  tipo: string
  data: string
  documento: Doc
  titulo: string
  subtitulo: string
  relator?: string
  procurador?: string
  partes?: {
    nome: string
    tipo?: string
  }[]
}

export interface ProcessFilters {
  tipo?: string
  dispositivo?: string
  infracao?: string
  relator?: string
  procurador?: string
  data?: string
  name1?: string
  name2?: string
}
