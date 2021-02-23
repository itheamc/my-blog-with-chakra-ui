import React, { useState, useEffect } from 'react'
import {
    Flex, 
    HStack,
    Button,
    Spacer,
    Heading } from '@chakra-ui/react'


const NavBar = () => {
    const [offsetY, setOffsetY] = useState(0);

    window.onscroll = () => {
        console.log(window.pageYOffset);
        setOffsetY(window.pageYOffset);
    }
    return (
        <Flex className = {offsetY > 157 ? "nav-bar-div sticky" : "nav-bar-div"} w = "100%" >
            <HStack h = "100%" className = {offsetY > 157 ? "site-title" : "hidden-element"} ml = {12}>
                <Heading
                    bgGradient="linear(to-r, #FF0080,#FFFF00)"
                    bgClip="text"
                    fontWeight="extrabold"
                    align = "left"
                    as="h1" 
                    size="xl">THIS IS TITLE</Heading>   
            </HStack>
            
            <Spacer />
            <HStack mr = {10}>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "#FF0080">Home</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "#FF0080">JavaScript</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "#FF0080">Java</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "#FF0080">HTML</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "#FF0080">ReactJS</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "#FF0080">Express</Button>
        </HStack>
        </Flex>
        
    )
}

export default NavBar
