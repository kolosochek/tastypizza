import { clearCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import styles from "./CartTitle.module.scss"

const CartTitle = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <div className={styles['b-cart-title-wrapper']}>
                <h1 className={styles['b-cart-title']}>Корзина</h1>
                <button
                    className={styles['b-clear-cart-button']}
                    onClick={() => dispatch(clearCart())}
                >Очистить корзину</button>
            </div>
        </>
    );
};

export default CartTitle;
