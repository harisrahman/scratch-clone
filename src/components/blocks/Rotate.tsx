import React from "react";
import { MotionBlockProps, Runnable } from '../../Types';
// import {  } from '../../helpers';
import Block from '../Block';
import Icon from '../Icon';

export default class Rotate extends React.Component<MotionBlockProps> implements Runnable
{
	run(value: number, el: HTMLDivElement)
	{
		let current_val = 0;
		let rotate = `rotate(${value}deg)`;
		const regex = el.style.transform.match(/rotate\((-?\d+)deg\)/i);

		if (regex && 1 in regex)
		{
			current_val = parseInt(regex[1]);
			const newSum = current_val + value;
			rotate = el.style.transform.replace(/(rotate\()(-?\d+)(deg\))/i, `$1${newSum}$3`);
			el.style.transform = rotate;
		}
		else
		{
			el.style.transform += rotate;
		}
	}

	render()
	{
		return (
			<Block type="motion" value={this.props.value} index={this.props.index} key={this.props.key} isOnEditor={this.props.isOnEditor}>
				Turn
				<Icon name={this.props.value > 0 ? "redo" : "undo"} size={15} className="text-white mx-2" />
				{Math.abs(this.props.value)} degrees
			</Block>
		);
	}
}
