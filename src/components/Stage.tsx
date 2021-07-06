import React, { useState, useRef } from "react";
import CatSprite from "./CatSprite";
import { useCode } from '../contexts/CodeContext';
import { availableBlocks } from "./Palette";
import { runCode } from "../helpers";
import { forwardedRefProp } from '../Types';
import Icon from "./Icon";

export default function PreviewArea({ stageRef }: forwardedRefProp)
{
	const { code, setCode } = useCode();
	const [clone, setClone] = useState<number>(1);



	const spriteClickedHandler = () =>
	{
		runCode(code, availableBlocks, "sprite", stageRef);
	}

	const cloneClickedHandler = () =>
	{
		setClone(clone + 1);
	}

	const sprites: JSX.Element[] = [];

	for (var i = 0; i < clone; i++)
	{
		sprites.push(<CatSprite key={i} />);
	}

	return (
		<div className="w-full">
			<div className="flex justify-end mr-2 mt-2">
				<button className="p-3 m-1 border rounded-full cursor-pointer active:bg-gray-100" onClick={cloneClickedHandler}>
					<Icon name="clone" size={20} className="text-yellow-400 " />
				</button>
			</div>
			<div ref={stageRef} className="self-start p-2 transition-all duration-700" onClick={spriteClickedHandler}>
				{sprites}
			</div>
		</div >
	);

}
