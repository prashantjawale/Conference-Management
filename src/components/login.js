import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function LoginPage() {
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                   history("/home",{state:{id:email}}) 
                }
                else if(res.data==="notexist"){
                   alert("User has not signed up")
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);

        }
    }
    const login = (
        <div class="limiter margin_top_30">
            <div class="container-login">
                <div class="wrap-login100">
                    <form class="login100-form font_family_poppins" action="POST">
                        <span class="logintitle">
                            Login Here
                        </span>
                        <br />
                        <div id="radio" class="padding_bottom_20">
                            <input type="radio" name="source" value="student" id="student" checked />User
                            <input type="radio" name="source" value="organiser" id="organiser" />Organiser
                            <input type="radio" name="source" value="admin" id="admin" />Administrator
                        </div>
                        <div class="inputbox">
                            <span class="inputlabel">Email</span>
                            <div class="incon">
                                <i class="fa fa-user icon"></i>
                                <input class="inputarea" onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="Type your email" />
                            </div>
                        </div>
                        <br />
                        <div class="inputbox">
                            <span class="inputlabel">Password</span>
                            <div class="incon">
                                <i class="fa fa-key icon"></i>
                                <input class="inputarea" onChange={(e) => {setPassword(e.target.value)}}  type="password" name="password" placeholder="Type your password" />
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
    )

    return login;
};

export default LoginPage;