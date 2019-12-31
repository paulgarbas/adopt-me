import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
// import NavBar from "./NavBar";

// const Details = lazy(() => import("./Details"));
// const SearchParams = lazy(() => import("./SearchParams"));

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
                    {/* <NavBar /> */}
                    {/* <Suspense fallback={<h1>Loading route...</h1>}> */}
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                    {/* </Suspense> */}
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

// export default App;

render(<App />, document.getElementById("root"));
