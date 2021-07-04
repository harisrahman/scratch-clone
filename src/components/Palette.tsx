import React from "react";
import Block from "./Block";
import Icon from "./Icon";
import { BlockProps, BlockComponent } from '../Types';
import Rotate from "./blocks/Rotate";
import Move from "./blocks/Move";
import Event from "./blocks/Event";

export const availableBlocks: BlockComponent[] = [
	(key, isOnEditor) => new Event({ index: 0, key: key, type: "event", value: 10, isOnEditor: isOnEditor }),
	(key, isOnEditor) => new Event({ index: 1, key: key, type: "event", value: 0, trigger: "sprite", isOnEditor: isOnEditor }),
	(key, isOnEditor) => new Move({ index: 2, key: key, type: "motion", value: 10, isOnEditor: isOnEditor }),
	(key, isOnEditor) => new Rotate({ index: 3, key: key, type: "motion", value: 15, isOnEditor: isOnEditor }),
	(key, isOnEditor) => new Rotate({ index: 4, key: key, type: "motion", value: -15, isOnEditor: isOnEditor }),
];

export default function Palette()
{
	return (
		<div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
			<div className="font-bold">Events</div>
			{availableBlocks[0](0).render()}
			{availableBlocks[1](1).render()}
			<div className="font-bold">Motion</div>
			{availableBlocks[2](2).render()}
			{availableBlocks[3](3).render()}
			{availableBlocks[4](4).render()}
		</div>
	);
}
