

import React from "react";

function Choose({ item }) {
   
    return (
        <div className="choose-item">
            <div className="gradient">
            <img src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
            <h4>{item.description}</h4>
            <div className="read">
                <h4>Читать больше</h4>
                <img src="/img/Vector (14).png" alt="" />
            </div>
        </div>
    )

}

export default Choose