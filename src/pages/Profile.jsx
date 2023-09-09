import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CardMedia, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box sx={{ display:"flex", justifyContent:"center",mt:4 }}>
      <Box
        sx={{
          width: 600,
          height: "100%",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
        }}
      >
        <CardMedia
          sx={{ margin:2 , height: 200 }}
          image="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
          
        />
        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            User Name
          </Typography><Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            Email adress
          </Typography>
      </Box>
    </Box>
  );
};
export default Profile;
