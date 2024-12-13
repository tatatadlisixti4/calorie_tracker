import {useEffect, useMemo} from "react"
import {Form} from "./components/Form.tsx"
import {useActivity} from "./hooks/useActivity.ts"
import ActivityList from "./components/ActivityList.tsx"
import CalorieTracker from "./components/CalorieTracker.tsx"

function App() {
    // Hooks
    const {state, dispatch} = useActivity()
    
    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))
    }, [state.activities])

    // Functions
    const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities])


    return (
        <>
            {/* Header */}
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorías</h1>

                    <button
                        className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10 disabled:cursor-auto"
                        disabled={!canRestartApp}
                        onClick={() => dispatch({type: 'restart-app'})}
                    >
                        Reiniciar App
                    </button>
                </div>
            </header> {/* FinHeader */}

            {/* Componente Form */}
            <section className="bg-lime-600 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form />
                </div>
            </section> {/* Fin Componente Form */}

            <section className="bg-gray-800 py-10">
                <div className="max-w-4xl mx-auto">
                    <CalorieTracker 
                    />
                </div>
            </section>

            {/* Componente ActivityList */}
            <section className="p-10 mx-auto max-w-4xl">
                <ActivityList />
            </section>  {/* Fin Componente ActivityList */}
        </>
    )
}

export default App
