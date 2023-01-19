import PropTypes from 'prop-types';

ExampleAtom.propTypes = {
    text: PropTypes.string,
};

export function ExampleAtom({text = 'Default atom text'}) {
    return (
        <div>{text}</div>
    );
}