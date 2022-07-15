import PageContainer from "./components/PageContainer";
import CartEmpty from "./components/CartEmpty";
import CartItem from "./components/CartItem";
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
            >{cart?.length 
                    ? <CartItem />
                    : <CartEmpty />
            }
            </PageContainer>
        </>
    );
}

export default CartPage;
