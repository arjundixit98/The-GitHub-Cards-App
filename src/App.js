import './App.css';
import React from 'react';
import CardList from './MyComponents/CardList'
import Form from './MyComponents/Form';

/*
const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ];
  */


class App extends React.Component
{
    /*constructor(props)
    {
        super(props);
        this.state = {
            profiles : testData
        };

    }*/

    state = {
      profiles : []
    };
    
    addCard = (newProfile) => 
    {
          this.setState({profiles : [...this.state.profiles, newProfile] });
    }

  
    render()
    {
      return (
        <div>
            <p className="header">The Github Cards App</p>
            <Form addCard={this.addCard}/>
            <CardList profiles={this.state.profiles}/>
        </div>
      );
    }
}


export default App;
