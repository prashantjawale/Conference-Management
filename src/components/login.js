function LoginPage() { 
    return (
        <div class="limiter margin_top_30">
            <div class="container-login">
                <div class="wrap-login100">
                    <form class="login100-form font_family_poppins">
                        <span class="logintitle">
                            Login Here
                        </span>
                        <br/>
                        <div id="radio" class="padding_bottom_20">
                            <input type="radio" name="source" value="student" id="student" checked />User   
                            <input type="radio" name="source" value="admin" id="admin" />Administrator
                        </div>
                        <div class="inputbox">
                            <span class="inputlabel">Username</span>
                            <div class="incon">
                                <i class="fa fa-user icon"></i>
                                <input class="inputarea" type="text" name="username" placeholder="Type your username" />
                            </div>
                        </div>
                        <br/>
                        <div class="inputbox">
                            <span class="inputlabel">Password</span>
                            <div class="incon">
                                <i class="fa fa-key icon"></i>
                                <input class="inputarea" type="password" name="password" placeholder="Type your password"/>
                            </div>
                        </div>

                        <div class="text-right">
                            <a href="forgot.html" class="alink">
                                Forgot password?
                            </a>
                        </div>

                        <div class="containerform">
                            <div class="loginbtn">
                                <button class="loginbtntxt">
                                    Login
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div class="flex-col-c">
                            <span class="txt1">
                                Or Sign Up Using
                            </span>
                            <a href="signup.html" class="txt2 alink">
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;