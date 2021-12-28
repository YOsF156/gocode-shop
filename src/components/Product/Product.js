import './Product.css'
const Product = ({ img, name, price }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h5> {name}  </h5>
                <h6> {price}$ </h6>
            </div>
        </div>
    );
};


export default Product