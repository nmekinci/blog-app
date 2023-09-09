import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const CommentForm = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mb: 1 }}>
      <CardContent>
        <hr />
        <Typography variant="body2" color="text.secondary">
          User Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify" }}>
          well meaning and kindly. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veniam nam repellendus beatae hic sunt voluptates
          enim officia nihil aperiam ipsa.
        </Typography>
      </CardContent>
      <hr />
      <hr />

      <Box sx={{ textAlign: "center" }}>
        <TextField
          id="standard-multiline-static"
          label="Content"
          multiline
          rows={4}
          // defaultValue="Default Value"
          variant="standard"
          sx={{ width: "95%" }}
        />
        <CardActions
          sx={{ display: "flex", justifyContent: "center", margin: 2 }}
        >
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ width: "90%" }}
          >
            Add Comment
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
export default CommentForm;
