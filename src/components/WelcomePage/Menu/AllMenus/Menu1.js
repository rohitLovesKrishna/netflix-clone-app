import styles from '../AllMenuuMaster.module.css'
import { Hr, TVImage, tvVideo } from '../../../'

export default function Menu1() {
    return (
        <>
            <div className={styles.menuContainerSameForAll}>
                <div className={styles.headTitle}>
                    <div className={styles.headTitleBox}>
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>
                </div>
                <div className={styles.image} style={{ backgroundImage:`url(${TVImage})`}}>
<div className={styles.videoBox}>
                        <video loop src={tvVideo} type="video/mp4" autoPlay muted ></video>
</div>
                </div>
            </div>
            <Hr />
        </>
    )
}
