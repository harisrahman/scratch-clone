import React from "react";
import { MotionBlockProps, Runnable } from '../../Types';
import Block from '../Block';

export default class Move extends React.Component<MotionBlockProps> implements Runnable
{
	run(value: number, el: HTMLDivElement)
	{
		let current_val = 0;
		let translateX = `translateX(${value}px)`;
		const regex = el.style.transform.match(/translateX\((-?\d+)px\)/i);

		if (regex && 1 in regex)
		{
			current_val = parseInt(regex[1]);
			const newSum = current_val + value;
			translateX = el.style.transform.replace(/(translateX\()(-?\d+)(px\))/i, `$1${newSum}$3`);

			el.style.transform = translateX;
		}
		else
		{
			el.style.transform += translateX;
		}
	}

	render()
	{
		return (
			<Block type="motion" value={this.props.value} index={this.props.index} key={this.props.key} isOnEditor={this.props.isOnEditor}>
				Move 10 steps
			</Block>
		);
	}
}
