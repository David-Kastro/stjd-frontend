import React from 'react'
import CardTopPage from '@/_components/CardTopPage'
import Martelo from '/public/images/martelo.webp'
import { Button } from '@/_components/ui/button'
import { ArrowDown } from 'lucide-react'
function QuemSomos() {
  return (
    <div className="relative">
      <CardTopPage
        title="Conheça o STJD"
        description="O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão autônomo, previsto no Código Brasileiro de Justiça Desportiva, custeado pela Confederação Brasileira de Futebol (CBF), que discute as legalidades do futebol no Brasil e julga os acontecimentos do esporte."
        image={Martelo}
        imagePosition="topRight"
      />
      <div className="absolute -bottom-5 z-10 flex w-full justify-center">
        <a href="#">
          <Button className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full bg-secondary hover:bg-secondary">
            <ArrowDown className="text-black" />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default QuemSomos
