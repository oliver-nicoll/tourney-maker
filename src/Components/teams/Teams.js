import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import Checkbox from '../teams/checkbox.js'

import "../teams/Teams.css"

const Teams = () => {

    const teams = useSelector((state) => {
        return state.teams.all
    })

    const [checkedItems, setCheckedItems] = useState({})

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    }
  
    useEffect(() => {
        console.log("checkedItems: ", checkedItems);
      }, [checkedItems]); 

    console.log(teams)
    return (
        <div className="team__checkbox">
            <div>
                {teams.map((t, i) => <label key={i}> {t.team_name} <Checkbox name={t.team_name} checked={checkedItems[t.team_name]} onChange={handleChange}/> <br /></label>)}
            </div>
        </div>
    )
}

export default Teams