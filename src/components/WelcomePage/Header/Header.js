import styles from './Header.module.css'
import { Button, LanguageOpt,Svg,Input,Hr } from '../../'
const Header = ()=>{

    return (
        <>
    <div className={styles.headerContainer}>
<div className={styles.headerBox}>
                <div className={styles.svgLogo}>
                <Svg/>
                </div>    
                <span className={styles.headerBoxRightSideBtns}>
                    <LanguageOpt/>
                    <Button>Sign In</Button>
    </span>
</div>
            <div className={styles.middleContent}>
                <h1>Unlimited movies, TV<br /> &nbsp;&nbsp;&nbsp;&nbsp;shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <Input/>
                <Button padding = "10px 10px" m="10px 0px">Get Statrted </Button>
            </div>
    </div>
    <Hr/>
        </>
    )
}
export default Header