import {useReducer, useEffect} from "react";
import {Form} from "./components/Form.tsx";
import ActivityList from "./components/ActivityList.tsx";
import {activityReducer, initialState} from "./reducers/activity-reducer.ts";

function App() {
    // Hooks
    const [state, dispatch] = useReducer( activityReducer, initialState) 
    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))
    }, [state.activities])
    return (
        <>
            {/* Header */}
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorías</h1>
                </div>
            </header> {/* FinHeader */}

            {/* Componente Form */}
            <section className="bg-lime-600 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form
                        state={state}
                        dispatch={dispatch}
                    />
                </div>
            </section> {/* Fin Componente Form */}

            {/* Componente ActivityList */}
            <section className="p-10 mx-auto max-w-4xl">
                <ActivityList
                    activities={state.activities}
                    dispatch={dispatch}
                />
            </section>  {/* Fin Componente ActivityList */}
        </>
    )
}

export default App
