import React from 'react';

const LinkItem = ({text,Selected, onClickHandler}) => {
    return (
        <>
            <a href='javascript:void(0)' onClick={() => onClickHandler(text)} className={`supplier-button ${text == Selected ? 'supplier-button-active' : '' }`}>{text}</a>
        </>
    );
};

export default LinkItem;
