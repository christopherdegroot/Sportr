import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import MyButton from '../../components/MyButton'


export default function Login(props) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.loginHeader}>
      <h1>Login</h1>
      <div>
      <form className={styles.form}>
        <input type="text" placeholder='Email'></input>
        <input type="text" placeholder='Password'></input>
        <Link href="/Profile">
              <a> <MyButton name={'Submit'}/></a>
            </Link>
      </form>
      </div>
      <br></br>
      </div>
      {!props.home && (
        <div className={styles.backToHome}>
         <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
    
  )
}
