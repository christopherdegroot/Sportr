import Link from 'next/link'
import Head from 'next/head'

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <h1>Register</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
