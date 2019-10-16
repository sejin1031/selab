import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './TileData';

import "react-image-lightbox/style.css"
import Lightbox from 'react-image-lightbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    marginLeft: 200,
    float: 'left',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class Gallery extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
    
    render(){
        const classes = useStyles;
        const { photoIndex,isOpen} = this.state;
        return (
            <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">ASD</ListSubheader>
                </GridListTile>
                {tileData.map(tile => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} onClick={() => this.setState({ isOpen: true })} />

                                {isOpen && (
                    <Lightbox
                        mainSrc={tileData[photoIndex].img}
                        nextSrc={tileData[(photoIndex + 1) % tileData.length]}
                        prevSrc={tileData[(photoIndex + tileData.length - 1) % tileData.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + tileData.length - 1) % tileData.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % tileData.length,
                        })
                        }
                    />
                    )}

                    <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
            </div>
        );
            }
}

export default Gallery;