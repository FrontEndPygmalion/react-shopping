import React, { useState } from 'react'

const FormRegister = (props) => {

    const [formulario, setFormulario] = useState({})

    const handleInputChange = (evento) => {
        setFormulario(
            {
                [evento.target.name]: evento.target.value, ...formulario
            }
        )
    }

    const sendForm = (evento) => {
        evento.preventDefault()
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
                        onChange={handleInputChange}
                        placeholder="First Name" />
                </div>
                <div
                    className="col-sm-6">
                    <input type="text"
                        className="form-control form-control-user"
                        id="exampleLastName"
                        name="lastName"
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
                        onChange={handleInputChange}
                        placeholder="Password" />
                </div>
                <div
                    className="col-sm-6">
                    <input type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        name="password"
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