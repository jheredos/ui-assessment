import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import AlbumCard from './AlbumCard';

const AlbumsContainer = (props) => {

  return (
    <Box sx={{margin: '1.8rem auto'}}>
      <Grid container spacing={2} sx={{mx: 'auto'}}>
        {props.albums.length > 0 ? 
          props.albums.map(album => {
            return <Grid item xs={4} key={album.id}>
              <AlbumCard onDelete={(id) => props.onDelete(id)} album={album}/>
            </Grid>
          }) : 
          <Typography variant="h6">Sorry, no results...</Typography>}
      </Grid>
    </Box>
  );
}

export default AlbumsContainer;