import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function SignupPage() {

    const history = useNavigate();
    const [name, setName] = useState('')
    const [affiliation, setAffiliation] = useState('')
    const [affiliation_address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [contact_no, setContact] = useState('')
    const [website, setLink] = useState('')
    const [username, setUname] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                name, affiliation, affiliation_address, email, contact_no, website, username, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exist")
                    }
                    else if (res.data === "notexist") {
                        // history("/home", { state: { id: email } })
                        alert("User registered")
                    }
                })
                .catch(e => {
                    alert("Wrong details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);

        }
    }

    const signup = (
        <div class="limiter margin_top_30">
            <div class="container-login">
                <div class="wrap-login100">
                    <form class="login100-form font_family_poppins" action="POST">
                        <span class="logintitle">
                            Sign Up
                        </span>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Name</span>
                            <div class="incon">
                                <i class="fa fa-user icon"></i>
                                <input class="inputarea" type="text" onChange={(e) => {setName(e.target.value)}} name="name" placeholder="Type your name" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Affilation</span>
                            <div class="incon">
                                <i class="fa fa-user icon"></i>
                                <input class="inputarea" type="text" onChange={(e) => {setAffiliation(e.target.value)}} name="affilation" placeholder="Type your affilation" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Affilation address</span>
                            <div class="incon">
                                <i class="fa fa-user icon"></i>
                                <input class="inputarea" type="email" onChange={(e) => {setAddress(e.target.value)}} name="email" placeholder="Type your email" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Email</span>
                            <div class="incon">
                                <i class="fa fa-envelope icon"></i>
                                <input class="inputarea" type="email" onChange={(e) => {setEmail(e.target.value)}} name="email" placeholder="Type your email" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Contact no.</span>
                            <div class="incon">
                                <i class="fa fa-phone icon"></i>
                                <input class="inputarea" type="email" onChange={(e) => {setContact(e.target.value)}} name="email" placeholder="Type your email" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Website</span>
                            <div class="incon">
                                <i class="fa fa-link icon"></i>
                                <input class="inputarea" type="email" onChange={(e) => {setLink(e.target.value)}} name="email" placeholder="Type your email" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">User Name</span>
                            <div class="incon">
                                <i class="fa fa-user icon"></i>
                                <input class="inputarea" type="email" onChange={(e) => {setUname(e.target.value)}} name="email" placeholder="Type your email" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Password</span>
                            <div class="incon">
                                <i class="fa fa-key icon"></i>
                                <input class="inputarea" type="password" onChange={(e) => {setPassword(e.target.value)}} name="password" placeholder="Type your password" />
                            </div>
                        </div>
                        <br />

                        <div class="containerform">
                            <div class="loginbtn">
                                <button class="loginbtntxt" onClick={submit}>
                                    Signup
                                </button>
                            </div>
                        </div>
                        <br />
                        <div class="flex-col-c">
                            <span class="txt1">
                                Or Login Using
                            </span>
                            <Link class="txt2 alink" to="/">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    return signup

}

export default SignupPage