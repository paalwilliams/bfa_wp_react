import PropTypes from 'prop-types'
const { React } = wp.element

const Logo = (props) => {
  const { name } = props
  return (
        <div>
            <h1>
                {name}
            </h1>
        </div>
  )
}

Logo.propTypes = {
  name: PropTypes.string
}

export default Logo
