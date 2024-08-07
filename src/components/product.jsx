import React from "react";

function Product2({ item }) {
    
    return (
        <div className="item_box">
        <div className="item"   style={{
                backgroundImage: `url("${item.image}")`
            }}>
          <button>
            <img src="/img/Union.png" alt="" />
          </button>
        </div>
        <div className="price">
          <h4>Медный чайник с фарфоровой ручкой</h4>
          <span>1 953 грн</span>
        </div>
      </div>
    )

}

export default Product2