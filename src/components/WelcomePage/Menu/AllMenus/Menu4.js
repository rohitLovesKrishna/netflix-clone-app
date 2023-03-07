import styles from '../AllMenuuMaster.module.css'
import { Hr, childImage } from '../../../'

export default function Menu4() {
    return (
        <>
            <div className={styles.menuContainerSameForAll}>
                <div className={styles.image} style={{ backgroundImage: `url(${childImage})` }}>
                    <h1>hii</h1>
                </div>
                <div className={styles.headTitle}>
                    <div className={styles.headTitleBox}>
                        <h1>Create profiles for children.</h1>
                        <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                    </div>
                </div>
             
            </div>
            <Hr />
        </>
    )
}
