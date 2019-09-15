import React, { Component } from "react";
import { Header, Segment, Icon, Dimmer, Loader } from "semantic-ui-react";

export default class ChatBox extends Component {

  render() {
    //const { title, total, degrees, specializations, status, errorMessage } = this.props;

    let header =
      <Header size="large">
        <Icon name="search" />
        <Header.Content>Search Results</Header.Content>
      </Header>

      return( 
        <>
      {header}
        <Segment placeholder>
          <Header icon>
            <Icon name="cloud" />
            Stats will appear here when you search something!
          </Header>
        </Segment>
      </> );
  }
}