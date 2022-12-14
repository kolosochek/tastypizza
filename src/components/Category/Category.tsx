import { useSelector } from "react-redux";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import CategoryFilter from "../CategoryFilter/CategoryFilter"
import CategoryItem from "../CategoryItem/CategoryItem";
import CategoryEmpty from '../CategoryEmpty/CategoryEmpty';
import styles from './Category.module.scss'

const categoryNavbarItems = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const categoryFilterItems = ['популярности', 'цене', 'алфавиту']

const Category = ({ showFilters }) => {
    // redux
    const category = useSelector((state) => state.category)
    let activeState = useSelector((state) => state.activeState)

    return (
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
                <h1 className={styles['b-pizza-category-title']}>{category.length ? activeState.activeCategory + ' пиццы' : ''} </h1>
                <section className={styles['b-pizza-category']}>
                    {category.length
                        ? category.map((item, idx) => (
                            <CategoryItem
                                categoryItem={item}
                                key={idx}
                            ></CategoryItem>
                        ))
                        : <CategoryEmpty />
                    }
                </section>
            </div>
        </>
    );
};

export default Category;
