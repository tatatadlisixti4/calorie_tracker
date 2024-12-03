import {v4 as uuidv4} from "uuid";

export type Category = {
    id: number
    name: string
}

export type Activity = {
    id: string
    category: number
    name: string
    calories: number
}