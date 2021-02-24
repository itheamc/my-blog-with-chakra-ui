import React from 'react'
import { HStack, IconButton, Input, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBox = () => {
    return (
        <>
            <Text w = "100%" align = "left" fontSize = "2xl" fontWeight = "bold" color = "blue.300">Search</Text>
            <HStack w = "100%">
                <Input
                    isInvalid
                    errorBorderColor="blue.300"
                    placeholder="how to make a website...."/>
                
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}/>
                
            </HStack>
        </>
    )
}

export default SearchBox
