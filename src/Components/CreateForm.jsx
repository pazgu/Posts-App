/* eslint-disable react/prop-types */
import axios from 'axios';
import {useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

function CreateForm() {

    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");
    const [newPostImage, setnewPostImage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigateBack = useNavigate();

    function goBack () {
      navigateBack(-1);
    }

    function makeId(length) { 
        let result = ''; 
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) { 
          result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
        } 
        return result; 
      } 

    async function createNewPost (ev) {
      if (newPostTitle !== "" && newPostBody!== "" && newPostImage !== ""){
        ev.preventDefault();
        try {
          const newPost = {
            id: makeId(5),
            title: newPostTitle,
            body: newPostBody,
            image: newPostImage,
            likes: 0,
            comments: [],
            createdAt: new Date().toLocaleDateString()
          };
          setLoading(true);
          await axios.post("http://localhost:8001/posts", newPost);
          setNewPostTitle("");
          setNewPostBody("");
          setnewPostImage("");
          goBack();
        } catch (error) {
          console.error(error)
        } 
    }
}

    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', 
          mt: 2, 
        }}
      >
        <Box component="form" onSubmit={createNewPost} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 2, 
            width: '50%', 
            marginBottom: '2rem' ,
            marginTop: '2rem',
          }}>
          <TextField 
            label="Add todo title..."
            id="fullWidth"
            value={newPostTitle} 
            onChange={(ev) => setNewPostTitle(ev.target.value)} 
            placeholder="Add todo..."
            sx={{ flex: 1 }} 
            fullWidth
            required
          />
          <TextField 
            label="Add description..."
            id="fullWidth"
            value={newPostBody} 
            onChange={(ev) => setNewPostBody(ev.target.value)} 
            placeholder="Add todo..."
            sx={{ flex: 1 }} 
            fullWidth
            required
          />
            <TextField 
            label="Add labels, please use comma..."
            id="fullWidth"
            value={newPostImage} 
            onChange={(ev) => setnewPostImage(ev.target.value)} 
            placeholder="Add todo..."
            sx={{ flex: 1 }}
            fullWidth
            required
          />
           <Tooltip title="Add todo">
            <Box sx={{ width: '100%' }}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                disabled={loading}
                sx={{ height: '56px' }}
                fullWidth
                required
              >
              {loading ? <CircularProgress size={24} /> : <AddIcon />}
              </Button>
            </Box>
          </Tooltip>
        </Box>
      </Box>
      )
  }


export default CreateForm