import { ActionTypes } from "./actionTypes"
export type CounterState = {
  count: number
}

export type CounterAction = { type: ActionTypes.DECREMENT } | { type: ActionTypes.INCREMENT }
