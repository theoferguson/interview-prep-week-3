import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

export const JSON_PLACEHOLDER = "https://jsonplaceholder.typicode.com/"

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${JSON_PLACEHOLDER}users`)
      const json = await data.json()

      setUsers(json)
    }

    fetchData()
      .catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
      </header>
      <div>
        <ul>
          {
            users.map((user) => {
              return (
                <User key={user.id} user={user}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};