import ProductModel from "./product";
import UserModel from "./user";

type CartModel = {
    products: ProductModel[],
    user: UserModel[]
}

export default CartModel