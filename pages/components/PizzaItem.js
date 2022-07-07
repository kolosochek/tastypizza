import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/PizzaItem.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const PizzaItem = ({ pizzaItem }) => {
    // pizzaOptions params
    const doughTypeArr = [
        ['#dough-type-thin', 'тонкое', 0],
        ['#dough-type-traditional', 'традиционное', 100],
    ]
    const pizzaSizeArr = [
        ['#size-26', '26 см', 0],
        ['#size-32', '32 см', 250],
        ['#size-40', '40 см', 500],
    ]
    // redux
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    // react hooks
    const [dough, setDough] = useState({ doughType: doughTypeArr[0][1], pizzaDoughPrice: 0 });
    const [size, setSize] = useState({ pizzaSize: pizzaSizeArr[0][1], pizzaSizePrice: 0 });
    const [quantity, setQuantity] = useState(0);
    // create page vars
    const pizzaPrice = parseInt(size.pizzaSizePrice || dough.pizzaDoughPrice ? parseInt(pizzaItem?.price) + size.pizzaSizePrice + dough.pizzaDoughPrice : pizzaItem?.price)
    const pizzaObject = {
        'image': pizzaItem?.image,
        'title': pizzaItem?.title,
        'doughType': dough?.doughType,
        'sizeType': size?.pizzaSize,
        'pizzaPrice': pizzaPrice,
    }
    // custom functions
    function setDoughType(e) {
        e.preventDefault();
        setDough({ doughType: e.target.text, pizzaDoughPrice: parseInt(e.target.attributes.doughExtracost.value) });
    }

    function setPizzaSize(e) {
        e.preventDefault();
        setSize({ pizzaSize: e.target.text, pizzaSizePrice: parseInt(e.target.attributes.sizeExtracost.value) });
    }

    function setPizzaQuantity() {
        event.preventDefault();
        setQuantity(parseInt(quantity) + 1);
    }

    return (
        <>
            <section className={styles['b-pizza-wrapper']}>
                <article className={styles['b-pizza']}>
                    <section className={styles['b-pizza-image-wrapper']}>
                        <Image
                            src={pizzaItem?.image}
                            width={260}
                            height={260}
                            alt={'pizza item image'} 
                            />
                    </section>
                    <h3 className={styles['b-pizza-title']}>{pizzaItem?.title}</h3>
                    <section className={styles['b-pizza-options']}>
                        <section className={styles['b-dough-type']}>
                            {doughTypeArr?.map(function (item, i) {
                                const [href, title, doughExtracost] = item;
                                const classes = styles['b-link'] + ' ' + styles['state__active'];
                                return (
                                    <Link key={href} href={href}>
                                        <a
                                            onClick={setDoughType}
                                            className={(!dough.doughType && i == 0) ? classes : (dough.doughType == title) ? classes : styles['b-link']}
                                            doughExtracost={doughExtracost}
                                        >{title}</a>
                                    </Link>
                                );
                            })}
                        </section>
                        <section className={styles['b-pizza-size']}>
                            {pizzaSizeArr?.map(function (item, i) {
                                const [href, title, sizeExtracost = 0] = item;
                                const classes = styles['b-link'] + ' ' + styles['state__active'];
                                return (
                                    <Link key={href} href={href}>
                                        <a
                                            onClick={setPizzaSize}
                                            className={(!size.pizzaSize && i == 0) ? classes : (size.pizzaSize == title) ? classes : styles['b-link']}
                                            sizeExtracost={sizeExtracost}
                                        >{title}</a>
                                    </Link>
                                );
                            })}
                        </section>
                    </section>
                    <section className={styles['b-pizza-addtocart-wrapper']}>
                        <section className={styles['b-pizza-price-wrapper']}>
                            <p className={styles['b-pizza-price']}>&nbsp;{pizzaPrice}&nbsp;₽</p>
                        </section>
                        <section className={styles['b-pizza-addtocart']}>
                            <a href="#add-to-cart" onClick={() => { dispatch(addToCart(pizzaObject)); setPizzaQuantity() }} className={styles['b-link']}>Добавить{quantity > 0 ? <span className={styles['b-pizza-quantity']}>{quantity}</span> : ''}</a>
                        </section>
                    </section>
                </article>
            </section>
        </>
    );
}


export default PizzaItem;