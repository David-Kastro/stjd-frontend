import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  linkPdf: string
}

const PDFViewerScroll = ({ linkPdf }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)

  const [currentPage, setCurrentPage] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  // Função para detectar qual página está visível
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollTop = container.scrollTop
    const pageHeight = container.scrollHeight / (numPages || 1)
    const currentPage = Math.ceil(scrollTop / pageHeight) + 1
    setCurrentPage(currentPage)
  }

  return (
    <div className="relative rounded-[1.375rem] bg-[#E1E1E1] lg:px-[1.69rem]">
      <div className="flex items-center justify-center">
        <div className="w-8 lg:w-[9.0625rem]">
          <div className="w-[4.79169rem] rounded-[0.41669rem] bg-[#A1A1A1] py-[0.42rem]">
            <p className="text-center text-[0.66669rem] font-bold text-white">
              {currentPage} / {numPages}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div
          className="scroll-custom-editais mx-auto mt-[1rem] flex max-h-[56vh] w-full max-w-[20rem] justify-center overflow-y-scroll border border-gray-300 bg-white shadow-lg lg:max-w-[46rem] lg:p-2"
          onScroll={handleScroll}
        >
          <Document file={linkPdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="mb-4">
                {/* Mobile: width 320px */}
                <div className="block sm:hidden">
                  <Page
                    pageNumber={index + 1}
                    width={290}
                    scale={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
                {/* Tablet: width 640px */}
                <div className="hidden sm:block">
                  <Page
                    pageNumber={index + 1}
                    width={640}
                    scale={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              </div>
            ))}
          </Document>
        </div>
        <div className="mt-5 flex justify-center">
          <a href={linkPdf} className="mx-auto w-fit" target="_blank">
            <Button className="mx-auto h-[3.75rem] rounded-[4.625rem] px-[3.12rem] text-[1.25rem] font-bold">
              Fazer Download
            </Button>
          </a>
        </div>
      </div>

      {/* Floating button for mobile - only visible on mobile devices */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <Link href={linkPdf} target="_blank">
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

export default PDFViewerScroll
