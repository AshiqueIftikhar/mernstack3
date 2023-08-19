import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import PostsListPage from "./pages/PostsListPage";
import UpdatePostPage from "./pages/UpdatePostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<PostsListPage />} />
        <Route path="/create" element={<CreatePostPage/>} />
        <Route path="/update/:id" element={<UpdatePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
