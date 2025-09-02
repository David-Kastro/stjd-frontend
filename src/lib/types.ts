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
  duracao: string | null
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

// Add these types to your existing types.ts file

export interface JurisprudenciaFilters {
  acordao?: string
  processo?: string
  orgao?: string
  classe?: string
  relator?: string
  revisor?: string
  relatorDesignado?: string
  dataJulgamento?: string
  dataPublicacao?: string
  pesquisa?: string
  ano?: string
}

export interface Jurisprudencia {
  id: number
  orgao: string
  titulo: string
  subtitulo: string
  data_julgamento: string
  data_publicacao: string
  numero_acordao: string
  numero_processo: string
  relator?: {
    id: number
    nome: string
  }
  revisor?: {
    id: number
    nome: string
  }
  relator_designado?: {
    id: number
    nome: string
  }
  documento?: {
    url: string
    name: string
  }
}

export interface ConteudoESTJD {
  codigo_processo: string
  content_name: string
  content_url: string
  createdAt: string
  criado_em: string
  documentId: string
  id: number
  legacy_id: string
  pagina: number
  parte_relacionada: string
  processo_id: string
  publishedAt: string | null
  tipo_documento: string
  updatedAt: string
}

export interface ConteudoSTJD {
  autor: string
  caminho: string
  conteudo_url: string
  createdAt: string
  criado_em: string
  documentId: string
  documento_id: string
  id: number
  publishedAt: string | null
  titulo: string
  updatedAt: string
}
