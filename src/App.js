import { useState } from 'react';
import './App.css';
import Navbar from './Components/ Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Switched to Dark Mode", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Switched to Light Mode", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title='Play with Text' mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={Mode} />}>
            
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try - A Text Analysis and  Manipulation Tool :" mode={Mode} />}>
            
          </Route>
        </Routes>
      </div>         
    </Router>
    </>
  );
}
export default App;
