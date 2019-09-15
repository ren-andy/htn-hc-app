import React, {Component} from 'react';
import { Header, Icon, Segment, Form, TextArea, Input, Message, Button } from "semantic-ui-react";
//import ChatBox from './chatbox.js';

import './App.css';
//import IntroPanel from './IntroPanel';

export default class Return extends Component {
    render() {
        const { userInput, symptomPhrase, systemPhrase, status, chatLog } = this.props;

        if(status === 'no-input') return (
            <Segment placeholder>
            <Header icon>
              <Icon name="comment" />
              Input and Symptomatic responses will appear here!
            </Header>
          </Segment>
         );
        else if(status === 'backend-return') return (
            <Segment placeholder>
            <p>{chatLog}</p>
          </Segment>
        );

        else if(status === 'user-input') return (
            <Segment placeholder>
            <p>{chatLog}</p> 
          </Segment>
        );

    }

}