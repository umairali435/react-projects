import Entry from "./Entry"
import data from "../data"
export default function Body() {
    const entry = data.map((e) => {
        return <Entry
            key={e.id}
            props={e}
        />
    })
    return (
        <main className="container">
            {entry}
        </main>

    )
}