import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  linkPdf: string
}

const PDFViewerScroll = ({ linkPdf }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
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
    <div className="relative rounded-[1.375rem] bg-[#E1E1E1] px-[1.69rem]">
      <div className="flex items-center justify-center">
        <div className="w-[9.0625rem]">
          <div className="w-[4.79169rem] rounded-[0.41669rem] bg-[#A1A1A1] py-[0.42rem]">
            <p className="text-center text-[0.66669rem] font-bold text-white">
              {currentPage} / {numPages}
            </p>
          </div>
        </div>
      </div>

      {loading && <p>Carregando documento...</p>}

      <div
        className="scroll-custom-editais mx-auto mt-[1rem] flex min-h-[28rem] w-full max-w-[46rem] justify-center overflow-y-scroll border border-gray-300 bg-white p-2 shadow-lg"
        onScroll={handleScroll}
      >
        <Document file={linkPdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} className="mb-4">
              <Page
                pageNumber={index + 1}
                scale={1.0}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  )
}

export default PDFViewerScroll
