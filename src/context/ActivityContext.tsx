import {createContext, ReactNode, useReducer, Dispatch} from "react"
import {activityReducer, ActivityState, initialState, ActivityActions} from "../reducers/activity-reducer"

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ({children}: ActivityProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState)
    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ActivityContext.Provider>
    )
}