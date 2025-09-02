import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import CardTopPage from '@/_components/CardTopPage'
import DocumentViewer from '@/_components/DocumentViewer'
import fetchApi from '@/lib/strapi'
import { ConteudoSTJD } from '@/lib/types'
import { format } from 'date-fns'
import Martelo from '/public/images/martelo.webp'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const conteudo = await getConteudoSTJD(id)

  if (!conteudo) {
    return {
      title: 'Conteúdo não encontrado | STJD',
      description: 'O conteúdo solicitado não foi encontrado.',
    }
  }

  return {
    title: `${conteudo.titulo} | STJD`,
    description: `Visualize o conteúdo: ${conteudo.titulo}`,
    keywords: ['STJD', 'conteúdo', 'documento', conteudo.autor],
  }
}

async function getConteudoSTJD(id: string): Promise<ConteudoSTJD | null> {
  try {
    const [conteudo] = await fetchApi<ConteudoSTJD[]>({
      endpoint: 'conteudo-stjds',
      query: {
        filters: {
          documentId: id,
        },
        populate: '*',
      },
    })

    return conteudo?.[0] || null
  } catch (error) {
    console.error('Error fetching conteudo:', error)
    return null
  }
}

export default async function ConteudoSTJDPage({ params }: Props) {
  const { id } = await params
  const conteudo = await getConteudoSTJD(id)

  if (!conteudo) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return format(date, "dd 'de' MMMM 'de' yyyy")
    } catch {
      return dateString
    }
  }

  return (
    <div className="min-h-screen">
      <CardTopPage
        title="Conteúdo STJD"
        description="Visualize documentos, vídeos e conteúdos relacionados ao Superior Tribunal de Justiça Desportiva"
        image={Martelo}
        imagePosition="topRight"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="rounded-[1.375rem] bg-white p-6 shadow-lg">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h1 className="mb-2 text-2xl font-bold text-gray-900">
                {conteudo.titulo}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {conteudo.autor && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">
                    Autor: {conteudo.autor}
                  </span>
                )}
                {conteudo.documento_id && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-800">
                    Documento ID: {conteudo.documento_id}
                  </span>
                )}
                {conteudo.documentId && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-800">
                    ID: {conteudo.documentId}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <DocumentViewer
                  contentUrl={conteudo.conteudo_url}
                  title={conteudo.titulo}
                />
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Informações do Documento
                  </h3>
                  <div className="space-y-2 text-sm">
                    {conteudo.criado_em && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Data de Criação:
                        </span>
                        <p className="text-gray-600">
                          {formatDate(conteudo.criado_em)}
                        </p>
                      </div>
                    )}
                    {conteudo.autor && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Autor:
                        </span>
                        <p className="text-gray-600">{conteudo.autor}</p>
                      </div>
                    )}
                    {conteudo.caminho && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Caminho:
                        </span>
                        <p className="text-gray-600">{conteudo.caminho}</p>
                      </div>
                    )}
                  </div>
                </div>

                {conteudo.documento_id && (
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="mb-2 font-semibold text-gray-900">
                      ID do Documento
                    </h3>
                    <p className="text-sm text-gray-600">
                      {conteudo.documento_id}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
