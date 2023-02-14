import React, { Fragment } from 'react'
import "../../scss/home.scss"
const Grid = ({ toggleLg, children }) => {
    return (
        <Fragment>
            <section className="home" style={{ gridTemplateColumns: toggleLg ? '1fr' : '' }}>
                {children}
            </section>
            </Fragment>
    )
}

export default Grid
