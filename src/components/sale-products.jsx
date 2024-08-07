import React from "react";

function ProductSale({ item }) {
    
    return (
        <div className="item_box">
              <div className="item"   style={{
                backgroundImage: `url("${item.image}")`
            }}>
                <button className='sale'>
                  SALE
                </button>
                <button>
                  <img src="/img/Union.png" alt="" />
                </button>
              </div>
              <div className="price">
                <h4>Медный чайник с фарфоровой ручкой</h4>
                <div className="flex">
                  <p>1 953 грн</p>
                <span>1 953 грн</span>
                </div>
              </div>
            </div>
    )

}

export default ProductSale