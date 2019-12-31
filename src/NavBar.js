import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

const NavBar = () => {
    const [padding, setPadding] = useState(15);

    return (
        // eslint-disable-next-line
        <header
            onClick={() => setPadding(padding + 15)}
            css={css`
                background-color: ${colors.dark};
                padding: ${padding}px;
                margin-bottom: 10px;
            `}
        >
            <Link to="/">Adopt Me!</Link>
            <span
                css={css`
                    font-size: 60px;

                    &:hover {
                        text-decoration: underline;
                        animation: 1s ${spin} linear infinite;
                    }
                `}
                role="img"
                aria-label="logo"
            >
                🐩
            </span>
        </header>
    );
};

export default NavBar;
