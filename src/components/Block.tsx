import React, { useCallback } from "react";
import { useCode } from '../contexts/CodeContext';

import { BlockProps, BlockType } from '../Types';
import { setArrayObjProp } from "../helpers";

const colors: BlockType = {
	event: "bg-yellow-500 text-white",
	motion: "bg-blue-500 text-white"
}

export default function Block(props: BlockProps)
{
	const { code, setCode } = useCode();

	const dragStartHandler = (e: React.DragEvent) =>
	{
		if (!props.isOnEditor)
		{
			e.dataTransfer.setData("block_index", String(props.index));
		}

		// setCode([...code, { ...props, dragging: true }]);
	}

	const measureRef = useCallback((node: HTMLDivElement) =>
	{
		// if (node !== null && typeof props.index == "number" && props.node === undefined)
		// {
		// setCode(setArrayObjprops(code, props.index, "node", node));
		// }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const dragEndHandler = (e: React.DragEvent) =>
	{
		// e.preventDefault();
		// console.log(e);

		// console.log("AS");
	}

	return (
		<div ref={measureRef} className={`flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-move ${colors[props.type]}`} draggable="true" onDragStart={dragStartHandler} onDragEnd={dragEndHandler} onDragEnter={dragEndHandler}>
			{props.children}
		</div>
	);
}
