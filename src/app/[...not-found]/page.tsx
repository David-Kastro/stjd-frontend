import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>Ops! A página que você está procurando não existe.</p>
      <Link href="/">
        <p>Voltar para a página inicial</p>
      </Link>
    </div>
  );
}
