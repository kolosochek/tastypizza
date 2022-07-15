import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import styles from "../../styles/Logo.module.scss"


const Logo = () => {
    return (
        <>
            <div className={styles['b-logo']}>
                <Link href={"/"}>
                    <Image
                        src={'/header_logo.png'}
                        width={38}
                        height={38}
                        alt={'header logo icon'}
                    />
                </Link>

            </div>
            <div className={styles['b-header-title-wrapper']}>
                <h2 className={styles['b-header-title']}>Краснодар Пицца</h2>
                <p className={styles['b-plain-text']}>аппетитная пицца из дровяной печи</p>
            </div>
        </>

    )
}

export default memo(Logo)