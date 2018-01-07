import React, { Component } from 'react';
import zrender from 'zrender';
import { getRan } from '../util/getRandom';
import './chart.css';

let color = ['#11E162','#E16311','#11C6E1','#8311E1','#E111AE'];
let easing = ['linear','quadraticIn','quadraticInOut','quarticIn','quarticInOut']

let renderStar = (canvas, limit) => {
	let w = canvas.getWidth();
	let h = canvas.getHeight();
	let thisColor = getRan( color );
	let img = new zrender.Image({
		style: {
			image: '/img/bg_1.jpg',
			x: 0,
			h: 0,
			width: w,
			height: h,
		},
		cursor: 'auto',
		silent: true,
	});
	let circle = new zrender.Circle({
		shape: {
			cx: w / 2,
			cy: 9 * h / 10,
			r: h / 14
		},
		style: {
			fill: thisColor,
			stroke: thisColor,
			text: 'Click!',
			fontSize: '24px',
			textWidth: 20,
		}
	});
	canvas.add(img);
	canvas.add(circle);	
	let starGroup = [];
	circle.on('click', function() {
		if (starGroup.length >= limit) {
			canvas.remove(starGroup.shift());
		}
		let star = drawStar( this.shape.cx, this.shape.cy, canvas, w, h);
		starGroup.push(star);
	});
}

let drawStar = (cx, cy, canvas, w, h) => {
	let thisColor = getRan( color );
	let thisEasing = getRan( easing );
	let star = new zrender.Star({
		shape: {
			cx,
			cy: cy-40,
			n: 5,
			r: 10,
			r0: 4,
		},
		style: {
			fill: thisColor,
			stroke: thisColor,
		}
	});
	canvas.add(star);
	let r = star.shape.r;
	cy = (Math.random() + r/(h/3-2*r))*(h/3-2*r);
	cx = (Math.random() + r/(w-2*r))*(w-2*r);	
	star.animate('shape', false)
	.when(1000, {
		cx, 
		cy,
	})
	.done(function() {
		star.animateTo({
			rotation: Math.PI*4,
			origin: [cx, cy],
			scale:[1.1, 1.1]
		}, 3000, 0, thisEasing, function () {
			// done
		});
	})
	.start(thisEasing);

	return star;
}

class Chart extends Component {
	constructor(props) {
		super(props);	
	}

	componentDidMount() {
		let zr = zrender.init(document.getElementById('canvas')); // 初始化zrender 
		renderStar( zr, 30 );
	}

	render() {
		return (
			<div className="intro-chart">
				<div id="canvas"></div>
			</div>
		);
	}
}

export default Chart;
