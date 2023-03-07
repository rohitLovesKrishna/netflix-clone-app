import styles from '../AllMenuuMaster.module.css'
import { Hr, deviceImage, deviceVideo } from '../../../'

export default function Menu3() {
    return (
        <>
            <div className={styles.menuContainerSameForAll}>
                <div className={styles.headTitle}>
                    <div className={styles.headTitleBox}>
                        <h1>Watch everywhere.</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                    </div>
                </div>
                <div className={styles.image} style={{ backgroundImage: `url(${deviceImage})` }}>
                    <div className={styles.videoBox} >
                        <video  loop src={deviceVideo} type="video/mp4" autoPlay muted ></video>
                    </div>
                </div>
            </div>
            <Hr />
        </>
    )
}
