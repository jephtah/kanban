import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }

    render() {
        let CardDetails;
        if (this.state.showDetails){
            CardDetails = (
                <div className="card__details">
                {this.props.description}
                <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        };
        return (
            <div className="card">
            <div className="card__title" onClick = {
                ()=>this.setState({showDetails: !this.state.showDetails})
            }>{this.props.title}</div>
            {CardDetails}
            </div>
        );
    }
}

export default Card;