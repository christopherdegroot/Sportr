import Link from 'next/link'
import Head from 'next/head'

export default function Userhome() {
  return (
    <>
      <Head>
        <title>Welcome Home</title>
      </Head>
      <h1>Welcome Home</h1>
      <h2>
        <Link href="/">
          <a>Back to to login</a>
        </Link>
      </h2>
    </>
  )
}
