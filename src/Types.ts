import React from "react";

export type BlockType = {
	[key: string]: string
}

export interface BlockProps
{
	key?: number,
	index: number,
	type: "motion" | "event",
	value: number,
	trigger?: "sprite" | "flag",
	children?: React.ReactNode,
	isOnEditor?: boolean,


	// index?: number,
	// order?: number,
	// node?: HTMLDivElement
}

export type BlockComponent = (key: number, isOnEditor?: boolean) => React.Component<BlockProps>;

export interface CodeContextType
{
	code: number[],
	setCode: (props: number[]) => void
};