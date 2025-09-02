import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import CardTopPage from '@/_components/CardTopPage'
import DocumentViewer from '@/_components/DocumentViewer'
import fetchApi from '@/lib/strapi'
import { ConteudoESTJD } from '@/lib/types'
import { format } from 'date-fns'
import Martelo from '/public/images/martelo.webp'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const conteudo = await getConteudoESTJD(id)

  if (!conteudo) {
    return {
      title: 'Conteúdo não encontrado | STJD',
      description: 'O conteúdo solicitado não foi encontrado.',
    }
  }

  return {
    title: `${conteudo.content_name} | STJD`,
    description: `Visualize o conteúdo: ${conteudo.content_name}`,
    keywords: [
      'STJD',
      'E-STJD',
      'conteúdo',
      'documento',
      conteudo.tipo_documento,
    ],
  }
}

async function getConteudoESTJD(id: string): Promise<ConteudoESTJD | null> {
  try {
    const [conteudo] = await fetchApi<ConteudoESTJD[]>({
      endpoint: 'conteudo-e-stjds',
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

export default async function ConteudoESTJDPage({ params }: Props) {
  const { id } = await params
  const conteudo = await getConteudoESTJD(id)

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
        title="Conteúdo E-STJD"
        description="Visualize documentos, vídeos e conteúdos relacionados ao Superior Tribunal de Justiça Desportiva"
        image={Martelo}
        imagePosition="topRight"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="rounded-[1.375rem] bg-white p-6 shadow-lg">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h1 className="mb-2 text-2xl font-bold text-gray-900">
                {conteudo.content_name}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {conteudo.tipo_documento && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">
                    {conteudo.tipo_documento}
                  </span>
                )}
                {conteudo.codigo_processo && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-800">
                    Processo: {conteudo.codigo_processo}
                  </span>
                )}
                {conteudo.processo_id && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-800">
                    ID: {conteudo.processo_id}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <DocumentViewer
                  contentUrl={conteudo.content_url}
                  title={conteudo.content_name}
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
                    {conteudo.pagina && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Página:
                        </span>
                        <p className="text-gray-600">{conteudo.pagina}</p>
                      </div>
                    )}
                    {conteudo.parte_relacionada && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Parte Relacionada:
                        </span>
                        <p className="text-gray-600">
                          {conteudo.parte_relacionada}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {conteudo.legacy_id && (
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="mb-2 font-semibold text-gray-900">
                      ID Legado
                    </h3>
                    <p className="text-sm text-gray-600">
                      {conteudo.legacy_id}
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
