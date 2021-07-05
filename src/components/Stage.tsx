import React, { useRef } from "react";
import CatSprite from "./CatSprite";
import { useCode } from '../contexts/CodeContext';
import { availableBlocks } from "./Palette";
import { runCode } from "../helpers";
import { forwardedRefProp } from '../Types';

export default function PreviewArea({ stageRef }: forwardedRefProp)
{
	const { code, setCode } = useCode();
	// const stageRef = useRef<HTMLDivElement>(null);

	const spriteClickedHandler = () =>
	{
		runCode(code, availableBlocks, "sprite", stageRef);
	}

	return (
		<div ref={stageRef} className="self-start p-2 transition-all duration-700" onClick={spriteClickedHandler}>
			<CatSprite />
		</div>
	);

}
