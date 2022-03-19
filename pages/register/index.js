import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import MyButton from '../../components/MyButton'


export default function Login(props) {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.loginHeader}>
      <h1>Register</h1>
      <div>
      <form className={styles.form}>
        <input type="text" placeholder='First Name'></input>
        <input type="text" placeholder='Last Name'></input>
        <input type="text" placeholder='Email'></input>
        <input type="text" placeholder='Password'></input>
        <input type="text" placeholder='Confirm Password'></input>
        <span className={styles.input} role="textbox" placeholder="Bio" contenteditable='true'></span>

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
