import React from "react";
import CardTopPage from "@/_components/CardTopPage";
import Martelo from "/public/images/martelo.webp";
import { Button } from "@/_components/ui/button";
import { ArrowDown } from "lucide-react";
function QuemSomos() {
  return (
    <div className="relative">
      <CardTopPage
        title="Conheça o STJD"
        description="O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão autônomo, previsto no Código Brasileiro de Justiça Desportiva, custeado pela Confederação Brasileira de Futebol (CBF), que discute as legalidades do futebol no Brasil e julga os acontecimentos do esporte."
        image={Martelo}
        height="33.6875rem"
      />
      <div className="flex absolute -bottom-5 justify-center w-full z-10">
        <a href="#">
          <Button className="rounded-full bg-secondary hover:bg-secondary w-[3.125rem] h-[3.125rem] flex items-center justify-center">
            <ArrowDown className="text-black" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default QuemSomos;
