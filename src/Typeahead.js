import React, { useState } from "react";
import AppHeader from "./AppHeader";
import Users from './Users';

function Typeahead() {

    const [search, setSearch] = useState('');

    return (
        <>
            <AppHeader />
            <div className="container ta-sticky">
                <div className="typeahead">
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find User" />
                </div>
            </div>
            {search &&
                <div className="container">
                    <Users find={search} />
                </div>}
        </>
    )
}

export default Typeahead;