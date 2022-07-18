import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <Wrapper children={<Card />} />;
  </Provider>
);

export default App;
