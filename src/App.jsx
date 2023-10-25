import './App.css';
import Details from './Components/Details';
import Movie from './Components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NAvbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<div>
  <NAvbar/>
<Routes>
  <Route path="" element={<Movie/>}/>
  <Route path="/details/:media_type/:id" element={<Details/>}/>


</Routes>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
