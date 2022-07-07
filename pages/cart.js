import PageContainer from "./components/PageContainer";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { clearCart, deleteCartItemById, incrementCartItemById, decrementCartItemById } from "./components/cartSlice";
// css
import styles from "../styles/cart.module.scss"
import Image from "next/image";
import Link from "next/link";


const CartPage = () => {
    const cart = useSelector((state) => state.cart.value)
    const dispatch = useDispatch();
    const cartPriceTotal = 0;
    const cartItemsTotal = 0;
    cart.map(function (cartItem, i) {
        if (cartItem.pizzaQuantity == undefined) {
            cartPriceTotal += cartItem.pizzaPrice
            cartItemsTotal += 1
        } else {
            cartPriceTotal += cartItem.pizzaPrice * parseInt(cartItem.pizzaQuantity)
            cartItemsTotal += cartItem.pizzaQuantity
        }
    })

    const pageContentInitial =
        <>
            <section className={styles['b-cart-empty-wrapper']}>
                <section className={styles['b-cart']}>
                    <h1 className={styles['b-cart-title']}>Корзина пустая 😕</h1>
                    <section className={styles['b-cart-empty']}>
                        <section className={styles['b-plaintext-wrapper']}>
                            <p className={styles['b-plaintext']}>Вероятней всего, вы не заказывали ещё пиццу.</p>
                            <p className={styles['b-plaintext']}>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                        </section>
                        <Image
                            className={styles['b-image']}
                            src="/cart_empty_bg.png"
                            width={300}
                            height={255}
                            alt={'empty cart image'}
                        />
                        <section className={styles['b-go-back-wrapper']}>
                            <Link href='/'>
                                <a className={styles['b-go-back']}>Вернуться назад</a>
                            </Link>
                        </section>

                    </section>
                </section>
            </section>
        </>

    const pageContent =
        <>
            <section className={styles['b-cart-wrapper']}>
                <section className={styles['b-cart']}>
                    <section className={styles['b-cart-title-wrapper']}>
                        <h1 className={styles['b-cart-title']}>Корзина</h1>
                        <a
                            className={styles['b-clear-cart-button']}
                            onClick={() => dispatch(clearCart())}
                        >Очистить корзину</a>
                    </section>
                    {cart.map((item, idx) => (
                        <section key={idx} className={styles['b-cart-item-wrapper']}>
                            <section className={styles['b-cart-item']}>
                                <section className={styles['b-image-wrapper']}>
                                    <Image
                                        className={styles['b-image']}
                                        src={item.image}
                                        width={80}
                                        height={80}
                                        alt={'pizza item thumbnail'}
                                    />
                                </section>
                                <section className={styles['b-title-wrapper']}>
                                    <h3 className={styles['b-title']}>{item.title}</h3>
                                    <p className={styles['b-plaintext']}>{item.doughType + ", " + item.sizeType}</p>
                                </section>
                                <section className={styles['b-quantity-wrapper']}>
                                    <a onClick={() => dispatch(decrementCartItemById(idx))}
                                        className={styles['b-quantity-decrement']}>&ndash;</a>
                                    <h3 className={styles['b-quantity']}>{item.pizzaQuantity ? item.pizzaQuantity : 1}</h3>
                                    <a onClick={() => dispatch(incrementCartItemById(idx))}
                                        className={styles['b-quantity-increment']}>+</a>
                                </section>
                                <section className={styles['b-price-wrapper']}>
                                    <h3 className={styles['b-price']}>{item.pizzaQuantity ? parseInt(item.pizzaPrice) * parseInt(item.pizzaQuantity) : item.pizzaPrice}&nbsp;₽</h3>
                                </section>
                                <section className={styles['b-delete-item-wrapper']}>
                                    <a onClick={() => dispatch(deleteCartItemById(idx))}
                                        className={styles['b-delete-item']}>x</a>
                                </section>
                            </section>
                        </section>
                    ))}
                    <section className={styles['b-cart-summary-wrapper']}>
                        <section className={styles['b-cart-summary']}>
                            <section className={styles['b-cart-quantity']}>
                                <p className={styles['b-plaintext']}>Предметов в корзине:&nbsp;<span>{cartItemsTotal}&nbsp;шт.</span></p>
                            </section>
                            <section className={styles['b-cart-price']}>
                                <p className={styles['b-plaintext']}>Сумма заказа:&nbsp;<span>{cartPriceTotal}&nbsp;₽</span></p>
                            </section>
                        </section>
                    </section>
                    <section className={styles['b-cart-navigation']}>
                        <Link href="/">
                            <a className={styles['b-cart-navigation-goback']}>&lt;&nbsp;&nbsp;&nbsp;Вернуться назад</a>
                        </Link>
                        <a className={styles['b-cart-navigation-order']}>Оформить заказ</a>
                    </section>
                </section>
            </section>
        </>

    return (
        <>
            <PageContainer
                pageTitle={"Оформить заказ"}
                showCart={false}
                pageContent={cart.length > 0 ? pageContent : pageContentInitial}
            ></PageContainer>
        </>
    );
}

export default CartPage;
