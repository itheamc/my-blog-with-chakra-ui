import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const PostView = (props) => {

    return (
        <Box 
            w = "75%"
            h = "350px"
            mt = {8} 
            mb = {8} 
            p = {6} 
            className = "blog-post" 
            display = "block" 
            key = {props.post.id} 
            boxShadow="2xl" 
            rounded="md" 
            bg="white">
            <Box w = "100%" className = "post_title">
                <Heading
                    mb = {4}
                    bgGradient="linear(to-r, #7928CA,#FF0080)"
                    bgClip="text"
                    fontWeight="extrabold"
                    align = "left"
                    as="h1" 
                    size="lg">
                    {props.post.title}
                </Heading>
            </Box>
            <Box w = "100%" className = "post_content">
                <Text
                    fontSize="xl"
                    align = "left">
                    {props.post.body}
                </Text>
            </Box>
                        
        </Box>
    )
}

export default PostView
