import styles from '../styles/Index.module.scss'
import PageContainer from './components/PageContainer'
import CategoryNavbar from "./components/CategoryNavbar";
import FilterByNavbar from "./components/FilterByNavbar"
import PizzaItem from "./components/PizzaItem";
import Image from 'next/image';
// redux
import { useSelector } from "react-redux";

export default function Index() {
  // redux
  const category = useSelector((state) => state.category.value)
  const activeState = useSelector((state) => state.activeState.value)
  const categoryIsEmpty =
    <>
      <section className={styles['b-category-empty-wrapper']}>
        <section className={styles['b-category-empty']}>
          <h1 className={styles['b-category-empty-title']}>В этой категории пусто 😕</h1>
          <p className={styles['b-plaintext']}>Не могу найти пиццу по заданным параметрам.</p>
          <p className={styles['b-plaintext']}>Но есть другие варианты. Поищем другую пиццу?</p>
          <section className={styles['b-image-wrapper']}>
            <Image
              className={styles['b-image']}
              src={'/category_empty.png'}
              width={180}
              height={125}
              alt={'image for empty category'}
            />
          </section>

        </section>
      </section>
    </>

  // debug
  //console.log('category', category)
  //

  const pageContent =
    <>
      <section className={styles['b-filter-wrapper']}>
        <CategoryNavbar
          categoryItems={[
            ['#category-all', 'Все'],
            ['#category-meat', 'Мясные'],
            ['#category-vegeterian', 'Вегетарианские'],
            ['#category-grill', 'Гриль'],
            ['#category-spicy', 'Острые'],
            ['#category-calzone', 'Закрытые'],
          ]}
        ></CategoryNavbar>
        <FilterByNavbar
          filterItems={[
            ['#filter-popularity', 'популярности'],
            ['#filter-price', 'цене'],
            ['#filter-alphabet', 'алфавиту'],
          ]}
        ></FilterByNavbar>
      </section>
      <section className={styles['b-pizza-category-wrapper']}>
        <h1 className={styles['b-pizza-category-title']}>{category.length ? activeState.activeCategory + ' пиццы' : ''} </h1>
        <section className={styles['b-pizza-category']}>
          {category.length
            ? category.map((item, idx) => (
              <PizzaItem
                pizzaItem={item}
                key={idx}
              ></PizzaItem>
            ))
            : categoryIsEmpty}
        </section>
      </section>
    </>

  return (
    <>
      <PageContainer
        pageTitle={"Вкусная пицца в Краснодаре!"}
        showCart={true}
        pageContent={pageContent}
      ></PageContainer>
    </>
  )
}
