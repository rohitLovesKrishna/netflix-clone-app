import styles from './Footer.module.css'
import { LanguageOpt} from '../../'

export default function Footer() {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.linksContainer}>
                    <div className={styles.linkColumns}>
                        <a href="/">Netflix India</a>
                        <a href="/">Netflix India</a><a href="/">Netflix India</a><a href="/">Netflix India</a><a href="/">Netflix India</a>
                    </div>
                    <div className={styles.linkColumns}>
                        <a href="/">Netflix India</a>
                        <a href="/">Netflix India</a><a href="/">Netflix India</a><a href="/">Netflix India</a><a href="/">Netflix India</a>
                    </div>
                    <div className={styles.linkColumns}>
                        <a href="/">Netflix India</a>
                        <a href="/">Netflix India</a><a href="/">Netflix India</a><a href="/">Netflix India</a><a href="/">Netflix India</a>
                    </div>
                </div>
                <div className={styles.langAndLogoArea}>
                    <LanguageOpt/>
                    <h6>Netflix India</h6>
                </div>
            </div>
        </>
    )
}
