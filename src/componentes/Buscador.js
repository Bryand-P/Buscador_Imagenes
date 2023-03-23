
import React, {Component} from 'react';
class Buscador extends Component{

    busquedaRef= React.createRef();

    obtenerDatos=(e)=>{
        e.preventDefault();


        //Tomamos el valor del input y lo guardamos en la constante termino
        const termino=this.busquedaRef.current.value;

        //Lo enviamos al componente principal App.js
        this.props.datosBusqueda(termino);

    }
    
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>
                   
                <div className='form-group col-md-8'>
                <input ref={this.busquedaRef} type="text" className='form-control form-control-mg' placeholder='Nombre Imagen a Buscar' />
                </div>
                <div className='form-group col-md-4'>
                <input type="submit" className='btn btn-lg btn-danger btn-block'
                 value='Buscar...' />
                </div>
                </div>
            </form>
         );
    }
}

export default Buscador;