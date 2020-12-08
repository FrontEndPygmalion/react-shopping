import React from 'react'
import { Link } from 'react-router-dom'
import FormRegister from '../components/FormRegister'


const createUser = async (form) => {
    console.log(form)
    const payload =  {
        method : 'POST', 
        header : {'Content-type': 'appliclation/json'},
        body: JSON.stringify(form)
    }

    try {
        const result = await fetch('', payload)
        const user = await result.json()
        console.log('usuario registrado exitosamente', user )
    } catch (error) {
        console.log('Ocurrio un error', error)
    }

}

const Register = () => (
    <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <FormRegister handleSubmit={createUser}/>
                            <hr />
                            <div className="text-center">
                                <Link className="small" to="/login">Already have an account? Login!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)



export default Register