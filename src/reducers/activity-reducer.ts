import {Activity} from "../types";

// Es lo que describe lo que está sucediendo. Cuando mandamos el formulario es como decirle al reducer que ejecute el type de save-activity
export type ActivityActions =
    {
        type: 'save-activity', // Nombre del tipo de accion del reducer
        payload: {newActivity: Activity}  // El payload es un objeto con el atributo newActivity de tipo activity. El payload es la info que mod el state
    }

type ActivityState = { // Type para el state del activity
    activities: Activity[]
}
export const initialState: ActivityState = { // Valor inicial del state activity, de tipo activitystate obviamente
    activities: []
}

export const activityReducer = ( // El reducer activity
    state: ActivityState = initialState,
    action: ActivityActions
    ) => {
    if(action.type === 'save-activity') {
        // Lógia para actualizar el state
        console.log('Desde el type de save-activity')
    }

    return state
}