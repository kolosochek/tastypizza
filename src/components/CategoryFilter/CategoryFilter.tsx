import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {IFilterBySliceState, setActiveFilter} from "../../redux/filterByStateSlice";
import { sortCategoryByFilter } from "../../redux/pizzaSlice";
import styles from "./CategoryFilter.module.scss"
import {IReduxStore} from "../../redux/store";

const CategoryFilter = ({ categoryFilter }) => {
    const dispatch = useDispatch();
    const { activeCategory, activeFilter }: Partial<IFilterBySliceState> = useSelector<IReduxStore>((state) => state.filterBy)
    const [div, setDiv] = useState({ isHidden: true })
    const [filter, setFilter] = useState({ activeFilter: activeFilter });

    function toggleDiv() {
        setDiv({ isHidden: !div.isHidden });
    }

    function setCategoryFilter(obj) {
        setFilter({ activeFilter: obj.activeFilter });
        setDiv({ isHidden: !div.isHidden });
        dispatch(setActiveFilter(obj.activeFilter))
        dispatch(sortCategoryByFilter(obj.activeFilter))
    }


    return (
        <>
            <section className={styles['b-filter-by']}>
                <span className={div.isHidden ? styles['b-arrow-up'] : styles['b-arrow-down']}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69076 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                    </svg>
                </span>
                <span className={styles['b-plaintext']}>Сортировать по: </span>
                <span className={styles['b-filter-selected']}>
                    <a onClick={() => toggleDiv()}
                        className={styles['b-link']}>{filter.activeFilter}</a>
                </span>
                <section id="filterBy" style={{
                    visibility: div.isHidden ? "hidden" : "visible"
                }}
                    className={styles['b-list-wrapper']}>
                    <ul className={styles['b-list']}>
                        {categoryFilter?.map((item, idx) => {
                            return (
                                <li key={idx}
                                    className={filter.activeFilter === item ? styles['b-list-item'] + ' ' + styles['state__active'] : styles['b-list-item']}>
                                    <a onClick={() => setCategoryFilter({ activeFilter: item })}
                                        className={styles['b-link']}>{item}</a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </section>
        </>
    );
}


export default CategoryFilter;
