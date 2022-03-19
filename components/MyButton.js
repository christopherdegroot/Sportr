import styles from './MyButton.module.css'

export default function MyButton(props) {

  return (
  <button className={styles.MyButton}>
    {props.name}
  </button>
  )}