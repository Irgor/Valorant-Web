/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import { api } from '@/services'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Index = () => {
    const [season, setSeason] = useState<any>()

    const handleGetSeason = async () => {
        try {
            const { data: response } = await api.get('https://valorant-api.com/v1/seasons')
            setSeason(response.data[response.data.length - 1])
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        handleGetSeason()
    }, [])

    return (
        <Box>
            {/* <Flex
                justifyContent={'center'}
                alignItems={'center'}
                p={8}
                my={2}
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Valorant_pink_version_logo.svg/2560px-Valorant_pink_version_logo.svg.png" 
                    alt="" 
                    width={'400px'}
                />
            </Flex> */}
            {
                season &&
                season.uuid &&
                <Box
                    height={{ base: '2xl', md: '1xl', lg: '2xl' }}
                    overflow={'hidden'}
                    position={'relative'}
                    bgImage={'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt09716309fd22ae37/6494e204e1e2cd0147310776/Ep7_Act_Overview_Art_3440x1020_v3.jpg'}
                    bgPos={'top'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    display={'flex'}
                >
                    <Flex
                        flexDirection={'column'}
                    >
                        <Text
                            fontSize={'20px'}
                            bg={'#ece8e1'}
                            px={8}
                            my={2}
                            color={'#ff4656'}
                        >
                            // SEASON // EVOLUÇÃO
                        </Text>
                        <Text
                            fontSize={'20px'}
                            bg={'#ece8e1'}
                            px={8}
                            my={2}
                            color={'#ff4656'}
                        >
                            // START TIME // {season.startTime}
                        </Text>
                        <Text
                            fontSize={'20px'}
                            bg={'#ece8e1'}
                            px={8}
                            my={2}
                            color={'#ff4656'}
                        >
                            // END TIME  //  {season.endTime}
                        </Text>
                        <Text
                            fontSize={'90px'}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                            bg={'#ece8e1'}
                            px={8}
                            my={2}
                            color={'#ff4656'}
                        >
                            {season.displayName}
                        </Text>
                    </Flex>
                </Box>
            }
        </Box>
    )
}

export default Index