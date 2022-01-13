import "./Cart.css";
import CartItem from "../Cart items/Cart_item";
export default function Cart({ cartList, updateCart }) {

    return <div className="cart"> your cart
        <span className="totalAmount">0</span>
        {cartList.map(({ price, counter, image, title, id }) =>
            <CartItem key={id} price={price} counter={counter} image={image} title={title} id={id} updateCart={updateCart} />

        )}
    </div>

}