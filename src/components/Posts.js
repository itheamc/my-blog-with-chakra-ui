import React, {useState, useEffect} from 'react'
import { Stack,
    Code, 
    Box, 
    Flex, 
    Text, 
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb } from '@chakra-ui/react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })
        .catch(error => {
            setErr(error);
        });
    }, []);
    
    if (err == null) {
        return (
            <Box m = {8}>
                {
                    posts.map(post => {
                        return <Text 
                        bgGradient="linear(to-l, #ff1493,#1a365d)"
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold"
                        align = "left">{post.title}</Text>;
                    })
                }
                
            </Box>
        )
    } else {
        return (
            <Flex h = "100vh" p="6" align = "center" justify = "center" flexDirection = "row">
                <Text 
                bgGradient="linear(to-r, #7928CA,#FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold">
                    Something went wrong!!
                </Text>
            </Flex>
        )
    }
    
}

export default Posts
