import React from 'react';
import { AppBar, Button, ButtonGroup, Input, InputAdornment, Toolbar, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbarText: {
    color: 'white'
  },
  searchBar: {
    color: 'white',
    marginLeft: 24,
  },
  sortButtonGroup: {
    position: 'absolute',
    right: 12,
  }
}))

const MusicToolbar = (props) => {

  const styles = useStyles();

  return (
    <AppBar position='sticky' color='primary'>
      <Toolbar>
        <Typography variant='h5'>My Music</Typography>
        <Input
          id='searchbar'
          placeholder='Search...'
          inputProps={{ 'aria-label': 'search bar' }}
          onChange={props.onSearch}
          className={styles.searchBar}
          startAdornment={
            <InputAdornment position='start'>
              <Search className={styles.toolbarText}/>
            </InputAdornment>
          }
        />
        <ButtonGroup
          aria-label="sort options"
          variant="text"
          className={styles.sortButtonGroup}
          >
          <Button  className={styles.toolbarText} onClick={props.onSortByArtist}>Sort by Artist</Button>
          <Button  className={styles.toolbarText} onClick={props.onSortByAlbum}>Sort by Album</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default MusicToolbar;