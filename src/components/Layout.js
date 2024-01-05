import { useState, useEffect } from "react";
import { Link ,Outlet} from "react-router-dom";
import {  useLocation } from 'react-router-dom';



const Navigation=()=>{
    const navItems = [
        { label: '', value: 'Home' },
        { label: 'about', value: 'About' },
        { label: 'contactus', value: 'Contact Us' },
        { label: 'service', value: 'Service' },
        { label: 'team', value: 'Team' }
    ];
    const [selectedIndex,setSelectedIndex]=useState(-1);
    const [isInputVisible, setInputVisible] = useState(false);

    const handleSearchClick = () => {
        setInputVisible(true);
    };

    const handleClearClick = () => {
        setInputVisible(false);
    };

    
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let newTitle = 'Infinity';

        if (path === '/service') {
        newTitle = 'Service';
        } else if (path === '/about') {
        newTitle = 'About';
        } else if (path === '/contactus') {
        newTitle = 'Contact Us';
        } else if (path === '/team') {
        newTitle = 'Team';
        }

        document.title = `${newTitle}`; // Set the document title dynamically
    }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid nav-wrapper">
                    <a className="navbar-brand" href="/">
                        <img src="/images/Logo.svg" alt="Infinity Logo" className="img-fluid" width={156} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navItems.map((items,index)=>(
                                <li key={index} className={selectedIndex === index?'nav-item active':'nav-item'} onClick={()=>{setSelectedIndex(index)}}>
                                    <Link to={`/${items.label}`}  className="nav-link" >{items.value}</Link>
                                    {/* <a href={`/${items.label}`} className="nav-link">{items.value}</a> */}
                                </li>
                            ))}

                        </ul>
                        <div className='nav-right-container d-flex align-items-center'>
                            <div className="search-container pe-4">
                            {isInputVisible ? (
                                <div className="search-input">
                                    <input className="rounded-pill" type="text" placeholder="Search..." />
                                    <button  className="search-close-btn" onClick={handleClearClick}><img src="/images/search-close-btn.svg" alt="Search close Icon"/></button>
                                </div>
                            ) : (
                                <div className="search-icon" onClick={handleSearchClick}>
                                    <img src="/images/search.svg" alt="Search Icon"/>
                                </div>
                            )}
                            </div>
                            <div className="get-started-btn-container">
                                <button type="button" className="rounded-pill btn get-started-btn">GET STARTED</button>
                            </div>
                        </div>
                    </div> 

                </div>
            </nav>
            <Outlet />
        </>
        
    )
}

export default Navigation