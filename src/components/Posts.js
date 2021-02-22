import React, { useState, useEffect } from 'react'
import {
    Box, 
    Flex, 
    Text,
    CircularProgress,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure  } from '@chakra-ui/react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [index, setIndex] = useState(0);

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


    // Function to open model
    const handleTitleClick = (event) => {
        const str = event.target.innerText;
        console.log(str);
        setIndex(() => {
            let tempIndex = 0;
          for (let i = 0; i < posts.length; i++) {
              const e = posts[i];
              if(e.title === str) {
                  tempIndex = i;
                  break;
              }
          }
          return tempIndex;
        });
        onOpen();
      };
    

    // Returning the element as per the data
    if (isLoading) {
        return (
            <Flex h = "100vh" p="6" align = "center" justify = "center" flexDirection = "row">
                <CircularProgress size = "100px" thickness = "12px" isIndeterminate color="#FF0080" />
            </Flex>
        )
    } else {
        if (err == null) {
            return (
                <>
                    <Box m = {8}>
                        {
                            posts.map(post => {
                                return <Text
                                key = {post.id} 
                                bgGradient="linear(to-l, #ff1493,#1a365d)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                align = "left"
                                onClick = {handleTitleClick}>{post.title}</Text>;
                            })
                        }
                        
                    </Box>

                    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{posts[index].title}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text>{posts[index].body}</Text>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={onClose}>Close</Button>
                            </ModalFooter>
                        </ModalContent>
                </Modal>
                </>
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

export default Posts
