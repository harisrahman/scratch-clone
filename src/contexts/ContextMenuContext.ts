import { createContext, useContext } from 'react';
import { ContextMenuContextType } from '../Types';

export const ContextMenuContext = createContext<ContextMenuContextType>({
	contextMenu: {},
	setContextMenu: context => console.warn('no code yet')
});

export const useContextMenu = (): ContextMenuContextType => useContext(ContextMenuContext);
