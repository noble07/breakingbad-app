import { Menu } from 'semantic-ui-react'


const MenuApp = () => {
  return (
    <Menu color="green" size="huge" inverted secondary>
      <Menu.Item>
        Breaking Bad App
      </Menu.Item>
      <Menu.Item>
        Listas personalizadas 
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
