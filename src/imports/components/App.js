import React, {Component} from 'react';
import { Header, Icon, Segment, Form, TextArea, Input, Message, Button } from "semantic-ui-react";
//import ChatBox from './chatbox.js';

import './App.css';
import { async } from 'q';
//import IntroPanel from './IntroPanel';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptomPhrase: '',
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

        <Segment placeholder>
          <Header icon>
            <Icon name="cloud" />
            SymptoMatic will respond when you send a message!
          </Header>
        </Segment>
        
        <Form onSubmit={evt => this.handleClick()}>
          <Input fluid placeholder='Type a messsage...' onChange={evt => this.updateInputValue(evt)}/>
          <Button>Send</Button>
        </Form>
        

        <Message compact >
         <Message.Header align = "center">Disclaimer </Message.Header>
          <p align = "center">
          SymptoMatic should not substitute an actual medical diagnosis. Use at your discretion.
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
      symptomPhrase: evt.target.value
    })
  }

  handleClick = async () => {
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
    this.state.systemPhrase = response
    console.log( this.state.systemPhrase )
    return false
  }
}