import React from 'react'
import {
    Flex, 
    HStack, 
    Text,
    Button } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <Flex className = "nav-bar-div" w = "100%" p = {2} >
            <HStack>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#ffae00">Home</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#ffae00">JavaScript</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#ffae00">Java</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#ffae00">HTML</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#ffae00">ReactJS</Button>
            <Button as="a" variant="outline" href="#" fontWeight="extrabold" color = "#ffae00">Express</Button>
        </HStack>
        </Flex>
        
    )
}

export default NavBar
