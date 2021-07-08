import { useState, useRef } from "react";
import { CodeContext } from './contexts/CodeContext';
import { StageSpritesContext } from './contexts/StageSpritesContext';
import Palette from "./components/Palette";
import CodeEditor from "./components/CodeEditor";
import Stage from "./components/Stage";
import { StageSpriteType, ContextMenuType } from './Types';
import { ContextMenuContext } from './contexts/ContextMenuContext';

export default function App()
{
	const [code, setCode] = useState<number[]>([]);
	const [sprites, setSprites] = useState<StageSpriteType>({ count: 1 });
	const [contextMenu, setContextMenu] = useState<ContextMenuType>({});

	const stageRef = useRef<HTMLDivElement>(null);

	const rootClickedHandler = () =>
	{
		if (contextMenu.block_index !== undefined)
		{
			setContextMenu({});
		}
	}

	return (
		<div className="bg-blue-100 pt-6 font-sans" onClick={rootClickedHandler}>
			<ContextMenuContext.Provider value={{ contextMenu, setContextMenu }}>
				<div className="h-screen overflow-hidden flex flex-row  ">
					<CodeContext.Provider value={{ code, setCode }}>
						<StageSpritesContext.Provider value={{ sprites, setSprites }}>
							<div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
								<Palette /> <CodeEditor stageRef={stageRef} />
							</div>
							<div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
								<Stage stageRef={stageRef} />
							</div>
						</StageSpritesContext.Provider>
					</CodeContext.Provider>
				</div>
			</ContextMenuContext.Provider >
		</div>
	);
}
