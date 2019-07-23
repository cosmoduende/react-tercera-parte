import React from "react"
import Curso from "./Curso";

const cursos = [
    {
        "id": 1,
        "title": "React desde cero",
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

const CourseGrid = () => (
    <div className="ed-grid">
        {cursos.map(c => (
        <Curso 
        key={c.id}
        title={c.title}
        image={c.image}
        price={c.price}
        profesor={c.profesor}
        />
        ))}
    </div>
)

export default CourseGrid;