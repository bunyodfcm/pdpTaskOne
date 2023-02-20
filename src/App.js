import { Route } from 'react-router-dom';
import './App.css';
import Footer from './companents/Footer';
import Header from './companents/Header';
import Main from './companents/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Route path='/home'><Main/></Route> 
    </div>
  );
}

export default App;
