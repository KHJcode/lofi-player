import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;
