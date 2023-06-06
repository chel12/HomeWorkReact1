import './App.css';
import React, { useState } from 'react';
function App() {

	const [users, setUsers] = useState([])

	const getData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(res => {
				if (res && Array.isArray && res.length > 0) {
					setUsers(res)

				}
			})
	}

	const loadUsers = () => {
		getData()
	}

	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '80px' }}>
				<h2 style={{ color: 'red', display: 'inline-flex' }}> Пользователи: </h2>
				<button style={{ width: '200px', height: '100px', background: '#fffbe3', borderRadius: '25px', boxShadow: '5px 5px 18px -11px rgba(255, 45, 0, 0.6)' }} type='' onClick={() => { loadUsers() }}>Загрузить список пользователей</button>
			</div>

			<div style={{ width: '100%' }}>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center', margin: '50px 40px' }}>
					{users.length > 0 && users.map(user => {
						return (
							<ul style={{ listStyle: 'none', border: '2px solid red', borderRadius: '25px', padding: '20px', width: '300px', height: '200px', textAlign: 'center', verticalAlign: 'middle', background: '#ff33' }} key={Math.random()} >
								<li style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }} ><span style={{ color: 'black', fontWeight: 'bold' }}>Никнейм:</span>{user.username}, </li>
								<li style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}><span style={{ color: 'black', fontWeight: 'bold' }}>email:</span>{user.email}</li>
								<li style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}> <span style={{ color: 'black', fontWeight: 'bold' }}>Имя:</span>{user.name}</li>
							</ul>
						)
					})
					}

				</div>
			</div>
		</>
	)
}

export default App;
