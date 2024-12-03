import {Activity} from "../types";

// Es lo que describe lo que está sucediendo. Cuando mandamos el formulario es como decirle al reducer que ejecute el type de save-activity
export type ActivityActions = // Este tipe se utiliza para discriminar entre distintos tipos de acciones
    {type: 'save-activity', payload: {newActivity: Activity}}

type ActivityState = {
    activities: Activity[]
}
export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
    ) => {
    if(action.type === 'save-activity') {
        // Lógia para actualizar el state
        console.log('Desde el type de save-activity')
    }

}