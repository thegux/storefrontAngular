interface ProductModel {
    id: number,
    name: string,
    price: number,
    url: string,
    description: string
 
}

export interface PreCartProductModel extends ProductModel {
    amountInCart: number
}

export interface CartProductModel extends ProductModel {
    amountInCart?: number,
    indexInCart: number
}


export default ProductModel