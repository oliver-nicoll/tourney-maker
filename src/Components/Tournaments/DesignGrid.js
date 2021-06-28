import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import TourneyMaker from '../NavBar/logomaker.png'
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
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

    export default function TitlebarGridList() {
        const classes = useStyles();

        const tournaments = useSelector((state) => {
            return state.tournaments.all
        })
      
        return (
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Tournaments </ListSubheader>
              </GridListTile>
              {tournaments.map((tile) => (
                <GridListTile key={tile.id}>
                  <img src={TourneyMaker} alt={tile.tourney_name} />
                  <GridListTileBar
                    title={tile.tourney_name}
                    subtitle={<span>date: {tile.date}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${tile.tourney_name}`} className={classes.icon}>
                         <Link to={`/events/${tile.id}`}><InfoIcon /></Link>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        );
      }