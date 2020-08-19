import React from 'react';
import RegisterWindow from '../../components/RegisterWindow/RegisterWindow.jsx';

import './Register.css';

const Register = (props) => {

    return (
        <div id="landingContainer">
            <h1 id="landingTitle">La red que siempre te acompaña.</h1>
            <h3 id="landingSubtitle">La única red social que te conecta con los más queridos por todos.</h3>
            <div id="mapLanding">
                <RegisterWindow />
            </div>
        </div>
    )
}

export default Register;