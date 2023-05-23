import {useDispatch, useSelector} from "react-redux";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import CategoryFilter from "../CategoryFilter/CategoryFilter"
import CategoryItem from "../CategoryItem/CategoryItem";
import CategoryEmpty from '../CategoryEmpty/CategoryEmpty';
import styles from './Category.module.scss'
import {useEffect, useState} from "react";
import {getPizzaAll} from "../../redux/thunks";
import store, {IReduxStore} from "../../redux/store";
import {categoryFilterItems, categoryNavbarItems} from "../../redux/categorySlice";
import {Loader} from "../Loader/Loader";
import {ICartSliceState} from "../../redux/cartSlice";
import {IPizzaItem} from "../../redux/pizzaSlice";

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

const checkItemCartQuantity = (pizzaItem: IPizzaItem, cartItems: ICartSliceState["items"]) => {
    let quantity = 0
    cartItems.forEach(item => {
        if (pizzaItem.title === item.title) {
            quantity = item.quantity
        }
    })
    return quantity
}

const Category = ({showFilters}) => {
    // redux
    const dispatch = useAppDispatch()
    const {allItems, category, error} = useSelector((state: IReduxStore) => state.category)
    const {items} = useSelector((state: IReduxStore) => state.cart)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    let filterBy = useSelector((state: IReduxStore) => state.filterBy)

    useEffect(() => {
        dispatch(getPizzaAll())
        setIsLoading(false)
    }, [isLoading])

    return isLoading ? (<Loader/>) : (
        <>
            <div className={styles['b-filter-wrapper']}>
                <CategoryNavbar
                    categoryItems={categoryNavbarItems}
                ></CategoryNavbar>
                <CategoryFilter
                    categoryFilter={categoryFilterItems}
                ></CategoryFilter>
            </div>
            <div className={styles['b-pizza-category-wrapper']}>
                <h1 className={styles['b-pizza-category-title']}>{category.length ? filterBy.activeCategory + ' пиццы' : ''} </h1>
                <section className={styles['b-pizza-category']}>
                    {category.length
                        ? category.map((item, idx) => (
                            <CategoryItem
                                key={`b-pizza-item-${item.title}`}
                                categoryItem={item}
                                cartQuantity={items && checkItemCartQuantity(item, items)}
                            ></CategoryItem>
                        ))
                        : <CategoryEmpty/>
                    }
                </section>
            </div>
        </>
    );
};

export default Category;
