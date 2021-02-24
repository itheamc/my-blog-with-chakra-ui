import React from 'react'
import { HStack, VStack, Button, Box, SkeletonText } from "@chakra-ui/react";

const HandleMorePost = (props) => {
    return (
        <HStack className = "more-posts-handler-div" w = "100%">
            <VStack w = "100%">
                <Button className = "load-more-btn" colorScheme="twitter" onClick = {props.loadMorePosts} display = {props.isMorePosts ? "none" : "block"}>
                    Load More...
                </Button>
                <Box w = "100%" display = {props.isMorePosts ? "block" : "none"}>
                    <SkeletonText mt="4" noOfLines={3} spacing="4" />
                </Box>
            </VStack>
                              
        </HStack>
    )
}

export default HandleMorePost
