import React from 'react';
import { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip, Typography } from '@material-ui/core';
import { Cancel, PlayArrow } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    cursor: 'pointer'
  },
  deleteButton: {
    position: 'absolute',
    color: '#ddd',
    top: 0,
    right: 0,
  },
  playButton: {
    position: 'absolute',
    color: '#ddd',
    bottom: 18,
    left: 18,
  },
  artistName: {
    color: '#777'
  }
}))

const AlbumCard = (props) => {

  const [highlighted, setHighlight] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const styles = useStyles();

  const handleDelete = () => {
    setDialogOpen(false);
    props.onDelete(props.album.id);
  }

  const confirmDeleteDialog = () => {
    return <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      >
      <DialogTitle id="alert-dialog-title">
        Are you sure?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete {props.album.title} from your library?
        </DialogContentText>
        <DialogContentText>
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={handleDelete} autoFocus>Delete</Button>
        <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  }

  return (
    <Card 
      variant="outlined" 
      className={styles.root}
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}>
      {dialogOpen ? confirmDeleteDialog() : null}
      <div style={{position: 'relative'}}>
      {highlighted ? 
        <Tooltip title="Delete" arrow >
        <IconButton 
          aria-label="delete"
          onClick={() => setDialogOpen(true)}
          className={styles.deleteButton}>
          <Cancel fontSize='small'/>
        </IconButton> 
        </Tooltip>
      : null}
      <CardMedia
        component="img"
        height="320"
        sx={{p: 2}}
        src={props.album.artworkUrl}
        alt={props.album.artworkUrl.slice(props.album.artworkUrl.lastIndexOf('/')+1)} // get filename from url
      />
      {highlighted ? 
        <Tooltip title="Play" arrow>
        <IconButton 
          aria-label="play"
          className={styles.playButton}>
          <PlayArrow fontSize='large'/>
        </IconButton> 
        </Tooltip>
      : null}
      </div>
      <CardContent>
        <Typography variant="h6">{props.album.title}</Typography>
        <Typography variant="subtitle1" className={styles.artistName}>{props.album.artist}</Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;