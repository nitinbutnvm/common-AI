import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Dashboarrd from "./pages/Dashboarrd"
import WriteArticle from "./pages/WriteArticle"
import BlogTitles from "./pages/BlogTitles"
import GenerateImages from "./pages/GenerateImages"
import RemoveBackground from "./pages/RemoveBackground"
import Community from "./pages/Community"


const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboarrd />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

