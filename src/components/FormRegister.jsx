import React, { useState } from 'react'

const FormRegister = (props) => {

    const [formulario, setFormulario] = useState({
        'name': '',
        'lastName': '',
        'email': '',
        'pasword': '',
        'repeatPassword': '',
    })

    const handleInputChange = (evento) => {
        setFormulario(
            {
                ...formulario,
                [evento.target.name]: evento.target.value
            }
        )
    }

    const sendForm = (evento) => {
        evento.preventDefault() // evita que se recargue la pagina
        props.handleSubmit(formulario)
    }

    

    return (
        <form className="user" onSubmit= {sendForm}>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="text"
                        className="form-control form-control-user"
                        id="exampleFirstName"
                        name="name"
                        value={formulario.name}
                        onChange={handleInputChange}
                        placeholder="First Name" />
                </div>
                <div
                    className="col-sm-6">
                    <input type="text"
                        className="form-control form-control-user"
                        id="exampleLastName"
                        name="lastName"
                        value = {formulario.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name" />
                </div>
            </div>
            <div
                className="form-group">
                <input type="email"
                    className="form-control form-control-user"
                    id="exampleInputEmail"
                    name="email"
                    value = {formulario.}
                    onChange={handleInputChange}
                    placeholder="Email Address" />
            </div>
            <div
                className="form-group row">
                <div
                    className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        name="password"
                        value = {formulario.}
                        onChange={handleInputChange}
                        placeholder="Password" />
                </div>
                <div
                    className="col-sm-6">
                    <input type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        name="repeatPassword"
                        value = {formulario.}
                        onChange={handleInputChange}
                        placeholder="Repeat Password" />
                </div>
            </div>
            <button type="submit"
                className="btn btn-primary btn-user btn-block">
                Register Account
    </button>
        </form>
    )
}

export default FormRegister