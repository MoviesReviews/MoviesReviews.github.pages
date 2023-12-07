import { useState } from "react"

export const useForm = (submitHandler, initialState) => {
    const [formValues, setFormValues] = useState(initialState)

    const onChange = (e) => {
        let value = e.target.value

        if(e.target.type == 'checkbox'){
            value = e.target.checked
        }

        setFormValues(state => (
            {
                ...state,
                [e.target.name]: value,
            }
        ))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submitHandler(formValues)
    }

    return{
        formValues,
        onSubmit, 
        onChange
    }
}