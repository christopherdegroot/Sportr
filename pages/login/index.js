import Link from 'next/link'
import Head from 'next/head'

export default function Login(home) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <h1>Login</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
    
  )
}
