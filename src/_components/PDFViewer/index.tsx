import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Doc } from '@/lib/types'

// Configura o worker para carregar PDFs corretamente
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  doc: Doc
}

const PDFViewer = ({ doc }: PDFViewerProps) => {
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
    <div className="relative rounded-[1.375rem] bg-[#E1E1E1] px-[1.69rem] py-9 lg:py-[1rem]">
      <h2 className="text-center text-[1.12138rem] font-bold lg:text-left lg:leading-[2.66025rem]">
        {doc.titulo} <span className="font-normal">{doc.subtitulo}</span>
      </h2>
      <p className="hidden text-end text-[0.79181rem] text-[#2E2E2E] lg:block">
        Prévia do documento
      </p>
      <hr className="mt-[0.8rem] h-[0.125rem] w-full bg-[#BD995D]" />
      <div className="mt-2 flex items-center justify-between lg:mt-[1.9rem]">
        <div className="mx-auto lg:w-[9.0625rem]">
          <div className="w-14 rounded-[0.41669rem] bg-[#A1A1A1] py-1 lg:w-[4.79169rem] lg:py-[0.42rem]">
            <p className="text-center text-[0.66669rem] font-bold text-white">
              {pageNumber} / {numPages}
            </p>
          </div>
        </div>

        <div className="hidden w-[9.0625rem] justify-center gap-[0.41rem] lg:flex">
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
        <Link href={doc.documento.url} target="_blank">
          <Button className="hidden h-[2.21038rem] w-[9.0625rem] rounded-[2.72613rem] text-[0.73681rem] lg:block">
            Fazer Download
          </Button>
        </Link>
      </div>
      <p className="mt-1 text-center text-[0.79181rem] text-[#2E2E2E] lg:hidden">
        Prévia do documento
      </p>

      {loading && <p>Carregando documento...</p>}

      <div
        className="mt-[1rem] h-[full] w-full overflow-auto border border-gray-300 bg-white p-2 shadow-lg"
        style={{ border: '1px solid #ccc', display: 'inline-block' }}
      >
        <Document
          file={doc.documento.url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={1.0} />
        </Document>
      </div>
      <div className="mx-auto mt-[1rem] flex w-[9.0625rem] justify-center gap-[0.41rem] lg:hidden">
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
      <Link href={doc.documento.url} target="_blank">
        <Button className="mt-[1rem] h-[3.8rem] w-full rounded-[2.72613rem] text-[1.25rem] lg:hidden lg:h-[2.21038rem] lg:w-[9.0625rem]">
          Fazer Download
        </Button>
      </Link>
    </div>
  )
}

export default PDFViewer
