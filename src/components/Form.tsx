import {useState} from "react";
import {categories} from "../data/categories.ts";

export function Form() {
    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 300
    })

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
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
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 text-white w-full p-2 font-bold uppercase hover:bg-gray-900 cursor-pointer"
                value="Guardar Comida o Ejercicio"
            />
        </form>
    );
}
