import React, { useRef } from "react";
import { useCode } from '../contexts/CodeContext';

import { BlockProps, BlockType } from '../Types';

const colors: BlockType = {
	event: "bg-yellow-500 text-white",
	motion: "bg-blue-500 text-white"
}

export default function Block(props: BlockProps)
{
	const { code, setCode } = useCode();
	const blockRef = useRef<HTMLDivElement>(null);

	const dragStartHandler = (e: React.DragEvent) =>
	{
		if (props.isOnEditor)
		{
			const el = blockRef.current;

			if (el === null) return;

			const childIndex = Array.from(el.parentNode!.children).indexOf(el);
			e.dataTransfer.setData("drag_index", String(childIndex));
		}
		else
		{
			e.dataTransfer.setData("block_index", String(props.index));
		}
	}

	const dragEndHandler = (e: React.DragEvent) =>
	{
		// e.preventDefault();
		// console.log(e);

		// console.log("AS");
	}

	return (
		<div ref={blockRef} className={`flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-move ${colors[props.type]}`} draggable="true" onDragStart={dragStartHandler} onDragEnd={dragEndHandler} onDragEnter={dragEndHandler}>
			{props.children}
		</div>
	);
}
