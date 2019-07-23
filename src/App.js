import React, {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';
import CourseGrid from './CourseGrid';


/* const cursos = [
  {
      "title": "React desde cero",
      "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png",
      "price": 30,
      "profesor": "Saú Buentello"
  },
  {
      "title": "Drupal desde cero",
      "image":"https://www.drupal.org/sites/all/themes/bluecheese/images/og.jpg",
      "price": 40,
      "profesor": "Alexis Lozada"
  }, 
  {
      "title": "Go desde cero",
      "image":"https://pbs.twimg.com/profile_images/554798224154701824/mWd3laxO.png",
      "price": 50,
      "profesor": "Alex Market"
  }, 
  {
      "title": "HTML desde cero",
      "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/que-es-html.jpg",
      "price": 10,
      "profesor": "Mario Guerrero"
  },  
] */

const App = () => (
<>

<Banner/>
<Formulario nombre="Saúl Buentello" correo="cosmoduende@hotmail.com" name1="con React"/>
<CourseGrid/>

{/*
<div className="ed-grid m-grid-3">
    <Curso 
      title="React desde cero"
      image="https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      price = "20usd"
      profesor = "Saúl Buentello"
      />
    
    {
      cursos.map( c => <Curso 
        title={c.title} 
        image={c.image} 
        price={c.price} 
        profesor={c.profesor}/> )
    }

    <Curso 
      title="React desde cero"
      image="https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      price = "20usd"
      profesor = "Saúl Buentello"
      />
    <Curso
      
  /> 
</div> */}
</>
    )

export default App;
