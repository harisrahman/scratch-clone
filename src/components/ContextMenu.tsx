import { useCode } from '../contexts/CodeContext';
import { useContextMenu } from '../contexts/ContextMenuContext';

export default function ContextMenu()
{
	const { code, setCode } = useCode();
	const { contextMenu, setContextMenu } = useContextMenu();

	const duplicateClickedHandler = () =>
	{
		if (contextMenu.block_index !== undefined)
		{
			setCode(code.concat([contextMenu.block_index]));
		}
		setContextMenu({});
	}

	const deleteClickedHandler = () =>
	{
		if (contextMenu.block_index !== undefined)
		{
			setCode(code.filter((v, i) => i !== contextMenu.block_index));
		}
		setContextMenu({});
	}

	return (
		<div className={`absolute py-2 px-3 w-32 shadow-lg bg-gray-50 rounded ${contextMenu.block_index === undefined ? "hidden" : ""}`} style={{
			top: `${contextMenu.y}px`,
			left: `${contextMenu.x}px`,
		}}>
			<button className="w-full block text-left px-1 py-1 border-b cursor-pointer m-0 outline-none active:bg-gray-100" onClick={duplicateClickedHandler}>Duplicate</button>
			<button className="w-full block text-left px-1 py-1 cursor-pointer m-0 outline-none active:bg-gray-100" onClick={deleteClickedHandler}>Delete</button>
		</div >
	);
}
