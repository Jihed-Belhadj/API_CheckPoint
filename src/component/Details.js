import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Details({listOfUSer}) {
    const {id}=useParams()
    const found= listOfUSer.find(el=>el.id==id)
    const navigate=useNavigate()
    return (
        <div>
           
           <div className='buttons' style={{justifyContent:'space-between', display:'flex'}} >
               <Button variant="primary" onClick={()=>navigate('/Home')} style={{height:'500px', width:'10%'}}>Home</Button>
               <div className='details'>
               Name:
               <h1>{found.name}</h1>
               LOGIN:
               <h2>{found.username}</h2>
               EMAIL:
               <h2>{found.email}</h2>
               ADDRESS:
               <h2>{found.address.street}, {found.address.suite}, {found.address.city}, {found.address.zipcode} </h2>
               PHONE:
               <h2>{found.phone}</h2>
               WEBSITE:
               <h2>{found.website}</h2>
               COMPANY:
               <h2>{found.company.name}</h2>
               
           </div>
               <Button variant="primary" onClick={()=>navigate(-1)} style={{height:'500px', width:'10%'}}> Go Back</Button>
            </div>
        </div>
    )
}

export default Details
