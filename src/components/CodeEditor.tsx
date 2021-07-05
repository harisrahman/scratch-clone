import React from "react";
import { useCode } from '../contexts/CodeContext';
import { BlockProps, forwardedRefProp } from '../Types';
import { availableBlocks } from "./Palette";
import Icon from "./Icon";
import { runCode } from "../helpers";

export default function CodeEditor({ stageRef }: forwardedRefProp)
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
		runCode(code, availableBlocks, "flag", stageRef);
	}

	const trashClicked = () =>
	{
		setCode([]);
		stageRef.current?.style.removeProperty("transform");
	}



	return (
		<div className="flex flex-1 flex-col h-full items-center overflow-auto" onDrop={dropHandler} onDragOver={dragEndHandler}>
			<div className="self-end">
				<button className="p-3 m-1 border rounded-full cursor-pointer active:bg-gray-100" onClick={trashClicked}>
					<Icon name="trash" size={20} className="text-red-600 " />
				</button>
				<button className="p-3 m-1 self-end border rounded-full cursor-pointer active:bg-gray-100" onClick={flagClicked}>
					<Icon name="flag" size={20} className="text-green-600 " />
				</button>
			</div>
			<div>{
				code.map((index: number, key: number) =>
				{
					return availableBlocks[index](key, true).render()
				})
			}</div>
		</div>
	);
}
