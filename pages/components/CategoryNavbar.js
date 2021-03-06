import styles from "../../styles/CategoryNavbar.module.scss"
import { memo, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getItemsByCategory, sortCategoryByFilter } from "../../redux/categorySlice";
import { setActiveCategory } from "../../redux/activeStateSlice";

const CategoryNavbar = ({ categoryItems }) => {
    // redux
    const activeState = useSelector((state) => state.activeState);
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

export default memo(CategoryNavbar);