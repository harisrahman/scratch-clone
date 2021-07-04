import { BlockProps } from './Types';

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