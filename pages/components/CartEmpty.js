import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/CartEmpty.module.scss"

const CartEmpty = () => {
    return (
        <>
            <div className={styles['b-cart-empty-wrapper']}>
                <section className={styles['b-cart']}>
                    <h1 className={styles['b-cart-title']}>Корзина пустая 😕</h1>
                    <div className={styles['b-cart-empty']}>
                        <div className={styles['b-plaintext-wrapper']}>
                            <p className={styles['b-plaintext']}>Вероятней всего, вы не заказывали ещё пиццу.</p>
                            <p className={styles['b-plaintext']}>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
                        </div>
                        <Image
                            className={styles['b-image']}
                            src="/cart_empty_bg.png"
                            width={300}
                            height={255}
                            alt={'empty cart image'}
                        />
                        <div className={styles['b-go-back-wrapper']}>
                            <Link href={'/'}>
                                <button className={styles['b-go-back']}>Вернуться назад</button>
                            </Link>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}

export default CartEmpty;