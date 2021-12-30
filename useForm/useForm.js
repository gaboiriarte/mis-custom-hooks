import { useState } from "react"


export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({target})=>{
        setValues({
            ...values,
            [target.name] : target.value
        });
    }

    return [values,handleInputChange,reset];
}

//Este custom hook nos ayuda con los valores de los inputs, y poder ir actualizandolos altiro en el useState