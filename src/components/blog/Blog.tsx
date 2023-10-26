import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader"
import PostList from "./PostList"
import { posts } from "@/utils/constants";

export interface PostData {
    id : number,
    date: string,
    title: string,
    description : string
}

export default function Blog() {

    // const [posts, setPosts] = useState<PostData[]>([]);
    // console.log("posts", posts)

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch('http://localhost:4000/posts');
    //             if (res.ok) {
    //                 const data = await res.json() as PostData[];
    //                 setPosts(data);
    //             } else {
    //                 console.error('Failed to fetch posts');
    //             }
    //         } catch (error) {
    //             console.error('An error occurred:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    const postsData = posts;

  return (
    <section className='section' id='blog'>
        <div className="container mx-auto">
            <SectionHeader 
            title="Latest News"
            pretitle="Our Blog"
            />
            {/* Post List */}
            <PostList 
            posts={posts}
            />
        </div>
    </section>
  )
}
