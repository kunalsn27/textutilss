// This is for serving the app using routing 

// // import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/about';
// import Alert from './components/Alert';
// import React, { useState } from 'react';                     
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


// function App() {
//   const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {

//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#1b3a51';
//       showAlert("Dark mode has been enabled", "success")
//       document.title = 'TextUtils - Dark Mode';

//       // setInterval(() =>{
//       // document.title = 'Install TextUtils Now';
//       // }, 2000);

//       // setInterval(() =>{
//       //   document.title = ' TextUtils is Amazing';
//       //   }, 1500);
//     }
//     else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success")
//       document.title = 'TextUtils - Light Mode';

//     }
//   }

//   return (
//     <>
//       <Router>
//         <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           <Routes>


//             <Route path="/about" element={<About />} />
//             <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyse" mode={mode} />} />

//       {/* <Route path="/about">
//               <About />
//             </Route>
//             <Route exact path="/">
//               <TextForm showAlert={showAlert} heading="Enter the text to analyse below" />
//             </Route> */}

//       </Routes>
//         </div>
//       </Router>

//       {/* <Router>
//         <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           <Routes>
//             <Route path="/about" element={<About />} />
//             <TextForm showAlert={showAlert} heading="Enter the Text to analyse" mode={mode} />

//           </Routes>
//         </div>
//       </Router> */}
//     </>

//   );
// }
// export default App;


// -------------------------------------------------------------------------------------------------------
// Without Routing
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    console.log(mode)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b3a51';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* Render the components directly without React Router */}
        <TextForm showAlert={showAlert} heading="Enter the Text to analyse" mode={mode} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;




