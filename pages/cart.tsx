import PageContainer from "../src/components/PageContainer/PageContainer";
import CartEmpty from "../src/components/CartEmpty/CartEmpty";
import CartItem from "../src/components/CartItem/CartItem";
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
                <div className='b-cart-wrapper'>
                    <section className='b-cart'>
                        {cart?.length
                            ? <CartItem />
                            : <CartEmpty />
                        }
                    </section>
                </div>
            </PageContainer>
        </>
    );
}

export default CartPage;
