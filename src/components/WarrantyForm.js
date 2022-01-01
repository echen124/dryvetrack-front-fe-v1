import React from 'react'
import {FormContainer, FormElement, Break, Input, SpecialInput, Label, Button} from "../styling/Warranty"

const WarrantyForm = ({handleDetails, handleProvider, handleTitle, cancelWarrantyContainer}) => {
    return (
        <FormContainer>
            <FormElement>
                <Label>Title</Label>
                <Break></Break>
                <Input type="text" onChange={handleTitle} />
            </FormElement>
            <FormElement>
                <Label>Provider</Label>
                <Break></Break>
                <Input onChange={handleProvider}></Input>
            </FormElement>
            <FormElement>
                <Label>Details</Label>
                <Break></Break>
                <SpecialInput type="text" onChange={handleDetails}></SpecialInput>
            </FormElement>
            <Button onClick={cancelWarrantyContainer}>Cancel</Button>
        </FormContainer>
    )
}

export default WarrantyForm;