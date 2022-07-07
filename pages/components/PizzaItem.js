import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/PizzaItem.module.scss"
import { useState } from "react";

const doughTypeArr = [
    ['#dough-type-thin', 'тонкое', 0],
    ['#dough-type-traditional', 'традиционное', 100],
]

const pizzaSizeArr = [
    ['#size-26', '26 см', 0],
    ['#size-32', '32 см', 250],
    ['#size-40', '40 см', 500],
]

const PizzaItem = ({ pizzaItem, updateCart }) => {
    var resultPrice = parseInt(pizzaItem.price);
    const [dough, setDough] = useState({ doughType: 0, pizzaDoughPrice: 0 });
    const [size, setSize] = useState({ pizzaSize: 0, pizzaSizePrice: 0 });
    const [quantity, setQuantity] = useState({ pizzaQuantity: 0 });
    const addToCartInitial = <a onClick={setPizzaQuantity} className={styles['b-link']}>Добавить</a>
    const addToCart = <a onClick={setPizzaQuantity} className={styles['b-link']}>Добавить<span className={styles['b-pizza-quantity']}>{quantity.pizzaQuantity}</span></a>

    function setDoughType() {
        setDough({ doughType: event.target.text, pizzaDoughPrice: parseInt(event.target.attributes.doughExtracost.value) })
    }

    function setPizzaSize() {
        setSize({ pizzaSize: event.target.text, pizzaSizePrice: parseInt(event.target.attributes.sizeExtracost.value) })
    }

    function setPizzaQuantity() {
        setQuantity({ pizzaQuantity: quantity.pizzaQuantity + 1})
    }

    return (
        <>
            <section className={styles['b-pizza-wrapper']}>
                <article className={styles['b-pizza']}>
                    <section className={styles['b-pizza-image-wrapper']}>
                        <Image
                            src={pizzaItem.image}
                            width={260}
                            height={260} />
                    </section>
                    <h3 className={styles['b-pizza-title']}>{pizzaItem.title}</h3>
                    <section className={styles['b-pizza-options']}>
                        <section className={styles['b-dough-type']}>
                            {doughTypeArr.map(function (item, i) {
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
                            {pizzaSizeArr.map(function (item, i) {
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
                            <p className={styles['b-pizza-price']}>от&nbsp;{size.pizzaSizePrice || dough.pizzaDoughPrice ? resultPrice +size.pizzaSizePrice + dough.pizzaDoughPrice : pizzaItem.price}&nbsp;₽</p>
                        </section>
                        <section className={styles['b-pizza-addtocart']}>
                            <Link href={'#add-to-cart'}>
                                {quantity.pizzaQuantity > 0 ? addToCart : addToCartInitial}
                            </Link>
                        </section>
                    </section>
                </article>
            </section>
        </>
    );
}


export default PizzaItem;