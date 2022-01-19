import React from 'react'

function Home() {
    return (
        <div>
             <h1> API CHECKPOINT</h1>
            <h2>Objective</h2>
            <h3>In this checkpoint,we are going to consume an API that provides us with list of users. Just follow the instructions:</h3>
            <h2>Instructions</h2>
            <ol>
                <li>Create a project using create-react-app.</li>
                <li>Create UserList.js file in src folder</li>
                <li>Install axios.</li>
                <li>You gone to use jsonplaceholder API to get list of user </li>
                <li>Use axios to Get data from <a href='https://jsonplaceholder.typicode.com/users'>Link</a> inside useEffect hooks</li>
                <li>Use UseState hooks to save data into listOfUSer state </li>
                <li>Map listOfUser to display list of user into screen </li>
                
            </ol>
        </div>
    )
}

export default Home
