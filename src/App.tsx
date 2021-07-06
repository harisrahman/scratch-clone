import { useState, useRef } from "react";
import { CodeContext } from './contexts/CodeContext';
import Palette from "./components/Palette";
import CodeEditor from "./components/CodeEditor";
import Stage from "./components/Stage";

export default function App()
{
	const [code, setCode] = useState<number[]>([]);
	const stageRef = useRef<HTMLDivElement>(null);

	return (
		<div className="bg-blue-100 pt-6 font-sans">
			<div className="h-screen overflow-hidden flex flex-row  ">
				<CodeContext.Provider value={{ code, setCode }}>
					<div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
						<Palette /> <CodeEditor stageRef={stageRef} />
					</div>
					<div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
						<Stage stageRef={stageRef} />
					</div>
				</CodeContext.Provider>
			</div>
		</div>
	);
}
