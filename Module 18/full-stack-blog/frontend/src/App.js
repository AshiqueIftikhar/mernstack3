import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import PostsListPage from "./pages/PostsListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePostPage/>} />
        <Route path="list" element={<PostsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
