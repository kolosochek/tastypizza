import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/PageContainer.module.scss"
import Cart from "./CartComponent";
import { useState } from "react";
import Image from "next/image";




const PageContainer = ({ pageTitle, pageContent, showCart, meta }) => {
    const [cart, setCart] = useState({ itemsTotal: 0, priceTotal: 0 });


    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <section className={styles['b-page-container-wrapper']}>
                <section className={styles['b-header-container']}>
                    <header className={styles['b-header']}>
                        <section className={styles['b-logo']}>
                            <Link href={"/"}>
                                <a className={styles['b-link']}>
                                    <Image src={'/header_logo.png'} width={38} height={38} />
                                </a>
                            </Link>
                        </section>
                        <section className={styles['b-header-title-wrapper']}>
                            <h2 className={styles['b-header-title']}>Краснодар Пицца</h2>
                            <p className={styles['b-plain-text']}>аппетитная пицца из дровяной печи</p>
                        </section>
                        {showCart ? <Cart />: false}                        
                    </header>
                </section>
                <section className={styles['b-main-wrapper']}>
                    <main className={styles['b-main']}>
                        {pageContent}
                    </main>
                </section>
            </section>
        </>
    );
}


export default PageContainer;