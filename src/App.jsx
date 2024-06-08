import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post.store";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <>
      <PostListProvider>
        <Header />
        <div className="container-fluid h-100">
          <div className="row">
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <main
              className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-5 pb-3"
              style={{ minHeight: "790px" }}
            >
              {selectedTab === "create post" ? (
                <CreatePost></CreatePost>
              ) : (
                <PostList />
              )}
            </main>
          </div>
        </div>
        <Footer />
      </PostListProvider>
    </>
  );
}

export default App;
