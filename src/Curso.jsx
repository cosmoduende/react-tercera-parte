import React from 'react';
import PropTypes from 'prop-types';

//const mayorDeEdad = edad => edad > 18;

//const persona = {"nombre":"Saúl", "apellido":"Buentello", "edad":19};

//const curso ={"title":"React desde cero", "image":"https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png", "price":"50usd"}

const Curso = ({image, title, price, profesor}) => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title}/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
            {`Prof.: ${profesor}`}
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="http://www.google.com">{`$${price} USD`}</a>
        </div>
    </div>
    </article>
)

Curso.propTypes ={
    tile:PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profeor: PropTypes.string
}

Curso.defaultProps ={
    title: "No se encontró título",
    image: "https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg",
    price: "--",
    profesor: ""
}

export default Curso;