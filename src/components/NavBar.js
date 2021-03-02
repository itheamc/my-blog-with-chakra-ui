import React, { useState, useEffect, useRef } from 'react'
import {
    Flex, 
    HStack,
    Button,
    Spacer,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem } from '@chakra-ui/react'

import { ChevronDownIcon } from "@chakra-ui/icons";


const NavBar = (props) => {
    const [offsetY, setOffsetY] = useState(0);
    const [navOffsetTop, setNavOffsetTop] = useState(0);
    const nav_div = useRef(null);


    useEffect(() => {
        nav_div.current?.focus();
        setNavOffsetTop(nav_div.current?.offsetTop);
        console.log(navOffsetTop)
    }, [navOffsetTop]);


    window.onscroll = () => {
        // console.log(offsetY);
        setOffsetY(window.pageYOffset);
    }

    if (props.windowWidth > props.maxWidth4DesktopView) {
        return (
            <Flex ref = {nav_div} className = {offsetY > navOffsetTop ? "nav-bar-div sticky" : "nav-bar-div"} w = "100%" id = "nav-bar-div" >
                <HStack h = "100%" className = {offsetY > navOffsetTop && props.windowWidth > props.maxWidth4DesktopView ? "site-title" : "hidden-element"} ml = {props.windowWidth > props.maxWidth4DesktopView ? 12 : 0}>
                    <Heading
                        bgGradient="linear(to-r, blue.500, blue.300)"
                        bgClip="text"
                        fontWeight="extrabold"
                        align = "left"
                        as="h1" 
                        size="xl">THIS IS TITLE</Heading>   
                </HStack>
                
                {props.windowWidth > props.maxWidth4DesktopView ? <Spacer /> : null}
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
        
    } else {
        return (
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width = "100%">
                    Actions
                </MenuButton>
                <MenuList w = "100%">
                    <MenuItem as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">Home</MenuItem>
                    <MenuItem as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">JavaScript</MenuItem>
                    <MenuItem as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">Java</MenuItem>
                    <MenuItem as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">HTML</MenuItem>
                    <MenuItem as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">ReactJS</MenuItem>
                    <MenuItem as="a" variant="ghost" href="#" fontWeight="extrabold" color = "blue.500">Express</MenuItem>
                </MenuList>
            </Menu>
        )
        
    }
}

export default NavBar
