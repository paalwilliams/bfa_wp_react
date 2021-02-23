import PropTypes from 'prop-types'
const { React } = wp.element

// eslint-disable-next-line react/prop-types
const Error = ({ msg }) => {
  return (
        <div>
            {msg}
        </div>
  )
}

Error.PropTypes = {
  msg: PropTypes.any
}

export default Error
