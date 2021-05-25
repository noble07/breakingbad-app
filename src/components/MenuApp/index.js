import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { uiOpenModal } from 'actions/ui'
import { startLogout } from 'actions/auth'

const MenuApp = () => {

  const auth = useSelector(state => state.auth)
  const location = useLocation()
  const dispatch = useDispatch()


  const handleLoginClick = () => {
    dispatch(uiOpenModal())
  }

  const handleLogoutClick = () => {
    dispatch(startLogout())
  }


  return (
    <Menu color="green" size="huge" inverted secondary>
      <Menu.Item active={ location.pathname === '/' } >
        <Link to="/">
          Home
        </Link>
      </Menu.Item>
      {
        auth.logged &&
        <Menu.Item active={ location.pathname === '/lists' }>
          <Link to="/lists">
            Listas 
          </Link>
        </Menu.Item>

      }
      <Menu.Menu position='right'>

        {
          auth.logged
            ? (
              <>
                <Menu.Item>{auth.name}</Menu.Item>
                <Menu.Item onClick={handleLogoutClick} >
                  Logout
                </Menu.Item>
              </>
            ) : (
              <Menu.Item onClick={handleLoginClick} >
                Login
              </Menu.Item>
            )
        }

      </Menu.Menu>
    </Menu>
  )
}

export default MenuApp
