import React from 'react'
import Link from 'next/link'
import { Button } from '@/_components/ui/button'
import { ArrowLeft, FileX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="my-10 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <FileX className="mx-auto h-24 w-24 text-gray-400" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Conteúdo não encontrado
        </h1>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-600">
          O conteúdo solicitado não foi encontrado ou pode ter sido removido.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/conteudo/e-stjd">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao conteúdo
            </Button>
          </Link>
          <Link href="/">
            <Button className="flex items-center gap-2">
              Ir para página inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
