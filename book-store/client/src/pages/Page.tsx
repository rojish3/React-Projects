import { useEffect, useState } from "react";
import axios from "axios";
import Paginate from "../components/Paginate";
import Posts from "../components/Posts";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;
  const skipPage = (currentPage - 1) * postsPerPage;
  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/posts?limit=${postsPerPage}&skip=${skipPage}&select=title,body,reactions,userId`);
      setPosts(res.data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);


  
//   const numOfPage = Number(Math.ceil(posts.length / postsPerPage));
//   console.log(numOfPage);
  return (
    <>
      <h1 className="text-center text-4xl mb-8">Current Page: {currentPage}</h1>
      <Posts posts={posts} loading={loading}/>
      <Paginate
        currentPage={currentPage}
        changePage={(page) => setCurrentPage(page)}
        numPage={15}
      />
    </>
  );
};

export default Page;
