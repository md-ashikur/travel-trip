
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/services" element={
         <Services></Services>
          
        
        }></Route>
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="*" element={
          <RequireAuth><CheckOut></CheckOut></RequireAuth>
        } />
        <Route path="/checkout" element={<CheckOut></CheckOut>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
