import React, { useState, useEffect } from "react";

 export const UpdateContext = React.createContext();


const UpdateContetxtProvider = ( props ) => {
    const [worklist, setWorklist] = useState([])
    
    const addWork = ( title ) => {
        setWorklist([...worklist, { title }])
    }

    useEffect(() => {
        console.log(worklist)
    },[worklist])

    return (
        <UpdateContext.Provider value={{ addWork }}>
            {props.children}
        </UpdateContext.Provider>
    )

}

export default UpdateContetxtProvider