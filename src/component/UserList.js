import React from 'react'
import UserCard from './UserCard'


function UserList({listOfUSer}) {

    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', width:'100%'}}>
            {listOfUSer.map((el,i)=><UserCard el={el} key={el.id} />)}
        </div>
    )
}

export default UserList
