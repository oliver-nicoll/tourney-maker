import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useSelector } from 'react-redux';
import TourneyMaker from '../NavBar/logomaker.png'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      
    },

    gridList: {
        width: 500,
        height: 450
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    }));

const TeamGrid = () => {
      const classes = useStyles();

      const teams = useSelector((state) => {
          return state.teams.all
      })


      
        return (
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Teams: </ListSubheader>
              </GridListTile>
              {teams.map((tile, i) => (
                  <GridListTile key={tile.id}>
                    <img src={TourneyMaker} alt={tile.tourney_name} />
                    <GridListTileBar
                      title={tile.team_name}
                      subtitle={<span>Team Captain: {tile.team_captain}</span>}
                      actionIcon={
                      <IconButton aria-label={`info about ${tile.team_name}`} className={classes.icon}>
                          <Link to={`/teams/${tile.id}`}><InfoIcon /></Link>
                        </IconButton>
                        }
                        />
                  </GridListTile>
              ))}
            </GridList>
          </div>
        );
}

export default TeamGrid