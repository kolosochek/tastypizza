import Image from "next/image";
import styles from "../../styles/CategoryEmpty.module.scss"


const CategoryEmpty = () => {
    return (
        <>
            <div className={styles['b-category-empty-wrapper']}>
                <section className={styles['b-category-empty']}>
                    <h1 className={styles['b-category-empty-title']}>В этой категории пусто 😕</h1>
                    <p className={styles['b-plaintext']}>Не могу найти пиццу по заданным параметрам.</p>
                    <p className={styles['b-plaintext']}>Но есть другие варианты. Поищем другую пиццу?</p>
                    <figure className={styles['b-image-wrapper']}>
                        <Image
                            className={styles['b-image']}
                            src={'/category_empty.png'}
                            width={180}
                            height={125}
                            alt={'image for empty category'}
                        />
                    </figure>
                </section>
            </div>
        </>
    );
};

export default CategoryEmpty;