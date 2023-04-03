import React from 'react';

import css from "./Header.module.css"
const Header = ({data}) => {

    return (
        <header className={css.header_container}>
            {data.filter(item => item.cc !== 'UA')
                .map(item => <div className={css.header_item} key={item.r030}>{item.cc}: {item.rate}</div>
            )}
        </header>
    );
};

export default Header;