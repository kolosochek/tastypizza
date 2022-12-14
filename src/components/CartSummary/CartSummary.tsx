import styles from "./CartSummary.module.scss"

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
        </>
    );
};

export default CartSummary;
