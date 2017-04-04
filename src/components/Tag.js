import React, { PropTypes } from 'react'


const Tag = ({name, onClick, isDisplay}) => {
    return (
        <a href="#" onClick={onClick}>
            #{name}
        </a>
    )
}

export default Tag;