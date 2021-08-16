import React from 'react'

class AddTeamForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onNameChange(e) {
        const input = e.target.value;
            this.setState({
                name: input
            });
    }

    onSubmit(e) {
        if (e) e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({name: ""})
    }



    render() {
        return (
            <div className="add__team__form">
                <form onSubmit={this.onSubmit}>
                    <input  
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder="Team Name"
                    />
                    <input type="submit" value="Add Team" />
                </form>
            </div>
        )
    }
}



 
   

export default AddTeamForm
