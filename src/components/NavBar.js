import React from 'react'
import {
    Flex, 
    HStack, 
    Button,
    Spacer } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <Flex className = "nav-bar-div" w = "100%" >
            <Spacer />
            <HStack mr = {10}>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#212121" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">Home</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#212121" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">JavaScript</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#212121" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">Java</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#212121" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">HTML</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#212121" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">ReactJS</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#212121" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">Express</Button>
        </HStack>
        </Flex>
        
    )
}

export default NavBar
