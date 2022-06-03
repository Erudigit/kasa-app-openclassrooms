import logo from '../logo.svg';
import '../styles/App.css';
import Menu from './Menu.js';
import Banner from './Banner.js';
import Card from './Card.js';
import Properties from '../data/data.json';
import ImgHomeBckgnd from '../assets/img-bckgrnd-homepage.png'


function App() {
  console.log(Properties)
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <main>
        <Banner sizeBanner='small' img={ImgHomeBckgnd} />
        <div class="listing-properties">
          {Properties.map((property, index) => (
            <Card property={property} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

/* 
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <body>
        <Banner />

      </body>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <body>
        <Banner />

      </body>
    </div>
  );
}
*/

export default App;
