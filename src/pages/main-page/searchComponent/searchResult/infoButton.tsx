import { Link } from '@tanstack/react-router'
import styles from './infoButton.module.scss'
const InfoButton: React.FC<{kanji: string}> = (kanji) => {
    return (
        <Link onClick={e => e.stopPropagation()} to={'/kanji/$kanji'} params={kanji}>
            <span className={styles.button}>i</span>
        </Link>
    )
}

export default InfoButton