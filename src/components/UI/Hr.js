import styles from './Hr.module.css'

export default function Hr(props) {
  return (
    <hr style={{
      border: props.border, opacity: props.opacity,
      margin: props.m,width:props.width
}}className={styles.hrLine}/>
  )
}
