import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
    return(<>
        <p>Landing</p>
        <Link to={'/register'}>
            Register
        </Link>
        <Link to={'/login'}>
            Login
        </Link>

        </>
    )
}

export default Landing;