import { Link } from "react-router-dom";

const Navabar = () => {

    const navList = <>
        <li><Link>Home</Link></li>
        <li><Link to='/'>Colleges</Link></li>
        <li><Link to='/'>Admission</Link></li>
        <li><Link to='/'>My College</Link></li>

    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">College Admission</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            {/* <div className="navbar-end">
            
                {
                    user ?
                        <>
                            <img src={user?.photoURL} alt="" style={{ height: '40px', width: '40px' }} className="rounded-full mr-2" />
                            <Link onClick={handleLogout} className="btn">Logout</Link></>
                        :
                        <><Link to="/login" className="btn">Login</Link></>
                }

            </div> */}
        </div>
    );
};

export default Navabar;