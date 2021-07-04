import React from "react";
import CatSprite from "./CatSprite";
import { useCode } from '../contexts/CodeContext';

export default function PreviewArea()
{
	const { code, setCode } = useCode();

	return (
		<div className="flex-none h-full overflow-y-auto p-2">
			<CatSprite />
		</div>
	);
}
