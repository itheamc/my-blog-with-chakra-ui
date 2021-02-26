import React, { useState, useEffect, useRef } from 'react'
import {
    Flex, 
    HStack,
    Button,
    Spacer,
    Heading } from '@chakra-ui/react'


const NavBar = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [navOffsetTop, setNavOffsetTop] = useState(0);
    const nav_div = useRef(null);


    useEffect(() => {
        nav_div.current.focus();
        setNavOffsetTop(nav_div.current.offsetTop);
        console.log(navOffsetTop)
    }, [navOffsetTop]);

    window.onscroll = () => {
        // console.log(offsetY);
        setOffsetY(window.pageYOffset);
    }
    return (
        <Flex ref = {nav_div} className = {offsetY > navOffsetTop ? "nav-bar-div sticky" : "nav-bar-div"} w = "100%" id = "nav-bar-div" >
            <HStack h = "100%" className = {offsetY > navOffsetTop && window.innerWidth > 915 ? "site-title" : "hidden-element"} ml = {12}>
                <Heading
                    bgGradient="linear(to-r, blue.500, blue.300)"
                    bgClip="text"
                    fontWeight="extrabold"
                    align = "left"
                    as="h1" 
                    size="xl">THIS IS TITLE</Heading>   
            </HStack>
            
            <Spacer />
            <HStack mr = {10}>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">Home</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">JavaScript</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">Java</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">HTML</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">ReactJS</Button>
            <Button as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">Express</Button>
        </HStack>
        </Flex>
        
    )
}

export default NavBar
