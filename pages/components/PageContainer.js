import Head from "next/head";
import styles from "../../styles/PageContainer.module.scss"
import CartSmall from "./CartSmall";
import Logo from "./Logo";


const PageContainer = ({ pageTitle, children, showCart }) => {


    return (
        <>
            <Head>
                <title>{ pageTitle }</title>
            </Head>
            <div className={styles['b-page-container-wrapper']}>
                <section className={styles['b-header-container']}>
                    <header className={styles['b-header']}>
                        <Logo />
                        { showCart && <CartSmall /> }
                    </header>
                </section>
                <section className={styles['b-main-wrapper']}>
                    <main className={styles['b-main']}>
                        { children }
                    </main>
                </section>
            </div>
        </>
    );
}


export default PageContainer;