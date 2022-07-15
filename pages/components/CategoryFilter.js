import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/CategoryFilter.module.scss"
import { setActiveFilter } from "../../redux/activeStateSlice";
import { sortCategoryByFilter } from "../../redux/categorySlice";

const CategoryFilter = ({ categoryFilter }) => {
    const [div, setDiv] = useState({ isHidden: true, activeItem: false })
    const [link, setLink] = useState();
    const style = { visibility: div.isHidden ? 'hidden' : 'visible' };
    // redux
    const activeState = useSelector((state) => state.activeState)
    const dispatch = useDispatch();

    function toggleDiv(e) {
        e.preventDefault();
        setDiv({ isHidden: !div.isHidden, activeItem: e.target.text.toLowerCase() });
    }

    function setFilter(e) {
        if(e && e.target.text.length) {
            let text = e.target.text.toLowerCase()
            e.preventDefault();
            toggleDiv(e);
            setLink(text);
            dispatch(setActiveFilter(text))
            dispatch(sortCategoryByFilter(text))
        }
        
    }


    return (
        <>
            <section className={styles['b-filter-by']}>
                <span className={div.isHidden ? styles['b-arrow-up'] : styles['b-arrow-down']}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69076 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                    </svg>
                </span>
                <span className={styles['b-plaintext']}>Сортировать&nbsp;по: </span>
                <span className={styles['b-filter-selected']}>
                    <a onClick={toggleDiv}
                        className={styles['b-link']}>{activeState.activeFilter ? activeState.activeFilter : 'популярности' }</a>
                </span>
                <section id="filterBy" style={style}
                    className={styles['b-list-wrapper']}>
                    <ul className={styles['b-list']}>
                        {categoryFilter?.map(function (item, i) {
                            const [href, title] = item;
                            return (
                                <li key={href} className={title.toLowerCase() == activeState.activeFilter ? styles['b-list-item'] + ' ' + styles['state__active'] : styles['b-list-item']}>
                                    <a onClick={setFilter}
                                        className={styles['b-link']}>{title}</a>
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