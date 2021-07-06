import { BlockProps, BlockComponent } from './Types';

export const setArrayObjProp = <T extends {}>(obj: T[], index: number, prop: any, newValue: any): T[] =>
{
	if (obj.length > 0)
	{
		obj = obj.map((el, i) =>
		{
			if (index === i)
			{
				(el as any)[prop] = newValue;
			}
			return el;
		});
	}
	return obj;
}

export const getChangeToElementIndex = (parent: HTMLDivElement, draggedElIndex: number, y: number): number =>
{
	let newIndex = draggedElIndex;
	let closest = Number.POSITIVE_INFINITY;

	const children: HTMLElement[] = [].slice.call(parent!.children);

	children.forEach((child, index) =>
	{
		if (index === draggedElIndex) return;

		const box = child.getBoundingClientRect();
		const offset = Math.abs(y - box.top);

		if (offset < closest)
		{
			closest = offset;
			newIndex = index;
		}
	})

	return newIndex;
}

export const runCode = (code: number[], availableBlocks: BlockComponent[], trigger: string, ref: React.RefObject<HTMLDivElement>) =>
{
	let start = false;

	code.forEach(index =>
	{
		const obj = availableBlocks[index](index);

		if (obj.props.type === "event")
		{
			if (obj.props.trigger === trigger)
			{
				start = true;
			}
			return;
		}

		if (start && ref.current)
		{
			(obj as any).run(obj.props.value, ref.current);
		}
	});
}

export const arrayMove = (arr: any[], fromIndex: number, toIndex: number) =>
{
	const element = arr[fromIndex];
	const copy = arr.slice();
	copy.splice(fromIndex, 1);
	copy.splice(toIndex, 0, element);

	return copy;
}
