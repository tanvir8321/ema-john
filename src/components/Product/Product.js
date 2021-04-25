import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    let i = 0;
    const {name, img, seller, features, price, shipping, star, stock, category} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h2>{name}</h2>
                <p>by: {seller}</p>
                <div className="cart-features">
                    <div>
                        <p>Price: $ {price}</p>
                        <p>Shipping Cost: $ {shipping}</p>
                        <p>Only {stock} left in stock - order soon</p>
                        <button onClick={()=>props.clickHandler(props.product)} type="button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div>
                        <ul>
                            {
                                features.map(feature => <li key={i++}>{feature.description} - {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;