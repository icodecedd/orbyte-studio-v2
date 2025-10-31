import FadeContent from '@/blocks/Animations/FadeContent/FadeContent';
import Beams from '@/blocks/Backgrounds/Beams/Beams';
import ShinyText from '@/blocks/TextAnimations/ShinyText/ShinyText';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import orbyteLogo from '@/assets/orbyte-logo-phase-ii.webp';
import orbyteLogoHover from '@/assets/orbyte-logo-black-phase-ii.webp';
import { useState } from 'react';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      as='section'
      id='home'
      minH='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      py={{ base: 16, md: 0 }}
      position='relative'
      overflow='hidden'
      maxW='100%'
    >
      {/* Light Ray Background */}
      <Box position='absolute' top={0} left={0} right={0} bottom={0}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor='#10b0c9'
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </Box>

      {/* Header */}
      <Flex
        justifyContent='space-between'
        alignItems='center'
        px={10}
        py={10}
        position='absolute'
        top={0}
        left={0}
        right={0}
        zIndex={2}
      >
        {/* Logo */}
        <FadeContent blur duration={1500} easing='ease-out' initialOpacity={0}>
          <Flex justify-content='center' align='center'>
            <Box
              bg={isHovered ? 'white' : 'transparent'}
              borderRadius='full'
              p={2}
              transition='all 0.3s ease'
              display='inline-flex'
              alignItems='center'
              justifyContent='center'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              cursor='pointer'
            >
              <Image
                height={{ base: '25px', md: '35px' }}
                src={isHovered ? orbyteLogoHover : orbyteLogo}
                alt='Orbyte Logo'
                transition='all 0.3s ease'
              />
            </Box>
            <Heading
              fontSize={{ base: 'md', md: 'xl' }}
              textAlign='center'
              letterSpacing='1px'
              lineHeight={0.9}
              color='white'
              mt={1}
              ml={1}
              className='bricolage-grotesque-medium'
            >
              Orbyte Studio
            </Heading>
          </Flex>
        </FadeContent>

        {/* Social Icons */}
        <FadeContent
          blur={true}
          duration={1500}
          easing='ease-out'
          initialOpacity={0}
        >
          <Box display='flex' gap={2}>
            <IconButton
              variant='ghost'
              aria-label='GitHub'
              color='white'
              borderRadius='full'
              _hover={{ bg: 'white', color: 'black' }}
              as={RouterLink}
              target='_blank'
              rel='noopener noreferrer'
              to='https://github.com/Orbyte-Studio'
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              variant='ghost'
              aria-label='Facebook'
              color='white'
              borderRadius='full'
              _hover={{ bg: 'white', color: 'black' }}
              as={RouterLink}
              target='_blank'
              rel='noopener noreferrer'
              to='https://www.facebook.com/profile.php?id=61580015592005'
            >
              <FaFacebook />
            </IconButton>
          </Box>
        </FadeContent>
      </Flex>

      {/* Content */}
      <FadeContent
        blur={true}
        duration={1000}
        easing='ease-out'
        initialOpacity={0}
      >
        <Box
          position='relative'
          zIndex={1}
          textAlign='center'
          px={{ base: 4, md: 0 }}
        >
          {/* Explore the Unexpected */}
          <Text
            fontSize={{ base: 'md', md: '2xl' }}
            color='white'
            className='bricolage-grotesque-medium'
            mb={{ base: 4, md: 0 }}
          >
            explore the{' '}
            <span
              style={{ color: '#41e0f8' }}
              className='bricolage-grotesque-medium'
            >
              unexpected
            </span>
          </Text>

          {/* Orbyte Studio */}
          <Heading
            fontSize={{ base: '4xl', md: '8xl' }}
            mb={4}
            textAlign='center'
            letterSpacing='1px'
            lineHeight={0.9}
            color='white'
            className='cormorant-garamond-header'
          >
            <Box
              as='span'
              className='cormorant-garamond-italic'
              color='#41e0f8'
              fontSize={{ base: '4rem', md: '8rem' }}
            >
              O
            </Box>
            rbyte Studi
            <Box
              as='span'
              className='cormorant-garamond-italic'
              color='white'
              fontSize={{ base: '1.5rem', md: '4rem' }}
            >
              O
            </Box>
          </Heading>

          {/* Where your dreams are byte away from the future */}
          <Text
            fontSize={{ base: 'sm', md: 'xl' }}
            mt={{ base: 4, md: 8 }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='bricolage-grotesque-medium'
          >
            <ShinyText
              text='where your dreams are byte away from the future'
              disabled={false}
              speed={3}
            />
          </Text>
        </Box>
      </FadeContent>
    </Container>
  );
};

export default Home;
