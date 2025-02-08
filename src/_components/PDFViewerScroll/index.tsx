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
  const [pageNumber, setPageNumber] = useState(1)

  const [loading, setLoading] = useState(true)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
  }

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1))
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1))

  return (
    <div className="relative rounded-[1.375rem] bg-[#E1E1E1] px-[1.69rem] py-[1rem]">
      <div className="mt-[1.9rem] flex items-center justify-center">
        <div className="w-[9.0625rem]">
          <div className="w-[4.79169rem] rounded-[0.41669rem] bg-[#A1A1A1] py-[0.42rem]">
            <p className="text-center text-[0.66669rem] font-bold text-white">
              {pageNumber} / {numPages}
            </p>
          </div>
        </div>
      </div>

      {loading && <p>Carregando documento...</p>}

      <div
        className="mt-[1rem] h-[full] w-full overflow-auto border border-gray-300 bg-white p-2 shadow-lg"
        style={{ border: '1px solid #ccc', display: 'inline-block' }}
      >
        <Document file={linkPdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={1.0} />
        </Document>
      </div>
    </div>
  )
}

export default PDFViewerScroll
