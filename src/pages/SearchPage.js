import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
// import response from '../response';
import { Link } from "react-router-dom";
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    // here we are extracting the data from the datalayer
    // {} use because we destructure the state(which is returning state and term; but we only need term) variable which it is returning in reducer.js at line 20
    const [{ term }] = useStateValue();


    //LIVE API CALL
    const { data } = useGoogleSearch(term)

    /* OR */

    // get template/Fake data
    // const data = response;




    // FLOW: When we hit ENTER
    /* 
        1) Redirect to '/search' => SearchPage (using useHistory) in Search.js
        2) Push the Searched term into the DATALAYER (redux). We store it in Search.js
        3) Once it is store in DATALAYER, we pull it using useStateValue (redux)
        4) After getting the searched term from DATALAYER we pass that term into our custom HOOK useGoogleSearch to pass as a parameter in API and it will return the result in JSON format
    */
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="googleimage" />
                </Link>

                <div className="searchPage_headerBody">
                    {/* which we create the under component and we say that hidebuttons */}
                    <Search hideButtons={true} hidePlaceholder={true} />

                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">

                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>


                        </div>

                        <div className="searchPage_optionsRight">

                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Show only if the term(which is user searched in the the box) */}
            {term && (
                <div className="searchPage_results">

                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map((item, id) => (
                        <div className="searchPage_result" key={id}>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage_resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />)
                                }
                                {item.displayLink}
                            </a>

                            <a className="searchPage_resultTitle" href={item.link} target="_blank" rel="noreferrer">
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage_resultSnippet">{item.snippet}</p>
                        </div>
                    ))}

                </div>)}


        </div>
    )
}

export default SearchPage
