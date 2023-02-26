import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>Bom dia mundo maravilhoso</h1>
      <Link href="/faq">
        FAQ
      </Link>
    </div>
  )
}