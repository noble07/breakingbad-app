import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const MenuApp = () => {
  return (
    <Menu color="green" size="huge" inverted secondary>
      <Menu.Item>
        <Link to="/">
          Breaking Bad App
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/lists">
          Listas personalizadas 
        </Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default MenuApp
