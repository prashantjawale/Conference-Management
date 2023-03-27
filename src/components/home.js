import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"

function HomePage() {
    const location = useLocation()
    const history = useNavigate();
    const uname = location.state.id
    console.log(uname)

    async function getData(e) {
        try {
            await axios.post("http://localhost:8000/userDetails", {
                uname
            })
                .then(res => {
                    console.log(res)
                })
                .catch(e => {
                    alert("No user")
                })
        }
        catch (e) {
            console.log(e);
        }
    }

    getData();

    return (
        <div>
            <h1>Hello {location.state.id} and welcome to the Home</h1>
        </div>
    )
}

export default HomePage;