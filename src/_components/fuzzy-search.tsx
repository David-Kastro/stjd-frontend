'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { useDebounce } from '@/_hooks/use-debounce'
import { ScrollArea } from './ui/scroll-area'
import { searchApi } from '@/lib/strapi'
import Link from 'next/link'
import { marked } from 'marked'

const links: Record<string, string> = {
  articles: '/comunicacao/noticias',
  notices: '/processos/editais',
  galerias: '/comunicacao/galerias',
  jurisprudences: '/jurisprudencia/jurisprudencia-stjd',
  processes: '/processos/processos',
  resolutions: '/leis-normas/resolucoes',
}

// Atualizar a tipagem para suportar diferentes categorias e imagens
type BaseItem = {
  id?: number
  documentId?: string
  slug?: string
  titulo?: string
  headline?: string
  subtitulo?: string
  tipo?: string
  data?: string
  data_publicacao?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string | null
  descricao?: string
  lead?: string
}

type Image = {
  url: string
  alt?: string
}

type GalleryItem = BaseItem & {
  imagens?: Image[]
}

type SearchResults = {
  [key: string]: BaseItem[] | GalleryItem[]
}

// Atualizar o mock de dados para incluir a categoria galleries com imagens
const fetchSearchResults = async (query: string) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const search = await searchApi<SearchResults>({
    search: query,
  })

  return search
}

// Substituir o componente FuzzySearch com a versão atualizada
export default function FuzzySearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [results, setResults] = useState<SearchResults | null>(null)
  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Fetch results when debounced search query changes
  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearchQuery.trim() === '') {
        setResults(null)
        setIsLoading(false)
        setIsDropdownOpen(false)
        return
      }

      setIsLoading(true)

      try {
        const data = await fetchSearchResults(debouncedSearchQuery)
        setResults(data)
        setIsDropdownOpen(true)
      } catch (error) {
        console.error('Error fetching search results:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [debouncedSearchQuery])

  // Filter results based on search query using fuzzy matching
  const filteredResults = useMemo(() => {
    if (!results) return null

    const filtered: SearchResults = {}

    Object.entries(results).forEach(([category, items]) => {
      if (items.length > 0) {
        filtered[category] = items
      }
    })

    return filtered
  }, [results])

  // Function to render an item based on its category
  const renderItem = (item: BaseItem | GalleryItem, category: string) => {
    return (
      <div
        key={item.id || item.titulo}
        className="cursor-pointer rounded-md p-2 hover:bg-muted"
      >
        <Link
          href={`${links[category]}/${item.slug || item.id}`}
          className="flex flex-col gap-1"
        >
          <div className="font-medium">{item?.titulo || item?.headline}</div>
          {item.subtitulo && (
            <div className="text-sm text-muted-foreground">
              {item.subtitulo}
            </div>
          )}

          {/* Render images if available (for galleries) */}
          {'imagens' in item && item.imagens && item.imagens.length > 0 && (
            <div className="mt-1 flex gap-2">
              {item.imagens.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="relative h-20 w-24 overflow-hidden rounded-md"
                >
                  <img
                    src={image.url || '/placeholder.svg'}
                    alt={image.alt || `Imagem ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {item.lead && (
            <div
              className="line-clamp-2 text-xs text-muted-foreground"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: marked.parse(item.lead) }}
            />
          )}
          {item.descricao && !item.lead && (
            <div
              className="line-clamp-2 text-xs text-muted-foreground"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: marked.parse(item.descricao) }}
            />
          )}

          <div className="flex justify-end text-xs text-muted-foreground">
            {/* {item.tipo && <span>{item.tipo}</span>} */}
            {item.data_publicacao && (
              <span>
                {new Date(item.data_publicacao).toLocaleDateString('pt-BR')}
              </span>
            )}
            {item.data && !item.data_publicacao && (
              <span>{new Date(item.data).toLocaleDateString('pt-BR')}</span>
            )}
          </div>
        </Link>
      </div>
    )
  }

  // Function to get a friendly category name
  const getCategoryName = (category: string): string => {
    const categoryNames: Record<string, string> = {
      articles: 'Notícias e publicações',
      notices: 'Editais',
      galerias: 'Galerias',
      jurisprudences: 'Jurisprudências',
      processes: 'Processos',
      resolutions: 'Resoluções',
    }

    return (
      categoryNames[category] ||
      category.charAt(0).toUpperCase() + category.slice(1)
    )
  }

  // Check if we have any results
  const hasResults = filteredResults && Object.keys(filteredResults).length > 0

  return (
    <div className="relative z-[60] w-full max-w-md" ref={dropdownRef}>
      <div className="relative">
        <Input
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-[9.375rem] py-[0.88rem] text-[#000000] placeholder:text-[#000000] ~lg/2xl:~px-[.5rem]/[1.25rem]"
          onFocus={() => {
            if (results && debouncedSearchQuery.trim() !== '') {
              setIsDropdownOpen(true)
            }
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          ) : (
            <Search className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </div>

      {isDropdownOpen && (
        <Card className="fuzzy-search-animation absolute right-0 mt-2 max-h-[500px] w-full overflow-auto border-none bg-background shadow-lg fade-in sm:w-[40rem]">
          <ScrollArea className="h-[480px]">
            <CardContent className="p-2">
              {isLoading && results ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : hasResults ? (
                <div className="space-y-4">
                  {Object.entries(filteredResults!).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
                        {getCategoryName(category)} ({items.length})
                      </h3>
                      <div>
                        {items.map((item) => renderItem(item, category))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-4 text-center text-muted-foreground">
                  Nenhum resultado encontrado
                </div>
              )}
            </CardContent>
          </ScrollArea>
        </Card>
      )}
    </div>
  )
}
