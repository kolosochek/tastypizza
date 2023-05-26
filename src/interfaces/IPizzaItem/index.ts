export type TCategoryType = typeof categoryType[number]
export type TDoughType = typeof doughType[number];
export type TSizeType = typeof sizeType[number];
export type TCategoryNavbarItems = typeof categoryNavbarItems[number];
export type TCategoryFilterItems = typeof categoryFilterItems[number];

export const categoryType = ['все', 'мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые']
export const sizeType = [26, 32, 40]
export const doughType = ['тонкое', 'традиционное'];
export const categoryNavbarItems = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
export const categoryFilterItems = ['популярности', 'цене', 'алфавиту']


export interface IPizzaItem {
    id: number,
    image: string,
    title: string,
    product_options: {
        dough: {
            type: TDoughType,
            price: number
        },
        size: {
            type: TSizeType,
            price: number
        },
    },
    category: TCategoryType;
    price: number,
    quantity: number,
    popularity?: number,
}