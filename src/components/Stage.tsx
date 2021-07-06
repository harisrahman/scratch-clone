import { useState } from "react";
import CatSprite from "./CatSprite";
import { useCode } from '../contexts/CodeContext';
import { useStageSprites } from '../contexts/StageSpritesContext';
import { availableBlocks } from "./Palette";
import { runCode } from "../helpers";
import { forwardedRefProp } from '../Types';
import Icon from "./Icon";

export default function PreviewArea({ stageRef }: forwardedRefProp)
{
	const { code } = useCode();
	const { sprites, setSprites } = useStageSprites();

	const spriteClickedHandler = () =>
	{
		runCode(code, availableBlocks, "sprite", stageRef);
	}

	const cloneClickedHandler = () =>
	{
		setSprites({ count: sprites.count + 1 });
	}

	const spriteElements: JSX.Element[] = [];

	for (var i = 0; i < sprites.count; i++)
	{
		spriteElements.push(<CatSprite className="transition-all duration-700" key={i} />);
	}

	return (
		<div className="w-full">
			<div className="flex justify-end">
				<button className="p-3 m-1 border rounded-full cursor-pointer active:bg-gray-100" onClick={cloneClickedHandler}>
					<Icon name="clone" size={20} className="text-yellow-400 " />
				</button>
			</div>
			<div ref={stageRef} className="self-start p-2" onClick={spriteClickedHandler}>
				{spriteElements}
			</div>
		</div >
	);

}
