import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center my-8 space-y-5">
            <h2 className="font-bold text-4xl">
                Error,Page not found
            </h2>
            <p className="pb-2">
            please go back to login<br/>
            </p>
            <Link to="signin" className="bg-zinc-900  py-1 px-3 rounded-full text-white">Login</Link>
        </div>
    );
};

export default Error;