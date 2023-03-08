import React, { useState } from 'react';
import LoginPage from './login';
import ContactPage from './contact';

function HeaderPage() {
    const [activeOption, setActiveOption] = useState("Home");
    // const [activePage, setActivePage] = useState(null);
    const handleOptionClick = (option) => {
        setActiveOption(option);
        // setActivePage(login);
    };

    const index = () => {
        handleOptionClick('Home');
    }

    const rules = () => {
        handleOptionClick('Rules');
    }

    const contact = () => {
        handleOptionClick('Contact');
    }

    const login = <LoginPage />
    return <>
    <header id="indexheader">
        <div id="logodiv">
            <h1 id="title" >Conference Management
            </h1>
            <hr />
        </div>
        <ul id="ulindex">
            <li class="liindex"><div onClick={index} className={activeOption === 'Home' ? 'active' : ''}>Home</div></li>
            <li class="liindex"><div onClick={() => handleOptionClick('Login')} className={activeOption === 'Login' ? 'active' : ''}>Login</div></li>
            <li class="liindex"><div onClick={rules} className={activeOption === 'Rules' ? 'active' : ''}>Rules</div></li>
            <li class="liindex"><div onClick={contact} className={activeOption === 'Contact' ? 'active' : ''}>Contact</div></li>
        </ul>
        <hr />
    </header>
    
    {activeOption === 'Login' ? <LoginPage />:<></>}
    {activeOption === 'Contact' ? <ContactPage />:<></>}
    <div dangerouslySetInnerHTML={{ __html: login }} />
    </>;
}

export default HeaderPage;