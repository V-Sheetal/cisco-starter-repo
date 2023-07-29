import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Exhibit heading="Heading1" children="Content">
        {/* Child comp */}
        <p>Sample</p>
      </Exhibit>
      <Exhibit heading="Heading2" children="Content">
        {/* Child comp */}
        <p>Sample</p>
      </Exhibit>
    </div>
  );
}

export default App;
