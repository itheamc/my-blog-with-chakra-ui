import React from 'react'
import { VStack, Heading, Text} from '@chakra-ui/react'

const TitleView = () => {
    return (
        <VStack 
        className = "title-description-div"
        w = "100%" 
        align = "start">
            <Heading 
                bgGradient="linear(to-r, blue.500, blue.300)"
                bgClip="text"
                fontWeight="extrabold"
                align = "left"
                as="h1" 
                size="4xl">
                    THIS IS TITLE
            </Heading>

            <Text fontSize = "md" fontStyle = "italic" color = "blue.400">"This is the subtitle for this sample blog website"</Text>
                            
        </VStack>
    )
}

export default TitleView
