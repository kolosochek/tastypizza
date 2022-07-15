import styles from '../styles/Index.module.scss'
import PageContainer from './components/PageContainer'
import CategoryNavbar from "./components/CategoryNavbar";
import FilterByNavbar from "./components/FilterByNavbar"
import PizzaItem from "./components/PizzaItem";
import CategoryEmpty from './components/CategoryEmpty';
// redux
import { useSelector } from "react-redux";

export default function Index() {
  // redux
  const category = useSelector((state) => state.category)
  var activeState = useSelector((state) => state.activeState)

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

  
  const pageContent =
    <>
      <div className={styles['b-filter-wrapper']}>
        <CategoryNavbar
          categoryItems={categoryItems}
        ></CategoryNavbar>
        <FilterByNavbar
          categoryFilter={categoryFilterItems}
        ></FilterByNavbar>
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
            :
            <CategoryEmpty />
          }
        </section>
      </div>
    </>

  return (
    <>
      <PageContainer
        pageTitle={"Вкусная пицца в Краснодаре!"}
        showCart={ true }
        children={ pageContent }
      ></PageContainer>
    </>
  )
}
