import React from 'react';
import ReactDOM from 'react-dom';

import {classNames} from './util.js';

export default class Item extends React.Component{
	render(){
		return <li className={classNames({
					completed:this.props.compile
				})}>
                <div className="view">
                    <input className="toggle" type="checkbox" 
                    checked={this.props.compile} onChange={this.props.toggle} />
                    <label>{this.props.content}</label>
                    <button className="destroy" onClick={this.props.delectItem}></button>
                </div>
                <input className="edit" defaultValue="多多对对对" />
            </li>
	}
}