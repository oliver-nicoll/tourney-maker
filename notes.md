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
