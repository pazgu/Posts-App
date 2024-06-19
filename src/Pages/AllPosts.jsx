import useAxios from "../Hooks/useAxios"
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Post from "../Components/Post";

function AllPosts() {
  const URL = "http://localhost:8001/posts";
  const { data, error, loading } = useAxios(URL );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    {loading ? (
             <Grid container spacing={2}>
             <Grid item xs={12}>
               <Skeleton width="100%" height={40} variant="text" animation="wave" />
             </Grid>
             <Grid item xs={12}>
               <Skeleton width="100%" height={40} variant="text" animation="wave" />
             </Grid>
             <Grid item xs={12}>
               <Skeleton width="100%" height={40} variant="text" animation="wave" />
             </Grid>
           </Grid>
          ) : (
      <div>
      { data?.map((post) =>(
        <Post   
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          likes={post.likes}
          comments={post.comments}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  )}
  </>
  )
}

export default AllPosts