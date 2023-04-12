import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link, useLocation } from "react-router-dom"

function HomePage() {
    const location = useLocation()
    const history = useNavigate();
    let uname = ''
    if (location.state && location.state.name) {
        uname = location.state.name
    } else {
        uname = localStorage.getItem('user')
    }
    const [home, setHome] = useState('')
    const [title, setTitle] = useState('')
    const [authors, setAuthors] = useState('')
    const [keywords, setkeywords] = useState('')
    const [abstract, setAbs] = useState('')
    const pdf = 'fgvbnm';

    async function savePaper(e, isSubmit) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/savePaper", {
                uname, title, authors, keywords, abstract, pdf, isSubmit
            })
                .then(res => {
                    if (res.data === "exists") {
                        localStorage.setItem('user', uname)
                    }
                    else {
                        alert(res.data)
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

    function logout() {
        localStorage.removeItem('user');
        history("/login")
    }

    function showWaitingPage() {
        //TODO: Insert UI of Waiting home page
        setHome((
            <div className="waitingpage">
                <div className="homenav">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a onClick={logout}>LOGOUT</a></li>
                    </ul>
                </div>
                <div class="waitcontainer">
                    <h1 style={{ fontSize: "36px", marginTop: "200px", marginBottom: "20px" }}>Your user profile has not yet been Approved !</h1>
                    <p style={{ fontSize: "18px", marginBottom: "40px"}}>We're sorry, but your user profile has not yet been approved. Please contact the organizer for more information.</p>
                </div>
            </div>
        ))
    }

    function showExitPage() {
        //TODO: Insert UI of home page consisting upload paper/ Save paper
        setHome((
            <div className="rejectedpage">
                <nav className="homenav">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a onClick={logout}>LOGOUT</a></li>
                    </ul>
                </nav>
                <div class="waitcontainer">
                    <h1 style={{ fontSize: "36px", marginTop: "200px", marginBottom: "20px" }}>Your user profile has been rejected by the organizer !</h1>
                    <p style={{ fontSize: "18px", marginBottom: "40px"}}>Please contact the organizer for further information.</p>
                </div>

            </div>
        ))
    }


    useEffect(() => {
        try {
            axios.post("http://localhost:8000/userDetails", {
                uname
            })
                .then(res => {
                    if (res.data && res.data.status === 'Approved') {
                        setHome((
                            <div>
                                <section className="h-100 bg-light">
                                    <nav className="navbar navbar-expand-lg p-3 mb-2 bg-success-subtle text-emphasis-success">
                                        <div className="container-fluid">
                                            <a className="navbar-brand mb-0 h1 d-inline-block align-text-top" href="#"> RESEARCH PAPERS</a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                                    <li className="nav-item">
                                                        <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            PAPERS
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Upload Paper </a></li>
                                                            <li><a className="dropdown-item" href="#">Saved Paper</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <div className="nav-item dropdown">
                                                    <a className="nav-link active dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {uname}
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        {/* <li><a className="dropdown-item" href="#">Account Details </a></li>
                                                        <li><a className="dropdown-item" href="#">Settings</a></li> */}
                                                        {/* <div className="dropdown-divider"></div> */}
                                                        <li><a className="dropdown-item" onClick={logout}>Logout </a></li>
                                                    </ul>
                                                </div>
                                                <form className="d-flex" role="search">
                                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                </form>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="container py-5 h-100">
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                            <div className="col">
                                                <div className="card card-registration my-4">
                                                    <div className="row g-0">
                                                        <div className="col-xl-6 d-none d-xl-block">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                                                alt="Sample photo" className="img-fluid"
                                                                style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="card-body p-md-5 text-blaCk">
                                                                <h3 className="mb-2 text-uppercase">UPLOAD PAPER</h3>
                                                                <p>You can upload your research paper here. Make sure to fill all the relevant details. Press 'Submit' in order to
                                                                    submit the paper for review or use 'Save as draft' to save your paper for later edit. </p>
                                                                <div className="form-outline mb-4">
                                                                    <input type="text" onChange={(e) => { setTitle(e.target.value) }} className="form-control form-control-lg" placeholder="Title of your Paper" />
                                                                </div>
                                                                <div className="row align-items-center py-3">
                                                                    <div className="form-outline mb-4">
                                                                        <input type="text" onChange={(e) => { setAuthors(e.target.value) }} className="form-control form-control-lg" placeholder="Authors of your Paper" />
                                                                    </div>
                                                                </div>
                                                                <div className="row align-items-center py-3">

                                                                    <div className="form-outline mb-4">
                                                                        <input type="text" onChange={(e) => { setkeywords(e.target.value) }} className="form-control form-control-lg" placeholder="Keywords" />
                                                                    </div>
                                                                </div>
                                                                <div className="row align-items-center py-3">

                                                                    <div className="form-outline mb-4">
                                                                        <textarea className="form-control" onChange={(e) => { setAbs(e.target.value) }} rows="3" placeholder="Abstract of your Paper"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr className="mx-n3" />
                                                                <div className="row align-items-center py-3">
                                                                    <div className="col-md-3 ps-5">
                                                                        <h6 className="mb-0">Upload Paper</h6>
                                                                    </div>
                                                                    <div className="col-md-9 pe-5">
                                                                        <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                                                        <div className="small text-muted mt-2">Upload your Research Paper or any other relevant file. Max file
                                                                            size 50 MB
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="mx-n3" />
                                                                <div className="d-flex justify-content-end pt-3">
                                                                    <button type="button" onClick={(e) => { savePaper(e, false) }} className="btn btn-light btn-lg">Save as Draft</button>
                                                                    <button type="button" onClick={(e) => { savePaper(e, true) }} className="btn btn-success btn-lg ms-2">Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))
                    } else if (res.data && res.data.status === 'Pending Approval') {
                        showWaitingPage()
                    } else if (res.data && res.data.status === 'Rejected') {
                        showExitPage()
                    }
                })
                .catch(e => {
                    alert("No user")
                })
        }
        catch (e) {
            console.log(e);
        }
    }, [uname, title, authors, keywords, abstract, pdf]);

    return home
}

export default HomePage;