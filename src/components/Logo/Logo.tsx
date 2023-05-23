import Image from "next/image"
import Link from "next/link"
import headerLogo from "../../../public/header_logo.png"
import styles from "./Logo.module.scss"


const Logo = () => {
    return (
        <>
            <figure className={styles['b-logo']}>
                    <Link href={"/"}>
                        <a>
                            <Image
                                src={headerLogo}
                                width={38}
                                height={38}
                                alt={'header logo icon'}
                            />
                        </a>
                    </Link>
            </figure>
            <div className={styles['b-header-title-wrapper']}>
                <h2 className={styles['b-header-title']}>Краснодар Пицца</h2>
                <p className={styles['b-plain-text']}>аппетитная пицца из дровяной печи</p>
            </div>
        </>
    )
}

export default Logo;
