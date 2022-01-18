import { TypedUseSelectorHook, useDispatch as basicDispath, useSelector as basicSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useDispatch = () => basicDispath<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = basicSelector
