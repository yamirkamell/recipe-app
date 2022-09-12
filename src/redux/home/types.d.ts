export const HOME_CHANGE_INITIAL_STATE = "@HOME/HOME_CHANGE_INITIAL_STATE";

export type InitialState = Array<{
  id: number
  title: string
  image: string
  imageType: string
}>

export interface FormReducerAction {
  type: string
  payload: InitialState
}
