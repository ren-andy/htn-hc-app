import React, {Component} from 'react';
import { Header, Icon, Segment, Form, TextArea, Input, Message, Button } from "semantic-ui-react";
import Return from "./return";

import './App.css';
import { async } from 'q';
//import IntroPanel from './IntroPanel';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      symptomPhrase: '',
      status: 'no-input',
      systemPhrase: '',
      chatLog: '',
    };
  }

  render() {
    //console.log("App started in", process.env.NODE_ENV, "environment");

    return (
      <div className="App">
        <Header size="huge" align = "center" /*icon textAlign="center"*/>
          <Icon name="stethoscope" circular />
          <Header.Content>SymptoMatic</Header.Content>
        </Header>

        <p align="center">
          Are you feeling unwell? Unsure if you should see a doctor? Ask away!
        </p>

        {/*<Segment placeholder>
          <Header icon>
            <Icon name="cloud" />
            SymptoMatic will respond when you send a message!
          </Header>
        </Segment> */}

        <Return userInput={this.state.userInput} 
        symptomPhrase={this.state.symptomPhrase}
        systemPhrase={this.state.systemPhrase} 
        status={this.state.status}
        chatLog={this.state.chatLog}/> 
        
        <Form onSubmit={evt => this.handleClick()}>
          <Input fluid placeholder='Type a messsage...' onChange={evt => this.updateInputValue(evt)}/>
          <Button >Send</Button>
        </Form>
        

        <Message compact color= "red">
         <Message.Header align = "center">Disclaimer </Message.Header>
          <p align = "center">
          The information provided by SymptoMatic is for general reference only and should not substitute an actual medical diagnosis. Use at your risk. 
        </p>
      </Message>

        <br>
        </br>
        <p align="center">Copyright © 2019 Andy Ren, Avery Shum, Darren Tang</p>



      </div>
    );
  }
 
  updateInputValue(evt) {
    this.setState({
      userInput: evt.target.value,
      symptomPhrase: evt.target.value,
      //status: 'user-input', 
    })
  }

  handleClick = async () => {
    this.state.userInput = "User: " + this.state.symptomPhrase + '\n';
    this.state.status = 'user-input';
    this.state.chatLog = this.state.chatLog + "\n" + this.state.userInput + '\n';
    //alert(this.state.symptomPhrase)
    let url = "http://127.0.0.1:5000/get/keywords/" + this.state.symptomPhrase;
    let options = {method: 'GET', 
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': "application/json"
                    },
                    body: JSON.stringify()
                  };
    let response = await fetch(url, options) //, options
      .then(results => {
        console.log( results )
        return results.json()
      })
      .catch(err => {
        alert(err)
      })
    this.state.systemPhrase = Object.keys(response);
    console.log( this.state.systemPhrase )
    console.log(Object.keys(this.state.systemPhrase))
    this.state.systemPhrase = "SymptoMatic: "+ this.state.systemPhrase + '\n';
    this.state.status = 'backend-return';
    this.state.chatLog = this.state.chatLog + '\n' + this.state.systemPhrase + '\n';
    return false
  }
}