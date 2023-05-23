import { CSSReset } from "@chakra-ui/react";
import Head from "next/head";
import CartSmall from "../CartSmall/CartSmall";
import Logo from "../Logo/Logo";
import styles from "./PageContainer.module.scss"


const PageContainer = ({ pageTitle, children, showCart }) => {


    return (
        <>
            <CSSReset />
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className={styles['b-page-container-wrapper']}>
                <div className={styles['b-page-container']}> 
                    <section className={styles['b-header-container']}>
                        <header className={styles['b-header']}>
                            <Logo />
                            {showCart && <CartSmall />}
                        </header>
                    </section>
                    <section className={styles['b-main-wrapper']}>
                        <main className={styles['b-main']}>
                            {children}
                        </main>
                    </section>
                </div>
            </div>
        </>
    );
}


export default PageContainer;
