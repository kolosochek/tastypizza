import {useDispatch, useSelector} from "react-redux";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import CategoryFilter from "../CategoryFilter/CategoryFilter"
import CategoryItem from "../CategoryItem/CategoryItem";
import CategoryEmpty from '../CategoryEmpty/CategoryEmpty';
import styles from './Category.module.scss'
import {useEffect, useState} from "react";
import {getPizzaAll} from "../../redux/thunks";
import store, {IReduxStore} from "../../redux/store";
import {getItemsByCategory, IPizzaSliceState} from "../../redux/pizzaSlice";
import {Loader} from "../Loader/Loader";
import {ICartSliceState} from "../../redux/cartSlice";
import {categoryNavbarItems, categoryFilterItems, IPizzaItem} from "../../interfaces/IPizzaItem";

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

const checkItemCartQuantity = (pizzaItem: IPizzaItem, cartItems: ICartSliceState["cartItems"]) => {
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
    const {allItems, category, error}: Partial<IPizzaSliceState> = useSelector<IReduxStore>((state) => state.pizza)
    const {cartItems}: Partial<ICartSliceState> = useSelector<IReduxStore>((state) => state.cart)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {activeCategory} = useSelector<IReduxStore>((state) => state.filterBy)

    useEffect(() => {
        const isActiveCategoryFilter = activeCategory.toLowerCase() !== categoryNavbarItems[0].toLowerCase()
        if (!isActiveCategoryFilter) {
            dispatch(getPizzaAll())
            setIsLoading(false)
        } else {
            dispatch(getItemsByCategory(activeCategory.toLowerCase()))
            setIsLoading(false)
        }
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
                <h1 className={styles['b-pizza-category-title']}>{category.length ? activeCategory + ' пиццы' : ''} </h1>
                <section className={styles['b-pizza-category']}>
                    {category.length
                        ? category.map((item, idx) => (
                            <CategoryItem
                                key={`b-pizza-item-${item.title}`}
                                categoryItem={item}
                                cartQuantity={cartItems && checkItemCartQuantity(item, cartItems)}
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
