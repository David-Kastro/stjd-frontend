import { FileSearch2 } from 'lucide-react'

export function DocumentEmptyState() {
  return (
    <div className="mt-[1.5rem] flex h-[20rem] flex-col items-center justify-center gap-[0.75rem]">
      <FileSearch2 size={76} strokeWidth={1} className="opacity-65" />
      <h1 className="text-[1.25rem] font-medium">
        Nenhum documento por aqui.. 🤔
      </h1>
      <p>Tente novamente com outros filtros ou volte mais tarde.</p>
    </div>
  )
}
