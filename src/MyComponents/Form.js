import React from "react";
import axios from 'axios';

class Form extends React.Component
{
    state = {
        userName : ''
    };

    
   

    handleSubmit = async (e) =>
    {
        e.preventDefault();
        
     
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
       // console.log(resp);
        this.props.addCard(resp.data);
        this.setState({userName : ''});

    }
    
    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} onChange={(e)=> this.setState({userName: e.target.value})} placeholder="Github username" required/>
                <button>Add card</button>
            </form>
        );
    }
}
export default Form;