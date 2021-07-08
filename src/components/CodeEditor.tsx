import React, { useRef } from "react";
import { useCode } from '../contexts/CodeContext';
import { useStageSprites } from '../contexts/StageSpritesContext';
import { useContextMenu } from '../contexts/ContextMenuContext';
import { forwardedRefProp } from '../Types';
import { availableBlocks } from "./Palette";
import Icon from "./Icon";
import ContextMenu from "./ContextMenu";
import { runCode, getChangeToElementIndex, arrayElementMove, insertAtIndex, childrenArr } from "../helpers";

export default function CodeEditor({ stageRef }: forwardedRefProp)
{
	const { code, setCode } = useCode();
	const { setSprites } = useStageSprites();
	const blockContainer = useRef<HTMLDivElement>(null);
	const { setContextMenu } = useContextMenu();

	const dragEndHandler = (e: React.DragEvent) =>
	{
		e.preventDefault();
	}

	const dropHandler = (e: React.DragEvent) =>
	{
		const blockIndex = e.dataTransfer.getData("block_index");
		const dragIndex = e.dataTransfer.getData("drag_index");

		if (blockIndex)
		{
			if (blockContainer.current)
			{
				const newIndex = getChangeToElementIndex(blockContainer.current, e.clientY);

				// console.log(newIndex);


				setCode(insertAtIndex(code, newIndex, parseInt(blockIndex)));
			}
			else
			{
				setCode([...code, parseInt(blockIndex)]);
			}

		}
		else if (dragIndex && blockContainer.current)
		{
			const oldIndex = parseInt(dragIndex);
			const newIndex = getChangeToElementIndex(blockContainer.current, e.clientY, oldIndex);

			setCode(arrayElementMove(code, parseInt(dragIndex), newIndex));
		}
	}

	const flagClicked = () =>
	{
		runCode(code, availableBlocks, "flag", stageRef);
	}

	const trashClicked = () =>
	{
		setCode([]);
		if (stageRef.current)
		{
			setSprites({ count: 1 });

			childrenArr(stageRef.current).forEach(child =>
			{
				child.style.removeProperty("transform");
			})
		}
	}

	const contextMenuHandler = (e: React.MouseEvent) =>
	{
		if (blockContainer.current === null) return;
		e.preventDefault();

		let block_index;

		childrenArr(blockContainer.current).forEach((child, index) =>
		{
			const { top, bottom } = child.getBoundingClientRect();

			if (e.clientY >= top && e.clientY <= bottom)
			{
				block_index = index;
			}
		})

		setContextMenu({
			block_index,
			x: e.clientX - blockContainer.current.offsetLeft,
			y: e.clientY - blockContainer.current.offsetTop
		});
	}

	return (
		<div className="flex flex-1 flex-col h-full items-center overflow-auto" onDrop={dropHandler} onDragOver={dragEndHandler}>
			<div className="self-end">
				<button className="p-3 m-1 border rounded-full cursor-pointer outline-none active:bg-gray-100" onClick={trashClicked}>
					<Icon name="trash" size={20} className="text-red-600 " />
				</button>
				<button className="p-3 m-1 self-end border rounded-full cursor-pointer outline-none active:bg-gray-100" onClick={flagClicked}>
					<Icon name="flag" size={20} className="text-green-600 " />
				</button>
			</div>
			<div className="relative" ref={blockContainer} onContextMenu={contextMenuHandler}>
				{
					code.map((index: number, key: number) =>
					{
						return availableBlocks[index](key, true).render()
					})
				}
				<ContextMenu></ContextMenu>
			</div>
		</div>
	);
}
