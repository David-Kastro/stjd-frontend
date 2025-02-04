import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Edital } from "@/app/processos/editais/page";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

// Configura o worker para carregar PDFs corretamente
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  editalActive: Edital;
}

const PDFViewer = ({ editalActive }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));

  return (
    <div className="bg-[#E1E1E1] py-[1rem] px-[1.69rem] rounded-[1.375rem] relative">
      <h2 className="text-[1.12138rem] font-bold leading-[2.66025rem]">
        {editalActive.titulo}{" "}
        <span className="font-normal">{editalActive.subTitle}</span>
      </h2>
      <p className="text-end text-[#2E2E2E] text-[0.79181rem]">
        Prévia do documento
      </p>
      <hr className="w-full bg-[#BD995D] h-[0.125rem] mt-[0.8rem]" />
      <div className="flex mt-[1.9rem] justify-between items-center">
        <div className="w-[9.0625rem]">
          <div className="bg-[#A1A1A1] w-[4.79169rem] py-[0.42rem] rounded-[0.41669rem]">
            <p className="text-center text-[0.66669rem] text-white font-bold">
              {pageNumber} / {numPages}
            </p>
          </div>
        </div>

        <div className="flex gap-[0.41rem] w-[9.0625rem] justify-center">
          <button
            onClick={goToPrevPage}
            className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
          >
            <ChevronLeft color="#A1A1A1" />
          </button>
          <button
            onClick={goToNextPage}
            className="h-[2.25rem] w-[2.25rem] border-[1.929px] border-solid border-[#A1A1A1] rounded-full flex items-center justify-center"
          >
            <ChevronLeft color="#A1A1A1" className="rotate-180" />
          </button>
        </div>
        <Link href={editalActive.link} target="_blank">
          <Button className="text-[0.73681rem] h-[2.21038rem] w-[9.0625rem] rounded-[2.72613rem]">
            Fazer Download
          </Button>
        </Link>
      </div>

      {loading && <p>Carregando documento...</p>}

      <div
        className="w-full h-[full] overflow-auto border border-gray-300 shadow-lg bg-white p-2 mt-[1rem]"
        style={{ border: "1px solid #ccc", display: "inline-block" }}
      >
        <Document
          file={editalActive.link}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={1.0} />
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
