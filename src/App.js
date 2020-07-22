import React, {Component} from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';

class App extends Component {

  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita]

    console.log(citas)

    this.setState({
      citas
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de pacientes de veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
