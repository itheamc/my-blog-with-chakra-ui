import React, { useState, useEffect } from 'react'
import { 
    Flex, 
    HStack, 
    VStack,
    Text,
    CircularProgress,
    Divider } from '@chakra-ui/react'
    import PostView from "./PostView";
    import TitleView from './TitleView'
    import NavBar from './NavBar'

const MainView = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Url of the posts
    const url = "https://jsonplaceholder.typicode.com/posts";

    // Implementing useEffect function
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                setPosts(data);
            } else {
                setErr("No posts are available..")
            }
            setIsLoading(false);
        })
        .catch(error => {
            setErr("Something went wrong!!");
            setIsLoading(false);
        });
    }, []);
    

    // Returning the element as per the data
    if (isLoading) {
        return (
            <Flex h = "100vh" p="6" align = "center" justify = "center">
                <CircularProgress size = "100px" thickness = "12px" isIndeterminate color="#FF0080" />
            </Flex>
        )
    } else {
        if (err == null) {
            return (
                <VStack className = "main-div" p = {6} h = "100%">
                    <VStack className = "title-nav-div" w = "100%">
                        <TitleView />
                        <NavBar />
                        <Divider orientation="horizontal" />
        
                    </VStack>
                    <HStack className = "content-sidebar-div" w = "100%">
                        <VStack className = "posts-collection-div" w = "75%" p = {4}>
                            {
                                posts.map(post => {
                                    return <PostView key = {post.id} post = {post} />
                                })
                            }
                        </VStack>
                        <VStack className = "sidebar-div" w = "25%" h = "600px" boxShadow="2xl"></VStack>
                    </HStack>
                    
                </VStack>
            )
        } else {
            return (
                <Flex h = "100vh" p="6" align = "center" justify = "center" flexDirection = "row">
                    <Text 
                    bgGradient="linear(to-r, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold">
                        {err}
                    </Text>
                </Flex>
            )
        }
    }

}

export default MainView
