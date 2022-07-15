import Link from "next/link";
import { memo } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/CartSmall.module.scss"

const CartSmall = () => {
    //redux 
    const { priceTotal, itemsTotal } = useSelector((state) => state.cart.summary)

    return (
        <>
            <section className={styles['b-cart']}>
                    <div className={styles['b-price']}>
                        <Link href="/cart">
                            <button className={styles['b-link']}>{ priceTotal } ₽</button>
                        </Link>
                    </div>
                    <div className={styles['b-separator']}>
                        <svg width="1" height="25" viewBox="0 0 1 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1" height="25" fill="white" fillOpacity="0.25" />
                        </svg>
                    </div>
                    <div className={styles['b-items-total']}>
                        <Link href="/cart">
                            <button className={styles['b-link']}>{ itemsTotal }</button>
                        </Link>
                    </div>
            </section>
        </>
    );
}

export default memo(CartSmall);