import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Button, Paper } from '@mui/material';
import { useState, useEffect } from 'react';

export default function People() {
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [email, setEmail] = useState('');
    const [peopleList, setPeopleList] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:8080/notification/getAll")
        .then(res => res.json())
        .then((result) => {
            setPeopleList(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const newPerson = { name, hours, email };
        console.log(newPerson);

        fetch("http://localhost:8080/notification/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPerson)
        })
        .then(() => {
            console.log("New notification is added");
            fetchData();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <Container>
            <h1 style={{ color: "blue" }}><u>Add Notification</u></h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic1"
                    label="RecyclingCenter Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-basic2"
                    label="Opening Hours"
                    variant="outlined"
                    fullWidth
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                />
                <TextField
                    id="outlined-basic3"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="contained" onClick={handleClick}>Send Notification</Button>
            </Box>

            <h2 style={{ color: "green" }}>Notification List</h2>
            {peopleList.map(person => (
                <Paper elevation={6} style={{ padding: '15px', maxWidth: '600px', margin: '10px auto', textAlign: "left" }}>
                    <p>id: {person.id}</p>
                    <p>Name: {person.name}</p>
                    <p>Hours: {person.hours}</p>
                    <p>Email: {person.email}</p>
                </Paper>
            ))}
        </Container>
    );
}
