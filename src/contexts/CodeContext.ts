import { createContext, useContext } from 'react';
import { CodeContextType } from '../Types';

export const CodeContext = createContext<CodeContextType>({
	code: [],
	setCode: code => console.warn('no code yet')
});

export const useCode = (): CodeContextType => useContext(CodeContext);
