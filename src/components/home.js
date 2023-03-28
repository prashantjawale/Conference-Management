import React, { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

function HomePage() {
    const location = useLocation()
    const uname = location.state.name
    const [home, setHome] = useState('')

    function showWaitingPage() {
        //TODO: Insert UI of Waiting home page
        setHome((
            <div>
                <h1>Hello {uname}, your login has not been approved yet please wait for a while.</h1>
            </div>
        ))
        // setHome(home)
    }

    function showUserHomePage() {
        //TODO: Insert UI of home page consisting upload paper/ Save paper
        setHome((
            <div>
                <h1>Hello {uname}, Welcome to the Home page.</h1>
            </div>
        ))
    }


    useEffect(() => {
        try {
            axios.post("http://localhost:8000/userDetails", {
                uname
            })
                .then(res => {
                    if (res.data && res.data.status) {
                        showUserHomePage()
                    } else {
                        showWaitingPage()
                    }
                })
                .catch(e => {
                    alert("No user")
                })
        }
        catch (e) {
            console.log(e);
        }
    },[uname]);

    return home
}

export default HomePage;