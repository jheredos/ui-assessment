import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeTrie } from '../utilities/trie';

const albumsData = require('../assets/albums.json');
const albums = albumsData.map((a, i) => {
  return {id: 1000+i, ...a} // copy albums objects and add an id
})

const trie = makeTrie(albums, album => {
  let searchTerms = album.artist.split(' ').concat(album.title.split(' '));
  return searchTerms.map(t => t.toLowerCase());
})

ReactDOM.render(
  <React.StrictMode>
    <App albums={albums} trie={trie}/>
  </React.StrictMode>,
  document.getElementById('root')
);