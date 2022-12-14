export type categoryType = Array<'все' | 'мясные' | 'вегетарианские' | 'гриль' | 'острые' | 'закрытые'>

export interface PizzaItemI {
  image: string,
  title: string,
  product_options: {
    dough: [{
      type: 'тонкое' | 'традиционное',
      price: number
    }],
    size: [{
      type: '26 см' | '32 см' | '40 см',
      price: number
    }],
  },
  category: categoryType;
  price: number,
  quantity: number,
  popularity: number,
}

export class DataAPI {
  public static getData():PizzaItemI[] {
    return [
      {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/10abc7eb6428475c9263709a1266558c_292x292.jpeg',
        title: 'Маргарита',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['вегетарианские'],
        price: 490,
        quantity: 0,
        popularity: 12,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a8164f7c43646e19c20001eaec9b031_292x292.jpeg',
        title: 'Карбонара',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['мясные', 'острые'],
        price: 380,
        quantity: 0,
        popularity: 76,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_292x292.jpeg',
        title: 'Пепперони фреш',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['мясные', 'гриль'],
        price: 590,
        quantity: 0,
        popularity: 2,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4c7d597ec2074b1589e795d95db75f57_292x292.jpeg',
        title: 'Четыре сезона',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['вегетарианские'],
        price: 400,
        quantity: 0,
        popularity: 20,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_292x292.jpeg',
        title: 'Ветчина и грибы',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['мясные', 'гриль', 'острые'],
        price: 490,
        quantity: 0,
        popularity: 84,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/afb7bb96c6624a17b69543db3b340c86_292x292.jpeg',
        title: 'Мясная',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['мясные'],
        price: 490,
        quantity: 0,
        popularity: 16,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f440c85c436a4284afad6ecfc43c1fab_292x292.jpeg',
        title: 'Чоризо Фреш',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['мясные', 'острые'],
        price: 530,
        quantity: 0,
        popularity: 8,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/8b6c71a280df4de59e24263df59c4cfa_292x292.jpeg',
        title: 'Аррива',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['вегетарианские', 'острые'],
        price: 490,
        quantity: 0,
        popularity: 149,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3a9785bc5ac145118403de7d22b70fd9_292x292.jpeg',
        title: 'Овощи и грибы',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['вегетарианские', 'гриль'],
        price: 520,
        quantity: 0,
        popularity: 1,
      }, {
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2ac448e39ba24623a33c1d8d50b69ef8_292x292.jpeg',
        title: 'Диабло',
        product_options: {
          dough: [{
            type: 'тонкое',
            price: 0
          }],
          size: [{
            type: '26 см',
            price: 0
          }],
        },
        category: ['мясные', 'острые'],
        price: 490,
        quantity: 0,
        popularity: 666,
      },
    ]
  }
}
