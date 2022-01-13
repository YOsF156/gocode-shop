import './Product.css'
import Button from 'react-bootstrap/Button';
const Product = ({ img, name, price, id, updateCart }) => {
    return (
        <div className="product-card">
            <div className=" container product-image">
                <img src={img} alt="" />
                <Button className="btn2" variant='outline-success' onClick={() => updateCart(id)}>➕</Button>
                <Button className="btn1" variant='outline-danger'>➖</Button>
            </div>
            <div className="product-info">
                <h5> {name}  </h5>
                <h6> {price}$ </h6>

            </div>
        </div>
    );
};


export default Product