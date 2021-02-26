import React from 'react'
import { 
    Box, 
    Heading, 
    Text, 
    VStack, 
    HStack,
    Image, 
    Tag,
    TagLabel,
    TagLeftIcon,
    Avatar  } from '@chakra-ui/react'

import { TimeIcon } from '@chakra-ui/icons'

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
            <Box w = "100%" className = "post_title-div">
                <Heading
                    bgGradient="linear(to-r, #7928CA,#FF0080)"
                    bgClip="text"
                    fontWeight="extrabold"
                    align = "left"
                    as="h1" 
                    size="lg"
                    noOfLines = {2}>
                    {props.post.title}
                </Heading>
            </Box>

            <HStack className = "post-info-div" w = "100%" mb = {4}>
                <Tag size="sm">
                    <TagLeftIcon as={TimeIcon} />
                    <TagLabel>Sunday, December 22, 2019</TagLabel>
                </Tag>
                <Tag size="sm" variant="subtle">
                    <TagLabel>Category</TagLabel>
                </Tag>
                <Tag size="sm" borderRadius="full">
                    <Avatar
                        src="https://bit.ly/sage-adebayo"
                        size="2xs"
                        name="Amit Chaudhary"
                        ml={-1}
                        mr={2}/>
                <TagLabel>Amit Chaudhary</TagLabel>
                 </Tag>
            </HStack>

            <Box w = "100%" className = "post_image">
                <Image w = "100%" src="https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg" alt={props.post.title} objectFit="cover" />
            </Box>

            <Box w = "100%" className = "post_content">
                <Text
                    fontSize="xl"
                    align = "left"
                    noOfLines = {3}>
                    {props.post.body}
                </Text>
            </Box>
                        
        </VStack>
    )
}

export default PostView
