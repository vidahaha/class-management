import React, { Component } from 'react';
import classNames from 'classnames';
import './Intro-head.css';

class HeadInfo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isMouseOut: false,
			isMouseOver: false,
		};
		this.defultClass = [
			`head-info-${this.props.index}`,
			`info-lager-${this.props.index}`,
			`info-restore-${this.props.index}`,			
		];
	}

	largerImg = ( event ) => {
		this.setState({
			isMouseOver: true,
			isMouseOut: false,
		});			
	};
	
	restoreImg = ( event ) => {
		this.setState({
			isMouseOver: false,
			isMouseOut: true,
		});		
	};

	render() {
		const defultClass = this.defultClass;
		const headInfoClass = classNames({
			[defultClass[0]]: true,
			[defultClass[1]]: this.state.isMouseOver,
			[defultClass[2]]: this.state.isMouseOut,			
		});
		return (
			<div className={headInfoClass} onMouseOver={this.largerImg} onMouseOut={this.restoreImg}>
				<div style={{marginTop:'16px'}} >{this.props.children}</div>
			</div>
		);
	}
}		  

export default HeadInfo;
