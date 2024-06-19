import './index.css';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import PostDetails from './Pages/PostDetails';
import AllPosts from './Pages/AllPosts';
import { Route, Routes } from "react-router-dom";
import CreateNewPost from './Pages/CreateNewPost';
import MyPosts from './Pages/MyPosts';
import ModalAddPost from './Components/ModalAddPost';
import Navbar from './Components/Navbar';

function App() { 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="myPosts" element={<MyPosts />} />
        <Route path="/posts">
        <Route index element={<AllPosts />} />
          <Route path=":postId" element={<PostDetails />} />
          <Route path="create" element={<ModalAddPost />}>
            <Route index element={<CreateNewPost/>} />
          </Route>
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );

}
export default App;
