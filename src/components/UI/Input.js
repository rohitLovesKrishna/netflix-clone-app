import styles from './Input.module.css'
const Input = ()=>{

    return (
        <>
        <input className={styles.ctmInput} type="text" placeholder='Email address' />
        </>
    )
}
export default Input