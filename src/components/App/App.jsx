import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import GalleryList from '../GallleryList/GalleryList';
import axios from 'axios';

function App() {
  const [imageList, setImageList] = useState([]);



  const getImages = () => {
    axios.get('/gallery')
    .then(response => {
      setImageList(response.data)
    }).catch(error =>{
      console.log('error with GET request', error)
      alert('Error  getting you images')
    })
  }


  useEffect(() => {
    getImages();
  }, [])









    return (
      <div className="App">
        <header className="App-header">
          <div className="banner-header">
          <h1 className="App-title">Gallery of My Life</h1>
          </div>
        </header>
        <p>Gallery goes here</p>
        
        < GalleryList imageList={imageList} getImages={getImages}/>
      </div>
    );
}

export default App;
