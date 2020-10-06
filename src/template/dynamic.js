import React from 'react'

export default ({ pageContext }) => {
    return (
        <div>
            <div>{pageContext.name}</div>
            <div>{pageContext.description}</div>
        </div>
    )

}