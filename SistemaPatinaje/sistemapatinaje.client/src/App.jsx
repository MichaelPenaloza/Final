import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./componentes/Formulario";


const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Formulario/>
                <div className="col-md-6 mb-4">
                    <h2>Deportistas</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Cédula</th>
                                <th scope="col">Fecha de Nacimiento</th>
                                <th scope="col">Foto de Cédula</th>
                                <th scope="col">Foto de Deportista</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="tablaDeportistasBody">
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>

    )
}

export default App;