import React from "react";
import { BlockProps } from '../../Types';
import Block from '../Block';
import Icon from '../Icon';

export default class Rotate extends React.Component<BlockProps>
{
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
