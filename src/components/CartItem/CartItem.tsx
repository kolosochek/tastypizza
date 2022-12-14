import Image from "next/image";
import { deleteCartItemById, incrementCartItemById, decrementCartItemById } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartSummary from "../CartSummary/CartSummary";
import CartTitle from "../CartTitle/CartTitle";
import CartNavigation from "../CartNavigation/CartNavigation";
import styles from "./CartItem.module.scss"


const CartItem = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const { priceTotal, itemsTotal } = useSelector((state) => state.cart.summary)


    return (
        <>
            <CartTitle />
            {cart?.map((item, idx) => (
                <div key={idx} className={styles['b-cart-item-wrapper']}>
                    <section className={styles['b-cart-item']}>
                        <figure className={styles['b-image-wrapper']}>
                            <Image
                                className={styles['b-image']}
                                src={item.image}
                                width={80}
                                height={80}
                                alt={'pizza item thumbnail'}
                            />
                        </figure>
                        <div className={styles['b-title-wrapper']}>
                            <h3 className={styles['b-title']}>{item.title}</h3>
                            <p className={styles['b-plaintext']}>{item.product_options.dough.type + ", " + item.product_options.size.type + " см"}</p>
                        </div>
                        <div className={styles['b-quantity-wrapper']}>
                            <button onClick={() => dispatch(decrementCartItemById(idx))}
                                className={styles['b-quantity-decrement']}>&ndash;</button>
                            <h3 className={styles['b-quantity']}>{item.quantity}</h3>
                            <button onClick={() => dispatch(incrementCartItemById(idx))}
                                className={styles['b-quantity-increment']}>+</button>
                        </div>
                        <div className={styles['b-price-wrapper']}>
                            <h3 className={styles['b-price']}>{item.quantity ? item.price * item.quantity : item.price} ₽</h3>
                        </div>
                        <div className={styles['b-delete-item-wrapper']}>
                            <button onClick={() => dispatch(deleteCartItemById(idx))}
                                className={styles['b-delete-item']}>x</button>
                        </div>
                    </section>
                </div>
            ))}
            <CartSummary
                itemsTotal={itemsTotal}
                priceTotal={priceTotal}
            />
            <CartNavigation />
        </>
    );
};

export default CartItem;
