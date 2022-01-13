import { Button } from "react-bootstrap";

export default function CartItem({ price, counter, image, title, id, updateCart }) {

    return (<div className="product-card">
        <div className=" container product-image">
            <img src={image} alt="" />
            <Button className="btn2" variant='outline-success' onClick={() => updateCart(1, id)}>➕</Button>
            <Button className="btn1" variant='outline-danger'>➖</Button>
        </div>
        <div className="product-info">
            <h5> {title}  </h5>
            <h6> {price}$ </h6>

        </div>
    </div>)
        ;

}