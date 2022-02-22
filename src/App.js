import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layouts/Navbar";
import Dashboard from "./layouts/Dashboard";
import "./css/style.css";
import 'react-slideshow-image/dist/styles.css'
import Footer from "./layouts/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer/>
    </div>
  );
}

export default App;
