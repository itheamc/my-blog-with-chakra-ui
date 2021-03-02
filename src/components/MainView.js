import React, { useState, useEffect } from 'react'
import { 
    Flex, 
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
import SearchBox from './sidebar_components/SearchBox';
import NoPostView from './NoPostHandler/NoPostView';

const MainView = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMorePosts, setisMorePosts] = useState(false);
    const [maxPosts, setMaxPosts] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Url of the posts
    const url = "https://jsonplaceholder.typicode.com/posts";
    const maxWidth4DesktopView = 760;

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


    // Function to handle the window with for responsiveness
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
        console.log(window.innerWidth);
    }

    // window.onresize = handleWindowResize;

    window.addEventListener('resize', handleWindowResize);

    

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
                        <NavBar windowWidth = {windowWidth} maxWidth4DesktopView = {maxWidth4DesktopView} />
                        <Divider orientation="horizontal" />
        
                    </VStack>
                    <Flex className = "content-sidebar-div" w = "100%" p = {6} mt = {14}>
                        <VStack width = {windowWidth < maxWidth4DesktopView ? "100%" : "70%"} className = "row">
                            <VStack className = "posts-collection-div" w = "100%" >
                                {
                                    posts.length > 0 ? 
                                    posts.map((post, index) => {
                                        if (index < maxPosts) {
                                            return <PostView key = {post.id} post = {post} />
                                        }

                                        return null
                                    }) : <NoPostView />
                                }
                            </VStack>
                            {posts.length > 10 ? <HandleMorePost loadMorePosts = {loadMorePosts} isMorePosts = {isMorePosts} /> : null}
                            
                        </VStack>
                        
                        <Box className = {windowWidth > maxWidth4DesktopView ? "site-bar" : "display-none"} ml = {8} id = "side-bar">
                            <VStack w = "100%" p = {8}>
                                <SearchBox posts = {posts} setPosts = {setPosts} />
                            </VStack>
                        </Box>
                    </Flex>
                    <Box className = "footer-div" w = "100%" mt = {12} p = {8} bgColor = "white" boxShadow = "2xl">
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
