import React from 'react'
import { Heading, Center } from '@chakra-ui/react'

const NoPostView = () => {
    return (
        <Center className = "no_posts_div" h = "250px"
        w = "50%">
            <Heading
            size = "xl"
            color = "blue.500">
                Sorry, we haven't found any posts for you!
            </Heading>
            
        </Center>
    )
}

export default NoPostView
