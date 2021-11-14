import React, {useState} from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

// datalyer import
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider'


function Search({hideButtons = false, hidePlaceholder = false}) {
    // to store input
    const [input, setinput] = useState("")
    const history = useHistory();

    // {} we skip this coz; we only want to store data in datalayer
     // {} use because we destructure the state(which is returning state and term; but we only need term) variable which it is returning in reducer.js at line 20
    const [{term}, dispatch] = useStateValue();

    const search = (e) => {
        e.preventDefault();
        console.log('you hit',input)

        // when you click search btn/press enter; it will redirect to '/search' page path
        history.push('/search')

        dispatch({
            type: actionTypes.SET_SEARCH_TERM, //it is default taken from const var in reducer.js
            term: input //input(from useState line 12) which user type in search box 
        })
    }

    return (
        // press enter and submit so we use form-tag
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />

                {/* If hidePlaceholder true then this */}

                {hidePlaceholder ? (
                    <input value={input} onChange={(e) => { setinput(e.target.value) }} placeholder={term}/>
                ) :
                // {/* else (hidePlaceholder false) then this */}
                 (
                    <input value={input} onChange={(e) => { setinput(e.target.value) }}/>
                )}
                
                <MicIcon />
            </div>

            { /* we are using hideButtons because we want to use same search bar in searchpage where we show results in that we dont want to show that buttons*/ }

            {/* bedefault is it false: means dont hide */}

            {!hideButtons ? (<div className="search_buttons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>) : 
            (
            <div className="search_buttons">
                <Button className="search_buttonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>)}

            
        </form>
    )
}

export default Search
