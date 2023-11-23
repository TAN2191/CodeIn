import "./post.css";
import {Link} from "react-router-dom";
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// export default function Post({post}) {
//   const PF = "http://localhost:5000/images/"
//   return (
//     <div className="post">
//     {post.photo && (
//       <img
//         className="postImg"
//         src = {PF + post.photo}
//         alt="https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg"
//       />
//     )}
//     <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
//       <div className="postInfo">
//         <div className="postCats">
//         {post.categories.map((c)=>(
//           <span className="postCat">
           
//               {c.name}
           
//           </span>
//         ))}

//         </div>
        
//         <Link to={`/post/${post._id}`} className="link">
//           <span className="postTitle">{post.title}</span>
//         </Link>
        
//         {/* <hr /> */}
        
//       </div>
//       <p className="postDesc">
//        {post.desc}
//       </p>
//     </div>
//   );
// }

export default function Post({post}) {

  const PF = "http://localhost:5000/images/"
  return (
    <Card sx={{ maxWidth: 1000  }} className="card">
      <CardMedia
        sx={{ height: 240 }}
        image= {PF + post.photo}
        // {post.photo && (
        //   <img
        //     className="postImg"
        //     src = {PF + post.photo}
        //     alt="https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg"
        //   />
        // )}
        alt = "https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg"
        // title="green iguana"
      />
      <CardContent>
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      <div className="postInfo">
        <div className="postCats">
        {post.categories.map((c)=>(
           <span className="postCat">
           
               {c.name}
           
           </span>
         ))}

         </div>
        
         <Link to={`/post/${post._id}`} className="link">
           <span className="postTitle">{post.title}</span>
         </Link>
        
         {/* <hr /> */}
        
       </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}


