import React from "react";

export type BlockType = {
	[key: string]: string
}

interface CommonBlockProps
{
	index: number,
	key?: number,
	children?: React.ReactNode,
	isOnEditor?: boolean
}


export interface MotionBlockProps extends CommonBlockProps
{
	type: "motion",
	value: number
}

export interface EventBlockProps extends CommonBlockProps
{
	type: "event",
	trigger: "sprite" | "flag",
}

export type BlockProps = MotionBlockProps | EventBlockProps;

export interface Runnable
{
	run: (value: number, el: HTMLDivElement) => void;
}

export type BlockComponent = (key: number, isOnEditor?: boolean) => React.Component<BlockProps>;

export interface CodeContextType
{
	code: number[],
	setCode: (props: number[]) => void
};

export type forwardedRefProp = { stageRef: React.RefObject<HTMLDivElement> }