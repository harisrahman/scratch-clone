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

export const getChangeToElementIndex = (elements: BlockProps[], y: number): number =>
{
	let newIndex = 0;
	let closest = Number.POSITIVE_INFINITY;

	elements.forEach((el, index) =>
	{
		// if (el.node === undefined) return;

		// const box = el.node.getBoundingClientRect();
		// const offset = Math.abs(y - box.top);

		// console.log(el, offset);

		// if (offset < closest)
		// {
		// 	closest = offset;
		// 	newIndex = index;
		// newIndex = el.order || newIndex;
		// }
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


export const extractDigits = (str: string) =>
{
	const current_val = str.match(/\d+/g);

	if (current_val && typeof current_val === "object")
	{
		return parseInt(current_val[0]);
	}

	return 0;
}
