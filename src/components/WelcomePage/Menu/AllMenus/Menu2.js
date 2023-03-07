import styles from '../AllMenuuMaster.module.css'
import { Hr, mobileImage } from '../../../'

export default function Menu2() {
    return (
        <>
            <div className={styles.menuContainerSameForAll}>
                <div className={styles.image} style={{ backgroundImage: `url(${mobileImage})` }}>
                    <h1></h1>
                </div>
                <div className={styles.headTitle}>
                    <div className={styles.headTitleBox}>
                        <h1>Download your shows to watch offline.</h1>
                        <h3>Save your favourites easily and always have something to watch.</h3>
                    </div>
                </div>
            </div>
            <Hr />
        </>
    )
}
