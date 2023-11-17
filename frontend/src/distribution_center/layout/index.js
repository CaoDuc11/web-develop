import React from 'react';
import Header from './components/Header/Header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
