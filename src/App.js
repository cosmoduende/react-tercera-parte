import React, {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso';

const cursos = [
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
]

const App = () => (
<>
    <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso de React</p>
        <p> Probando ando</p>
        <a href="http://www.kmmx.mx" className="button">Hazme clic</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
    <Curso 
      title="React desde cero"
      image="https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      price = "20usd"
      profesor = "Saúl Buentello"
      />
    
    {
      cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/> )
    }

    <Curso 
      title="React desde cero"
      image="https://cdn-images-1.medium.com/max/1600/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      price = "20usd"
      profesor = "Saúl Buentello"
      />
    <Curso
      
    />
</div>
</>
    )

export default App;
