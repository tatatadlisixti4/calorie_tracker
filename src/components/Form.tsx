import {useState, ChangeEvent, FormEvent, Dispatch, useEffect} from "react"
import {categories} from "../data/categories.ts"
import {Activity} from "../types";
import {ActivityActions, ActivityState} from "../reducers/activity-reducer.ts";

import {v4 as uuidv4} from 'uuid' // Hay que añadir via npm los types de uuid

type FormProps = {
    dispatch: Dispatch<ActivityActions> // Se tipa la variable que se pasará via props a la function Form, la cual es un disptach proveniente de un useReducer
    state: ActivityState
}

const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export function Form({dispatch, state} : FormProps) {
    // Hooks
    const [activity, setActivity] = useState<Activity>(initialState)
    useEffect(()=> {
        if(state.activeId) {
            const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId])

    // Funciones
    const isValidActivity = () => {
        const {name, calories} = activity
        return name.trim() !== '' && calories > 0
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: "save-activity", payload: {newActivity: activity} }) // No son types, son valores
        setActivity({...initialState, id: uuidv4()}) // Reestablecer los datos del formulario una vez hecho el submit, tambien se edita el id para que sea otro
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. Comida, Juego de Naranja, Ensalada, Ejercicio, Pesas."
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. 300 o 777"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 text-white w-full p-2 font-bold uppercase hover:bg-gray-900 cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
                disabled={!isValidActivity()}
            />
        </form>
    );
}
