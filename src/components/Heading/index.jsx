import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';


Heading.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
};
function Heading({ title1, title2 }) {
    return (
        <div className="wrapper-heading">
            <Container className="Container h-100 d-flex align-items-center">
                <h2>{title1}</h2>
                <h2>{title2}</h2>
            </Container>
        </div>
    )
}

Heading.defaultProps = {
    title1: 'Nhân',
    title2: ' Trần'
}

export default Heading
