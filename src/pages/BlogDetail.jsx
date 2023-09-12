import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate, useParams } from "react-router-dom";
import { pink } from "@mui/material/colors";
import CommentForm from "../components/blog/CommentForm";
import { BlogContext } from "../context/BlogContext";

const BlogDetail = () => {
  const {id} = useParams()

  // console.log(id);


  const {getBlogWithId,state} = React.useContext(BlogContext)
const [toggle, setToggle] = React.useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleToggle = () => {
setToggle(!toggle)
  }

  React.useEffect(() => {
    // getBlogWithId(id)
  }, [])
  // console.log(state.data);
  const detailData = state.data.filter( (item) => item.id == id)[0]
  // console.log(detailData);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 3,
        backgroundColor: "#dede",
      }}
      key={detailData?.id}
    >
      <Card
        sx={{
          // maxWidth: 345,
          m: 2,
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={detailData?.image}
          title={detailData?.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {detailData?.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            {detailData?.content}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, textAlign: "justify" }}
          >
            {detailData?.publish_date}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              src="/broken-image.jpg"
              sx={{ mt: 1, width: 24, height: 24, bgcolor: pink[500] }}
            />
            <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
            {detailData?.author}
            </Typography>
          </Box>
        </CardContent>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
        >
          <Box sx={{ gap: 2 }}>
            <IconButton aria-label="favorites" sx={{ gap: 1 }}>
              <FavoriteIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
              {detailData?.likes}
              </Typography>
            </IconButton>
            <IconButton aria-label="favorites" sx={{ gap: 1 }} onClick={handleToggle}>
              <ForumIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
              {detailData?.comment_count}
              </Typography>
            </IconButton>
            <IconButton aria-label="favorites" sx={{ gap: 1 }}>
              <RemoveRedEyeIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
              {detailData?.post_views}
              </Typography>
            </IconButton>
          </Box>
          <Button size="small" variant="contained" onClick={handleClick}>
            Back
          </Button>
        </Box>
        
        <Box sx={toggle ? {display:"block"} : {display:"none"}}>
        <CommentForm id={id} />
        </Box>
        
      </Card>
    </Box>
  );
};
export default BlogDetail;
