import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const NewBlog = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#e2f5e2ec",
        maxWidth: 350,
        margin: "50px auto",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h4">New Blog</Typography>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          />
          <TextField
            id="url"
            label="Image URL"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          />

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Category"
              // sx={centered}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="standard-multiline-static"
            label="Content"
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          />

          <Button
            variant="contained"
            size="large"
            color="success"
            sx={{ m: 1, minWidth: 120 }}
          >
            Create New Blog
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default NewBlog;
