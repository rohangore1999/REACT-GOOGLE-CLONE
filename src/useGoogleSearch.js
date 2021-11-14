// Welcom to OUR CUSTOM REACT HOOK.
// Note any filename start with use in front of it is hook


// https://cse.google.com/cse/create
// Search engine ID ~ 49d2824149d8bd8a8


import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = '49d2824149d8bd8a8'

// useGoogleSearch => is responsible for getting data; and then when we use this hook in component it will return data from api
// term =>  user type in search and stored in datalayer
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(respose => respose.json()) //after getting data convert into json
                .then(result => {
                    setData(result)
                }) //after json result we are setting that into data varible and then returning that data
        }

        fetchdata(); //calling the fetch data inside useEffect function to run. Because whenever it get new term useEffect needs to run
    }, [term]) // call the function whenever change in term run 

    return { data } //it returns object
}

export default useGoogleSearch
