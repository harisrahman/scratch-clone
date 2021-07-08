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
}

export type StageSpriteType = { count: number };

export interface StageSpritesContextType
{
	sprites: StageSpriteType,
	setSprites: (obj: StageSpriteType) => void
}

export type ContextMenuType = {
	block_index?: number
	x?: number,
	y?: number
};

export interface ContextMenuContextType
{
	contextMenu: ContextMenuType,
	setContextMenu: (obj: ContextMenuType) => void
}

export type forwardedRefProp = { stageRef: React.RefObject<HTMLDivElement> }