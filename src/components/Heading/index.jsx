import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';


Heading.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    isSub: PropTypes.bool
};
function Heading({ title1, title2, isSub }) {
    return (
        <div className="wrapper-heading">
            <Container>
                <h2 className="heading-main">{title1}</h2>
                {isSub && (<h2 className="sub-heading">{title2}</h2>)}
            </Container>
        </div>
    )
}

Heading.defaultProps = {
    title1: '',
    title2: '',
    isSub: false
}

export default Heading
