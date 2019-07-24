import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CourseCard = ({image, title, price, professor, id}) => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to = {`/cursos/${id}`}>
            <img src={image} alt={title}/>
        </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
            {`Prof.: ${professor} ${id}`}
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="http://www.google.com">{`$${price} USD`}</a>
        </div>
    </div>
    </article>
)

CourseCard.propTypes ={
    tile:PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profeor: PropTypes.string
}

CourseCard.defaultProps ={
    title: "No se encontró título",
    image: "https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg",
    price: "--",
    profesor: ""
}

export default CourseCard;