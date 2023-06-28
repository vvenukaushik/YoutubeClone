import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';

const AppContainer = () => {
  return (
    <>
      <Head />
      <Body />
    </>
  )
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppContainer />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
    {
      path: "searchResults",
      element: <SearchResults />
    },
  ]
}])


function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
        {/* <Body /> */}
      </div>
    </Provider>
  );
}

export default App;
