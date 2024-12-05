import {Activity} from "../types";

// Es lo que describe lo que está sucediendo. Cuando mandamos el formulario es como decirle al reducer que ejecute el type de save-activity
export type ActivityActions = {
        type: 'save-activity', // Nombre del tipo de accion del reducer
        payload: {newActivity: Activity}  // El payload es un objeto con el atributo newActivity de tipo activity. El payload es la info que mod el state
    } | {
        type:'set-activeId',
        payload: {id: Activity['id']}
    } | {
        type: 'delete-activity',
        payload: {id: Activity['id']}
    } | {
        type: 'restart-app',
    }

export type ActivityState = { // Type para el state del activity
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}


export const initialState: ActivityState = { // Valor inicial del state activity, de tipo activitystate obviamente
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = ( // El reducer activity
    state: ActivityState = initialState,
    action: ActivityActions
    ) => {
    if(action.type === 'save-activity') {
        let updatedActivities: Activity[] = []
        if(state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id 
        }
    }

    if(action.type === 'delete-activity'){
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    if(action.type === 'restart-app') {
        return {
            activities: [],
            activeId: ''
        }
    }

    return state
}