'use client'

import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Play,
} from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface DocumentViewerProps {
  contentUrl: string
  title: string
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  contentUrl,
  title,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Determine content type based on URL
  const getContentType = (
    url: string,
  ): 'pdf' | 'youtube' | 'image' | 'webpage' => {
    if (
      url.toLowerCase().includes('youtube.com') ||
      url.toLowerCase().includes('youtu.be')
    ) {
      return 'youtube'
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp']
    if (imageExtensions.some((ext) => url.toLowerCase().includes(ext))) {
      return 'image'
    }

    if (url.toLowerCase().includes('.pdf')) {
      return 'pdf'
    }

    return 'webpage'
  }

  const contentTypeFromUrl = getContentType(contentUrl)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
  }

  const onDocumentLoadError = () => {
    setError('Não foi possível carregar o pdf. Clique para abrir em nova aba.')
    setLoading(false)
  }

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1))
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1))

  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.includes('youtube.com/watch?v=')
      ? url.split('v=')[1]?.split('&')[0]
      : url.includes('youtu.be/')
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : null

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  const renderContent = () => {
    switch (contentTypeFromUrl) {
      case 'pdf':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  {pageNumber} / {numPages || '...'}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={goToNextPage}
                    disabled={pageNumber >= (numPages || 1)}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Link href={contentUrl} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </Link>
            </div>

            {loading && (
              <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
                  <p className="text-gray-600">Carregando documento...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="flex h-64 items-center justify-center rounded-lg bg-red-50">
                <div className="text-center">
                  <p className="mb-2 text-red-600">{error}</p>
                  <Link href={contentUrl} target="_blank">
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Abrir em nova aba
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {!error && (
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm sm:p-4">
                <Document
                  file={contentUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  className="flex w-full justify-center"
                >
                  {/* Render <Page> for each breakpoint with different scale/width */}
                  <>
                    {/* Mobile: width 320px */}
                    <div className="block sm:hidden">
                      <Page
                        pageNumber={pageNumber}
                        className="max-w-full"
                        width={290}
                        scale={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                    {/* Tablet: width 640px */}
                    <div className="hidden sm:block md:hidden">
                      <Page
                        pageNumber={pageNumber}
                        className="max-w-full"
                        width={640}
                        scale={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                    {/* Desktop: width 900px */}
                    <div className="hidden md:block">
                      <Page
                        pageNumber={pageNumber}
                        className="max-w-full"
                        width={900}
                        scale={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  </>
                </Document>
              </div>
            )}
          </div>
        )

      case 'youtube':
        return (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-600">Vídeo do YouTube</span>
              </div>
              <Link href={contentUrl} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Abrir no YouTube</span>
                </Button>
              </Link>
            </div>

            <div
              className="relative w-full"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src={getYouTubeEmbedUrl(contentUrl)}
                title={title}
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )

      case 'image':
        return (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-600">Imagem</span>
              <Link href={contentUrl} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm sm:p-4">
              <div className="relative h-64 w-full sm:h-96">
                <Image
                  src={contentUrl}
                  alt={title}
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={contentUrl.startsWith('http')}
                />
              </div>
            </div>
          </div>
        )

      case 'webpage':
      default:
        return (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-600">Página Web</span>
              <Link href={contentUrl} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Abrir em nova aba</span>
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm sm:p-4">
              <div className="flex h-48 items-center justify-center rounded-lg bg-gray-50 sm:h-64">
                <div className="text-center">
                  <ExternalLink className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-600 sm:text-base">
                    Conteúdo disponível em página web
                  </p>
                  <Link href={contentUrl} target="_blank">
                    <Button size="sm" className="sm:text-base">
                      Abrir Conteúdo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="rounded-[1.375rem] bg-white shadow-lg sm:p-6">
      <div className="mb-4 border-b border-gray-200 pb-4 sm:mb-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
          Visualizador de Conteúdo
        </h2>
        <p className="text-sm text-gray-600">
          Tipo: {contentTypeFromUrl.toUpperCase()}
        </p>
      </div>

      {renderContent()}

      {/* Floating button for mobile - only visible on mobile devices */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <Link href={contentUrl} target="_blank">
          <Button
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 p-0 shadow-lg hover:bg-blue-700"
            title="Visualizar em outra guia"
          >
            <ExternalLink className="h-6 w-6 text-white" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DocumentViewer
