import React from "react";
import { BlockProps } from '../../Types';
import Block from '../Block';
import Icon from '../Icon';

export default class Event extends React.Component<BlockProps>
{
	say()
	{
		console.log("AS");
	}

	render()
	{
		return (
			<Block type="event" value={this.props.value} index={this.props.index} key={this.props.key} isOnEditor={this.props.isOnEditor}>
				When
				{ this.props.trigger === "sprite" ? " sprite " : (<Icon name="flag" size={15} className="text-green-600 mx-2" />)}
				clicked
			</Block>
		);
	}
}
