import React from "react";

function Product({ item }) {
    console.log(item.img)
    return (

        <div className="item" 
            style={{
                backgroundImage: `url(${item.img})`,
            }}
        
        >
            <span>{item.title}</span>
        </div>
    )

}

export default Product