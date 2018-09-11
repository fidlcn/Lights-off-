import React from 'react';
import '../App.css';

export default class Grid extends React.Component {
    render(){
        let disable = this.props.isDone, disStr = '';
        disable === 0 ? disStr = "disabled='disabled'" : disStr = "";
        return (
            <button className={this.props.value === 0 ? 'square white' : 'square black'}  onClick={()=>this.props.onClick()}>
            </button>
        )
    }
} 