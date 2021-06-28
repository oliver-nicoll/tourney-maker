import React from 'react';
import { useSelector } from 'react-redux';
import TeamForm from '../teams/TeamForm'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import "../teams/Teams.css"
import Volleyball from '../teams/Volleyball.png'

const useStyles = makeStyles({
    root: {
      Width: 500,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Teams = () => {


    const classes = useStyles();
   
    const bull = <span className={classes.bullet}>•</span>;
   

    const teams = useSelector((state) => {
        return state.teams.all
    })

  
    return (
        <div className="team">
            <br></br>
            <div className="team-form">
                <TeamForm />
            </div><br></br>
            <div className="team__card">
                <h2>Team List:</h2>
            {teams.map((t, i) =>
                <Card className={classes.root}>
                    <CardContent className="card__content">
                        <Typography className={classes.id} color="textSecondary" gutterBottom key={i}> Volleyball Team Name:  <br /></Typography>
                        <Typography variant="h5" component="h2">{t.team_name}
                        </Typography><br></br>
                        <Typography className={classes.id} color="textSecondary">
                        Team Captain:
                        </Typography>
                        <Typography variant="body2" component="p">
                        {t.team_captain}
                        </Typography>
                    </CardContent>
                </Card>)}
            </div>
        </div>
    )
}

export default Teams