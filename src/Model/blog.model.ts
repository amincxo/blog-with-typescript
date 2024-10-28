import { IDatabase } from "../types/types"

export default new class Database {
    private state: IDatabase = {
        blog : [
            {id: 1 , title : "salam" , text: "man type script yad migiram"}
        ]
    }
}