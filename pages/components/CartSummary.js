import Link from "next/link";
import styles from "../../styles/CartSummary.module.scss"

const CartSummary = ({ itemsTotal, priceTotal }) => {
    return (
        <>
            <div className={styles['b-cart-summary-wrapper']}>
                <section className={styles['b-cart-summary']}>
                    <section className={styles['b-cart-quantity']}>
                        <p className={styles['b-plaintext']}>Предметов в корзине: <span>{itemsTotal} шт.</span></p>
                    </section>
                    <section className={styles['b-cart-price']}>
                        <p className={styles['b-plaintext']}>Сумма заказа: <span>{priceTotal} ₽</span></p>
                    </section>
                </section>
            </div>
            <section className={styles['b-cart-navigation']}>
                <Link href={"/"}>
                    <button className={styles['b-cart-navigation-goback']}>&lt;    Вернуться назад</button>
                </Link>
                <Link href={"/order"}>
                    <button className={styles['b-cart-navigation-order']}>Оформить заказ</button>
                </Link>
            </section>
        </>
    );
};

export default CartSummary;