import defaultA , { nameA } from "./a"

var name: string = `hello , a.js export: nameA=${nameA} defaultExport=${defaultA}`

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log( name , Direction.Up )