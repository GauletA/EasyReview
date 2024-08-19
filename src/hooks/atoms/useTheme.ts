import { atomWithStorage } from 'jotai/utils'
type TThemAtom = 'light' | 'dark' 

export const themeAtom = atomWithStorage<TThemAtom>('theme', 'light')