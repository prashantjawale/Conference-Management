import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function LoginPage() {
    const history = useNavigate();
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000", {
                role, uname, password
            })
                .then(res => {
                    if (res.data === "exists") {
                        localStorage.setItem('user', uname)
                        history("/home", { state: { name: uname, role: role } })
                    }
                    else {
                        alert("Invalid Credentials")
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
    const login = (
        <div className="loginbg">
            <div class="limiter margin_top_30">
                <div class="container-login">
                    <div class="wrap-login100">
                        <form class="login100-form font_family_poppins" action="POST">
                            <span class="logintitle">
                                Login Here
                            </span>
                            <br />
                            <div id="radio" class="padding_bottom_20">
                                <input type="radio" onClick={(e) => { setRole('user') }} name="source" value="student" id="student" checked />User
                                <input type="radio" onClick={(e) => { setRole('organiser') }} name="source" value="organiser" id="organiser" />Organiser
                                <input type="radio" onClick={(e) => { setRole('admin') }} name="source" value="admin" id="admin" />Administrator
                            </div>
                            <div class="inputbox">
                                <span class="inputlabel">Username</span>
                                <div class="incon">
                                    <i class="fa fa-user icon"></i>
                                    <input class="inputarea" onChange={(e) => { setUname(e.target.value) }} type="text" name="uname" placeholder="Enter your username" />
                                </div>
                            </div>
                            <br />
                            <div class="inputbox">
                                <span class="inputlabel">Password</span>
                                <div class="incon">
                                    <i class="fa fa-key icon"></i>
                                    <input class="inputarea" onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" placeholder="Enter your password" />
                                </div>
                            </div>
                            <br />
                            <div class="containerform">
                                <div class="loginbtn">
                                    <button class="loginbtntxt" onClick={submit}>
                                        Login
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div class="flex-col-c">
                                <span class="txt1">
                                    Or Sign Up Using
                                </span>
                                <Link class="txt2 alink" to="/signup">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

    return login;
};

export default LoginPage;