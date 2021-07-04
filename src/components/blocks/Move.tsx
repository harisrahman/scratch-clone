import React from "react";
import { BlockProps } from '../../Types';
import Block from '../Block';
import Icon from '../Icon';

export default class Move extends React.Component<BlockProps>
{
	render()
	{
		return (
			<Block type="motion" value={this.props.value} index={this.props.index} key={this.props.key} isOnEditor={this.props.isOnEditor}>
				Move 10 steps
			</Block>
		);
	}
}
