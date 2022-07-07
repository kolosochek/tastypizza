const sortByCategory = (categoryTitle, pizzasArr) => {
    let resultArr = []

    if(categoryTitle && pizzasArr) {
        for(let [pizza, idx] in pizzasArr) {
            if (pizza.category && pizza.category.length) {
                for(let category in pizza) {
                    if(category == categoryTitle) {
                        resultArr.push(pizza)
                    }
                }
            }
            
        }

        return resultArr;
    }
}