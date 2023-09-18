import './_products.scss';

const Products =()=>{

  const productData = [
    {
      pName:"Monopoly",
      price: 45,
      img: "game-1.jpg"
    },
    {
      pName:"Jenga",
      price: 15,
      img: "game-2.jpg"
    },
    {
      pName:"Checkers",
      price: 10,
      img: "game-3.jpg"
    },
    {
      pName:"Connect 4",
      price: 8,
      img: "game-4.jpg"
    },
    {
      pName:"Sorry!",
      price: 20,
      img: "game-5.jpg"
    },
  ]
  return(
    <div className='products-container'>
      {
        productData.map((product,key)=>{
          return(
            <div className='product-card'>
              <div className='product-image-container'>
                <img src={require('../../assets/images/games/' + product.img)}/>
              </div>
              <div className='product-info'>
                <h5> <a href='#'>{product.pName}</a> </h5>
                <p className='product-price'> ${product.price} </p>
                <div className='product-rating'>
                  <i className="fa fa-star"/>
                  <i className="fa fa-star"/>
                  <i className="fa fa-star"/>
                  <i className="fa fa-star"/>
                  <i className="fa fa-star"/>
                </div>
              </div>
            </div>

          )
        })
      }
    </div>
  )
}

export default Products;