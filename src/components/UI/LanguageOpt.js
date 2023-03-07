import styles from './LanguageOpt.module.css'
import {useState} from "react"
const LanguageOpt = (props) => {
    const [isLangShown, setisLangShown] = useState(false);
    const [langSelect, setlangSelect] = useState(true);

    const showLangs= ()=>{
        setisLangShown(true)
    }
    const hindiSelectHandler = ()=>{
        setlangSelect(false)
    }
    const engSelectHandler = () => {
        setlangSelect(true)
    }
    const isLangHandler = ()=>{
        if(isLangShown){
            setisLangShown(false)
        }
        else {
            setisLangShown(true)
        }
    }
    return (
        <>
            <div onClick={isLangHandler} className={styles.langBox}>
                <div onClick={showLangs} className={styles.dropMenuSelection}>🌐{langSelect ? 'English' : 'हिंदी'}🔽</div>
                {isLangShown && <div className={styles.languagesBox}>
                    <span onClick={engSelectHandler}>English</span>
                    <span onClick={hindiSelectHandler}>हिंदी</span>
                </div>}
        </div>
        
        </>
    )
}
export default LanguageOpt