import React from "react";
import { EventBlockProps } from '../../Types';
import Block from '../Block';
import Icon from '../Icon';

export default class Event extends React.Component<EventBlockProps>
{
	render()
	{
		return (
			<Block type="event" trigger={this.props.trigger} index={this.props.index} key={this.props.key} isOnEditor={this.props.isOnEditor}>
				When
				{ this.props.trigger === "sprite" ? " sprite " : (<Icon name="flag" size={15} className="text-green-600 mx-2" />)}
				clicked
			</Block>
		);
	}
}
