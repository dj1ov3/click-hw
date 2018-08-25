import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./sprites.json";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  state = {
    friends
  };

  

  clickFriend = id => {
  
    
    let clicked = true;
    //shuffle array



  };

  render() {
    return (
      <div>
      <Nav />
      <Wrapper>
        {/* score will be inside the title */}
        <Title>Character List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            
          />
        ))}
      </Wrapper>

      </div>
    );
  }
}

export default App;
