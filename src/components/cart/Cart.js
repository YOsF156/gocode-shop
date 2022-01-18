import "./Cart.css";
import CartItem from "../Cart items/Cart_item";
export default function Cart({ cartList, updateCart }) {

    return cartList.length >= 1 && <div className="cart"> 🛒 your cart:
        <span className="totalAmount">{cartList.reduce((sum, product) => { return sum + (product.price * product.counter) }, 0).toFixed(2)}</span>
        {cartList.map(({ price, counter, image, title, id }) =>
            <CartItem key={id} price={price} counter={counter} image={image} title={title} id={id} updateCart={updateCart} />

        )}
    </div>

}