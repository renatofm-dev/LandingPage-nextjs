import Link from "next/link"


function Title ({ children }) {
  return (
  <>
    <h1>
    {children}
  </h1>

  <style jsx>
    {`
      h1 {
        color: red;
      }
    `}
  </style>
  </>
  )

}

export default function HomePage() {
  return (
    <div>
      <Title>Bom dia mundo maravilhoso</Title>
      <Link href="/faq">
        FAQ
      </Link>
    </div>
  )
}