import React from "react";
import { useCode } from '../contexts/CodeContext';
import { BlockProps } from '../Types';
import { availableBlocks } from "./Palette";
import Icon from "./Icon";

export default function CodeEditor()
{
	const { code, setCode } = useCode();

	const dragEndHandler = (e: React.DragEvent) =>
	{
		e.preventDefault();
	}

	const dropHandler = (e: React.DragEvent) =>
	{
		const blockKey = e.dataTransfer.getData("block_index");

		if (blockKey)
		{
			setCode([...code, parseInt(blockKey)]);
		}
	}

	const flagClicked = () =>
	{
	}

	return (
		<div className="flex flex-1 flex-col h-full items-center overflow-auto" onDrop={dropHandler} onDragOver={dragEndHandler}>
			<button className="p-3 m-1 self-end border rounded-full cursor-pointer active:bg-gray-100" onClick={flagClicked}>
				<Icon name="flag" size={20} className="text-green-600 " />
			</button>
			<div>{
				code.map((index: number, key: number) =>
				{
					return availableBlocks[index](key, true).render()
				})
			}</div>
		</div>
	);
}
