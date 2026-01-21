import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RandomImage from './pages/RandomImage';
import SearchByTag from './pages/SearchByTag';
import MyCollection from './pages/MyCollection';


const client = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1000,
      retry: 3
    }
  }
});


function App(){


  return(
    <>

    <QueryClientProvider client={client}>
      <BrowserRouter>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/randomImage'>Random Image</Link>
          <Link to='/searchByTag'>Search By Tag</Link>
          <Link to='/login'>Login</Link>
          <Link to='/mycollection'>My Collection</Link>
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/randomImage' element={<RandomImage/>}/>
          <Route path='/searchByTag' element={<SearchByTag/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mycollection' element={<MyCollection/>}/>
          </Routes>
      </BrowserRouter>

    </QueryClientProvider>
</>

  )
}
export default App;
