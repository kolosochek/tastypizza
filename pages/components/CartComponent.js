import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "../../styles/CartComponent.module.scss"


const Cart = ({ price, quantity }) => {
    //redux
    const cart = useSelector((state) => state.cart)
    // router
    const router = useRouter();
    const cartPriceTotal = 0;
    const cartItemsTotal = 0;
    cart.value.map(function(cartItem, i){
        if(cartItem.pizzaQuantity == undefined) {
            cartPriceTotal+=cartItem.pizzaPrice  
            cartItemsTotal+=1  
        } else {
            cartPriceTotal+=cartItem.pizzaPrice * parseInt(cartItem.pizzaQuantity)
            cartItemsTotal+=cartItem.pizzaQuantity
        }
    })


    return (
        <>
            <section className={styles['b-cart']}>
                    <section className={styles['b-price']}>
                        <Link href="/cart">
                            <a className={styles['b-link']}>{cartPriceTotal}&nbsp;₽</a>
                        </Link>
                    </section>
                    <section className={styles['b-separator']}>
                        <svg width="1" height="25" viewBox="0 0 1 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1" height="25" fill="white" fill-opacity="0.25" />
                        </svg>
                    </section>
                    <section className={styles['b-items-total']}>
                        <Link href="/cart">
                            <a className={styles['b-link']}>{cartItemsTotal}</a>
                        </Link>
                    </section>
            </section>
        </>
    );
}

export default Cart;