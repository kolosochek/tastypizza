import styles from "./CategoryNavbar.module.scss"
import { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getItemsByCategory, sortCategoryByFilter } from "../../redux/pizzaSlice";
import { setActiveCategory } from "../../redux/filterByStateSlice";

const CategoryNavbar = ({ categoryItems }) => {
    // redux
    const activeState = useSelector((state) => state.filterBy);
    const dispatch = useDispatch();
    const [category, setCategory] = useState({ activeCategory: activeState?.activeCategory });
    

    function setCategoryNavbar(obj) {
        setCategory({ activeCategory: obj.activeCategory });
        dispatch(setActiveCategory(obj.activeCategory.toLowerCase()))
        dispatch(getItemsByCategory(obj.activeCategory.toLowerCase()))
        dispatch(sortCategoryByFilter(activeState?.activeFilter))
    }

    return (
        <>
            <nav id="categoryNavbar" className={styles['b-category-navbar']}>
                <ul className={styles['b-list']}>
                    {categoryItems?.map((item, idx) => {
                        const stateActive = styles['b-list-item'] + ' ' + styles['state__active'];
                        return (
                            <li key={idx} className={
                                category.activeCategory === item
                                    ? stateActive
                                    : styles['b-list-item']
                            }>
                                <button onClick={() => setCategoryNavbar({ activeCategory: item })}
                                    className={styles['b-link']}>{item}</button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default CategoryNavbar;
