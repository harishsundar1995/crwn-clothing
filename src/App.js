import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component'
import SignIn from './components/routes/sign-in/sign-in.component'

const App = () => {

  const Shop = () => {
    return (
      <div>
        <h1>I Am in Shop</h1>
      </div>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes >
  )
}

export default App