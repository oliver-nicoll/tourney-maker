import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { addTeam } from '../../Redux/teamsSlice';

import "../teams/Teams.css"

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const TeamForm = () => {

    const dispatch = useDispatch()

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [teamName, setTeamName] = useState("")
    const [captain, setCaptain] = useState("")
    //const [players, setPlayers] = useState([])
    // const [count, setCount] = useState("")
    // const [rank, setRank] = useState("")
    




    const teams = useSelector((state) => {
        return state.teams.all
    })



    const addToList = (e) => {
        e.preventDefault()
        if(teamName, captain) {
            dispatch(addTeam({
                team_name: teamName,
                team_captain: captain
            }))
        //dispatch an action to backend/reducer
        //add to backend and store
            setTeamName("")
            setCaptain("")
            handleClose()
            alert('Congrats, you made a team!')
            
        } else {
            //alert you must fill out 
            alert("must fill out box")
        }
    }



    const handleChange = (e) => {
        setTeamName(e.target.value)

    }

    const handleChangeCap = (e) => {
        setCaptain(e.target.value)

    }

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    
    return (
        <div className="div__form" >
            <button className="button__team__form" type="button" onClick={handleOpen}>
                Create Team
            </button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                        <form className="form__team__modal" onSubmit={addToList} >
                            <input type="text" value={teamName} onChange={handleChange} placeholder="Team Name" /><br></br>
                            <input type="text" value={captain} onChange={handleChangeCap} placeholder="Team Captain"/><br></br>
                            <input className="button__teamform" type="submit" value="Create New Team"/>
                        </form>
                </div>
            </Modal>   
        </div>
    )
}

export default TeamForm