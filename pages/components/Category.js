import CategoryNavbar from "../components/CategoryNavbar";
import CategoryFilter from "../components/CategoryFilter"
import PizzaItem from "../components/PizzaItem";
import CategoryEmpty from '../components/CategoryEmpty';
import { useSelector } from "react-redux";
import styles from '../../styles/Category.module.scss'

const categoryItems = [
    ['#category-all', 'Все'],
    ['#category-meat', 'Мясные'],
    ['#category-vegeterian', 'Вегетарианские'],
    ['#category-grill', 'Гриль'],
    ['#category-spicy', 'Острые'],
    ['#category-calzone', 'Закрытые'],
]
const categoryFilterItems = [
    ['#filter-popularity', 'популярности'],
    ['#filter-price', 'цене'],
    ['#filter-alphabet', 'алфавиту'],
]

const Category = ({ showFilters }) => {
    // redux
    const category = useSelector((state) => state.category)
    var activeState = useSelector((state) => state.activeState)

    return (
        <>
            <div className={styles['b-filter-wrapper']}>
                <CategoryNavbar
                    categoryItems={categoryItems}
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
                            <PizzaItem
                                pizzaItem={item}
                                key={idx}
                            ></PizzaItem>
                        ))
                        : <CategoryEmpty />
                    }
                </section>
            </div>
        </>
    );
};

export default Category;