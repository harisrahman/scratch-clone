import { createContext, useContext } from 'react';
import { StageSpritesContextType } from '../Types';

export const StageSpritesContext = createContext<StageSpritesContextType>({
	sprites: { count: 1 },
	setSprites: obj => console.warn('no code yet')
});

export const useStageSprites = (): StageSpritesContextType => useContext(StageSpritesContext);
