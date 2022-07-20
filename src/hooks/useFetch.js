import { useState } from "react";

export const useFetch = (callback) => {
    let [isLoading, setIsLoading] = useState(false);
    let [errorText, setErrorText] = useState('')
    
    const fetching = async() => {
        try {
            setIsLoading(true)
            await callback();
        } catch(e) {
            setErrorText(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    

    return [fetching, isLoading, errorText];
}