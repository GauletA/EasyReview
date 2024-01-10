import { atomWithStorage } from 'jotai/utils'
type TThemAtom = 'light' | 'dark' | undefined

export const themeAtom = atomWithStorage<TThemAtom>('theme', undefined)