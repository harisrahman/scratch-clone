import { BlockComponent, MotionBlockProps } from './Types';

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
export const childrenArr = (parent: HTMLElement) =>
{
	const children: HTMLElement[] = [].slice.call(parent!.children);
	return children;
}

export const getChangeToElementIndex = (parent: HTMLDivElement, y: number, draggedElIndex?: number): number =>
{
	let closest = Number.POSITIVE_INFINITY;

	const children = childrenArr(parent);
	let newIndex = draggedElIndex ? draggedElIndex : (children.length);
	const lastIndex = children.length - 1;


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

		if (draggedElIndex === undefined && index === lastIndex && newIndex !== 0)
		{
			if (y > box.top) newIndex = lastIndex + 1;
		}
	})

	return newIndex;
}

export const runCode = (code: number[], availableBlocks: BlockComponent[], trigger: string, ref: React.RefObject<HTMLDivElement>) =>
{
	let start = false;

	code.forEach(index =>
	{
		const block = availableBlocks[index](index);

		if (block.props.type === "event")
		{
			if (block.props.trigger === trigger)
			{
				start = true;
			}
			return;
		}

		if (start && ref.current)
		{
			const children = childrenArr(ref.current);

			children.forEach((child, index) =>
			{
				(block as any).run((block.props as MotionBlockProps).value, child);
			})
		}
	})
}

export const arrayElementMove = (arr: any[], fromIndex: number, toIndex: number) =>
{
	const element = arr[fromIndex];
	const copy = arr.slice();
	copy.splice(fromIndex, 1);
	copy.splice(toIndex, 0, element);

	return copy;
}

export const insertAtIndex = (arr: any[], index: number, value: any) =>
{
	const copy = arr.slice();
	copy.splice(index, 0, value);

	return copy;
}