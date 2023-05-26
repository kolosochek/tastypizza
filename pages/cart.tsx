import PageContainer from "../src/components/PageContainer/PageContainer";
import CartEmpty from "../src/components/CartEmpty/CartEmpty";
import CartItem from "../src/components/CartItem/CartItem";
import { useSelector } from "react-redux";
import {IReduxStore} from "../src/redux/store";
import {ICartSliceState} from "../src/redux/cartSlice";


const CartPage = () => {
    const { cartItems }: Partial<ICartSliceState> = useSelector<IReduxStore>((state) => state.cart)

    return (
        <>
            <PageContainer
                pageTitle={"Оформить заказ"}
                showCart={false}
            >
                <div className='b-cart-wrapper'>
                    <section className='b-cart'>
                        {cartItems?.length
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
