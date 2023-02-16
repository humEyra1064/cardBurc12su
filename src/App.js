
import './App.css';
import Footer from './companents/footer/Footer';
import Header from './companents/header/Header';
import Main from './companents/main/Main';
import data from "./data"

function App() {
  return (
    <div className="App">

<Header/>

{data.map((item)=><Main{...item}/>)}
<Footer/>

    </div>
  );
}

export default App;
