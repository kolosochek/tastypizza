import Link from "next/link";
import styles from "../../styles/CategoryNavbar.module.scss"
import { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getItemsByCategory, sortCategoryByFilter } from "./categorySlice";
import { setActiveCategory, setActiveFilter } from "./activeStateSlice";




const CategoryNavbar = ({ categoryItems }) => {
    const [category, setCategory] = useState({ activeItem: false});
    // redux
    const activeState = useSelector((state) => state.activeState.value)
    const dispatch = useDispatch();

    function setCategoryNavbar(e) {
        if(e && e.target.text){
            e.preventDefault();
            let text = e.target.text.toLowerCase()
            setCategory({ activeItem: text });
            dispatch(setActiveCategory(text))
            dispatch(getItemsByCategory(text))
            dispatch(sortCategoryByFilter(activeState.activeFilter))
        }
    }

    return (
        <>
            <navbar id="categoryNavbar" className={styles['b-category-navbar']}>
                <ul className={styles['b-list']}>
                    {categoryItems.map(function (item, idx) {
                        const [href, title] = item;
                        return (
                            <li key={href} className={
                                activeState.activeCategory && activeState.activeCategory.toLowerCase() == title.toLowerCase() ? 
                                    styles['b-list-item'] + ' ' + styles['state__active']  
                                : styles['b-list-item']
                                }>
                                <Link href={href}>
                                    <a onClick={setCategoryNavbar} 
                                    className={styles['b-link']}>{title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </navbar>
        </>
    );
}

export default CategoryNavbar;