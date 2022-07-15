import PageContainer from "./components/PageContainer";
import CartEmpty from "./components/CartEmpty";
import CartItem from "./components/CartItem";
import styles from "../styles/Cart.module.scss"
// redux
import { useSelector } from "react-redux";


const CartPage = () => {
    // redux
    const cart = useSelector((state) => state.cart.items)

    return (
        <>
            <PageContainer
                pageTitle={"Оформить заказ"}
                showCart={false}
            >
                <div className={styles['b-cart-wrapper']}>
                    <section className={styles['b-cart']}>
                        {cart?.length
                            ? 
                            <CartItem />
                            : <CartEmpty />
                        }
                    </section>
                </div>
            </PageContainer>
        </>
    );
}

export default CartPage;
