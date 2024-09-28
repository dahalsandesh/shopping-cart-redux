import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/dahalsandesh/shopping-cart-redux"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/dahalsandesh/shopping-cart-redux
                    </a>

                    <p>
                        &copy;
                        <a
                            href="https://dahalsandesh.com.np"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dahal Sandesh
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;