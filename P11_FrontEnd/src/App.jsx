import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SingIn";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./../designs/css/main.css"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="SignIn" element={<SignIn />}></Route>
      <Route path="User/:id" element={<User />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;