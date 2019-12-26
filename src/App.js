import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    // return React.createElement("div", { id: "something-important" }, [
    //     React.createElement("h1", {}, "Adopt Me!"),
    //     React.createElement(Pet, {
    //         name: "Luna",
    //         animal: "Dog",
    //         breed: "Havanese"
    //     }),
    //     React.createElement(Pet, {
    //         name: "Pepper",
    //         animal: "Bird",
    //         breed: "Cockatiel"
    //     }),
    //     React.createElement(Pet, {
    //         name: "Doink",
    //         animal: "Cat",
    //         breed: "Mixed"
    //     })
    // ]);
    const themeHook = useState("darkblue");

    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
