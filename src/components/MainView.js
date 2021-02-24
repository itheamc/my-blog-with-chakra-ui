import React, { useState, useEffect } from 'react'
import { 
    Flex, 
    HStack, 
    VStack,
    Text,
    CircularProgress,
    Divider, 
    Box } from '@chakra-ui/react'
    import PostView from "./PostView";
    import TitleView from './TitleView'
    import NavBar from './NavBar'
    import FooterView from './footer/FooterView'
    import HandleMorePost from './MorePostHandler/HandleMorePost';

const MainView = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMorePosts, setisMorePosts] = useState(false);
    const [maxPosts, setMaxPosts] = useState(0);

    // Url of the posts
    const url = "https://jsonplaceholder.typicode.com/posts";

    // Implementing useEffect function
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                setPosts(data);
                setMaxPosts(10);
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
    

    const loadMorePosts = () => {
        setisMorePosts(true);
        setTimeout(() => {
            setMaxPosts(maxPosts + 10);
            setisMorePosts(false);
        }, 1500);
    };

    

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
                <VStack className = "main-div" h = "100%">
                    <VStack className = "title-nav-div" w = "100%" p = {12}>
                        <TitleView />
                        <NavBar />
                        <Divider orientation="horizontal" />
        
                    </VStack>
                    <HStack className = "content-sidebar-div" w = "100%" p = {6} mt = {14}>
                        <VStack w = "70%" className = "row">
                            <VStack className = "posts-collection-div" w = "100%" >
                                {
                                    posts.map((post, index) => {
                                        if (index < maxPosts) {
                                            return <PostView key = {post.id} post = {post} />
                                        }

                                        return null
                                    })
                                }
                            </VStack>
                            <HandleMorePost loadMorePosts = {loadMorePosts} isMorePosts = {isMorePosts} />
                        </VStack>
                        
                        <VStack className = {window.innerWidth > 915 ? "site-bar" : "display-none"} w = "30%" boxShadow="2xl"></VStack>
                    </HStack>
                    <Box className = "footer-div" w = "100%" p = {8} bgColor = "white" boxShadow = "2xl">
                        <FooterView />
                    </Box>
                    
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
