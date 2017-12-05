import React, { Component } from 'react';
import classNames from 'classnames';
import '../css/Intro-head.css'

class HeadInfo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isMouseOut: false,
			isMouseOver: false,
		};
	}

	largerImg = ( event ) => {
		let self = event.target;
		let currentWidth = getComputedStyle(self).width;
		self.style.width = (parseInt(currentWidth, 10) * 1.05) + 'px';
		this.setState({
			isMouseOver: true,
			isMouseOut: false,
		});			
	};
	
	restoreImg = ( event ) => {
		let self = event.target;
		let currentWidth = getComputedStyle(self).width;
		self.style.width = (parseInt(currentWidth, 10) / 1.05) + 'px';
		this.setState({
			isMouseOver: false,
			isMouseOut: true,
		});		
	};

	render() {

		const headInfoClass = classNames({
			'head-info-1': true,
			'info-lager': this.state.isMouseOver,
			'info-restore': this.state.isMouseOut,			
		});

		return (
			<div className={headInfoClass} onMouseOver={this.largerImg} onMouseOut={this.restoreImg}>
			查看个人信息
			</div>
		);
	}
}		  

export default HeadInfo;
