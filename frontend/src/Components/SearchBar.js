import React, { useState } from 'react';
import '../search.css';
import Favourites from './Favourites';
import { Button } from "react-bootstrap"; // import react, favourites component, button from bootstrap and search stylesheet

function SearchBar() {//created states for favouriteList, input, catagory and data
  const [favouriteList, setFavouriteList] = useState([]);
  const [input, setInput] = useState("");
  const [catagory, setCatagory] = useState("all");
  const [data, setData] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault(); //Create a function to search for the information the user choosed 
    try{
      if(input === ''){
        const response = await fetch(`http://localhost:8080/search/a/${catagory}`);
        const results = await response.json();// if the user only chose a catagory it will search for everything and give 25 results
        console.log(results)
        setData(results);
      }else {
        const response = await fetch(`http://localhost:8080/search/${input}/${catagory}`);
        const results = await response.json();  
        console.log(results) //when the user gives a specified title and choose a catagory it will display 25 reults with the input of the user
        setData(results);
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  const addToFavourite = (result) => { //Create a function for the favouriteList to save items that were chose as favourites
    let item = { //These are the information that will be saved from the items and pushed to the favouriteList
      id: result.id,
      link: result.previewUrl,
      title: result.artistName,
      img: result.artworkUrl100
    };
    let arr = [...favouriteList]
    arr.push(item)
    setFavouriteList(arr);
    
    console.log(favouriteList); //log the information to the console
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="searchBar">
        <input className="inputBox" type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <select className="genre" value={catagory} onChange={e => setCatagory(e.target.value)}>
          <option value="all">All</option> {/*inserted all the options for the catagory */}
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">Tv show</option>
          <option value="software">Software</option>
          <option value="ebook">Ebook</option>
        </select>
        <button className="button" type="submit">Search</button>
      </form>

      {data ? (
        <ul>
          <div className="results-container">{/*mapped through the data that was fetch */}
          {data.map(item => ( 
            <div className="result-item">
                <h6 className="image-username">{item.trackName}</h6>
                    <div className="image-wraper">
                      <img
                        className="image"
                        src={item.artworkUrl100}
                        alt={item.trackName}
                      />
                    </div> {/*the images and names of the items would be display. Under the items the add to favourites button is placed*/}
                    <div>
                  <Button
                    color="outline-success"
                    size="sm"
                    onClick={() => addToFavourite(item)}>
                    addToFavorite
                  </Button>
                </div>
            </div>
          ))}
          </div>
        </ul>
      ): null}
      <Favourites favouriteList={favouriteList} />
    </div>
  );
}

export default SearchBar; //export the searchBar component