import { Low } from "lowdb"
import { JSONFile } from 'lowdb/node'

export const dbConnection = (dName, filePath)=>{
    let defaultData = { }
    const newName = dName;
    const newValue = [];
    defaultData[newName] = newValue
    const adapter = new JSONFile(filePath)
    const db = new Low(adapter, defaultData)
    return db

}

// createData("users", "file")





