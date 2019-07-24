import React from "react";

const cursos = [
    {
        "id": 1,
        "title": "React desde cero uno",
        "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png",
        "price": 30,
        "profesor": "Saú Buentello"
    },
    {
        "id": 2,
        "title": "Drupal desde cero",
        "image":"https://www.drupal.org/sites/all/themes/bluecheese/images/og.jpg",
        "price": 40,
        "profesor": "Alexis Lozada"
    }, 
    {
        "id": 3,
        "title": "Go desde cero",
        "image":"https://pbs.twimg.com/profile_images/554798224154701824/mWd3laxO.png",
        "price": 50,
        "profesor": "Alex Market"
    }, 
    {
        "id": 4,
        "title": "HTML desde cero",
        "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/que-es-html.jpg",
        "price": 10,
        "profesor": "Mario Guerrero"
    }  
  ]

const Course = ({match}) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return(
        <div className="ed-grid m-grid-3">
            {
            cursoActual ? (
                <>
                 <h1 className="m-cols-3">{cursoActual.title}</h1>
                 <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.titulo}/>
                 <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
                </>
            ) :
            <h1>El curso no existe</h1>
            }
        </div>
        )
}

export default Course;