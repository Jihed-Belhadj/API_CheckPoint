import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserCard({el}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>
                    {el.username}
                    </Card.Text>
                    <Card.Text>
                    email:{el.email}
                    </Card.Text>
                    <Card.Text>
                    City:{el.address.city}
                    </Card.Text>
                    <Card.Text>
                    ZipCode:{el.address.zipcode}
                    </Card.Text>
                    <Link to={`/Users/Details/${el.id}`} ><Button variant="primary" >Details</Button></Link> 
                </Card.Body>
            </Card>
        </div>
    )
}
export default UserCard
