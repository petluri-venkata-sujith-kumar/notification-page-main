import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import UserContextProvider from "./context/AuthContext";
import UsersContextProvider from "./context/UserContext";

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://your-json-server-url/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <UserContextProvider>
        <UsersContextProvider>
          <Layout />
        </UsersContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
