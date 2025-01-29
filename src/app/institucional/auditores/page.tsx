import CardTopPage from "@/_components/CardTopPage";
import React from "react";
import WoodenGavel from "/public/images/wooden-gavel.png";

function Auditores() {
  return (
    <div>
      <CardTopPage
        title="Auditores"
        description="O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão autônomo, previsto no Código Brasileiro de Justiça Desportiva, custeado pela Confederação Brasileira de Futebol (CBF), que discute as legalidades do futebol no Brasil e julga os acontecimentos do esporte."
        image={WoodenGavel}
        height={"28.875rem"}
        scrollTo="#members"
      />
      <hr className="w-full h-[0.125rem] bg-border my-20" />
      <div id="members" className="container"></div>
    </div>
  );
}

export default Auditores;
