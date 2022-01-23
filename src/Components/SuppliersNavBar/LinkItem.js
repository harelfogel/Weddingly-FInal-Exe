import React from 'react';

const LinkItem = ({text,Selected, setSelectedLink}) => {
    return (
        <>
            <a href='javascript:void(0)' onClick={() => setSelectedLink(text)} className={`supplier-button ${text == Selected ? 'supplier-button-active' : '' }`}>{text}</a>
        </>
    );
};

export default LinkItem;
