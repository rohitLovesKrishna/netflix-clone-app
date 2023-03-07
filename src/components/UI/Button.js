import styles from './Button.module.css'
const Button = (props)=>{
    return (
        <>
   <button style={{padding:props.padding,margin:props.m}}  onClick={props.onClick} className={styles.ctmBtn }>{props.children}</button>
        </>
    )
}
export default Button