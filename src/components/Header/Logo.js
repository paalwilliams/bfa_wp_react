import PropTypes from 'prop-types'
const { React } = wp.element
import { Link } from 'react-router-dom';

const Logo = (props) => {
  const { name } = props
  return (
        <div id="site-identity">
            <h1 id="site-title">
                <Link to="/">{name}</Link>
            </h1>
        </div>
  )
}

Logo.propTypes = {
  name: PropTypes.string
}

export default Logo
