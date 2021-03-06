import { Provider } from 'react-redux'
import { store } from 'store/store'
import AppRouter from 'router/AppRouter'


const BreakingBadApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default BreakingBadApp
