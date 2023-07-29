import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
import IPAddress from './Components/IPAddress';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Exhibit>
        <IPAddress ipType="ipv4" />
      </Exhibit>
      <Exhibit>
        <IPAddress ipType="ipv6" />
      </Exhibit>
    </div>
  );
}

export default App;
