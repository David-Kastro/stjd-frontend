import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Edital } from '@/app/processos/editais/page'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

// Configura o worker para carregar PDFs corretamente
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  editalActive: Edital
}

const PDFViewer = ({ editalActive }: PDFViewerProps) => {
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
      <h2 className="text-[1.12138rem] font-bold leading-[2.66025rem]">
        {editalActive.titulo}{' '}
        <span className="font-normal">{editalActive.subTitle}</span>
      </h2>
      <p className="text-end text-[0.79181rem] text-[#2E2E2E]">
        Prévia do documento
      </p>
      <hr className="mt-[0.8rem] h-[0.125rem] w-full bg-[#BD995D]" />
      <div className="mt-[1.9rem] flex items-center justify-between">
        <div className="w-[9.0625rem]">
          <div className="w-[4.79169rem] rounded-[0.41669rem] bg-[#A1A1A1] py-[0.42rem]">
            <p className="text-center text-[0.66669rem] font-bold text-white">
              {pageNumber} / {numPages}
            </p>
          </div>
        </div>

        <div className="flex w-[9.0625rem] justify-center gap-[0.41rem]">
          <button
            onClick={goToPrevPage}
            className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1]"
          >
            <ChevronLeft color="#A1A1A1" />
          </button>
          <button
            onClick={goToNextPage}
            className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full border-[1.929px] border-solid border-[#A1A1A1]"
          >
            <ChevronLeft color="#A1A1A1" className="rotate-180" />
          </button>
        </div>
        <Link href={editalActive.link} target="_blank">
          <Button className="h-[2.21038rem] w-[9.0625rem] rounded-[2.72613rem] text-[0.73681rem]">
            Fazer Download
          </Button>
        </Link>
      </div>

      {loading && <p>Carregando documento...</p>}

      <div
        className="mt-[1rem] h-[full] w-full overflow-auto border border-gray-300 bg-white p-2 shadow-lg"
        style={{ border: '1px solid #ccc', display: 'inline-block' }}
      >
        <Document
          file={editalActive.link}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={1.0} />
        </Document>
      </div>
    </div>
  )
}

export default PDFViewer
