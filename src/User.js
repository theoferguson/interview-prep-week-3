import { useEffect, useState } from "react"
import { JSON_PLACEHOLDER } from "./App"

export default function User({ user }) {
    const [expanded, setExpanded] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${JSON_PLACEHOLDER}users/${user.id}/posts`)
            const json = await data.json()

            setPosts(json)
        }

        fetchData()
            .catch(console.error)
    }, [expanded])

    return (
        <li onClick={() => { setExpanded(!expanded) }}>
            <div>{user.name}{expanded ? " -" : " +"}</div>
            <ul>
                {expanded ? posts.map((post) => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                }) : ""}
            </ul>
        </li>
    )
}