import React from 'react'
import { VStack, Text, HStack, Center, Link, IconButton} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const FooterView = () => {
    return (
        <Center className = "child-footer-div" w = "100%" >
            <VStack>
                <HStack className = "footer-copyright">

                    <Text fontSize = "small" fontStyle = "italic">
                        © Copyright {new Date().getFullYear()},{" "} 
                        <Link color="teal.500" href="#">
                            Amcthecoder
                        </Link>
                        {" "} All rights Reserved
                    </Text>
                </HStack>
                <HStack className = "designer-div">
                    <Text fontSize = "x-small" >Code with ❤️ By - </Text>
                    <Text fontSize = "x-small" fontStyle = "italic" fontWeight = "bold">Amit Chaudhary</Text>
                </HStack>
                <HStack>
                    <IconButton as = "a" target="_blank" href = "https://facebook.com/itheamc" size = "xs" colorScheme="facebook" aria-label="Facebook" variant = "ghost" icon={<FaFacebook />}/>
                    <IconButton as = "a" target="_blank" href = "https://twitter.com/itheamc" size = "xs" colorScheme="twitter" aria-label="Twitter" variant = "ghost" icon={<FaTwitter />}/>
                    <IconButton as = "a" target="_blank" href = "https://github.com/itheamc" size = "xs" colorScheme="blackAlpha" aria-label="Github" variant = "ghost" icon={<FaGithub />}/>
                </HStack>
            </VStack>
                 
            
        </Center>
    )
}

export default FooterView
