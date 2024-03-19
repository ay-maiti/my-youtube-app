import './App.css';
import {Provider} from "react-redux";
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utilities/store';

function App() {
  /**
   * Header
   * Sidebar
   * Body
   *  MainContainer
   *    ButtonList
   *    VideoCardContainer
   *      VideoCard
   */
  return (
    <Provider store={store}>
    <div >
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
