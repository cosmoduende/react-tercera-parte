import React from "react"
import CourseCard from "../Molecules/CourseCard";

const courses = [
    {
        "id": 1,
        "title": "React desde cero dos",
        "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png",
        "price": 35,
        "professor": "Saú Buentello"
    },
    {
        "id": 2,
        "title": "Drupal desde cero",
        "image":"https://www.drupal.org/sites/all/themes/bluecheese/images/og.jpg",
        "price": 40,
        "professor": "Alexis Lozada"
    }, 
    {
        "id": 3,
        "title": "Go desde cero",
        "image":"https://pbs.twimg.com/profile_images/554798224154701824/mWd3laxO.png",
        "price": 50,
        "professor": "Alex Market"
    }, 
    {
        "id": 4,
        "title": "HTML desde cero",
        "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/que-es-html.jpg",
        "price": 10,
        "professor": "Mario Guerrero"
    }  
  ]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {courses.map(c => (
        <CourseCard 
        key={c.id}
        id={c.id}
        title={c.title}
        image={c.image}
        price={c.price}
        professor={c.professor}
        />
        ))}
    </div>
)

export default CourseGrid;