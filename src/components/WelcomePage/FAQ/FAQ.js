import styles from './FAQ.module.css'
import { Button,Input,Hr } from '../../'

export default function FAQ() {
  return (
      <div className={styles.menuContainerSameForAllFAQ}>
<div className={styles.FAQhead}>
              <h1>Frequently Asked Questions</h1>
</div>
{/* 1st FAQ */}
<div className={styles.FAQQuestions}>
<div>What is Netflix?</div>
<span>+</span>
</div>
          {/* 1st FAQ  ENDs*/}
          {/* 1st FAQ */}
          <div className={styles.FAQQuestions}>
              <div>What is Netflix?</div>
              <span>+</span>
          </div>
          {/* 1st FAQ  ENDs*/}
          {/* 1st FAQ */}
          <div className={styles.FAQQuestions}>
              <div>What is Netflix?</div>
              <span>+</span>
          </div>
          {/* 1st FAQ  ENDs*/}
          {/* 1st FAQ */}
          <div className={styles.FAQQuestions}>
              <div>What is Netflix?</div>
              <span>+</span>
          </div>
          {/* 1st FAQ  ENDs*/}
          {/* 1st FAQ */}
          <div className={styles.FAQQuestions}>
              <div>What is Netflix?</div>
              <span>+</span>
          </div>
          {/* 1st FAQ  ENDs*/}
          {/* 1st FAQ */}
          <div className={styles.FAQQuestions}>
              <div>What is Netflix?</div>
              <span>+</span>
          </div>
          {/* 1st FAQ  ENDs*/}
          {/* 1st FAQ */}
          <div className={styles.FAQQuestions}>
              <div>What is Netflix?</div>
              <span>+</span>
          </div>
          {/* 1st FAQ  ENDs*/}
<div className={styles.Para}>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
</div>
<div className={styles.FAQInput}>
              <Input />
</div>
<div className={styles.FAQBtn}>
              <Button padding="10px 10px" m="10px 0px">Get Started </Button>
</div>
          <Hr border= '5px solid green' 
          opacity = '0.85'
m= '0px' width="100%"/>
      </div>

  )
}
