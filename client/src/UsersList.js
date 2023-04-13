import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function UsersList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then(response => response.json())
        .then(data => setList(data))
        .catch(error => console.log(error))
    }

    console.log(list)
    return(
        <>
            <h3>Users List</h3>
            {list && list.map((listDetail) => {
                const {name, phone, website, email, company, address} = listDetail;

                return(
                    <Card>
                        <span>Name: {name}</span>
                        <span>Phone: {phone}</span>
                        <span>Email: {email}</span>
                        {/* <span>Website: {website}</span>
                        <span>Company: {company.name}</span>
                        <span>City: {address.city}</span>
                        <span>Street: {address.street}</span>
                        <span>Zipcode: {address.zipcode}</span> */}
                    </Card>
                )
            })}
        </>
    )
}

export default UsersList;