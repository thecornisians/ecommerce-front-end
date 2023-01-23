import PropTypes from 'prop-types'

ExampleOrganism.propTypes = {
  text: PropTypes.string,
}

export function ExampleOrganism({ text = 'Default organism text' }) {
  return <div>{text}</div>
}
