import React, {Component} from "react";

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "ingresa name",
            correo: "ingresa correo",
            fecha: new Date()
        }

        this.changeName = this.changeName.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }

    changeName(e){
        this.setState({
            name:e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo:e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario de {this.props.name1}</h1>
                <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>name completo</label>
                            <input type="text" 
                                onChange={this.changeName}/>
                        </div>
                        <div className="form__item">
                            <label>Correo electrónico</label>
                            <input type="email" 
                                onChange={this.cambiarCorreo}
                            />
                        </div>
                    </div>
                    <input type="button" value="desmontar" onClick={this.componentWillUnmount} />
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("form-element");
        console.log(elemento);
        this.IntervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps)
        //console.log(prevState)
        //console.log("------")
    }

    componentWillUnmount(){
        clearInterval(this.IntervaloFecha)
        console.log('desmontada funcionalidad de fecha')
    }


}

export default Form;