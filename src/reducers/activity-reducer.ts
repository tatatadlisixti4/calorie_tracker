import {Activity} from "../types";

// Es lo que describe lo que está sucediendo. Cuando mandamos el formulario es como decirle al reducer que ejecute el type de save-activity
export type ActivityActions = {
        type: 'save-activity', // Nombre del tipo de accion del reducer
        payload: {newActivity: Activity}  // El payload es un objeto con el atributo newActivity de tipo activity. El payload es la info que mod el state
    } | {
        type:'set-activeId',
        payload: {id: Activity['id']}
    }

export type ActivityState = { // Type para el state del activity
    activities: Activity[],
    activeId: Activity['id']
}
export const initialState: ActivityState = { // Valor inicial del state activity, de tipo activitystate obviamente
    activities: [],
    activeId: ''
}

export const activityReducer = ( // El reducer activity
    state: ActivityState = initialState,
    action: ActivityActions
    ) => {
    if(action.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    if(action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id 
        }
    }
    return state
}