import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Movies">Movies</Link>
                </nav>
            </header>
            <Suspense fallback={<div>Loading page...</div>} >
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;
