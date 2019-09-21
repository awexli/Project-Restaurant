import React from 'react';

class Navbar extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/** Navbar Items */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/**Home */}
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    {/**Link */}
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reserve</a>
                    </li>
                </ul>
            </div>
            {/**End Navbar Items */}
        </nav>
    }
}

export default Navbar;