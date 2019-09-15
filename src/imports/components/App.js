import React, {Component} from 'react';
import { Header, Icon, Segment, Form, TextArea, Input, Message } from "semantic-ui-react";
import logo from './logo.svg';
//import ChatBox from './chatbox.js';

import './App.css';
//import IntroPanel from './IntroPanel';

export default class App extends Component {
  render() {
    //console.log("App started in", process.env.NODE_ENV, "environment");

    return (
      <div className="App">
        <Header size="huge" align = "center" color="blue" /*icon textAlign="center"*/>
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
        
        
        <Input fluid action='Send' placeholder='Type a messsage...' />

        <Message compact color="red" >
         <Message.Header align = "center" >Disclaimer </Message.Header>
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
}


