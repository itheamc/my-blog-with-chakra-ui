import React from 'react'
import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react'

const PostView = (props) => {

    return (
        <VStack 
            w = "100%"
            h = "auto"
            marginBottom = "16px"  
            p = {6} 
            className = "blog-post"  
            boxShadow="md" 
            rounded="md" 
            key = {props.post.id} >
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
            <Box w = "100%" className = "post_image">
            <Image w = "100%" src="https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg" alt={props.post.title} objectFit="cover" />
            </Box>
            <Box w = "100%" className = "post_content">
                <Text
                    fontSize="xl"
                    align = "left">
                    {props.post.body}....
                </Text>
            </Box>
                        
        </VStack>
    )
}

export default PostView
