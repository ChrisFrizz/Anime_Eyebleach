import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RandomImage from './pages/RandomImage';
import MyCollection from './pages/MyCollection';
import PageNotFound from './pages/PageNotFound';
import PopularTags from './pages/PopularTags';
import Post from './pages/Post';


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
          <Link to='/populartags'>Popular tags</Link>
          <Link to='/randomImage'>Random Image</Link>
          <Link to='/login'>Login</Link>
          <Link to='/mycollection'>My Collection</Link>
          <Link to='/contribute'>Contribute</Link>
          <Link to='/404'>404 Page</Link>
        </nav>

        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/randomImage' element={<RandomImage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mycollection' element={<MyCollection/>}/>
          <Route path='/404' element={<PageNotFound/>}/>
          <Route path='/populartags' element={<PopularTags/>}/>
          <Route path='/contribute' element={<Post/>}/>
          </Routes>
      </BrowserRouter>

    </QueryClientProvider>
</>

  )
}
export default App;
