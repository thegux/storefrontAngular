import {CartProductModel} from "./product";

type CartModel = {
    products: CartProductModel[],
    total: number
}

export default CartModel