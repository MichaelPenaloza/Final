const Formulario = () => {
    return (
        <div className="col-md-6 mb-4">
            <h2>Datos del Deportista</h2>
            <form id="formularioDeportista">
                <div className="form-group">
                    <label htmlFor="nombreDeportistaInput">Nombre:</label>
                    <input type="text" className="form-control" id="nombreDeportistaInput" placeholder="Ingrese el nombre"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="apellidosDeportistaInput">Apellidos:</label>
                    <input type="text" className="form-control" id="apellidosDeportistaInput" placeholder="Ingrese los apellidos"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="cedulaDeportistaInput">Número de Cédula:</label>
                    <input type="text" className="form-control" id="cedulaDeportistaInput" placeholder="Ingrese el número de cédula"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="fechaNacimientoInput">Fecha de Nacimiento:</label>
                    <input type="date" className="form-control" id="fechaNacimientoInput"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="fotoCedulaInput">Foto de Cédula:</label>
                    <input type="file" className="form-control" id="fotoCedulaInput"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="fotoDeportistaInput">Foto de Deportista:</label>
                    <input type="file" className="form-control" id="fotoDeportistaInput"></input>
                </div>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>
        </div>
    )
}

export default Formulario;