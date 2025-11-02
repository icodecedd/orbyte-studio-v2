import {
  Container,
  Text,
  Heading,
  Box,
  Image,
  Flex,
  IconButton,
  Button,
  List,
  Icon,
} from '@chakra-ui/react';
import AnimatedContent from '../blocks/Animations/AnimatedContent/AnimatedContent';
import CEO from '../assets/ceo.webp';
import { FaFacebook, FaGithub, FaStar } from 'react-icons/fa';
import { IoArrowForward, IoMail } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { ORBYTE_CORE_TEAM } from '../constants/OrbyteCoreTeam';
import { ORBYTE_BSENTREP_TEAM } from '../constants/OrbyteBsentrepTeam';
import { ORBYTE_BSA_TEAM } from '../constants/OrbyteBsaTeam';
import ChromaGrid from '../blocks/Components/ChromaGrid/ChromaGrid';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useTeamAnimation } from '../hooks/useTeamAnimation';

gsap.registerPlugin(ScrollTrigger);

const Who = () => {
  useTeamAnimation();

  return (
    <Container
      as='section'
      id='team'
      minH='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      py={{ base: 16, md: 8 }}
      position='relative'
      overflow='hidden'
      maxW='100%'
      mb={{ base: 0, md: 32 }}
      color='#fff'
    >
      {/* ── MEET THE TEAM ─────────────────────────────────────────────── */}
      <Box
        position='relative'
        p={{ base: '16px', md: '20px' }}
        w='100%'
        h={{ base: '35vh', md: '45vh' }}
        textAlign='center'
        borderRadius='xl'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
        bg='gray.900' // optional dark backdrop
      >
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={false}
          duration={0.5}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          {/* Heading */}
          <Heading
            className='cormorant-garamond-header'
            fontSize={{ base: '4xl', md: '7xl' }}
            fontFamily="'Cormorant Garamond', serif"
            letterSpacing='tight'
            lineHeight={{ base: 0.9, md: 0.85 }}
            color='white'
          >
            <Box
              as='span'
              className='cormorant-garamond-italic'
              color='#41e0f8'
              fontStyle='italic'
            >
              M
            </Box>
            eet the t
            <Box
              as='span'
              className='cormorant-garamond-italic'
              color='#41e0f8'
              fontStyle='italic'
            >
              e
            </Box>
            am
          </Heading>

          {/* Subtitle */}
          <Text
            className='cormorant-garamond-header'
            fontFamily="'Cormorant Garamond', serif"
            fontWeight='medium'
            fontSize={{ base: 'sm', md: 'lg' }}
            letterSpacing='wide'
            textTransform='uppercase'
            opacity={0.9}
            color='white'
            mt={{ base: 2, md: 3 }}
          >
            Thirteen Voices. One Vision.
          </Text>

          {/* Body Content */}
          <Text
            className='bricolage-grotesque-medium'
            fontFamily="'Bricolage Grotesque', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight={{ base: 1.6, md: 1.7 }}
            opacity={0.9}
            mt={{ base: 3, md: 5 }}
            mx='auto'
            maxW={{ base: '100%', md: '60%' }}
            px={{ base: 2, md: 0 }}
          >
            We didn&apos;t just form a team —{' '}
            <Box as='strong' fontStyle='italic'>
              we found our constellation
            </Box>
            . Thirteen creators united by curiosity, driven by purpose, and
            bound by the belief that student work can be world-class work.
          </Text>
        </AnimatedContent>
      </Box>

      {/* ── CEO ─────────────────────────────────────────────────────── */}
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems='center'
        justify='center'
      >
        <Box
          w={{ base: '100%', md: '25%' }}
          borderRadius='xl'
          mb={{ base: 4, md: 8 }}
        >
          <AnimatedContent
            distance={100}
            direction='horizontal'
            reverse={true}
            duration={0.5}
            ease='power3.out'
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <Image id='ceo-image' src={CEO} alt='CEO' mb={{ base: 4, md: 8 }} />
          </AnimatedContent>
        </Box>
        <Box width={{ base: '100%', md: '65%' }} mt={{ base: 4, md: 0 }}>
          <AnimatedContent
            distance={100}
            direction='horizontal'
            reverse={false}
            duration={0.5}
            ease='power3.out'
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <Heading
              mb={1}
              textAlign={{ base: 'center', md: 'left' }}
              fontSize='2xl'
              fontWeight='bold'
              className='cormorant-garamond-header'
            >
              RJ Jack A. Florida
            </Heading>
            <Text
              mb={2}
              fontSize='sm'
              opacity={0.9}
              fontStyle='italic'
              textAlign={{ base: 'center', md: 'left' }}
              className='bricolage-grotesque-medium'
            >
              Chief Executive Officer (CEO)
            </Text>
            <Text
              pb={{ base: 2, md: 4 }}
              mb={{ base: 4 }}
              borderBottom='1px solid #363636ff'
              textAlign={{ base: 'center', md: 'justify' }}
              className='bricolage-grotesque-medium'
            >
              Our CEO is the architect of Orbyte's journey — the one who saw
              potential in a classroom project and dared to ask,{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: '#41e0f8',
                }}
              >
                "What if we didn't stop here?"
              </span>{' '}
              They lead with purpose, inspire with vision, and build bridges
              between creative ambition and tangible impact. Under their
              guidance, we've evolved from students completing assignments to
              creators shaping experiences.
            </Text>
            <Flex
              gap={{ base: 1, md: 2 }}
              alignItems='center'
              mb={4}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <IconButton
                variant='ghost'
                aria-label='GitHub'
                color='white'
                borderRadius='xl'
                _hover={{ bg: 'white', color: 'black' }}
                as={RouterLink}
                target='_blank'
                rel='noopener noreferrer'
                to='https://github.com/Rjjackflorida'
              >
                <FaGithub />
              </IconButton>
              <IconButton
                variant='ghost'
                aria-label='Email'
                color='white'
                borderRadius='xl'
                _hover={{ bg: 'white', color: 'black' }}
                as={RouterLink}
                target='_blank'
                rel='noopener noreferrer'
                to='mailto:rjjackflorida7@gmail.com'
              >
                <IoMail />
              </IconButton>
              <IconButton
                variant='ghost'
                aria-label='Facebook'
                color='white'
                borderRadius='xl'
                _hover={{ bg: 'white', color: 'black' }}
                as={RouterLink}
                target='_blank'
                rel='noopener noreferrer'
                to='https://www.facebook.com/sh.izu.355138'
              >
                <FaFacebook />
              </IconButton>
              <Button
                as={RouterLink}
                to='/team-profile/:rjjackflorida'
                variant='ghost'
                className='bricolage-grotesque-medium'
                size='xs'
                borderRadius='full'
              >
                Read Full Profile <IoArrowForward size='1em' />
              </Button>
            </Flex>

            {/* New Heading for the second paragraph */}
            <Heading
              as='h3'
              fontSize='2xl'
              mb={2}
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight='bold'
              className='cormorant-garamond-header'
            >
              Vision in Motion
            </Heading>

            <Text
              mb={4}
              textAlign={{ base: 'center', md: 'justify' }}
              className='bricolage-grotesque-medium'
            >
              The founder. The spark. The one who looked at thirteen creative
              minds and said,{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: '#41e0f8',
                }}
              >
                "We're not done yet."
              </span>{' '}
              Our CEO leads Orbyte Studio with a rare combination of strategic
              brilliance and genuine care for the team. They've proven that age
              doesn't determine impact — vision does. Under their direction,
              we've transformed from a classroom experiment into a studio that
              clients trust and creatives respect.
            </Text>

            {/* Highlight List */}
            <List.Root
              spacing={3}
              className='bricolage-grotesque-medium'
              ml={{ base: 0, md: 4 }}
            >
              {[
                'The architect behind Orbyte’s evolution from concept to reality',
                'Drives every project with strategic vision and relentless pursuit of excellence',
                'Proves that leadership isn’t about experience — it’s about purpose, passion, and execution',
              ].map((item, i) => (
                <List.Item
                  key={i}
                  display='flex'
                  alignItems='flex-start'
                  gap={2}
                  fontSize={{ base: 'sm', md: 'md' }}
                  color='whiteAlpha.900'
                >
                  <Icon color='#41e0f8' mt={1}>
                    <FaStar />
                  </Icon>
                  {item}
                </List.Item>
              ))}
            </List.Root>
          </AnimatedContent>
        </Box>
      </Flex>

      {/* ── MEET THE CORE TEAM  ─────────────────────────────────────────────────────── */}
      <Box id='core-team' textAlign='center' py={{ base: 8, md: 12 }}>
        <Heading
          className='cormorant-garamond-italic'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='bold'
          mb={{ base: 3, md: 5 }}
          color='white'
        >
          The Minds Behind Orbyte Studio
        </Heading>

        <Text
          opacity={0.8}
          fontSize={{ base: 'sm', md: 'md' }}
          maxW='5xl'
          mx='auto'
          lineHeight='1.8'
          color='gray.300'
          className='bricolage-grotesque-medium'
        >
          At Orbyte Studio, leadership isn’t about hierarchy — it’s about
          harmony. What began as a shared vision among passionate multimedia
          students has evolved into a constellation of creators, innovators, and
          dreamers — united by purpose and driven by imagination.
        </Text>
      </Box>
      {/* ── CORE TEAM CARDS  ─────────────────────────────────────────────────────── */}
      <Box mb={{ base: 8, md: 8 }}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <ChromaGrid
            items={ORBYTE_CORE_TEAM}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      {/* ── MEE THE BSA TEAM  ─────────────────────────────────────────────────────── */}
      <Box id='bsa-ojts' textAlign='center' py={{ base: 8, md: 12 }}>
        <Heading
          className='cormorant-garamond-italic'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='bold'
          mb={{ base: 3, md: 5 }}
          color='white'
        >
          The Allied Minds of Orbyte Studio
        </Heading>

        <Text
          opacity={0.8}
          fontSize={{ base: 'sm', md: 'md' }}
          maxW='5xl'
          mx='auto'
          lineHeight='1.8'
          color='gray.300'
          className='bricolage-grotesque-medium'
        >
          Beyond the realm of design and development, Orbyte Studio thrives
          through collaboration. Our <strong>BSA On-the-Job Trainees</strong>{' '}
          bring precision, strategy, and analytical excellence — bridging
          creativity with structure. They are the catalysts who ensure that
          every idea isn’t just visionary, but also viable.
        </Text>
      </Box>
      {/* ── BSA TEAM CARDS  ─────────────────────────────────────────────────────── */}
      <Box mb={{ base: 8, md: 8 }}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <ChromaGrid
            items={ORBYTE_BSA_TEAM}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      {/* ── MEE THE BSENTREP TEAM  ─────────────────────────────────────────────────────── */}
      <Box id='bsentrep-ojts' textAlign='center' py={{ base: 8, md: 12 }}>
        <Heading
          className='cormorant-garamond-italic'
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight='bold'
          mb={{ base: 3, md: 5 }}
          color='white'
        >
          The Visionary Partners of Orbyte Studio
        </Heading>

        <Text
          opacity={0.8}
          fontSize={{ base: 'md', md: 'lg' }}
          maxW='3xl'
          mx='auto'
          lineHeight='1.8'
          color='gray.300'
          className='bricolage-grotesque-medium'
        >
          The <strong>BSENTREP On-the-Job Trainees</strong> embody innovation
          and forward-thinking strategy — the driving force that turns Orbyte’s
          creative energy into sustainable impact. With a pulse on business
          trends and an eye for opportunity, they bridge artistry with
          entrepreneurship, transforming ideas into ventures and visions into
          value.
        </Text>
      </Box>
      {/* ── BSENTREP TEAM CARDS  ─────────────────────────────────────────────────────── */}
      <Box mb={{ base: 8, md: 8 }}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <ChromaGrid
            items={ORBYTE_BSENTREP_TEAM}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      <Flex
        id='join-us'
        direction='column'
        align='center'
        justify='center'
        textAlign='center'
        p={{ base: 8, md: 16 }}
        borderRadius='2xl'
        position='relative'
        overflow='hidden'
        bg='rgba(255, 255, 255, 0.03)'
        backdropFilter='blur(10px)'
        border='1px solid'
        borderColor='rgba(255,255,255,0.1)'
        boxShadow='0 0 30px rgba(0,0,0,0.4)'
        mb={{ base: 8, md: 16 }}
        mx='auto'
        w={{ base: '100%', md: '80%' }}
      >
        {/* Gradient border glow */}
        <Box
          position='absolute'
          inset='0'
          bg='linear-gradient(135deg, rgba(65,224,248,0.3), rgba(255,255,255,0.05))'
          zIndex={-1}
          filter='blur(60px)'
        />

        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight='bold'
          letterSpacing='wide'
          color='gray.300'
          mb={2}
          textTransform='uppercase'
          className='broicolage-grotesque-medium'
        >
          Join Our Team
        </Text>

        <Heading
          fontSize={{ base: '3xl', md: '6xl' }}
          color='white'
          className='cormorant-garamond-header'
          lineHeight={1.1}
          maxW={{ base: '100%', md: '70%' }}
          mb={6}
        >
          Let’s Sh
          <Box
            as='span'
            className='cormorant-garamond-italic'
            color='#41e0f8'
            fontSize={{ base: '3xl', md: '6xl' }}
          >
            a
          </Box>
          pe the F
          <Box
            as='span'
            className='cormorant-garamond-italic'
            color='#41e0f8'
            fontSize={{ base: '3xl', md: '6xl' }}
          >
            u
          </Box>
          ture of Creat
          <Box
            as='span'
            className='cormorant-garamond-italic'
            color='#41e0f8'
            fontSize={{ base: '3xl', md: '6xl' }}
          >
            i
          </Box>
          vity To
          <Box
            as='span'
            className='cormorant-garamond-italic'
            color='#41e0f8'
            fontSize={{ base: '3xl', md: '6xl' }}
          >
            g
          </Box>
          ether
        </Heading>

        <Button
          as={RouterLink}
          to='/contact'
          size='md'
          borderRadius='full'
          fontWeight='medium'
          fontSize={{ base: 'sm', md: 'md' }}
          px={{ base: 6, md: 10 }}
          py={{ base: 5, md: 6 }}
          bgGradient='linear(to-r, #41e0f8, #00b5d8)'
          color='black'
          _hover={{
            bgGradient: 'linear(to-r, #5ff4ff, #33d6e5)',
            transform: 'scale(1.05)',
            transition: 'all 0.2s ease',
          }}
        >
          Contact Us
        </Button>
      </Flex>
    </Container>
  );
};

export default Who;
