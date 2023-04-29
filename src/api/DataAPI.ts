export type categoryType = Array<'все' | 'мясные' | 'вегетарианские' | 'гриль' | 'острые' | 'закрытые'>

export interface PizzaItemI {
  id: number,
  image: string,
  title: string,
  product_options: {
    dough: [{
      type: 'тонкое' | 'традиционное',
      price: number
    }],
    size: [{
      type: 26 | 32 | 40,
      price: number
    }],
  },
  category: categoryType;
  price: number,
  quantity: number,
  popularity?: number,
}

export class DataAPI {
  public static APIUrl = 'http://localhost:4001/api/pizza'

  static async getData() {
    const response = await fetch(this.APIUrl)
    const data = await response.json();
    return data
  }
}
