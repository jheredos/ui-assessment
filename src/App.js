import React from 'react';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import AlbumsContainer from './components/AlbumsContainer';
import MusicToolbar from './components/MusicToolbar';
import { searchTrie } from '../utilities/trie';

const App = (props) => {
  
  const [albums, setAlbums] = useState([...props.albums]);

  const handleSearch = (event) => {
    setAlbums([...searchTrie(props.trie, event.target.value.toLowerCase())])
  }

  const sortByArtist = () => {
    let sorted = [...albums].sort((a, b) => a.artist < b.artist ? -1 : 1);
    setAlbums(sorted);
  }

  const sortByAlbum = () => {
    let sorted = [...albums].sort((a, b) => a.title < b.title ? -1 : 1);
    setAlbums(sorted);
  }

  const deleteAlbum = (id) => {
    let remaining = [...albums].filter(a => a.id != id);
    setAlbums(remaining);
  }

  return (
    <Box sx={{
      width: 1000,
      margin: 'auto',
      }}>
      <MusicToolbar 
        onSortByArtist={sortByArtist} 
        onSortByAlbum={sortByAlbum}
        onSearch={handleSearch}
        />
      <AlbumsContainer onDelete={(id) => deleteAlbum(id)} albums={albums}/>
    </Box>
  );
}

export default App;