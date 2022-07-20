import React from 'react';
import cl from './loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loaderBox}>
            <span>Loading...</span>
        </div>
    )
}

export default Loader;