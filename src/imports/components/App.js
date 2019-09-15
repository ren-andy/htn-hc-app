import React, {Component} from 'react';
import { Header, Icon, Segment, Form, TextArea } from "semantic-ui-react";
import logo from './logo.svg';
//import ChatBox from './chatbox.js';

import './App.css';
//import IntroPanel from './IntroPanel';

export default class App extends Component {
  render() {
    //console.log("App started in", process.env.NODE_ENV, "environment");

    return (
      <div className="App">
        <Header size="huge" icon textAlign="center">
          <Icon name="stethoscope" circular />
          <Header.Content>SymptoMatic</Header.Content>
        </Header>

        <p align="center">
          Are you feeling unwell? Unsure if you should see a doctor? Ask away!
        </p>

        <Segment placeholder>
          <Header icon>
            <Icon name="cloud" />
            Stats will appear here when you search something!
          </Header>
        </Segment>
        
        <Form>
          <TextArea placeholder='Tell us more' />
        </Form>
        
        <p align="center">Copyright © 2019 Andy Ren, Avery Shum, Darren Tang</p>
      </div>
    );
  }
}


