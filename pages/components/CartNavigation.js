import Link from "next/link";
import styles from "../../styles/CartNavigation.module.scss"

const CartNavigation = () => {
    return (
        <>
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

export default CartNavigation;