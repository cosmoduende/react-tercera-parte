import React, {useState} from "react";

const Course = ({match}) => {

    const [state, setState] = useState({
            id: 1,
            title: "React desde cero uno",
            image:"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png",
            price: 30,
            profesor: "Saú Buentello"
    })

const changeTitle = (text) => {
    setState({
        ...state,
        title: text
    })
}

    return(
        <div className="ed-grid m-grid-3">
            {
            state ? (
                <>
                 <h1 className="m-cols-3">{state.title}</h1>
                 <img className="m-cols-1" src={state.image} alt={state.titulo}/>
                 <p className="m-cols-2">Profesor: {state.profesor}</p>
                 <button onClick={changeTitle.bind(this, "Go desde cero")}>Cambiar título</button>
                </>
            ) :
            <h1>El curso no existe</h1>
            }
        </div>
        )
}

export default Course;