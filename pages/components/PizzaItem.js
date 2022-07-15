import Image from "next/image";
import styles from "../../styles/PizzaItem.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

// pizzaOptions params
const doughTypeArr =
    [
        { type: 'тонкое', price: 0 },
        { type: 'традиционное', price: 140 }
    ]
const pizzaSizeArr =
    [
        { type: 26, price: 0 },
        { type: 32, price: 180 },
        { type: 40, price: 290 },
    ]

const PizzaItem = ({ pizzaItem }) => {

    // redux
    const dispatch = useDispatch();
    // react hooks
    const [dough, setDough] = useState({ type: doughTypeArr[0].type, price: doughTypeArr[0].price });
    const [size, setSize] = useState({ type: pizzaSizeArr[0].type, price: pizzaSizeArr[0].price });
    const [quantity, setQuantity] = useState(0);
    // construct object which we'll pass to the cart
    const price = pizzaItem.price + size.price + dough.price
    const pizzaObject = {
        image: pizzaItem?.image,
        title: pizzaItem?.title,
        product_options: {
            dough: {
                type: dough.type,
                price: dough.price,
            },
            size: {
                type: size.type,
                price: size.price,
            },
        },
        price: price,
        quantity: 1,
    }

    return (
        <>
            <section className={styles['b-pizza-wrapper']}>
                <article className={styles['b-pizza']}>
                    <figure className={styles['b-pizza-image-wrapper']}>
                        <Image
                            src={pizzaItem?.image}
                            width={260}
                            height={260}
                            alt={'pizza item image'}
                        />
                    </figure>
                    <h3 className={styles['b-pizza-title']}>{pizzaItem?.title}</h3>
                    <div className={styles['b-pizza-options']}>
                        <div className={styles['b-dough-type']}>
                            {doughTypeArr?.map((item, idx) => {
                                const stateActive = styles['b-link'] + ' ' + styles['state__active'];
                                return (
                                    <button
                                        onClick={() => setDough({type:item.type, price:item.price})}
                                        className={dough.type === item.type ? stateActive : styles['b-link']}
                                    >{item.type}</button>
                                );
                            })}
                        </div>
                        <div className={styles['b-pizza-size']}>
                            {pizzaSizeArr?.map((item, idx) => {
                                const stateActive = styles['b-link'] + ' ' + styles['state__active'];
                                return (
                                    <button
                                        onClick={() => setSize({type:item.type, price:item.price})}
                                        className={size.type === item.type ? stateActive : styles['b-link']}
                                    >{item.type} см</button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles['b-pizza-addtocart-wrapper']}>
                        <div className={styles['b-pizza-price-wrapper']}>
                            <p className={styles['b-pizza-price']}> {price} ₽</p>
                        </div>
                        <div className={styles['b-pizza-addtocart']}>
                            <button onClick={() => { dispatch(addToCart(pizzaObject)); setQuantity(quantity + 1) }} className={styles['b-link']}>Добавить{quantity > 0 ? <span className={styles['b-pizza-quantity']}>{quantity}</span> : ''}</button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}


export default PizzaItem;