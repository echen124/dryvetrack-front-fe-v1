import React from 'react';
import { Container, FormContainer, FormTitle, Form, FormInput, FormLabel, TopForm, AddUser, ErrorText } from "../styling/Register"

const ErrorContainer = ({ errors }) => {
    console.log(errors)

    console.log(errors.length === 0)
    if (errors.length === 0) {
        return (
            <></>
        )
    }
    else {
        return (
            <div>
                {
                    errors.map((err => {
                        return (
                            <li>{err.description}</li>
                        )
                    }))
                }
            </div>
        )
    }
}

export default ErrorContainer;