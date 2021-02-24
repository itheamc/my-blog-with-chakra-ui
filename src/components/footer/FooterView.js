import React from 'react'
import { VStack, Heading, Text, HStack, Center} from '@chakra-ui/react'

const FooterView = () => {
    return (
        <Center className = "child-footer-div" w = "100%" >
            <VStack>
                <HStack className = "footer-copyright">
                    <Heading as = "h4" fontWeight="bold" size="xs" >© COPYRIGHT 2021, </Heading>
                    <Heading as = "a" href = "#" fontWeight="bold" size="xs" >THIS IS TITLE</Heading>
                </HStack>

                <HStack className = "footer-right">
                    <Text fontSize = "small" fontStyle = "italic">All rights Reserved</Text>
                </HStack>
                <HStack className = "designer-div">
                    <Text fontSize = "small" >Code with ❤️ By - </Text>
                    <Text fontSize = "small" fontStyle = "italic" fontWeight = "bold">Amit Chaudhary</Text>
                </HStack>
            </VStack>
                 
            
        </Center>
    )
}

export default FooterView
