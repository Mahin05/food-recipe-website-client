import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import RecipeDetail from './Pages/Home/RecipeDetail/RecipeDetail';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp/Signup';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<RequireAuth>
          <RecipeDetail></RecipeDetail>
        </RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
