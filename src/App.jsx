import './App.css';
import Details from './Components/Details';
import Movie from './Components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<div>
  <Navbar/>
<Routes>
  <Route path="/movie" element={<Movie/>}/>
  <Route path="/details/:media_type/:id" element={<Details/>}/>


</Routes>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
