[ ] create store - in index.js
[ ] create reducers - useSelector
[ ] create action creators

<div className="navbar-search">
                <input className="navbar-searchInput" type="text" />
                <SearchIcon className="navbar-searchIcon" />
</div>

<div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        Hello Guest
                    </span>
                    <NavLink 
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }} 
                    to="/login" 
                    className="navbar-optionLineTwo">
                        Sign In
                    </NavLink >
</div>


    <form onSubmit={addToList}>
                <input type="text" value={teamName} onChange={handleChange} />
                <div>
                {
                teams.map(team => (
                    <label key={team.key}>
                        {team.team_name}
                        <Checkbox name={team.name} checked={checkedteams.get(team.name)} onChange={handleChange} />
                    </label>
                ))
            }
                </div>
                <input type="submit" value="Create New Team"/>
            </form>


                    {tournament ? tournament.tourney_name : "Tournament not Found"}


Notes 6/25/21
1. Backend, Setting up my controller to create a registration 
2. Data we send from frontend to backend is correct -json.stringify
3. Once we get a response back, how do we take that data and update the redux store (reducer - builder)


// const [teamPick, setTeamPick] = useState("")
tournament.js
<ul>
                {tournaments.map((t, i) => <li className="event__list" key={i}><Link to={`/events/${t.id}`}>{t.tourney_name}</Link>
                </li>)}
            </ul>
team.js: checkbox
//import Checkbox from '../teams/checkbox.js'

            <Checkbox name={t.team_name} checked={checkedItems[t.team_name]} onChange={handleChange}/>

              // const [checkedItems, setCheckedItems] = useState({})

    // const handleChange = (event) => {
    //     // updating an object instead of a Map
    //     setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    // }
  
    // useEffect(() => {
    //     console.log("checkedItems: ", checkedItems);
    //   }, [checkedItems]); 
