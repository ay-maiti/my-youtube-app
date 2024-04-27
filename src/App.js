import './App.css';
import {Provider} from "react-redux";
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utilities/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './Components/MainContainer';
import WatchContainer from './Components/WatchContainer';


const bodyRouter = createBrowserRouter([{
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch",
    element:<WatchContainer/>
  }
  ]
}])

function App() {
  
  return (
    <Provider store={store}>
    <div >
    <Header/>
    <RouterProvider router={bodyRouter}>
      <Body/>
    </RouterProvider>
      
    </div>
    </Provider>
  );
}

export default App;

/**
   * Header
   * Sidebar
   * Body
   *  MainContainer
   *    ButtonList
   *    VideoCardContainer
   *      VideoCard
   */