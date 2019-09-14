import React from 'react';
import icon from './favicon.jpg';
import './IntroPanel.css';

export default class IntroPanel extends React.Component {
    render() {
        return(
            <div>
                <div class="Table-outer">
                    <div class="Table-row">
                        <div class="Icon"><img alt="" src={icon}/></div>
                        <div class="Title">Symptomatic</div>
                    </div>
                </div>
            </div>
        )
    }

}