import React from 'react';
import { useSelector } from 'react-redux';
import TeamForm from '../teams/TeamForm'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../teams/Teams.css"

const useStyles = makeStyles({
    root: {
      Width: 500,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 25px',
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
   

    const teams = useSelector((state) => {
        return state.teams.all
    })

  
    return (
        <div className="team">
          <br></br>
          <details>
            <summary>Create Team</summary>
              <br></br>
              <div className="team-form">
                  <TeamForm />
              </div><br></br>
          </details>
            <div className="team__card">
                <h2>Team List:</h2>
            {teams.map((t, i) => 
                  <Card key={i} className={classes.root}>
                      <CardContent className="card__content">
                          <Typography className={classes.id} color="textSecondary"> Volleyball Team Name:  <br /></Typography>
                          <Typography variant="h5" component="h2">{t.team_name}
                          </Typography><br></br>
                          <Typography className={classes.id} color="textSecondary">
                          Team Captain:
                          </Typography>
                          <Typography variant="body2" component="p">
                          {t.team_captain}
                          </Typography>
                      </CardContent>
                  </Card>
              )}
            </div>
        </div>
    )
}

export default Teams