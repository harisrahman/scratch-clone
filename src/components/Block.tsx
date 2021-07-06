import React, { useRef } from "react";

import { BlockProps, BlockType } from '../Types';

const colors: BlockType = {
	event: "bg-yellow-500 text-white",
	motion: "bg-blue-500 text-white"
}

export default function Block(props: BlockProps)
{
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

	return (
		<div ref={blockRef} className={`flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-move ${colors[props.type]}`} draggable="true" onDragStart={dragStartHandler}>
			{props.children}
		</div>
	);
}
