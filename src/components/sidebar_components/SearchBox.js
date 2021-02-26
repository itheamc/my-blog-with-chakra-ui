import React, { useState, useRef } from 'react'
import { HStack, IconButton, Input, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBox = (props) => {
    const [text, setText] = useState("");
    const [allPosts, setAllPosts] = useState(props.posts);
    const textRef = useRef(null);


    // Function to handle the button onclick
    // Here all the posts are filtered as per the user input 
    // and shown to the posts list
    // Here post.title.search(text) === -1 means the text is not in the title 
    const handleSearch = () => {
        let tempArr = [];
        let index = 0;
        // console.log(allPosts.length);

        if (text !== "") {
            for (let i = 0; i < allPosts.length; i++) {
                const post = allPosts[i];
                if(post.title.search(text) > -1) {
                    tempArr[index] = post;
                    index++;
                }
                
            }

            // console.log(tempArr);
            props.setPosts(tempArr);
        }

    }

    // Function to handle the inputed text in search box and related tasks
    const handleSearchText = () => {
        textRef.current.focus();
        let textInput = textRef.current.value;
        setText(textRef.current.value);
        if (textInput.trim().length <= 0) {
            props.setPosts(allPosts);
        }
        // console.log(textInput);
    }

    return (
        <>
            <Text w = "100%" align = "left" fontSize = "2xl" fontWeight = "bold" color = "blue.300">Search</Text>
            <HStack w = "100%">
                <Input
                    ref = {textRef}
                    isInvalid
                    errorBorderColor="blue.300"
                    placeholder="how to make a website...."
                    onChange = {handleSearchText}/>
                
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick = {handleSearch}/>
                
            </HStack>
        </>
    )
}

export default SearchBox
