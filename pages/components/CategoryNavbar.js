import Link from "next/link";
import styles from "../../styles/CategoryNavbar.module.scss"
import { memo, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getItemsByCategory, sortCategoryByFilter } from "../../redux/categorySlice";
import { setActiveCategory } from "../../redux/activeStateSlice";




const CategoryNavbar = ({ categoryItems }) => {
    const [category, setCategory] = useState({ activeItem: false});
    // redux
    const activeState = useSelector((state) => state.activeState);
    const dispatch = useDispatch();

    function setCategoryNavbar(e) {
        if(e && e.target.text){
            e.preventDefault();
            let text = e.target.text.toLowerCase()
            setCategory({ activeItem: text });
            dispatch(setActiveCategory(text))
            dispatch(getItemsByCategory(text))
            dispatch(sortCategoryByFilter(activeState?.activeFilter))
        }
    }

    return (
        <>
            <nav id="categoryNavbar" className={styles['b-category-navbar']}>
                <ul className={styles['b-list']}>
                    {categoryItems?.map(function (item, idx) {
                        const [href, title] = item;
                        const stateActive = styles['b-list-item'] + ' ' + styles['state__active'];
                        return (
                            <li key={href} className={
                                activeState?.activeCategory && activeState?.activeCategory.toLowerCase() == title.toLowerCase()
                                ? stateActive     
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
            </nav>
        </>
    );
}

export default memo(CategoryNavbar);