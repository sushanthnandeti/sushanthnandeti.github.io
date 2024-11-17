import { getAllPosts } from "@/lib/posts";

export default function Home() {

  const posts = getAllPosts();

  return (
    <div>
        <ul>

            <div className="home-feed">
            {posts.map((post) => (
                <li key = {post.slug}>
                     <p> {post.date} </p>
                     <a href = {`/posts/${post.slug}`}> {post.title} &nbsp; &nbsp; &nbsp; &nbsp; </a> 
                     
                </li> 
            ))}

            </div>
            
        </ul>
    </div>
  );
}
