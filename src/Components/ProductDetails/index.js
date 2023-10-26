import { useLocation } from "react-router-dom";
import './_product-details.scss'
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/Cart/cartSlice";

const ProductDetails = ()=>{
  const location = useLocation();
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(addCartItem(location.state))
  }

  return(
    <div>
      <div className="row container my-5 product-details-container">
        <div className="col-5 product-img-container">
          <img src={require('../../assets/images/games/'+location.state.product_img)}  />
        </div>
        <div className="col-7 product-info">
          <span id="product-name"> {location.state.product_name} </span>

          <div className="rating-container">
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
          </div>
          <div className="product-price">
            <span className="price">${location.state.price} </span>
            <div style={{fontSize:"0.8em"}}> Taxes Included </div>
          </div>
          <div className="my-3 product-description">
            <span> Product Description </span>
          </div>
          <div className="my-5" onClick={addToCart}>
            <div className="btn btn-warning cart-button">
              <div className="cart-icon-container">
                <i className="fa fa-shopping-cart"/>
              </div>
              <div className="cart-text-container">
                <p> Add to Cart </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;