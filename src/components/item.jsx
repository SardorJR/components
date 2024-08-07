import React from "react";

function Product({ item }) {
    console.log(item.image);
    return (

        <div className="item"
            style={{
                backgroundImage: `url("${item.image}")`
            }}
        >
            <span>{item.title}</span>
        </div>
    )
}

export default Product