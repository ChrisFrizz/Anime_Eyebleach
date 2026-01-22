import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RandomImage from './pages/RandomImage';
import MyCollection from './pages/MyCollection';
import PageNotFound from './pages/PageNotFound';


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
          <Link to='/login'>Login</Link>
          <Link to='/mycollection'>My Collection</Link>
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/randomImage' element={<RandomImage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mycollection' element={<MyCollection/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>

    </QueryClientProvider>
</>

  )
}
export default App;
