import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  Highlight,
  Button,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import OrbyteAnimation from '@/assets/logo-animation-v2.mp4';
import OrbyteGroupPhoto1 from '@/assets/orbyte-group-photo-1.webp';
import OrbyteGroupPhoto2 from '@/assets/orbyte-group-photo-2.webp';
import JoinUsPhoto from '@/assets/join-us-photo.webp';
import ChiefExecutiveOfficer from '@/assets/pii-chief-executive-officer.webp';
import ProjectManager from '@/assets/pii-project-manager.webp';
import CreativeDirector from '@/assets/pii-creative-director.webp';
import ITSpecialist from '@/assets/pii-it-specialist.webp';
import MissionPhoto from '@/assets/mission-pup.webp';
import VisionPhoto from '@/assets/vision-founders.webp';
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import { useAboutAnimation } from '@/Hooks/useAboutAnimation';

const About = () => {
  useAboutAnimation();

  return (
    <Container
      as='section'
      id='about'
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
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <Box
        position='relative'
        p='20px'
        w='100%'
        h={{ base: '35vh', md: '60vh' }}
        textAlign='center'
        borderRadius='xl'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
      >
        {/* ── VIDEO BACKGROUND (Covers 50% of hero) ────────────────── */}
        <Box
          as='video'
          autoPlay
          muted
          loop
          playsInline
          src={OrbyteAnimation}
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          width='100%'
          height='100%'
          objectFit='cover'
          opacity={0.4}
          zIndex='0'
        />

        {/* ── CONTENT ─────────────────────────────────────────────── */}
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={false}
          duration={0.5}
          ease='power3.out'
          animateOpacity
          scale={3}
          threshold={0.1}
          zIndex='1'
        >
          <Text
            className='cormorant-garamond-header'
            fontWeight='medium'
            fontSize={{ base: 'sm', md: 'lg' }}
            letterSpacing='wide'
            textTransform='uppercase'
            opacity={0.9}
            color='white'
          >
            About Orbyte Studio
          </Text>
          <Heading
            className='cormorant-garamond-header'
            fontSize={{ base: '4xl', md: '7xl' }}
            textAlign='center'
            letterSpacing='tight'
            lineHeight={0.9}
            color='white'
          >
            H
            <Box
              as='span'
              className='cormorant-garamond-italic'
              color='#41e0f8'
              fontSize={{ base: '4xl', md: '7xl' }}
            >
              o
            </Box>
            w it all st
            <Box
              as='span'
              className='cormorant-garamond-italic'
              fontSize={{ base: '4xl', md: '7xl' }}
            >
              a
            </Box>
            rted
          </Heading>
        </AnimatedContent>
      </Box>

      {/* ── ORIGIN STORY ─────────────────────────────────────────────── */}
      <Box
        id='origin-story-section'
        w='100%'
        display='flex'
        justifyContent='center'
        mb={{ base: 12, md: 20 }}
      >
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign={{ base: 'justify', md: 'center' }}
          className='bricolage-grotesque-medium'
          lineHeight='tall'
          w='80%'
        >
          It all began in our <strong>Multimedia class</strong> — a simple
          project that sparked a much bigger idea. We wanted to stand out, to
          create something beyond requirements, something that reflected who we
          are as IT students — creative, curious, and driven by a single vision:{' '}
          <strong>to make an impact through innovation and design</strong>.
        </Text>
      </Box>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <SimpleGrid
        id='stats-section'
        w='100%'
        mb={{ base: 8, md: 12 }}
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 8, md: 16 }}
        justifyItems='center'
        bg='#111827'
        p={{ base: 4, md: 8 }}
        borderRadius='xl'
      >
        {/* Core Members */}
        <Box textAlign='center' mb={{ base: 8, md: 0 }}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
            color='teal.300'
            mb={{ base: 2, md: 4 }}
            className='cormorant-garamond-header'
          >
            4
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            opacity={0.9}
            className='bricolage-grotesque-medium'
          >
            Core Members
          </Text>
          <Text
            opacity={0.7}
            fontSize='sm'
            maxW='sm'
            mx='auto'
            className='bricolage-grotesque-medium'
          >
            The backbone of our organization — leading every initiative and
            vision.
          </Text>
        </Box>

        {/* OJTs */}
        <Box textAlign='center' mb={{ base: 8, md: 0 }}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
            color='cyan.300'
            mb={{ base: 2, md: 4 }}
            className='cormorant-garamond-header'
          >
            9
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            opacity={0.9}
            className='bricolage-grotesque-medium'
          >
            On-the-Job Trainees
          </Text>
          <Text
            opacity={0.7}
            fontSize='sm'
            maxW='sm'
            mx='auto'
            className='bricolage-grotesque-medium'
          >
            Dedicated interns bringing fresh ideas and real-world impact.
          </Text>
        </Box>

        {/* Another Metric */}
        <Box textAlign='center' mb={{ base: 8, md: 0 }}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
            color='purple.300'
            mb={{ base: 2, md: 4 }}
            className='cormorant-garamond-header'
          >
            1
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            opacity={0.9}
            className='bricolage-grotesque-medium'
          >
            Vision
          </Text>
          <Text
            opacity={0.7}
            fontSize='sm'
            maxW='sm'
            mx='auto'
            className='bricolage-grotesque-medium'
          >
            To inspire, innovate, and make technology a bridge for creativity.
          </Text>
        </Box>
      </SimpleGrid>

      {/* ── LEADERSHIP INTRO ─────────────────────────────────────────── */}
      <Box
        id='leadership-intro-section'
        textAlign='center'
        py={{ base: 12, md: 20 }}
      >
        <Heading
          className='cormorant-garamond-italic'
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight='bold'
          mb={{ base: 2, md: 4 }}
        >
          Meet Our Leadership
        </Heading>
        <Text
          opacity={0.75}
          fontSize={{ base: 'md', md: 'lg' }}
          maxW='3xl'
          className='bricolage-grotesque-medium'
        >
          At Orbyte Studio, leadership is more than direction — it’s
          collaboration in motion. What began as a group of passionate
          multimedia students evolved into a team of creators, thinkers, and
          visionaries who lead with purpose.
        </Text>
      </Box>

      <SimpleGrid
        id='leadership-photos-section'
        columns={{ base: 1, sm: 2, md: 4 }}
        gap={{ base: 4, md: 2 }}
        mb={{ base: 12, md: 16 }}
      >
        <Image
          src={ChiefExecutiveOfficer}
          alt='Chief Executive Officer'
          borderRadius='xl'
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          }}
          boxShadow='lg'
          border='2px solid'
          borderColor='#1f2937'
        />
        <Image
          src={ProjectManager}
          alt='Project Manager'
          borderRadius='xl'
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          }}
          boxShadow='lg'
          border='2px solid'
          borderColor='#1f2937'
        />
        <Image
          src={CreativeDirector}
          alt='Creative Director'
          borderRadius='xl'
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          }}
          boxShadow='lg'
          border='2px solid'
          borderColor='#1f2937'
        />
        <Image
          src={ITSpecialist}
          alt='IT Specialist'
          borderRadius='xl'
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          }}
          boxShadow='lg'
          border='2px solid'
          borderColor='#1f2937'
        />
      </SimpleGrid>

      {/* ── WHAT WE BUILD ─────────────────────────────────────────────── */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        maxW='1300px'
        py={{ base: 12, md: 20 }}
      >
        <Box flex='1' order={{ base: 2, md: 1 }}>
          <Image
            id='what-we-build-image'
            src={OrbyteGroupPhoto1}
            alt='Orbyte Group Photo 1'
            w='100%'
            h='400px'
            objectFit={{ base: 'cover', md: 'fill' }}
            borderRadius='2xl'
          />
        </Box>
        <Box
          flex='1'
          textAlign='justify'
          pl={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
          order={{ base: 1, md: 2 }}
        >
          <Heading
            id='what-we-build-header'
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={{ base: 3, md: 6 }}
            color='white'
            textAlign={{ base: 'center', md: 'right' }}
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='cormorant-garamond-header'
          >
            What are we{' '}
            <span
              style={{ color: '#41e0f8' }}
              className='cormorant-garamond-italic'
            >
              building
            </span>
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='bricolage-grotesque-medium'
            ml={{ base: 0, md: 'auto' }}
            width={{ base: '100%', md: '90%' }}
          >
            <Highlight
              query={['crafting the future']}
              styles={{
                bg: '#10b0c9',
                color: 'white',
                px: 1,
                borderRadius: 'sm',
              }}
            >
              At Orbyte Studio, we're crafting the future of multimedia
              storytelling. Like celestial bodies that illuminate the cosmos, we
              create content that captures imagination and transforms ideas into
              stellar experiences. Our multimedia company specializes in film
              production, digital design, strategic campaigns, and immersive
              brand narratives that resonate across galaxies of audiences.
            </Highlight>
          </Text>
        </Box>
      </Flex>

      {/* ── WHO WE ARE ─────────────────────────────────────────────── */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        maxW='1300px'
        mb={12}
        px={{ base: 4, md: 0 }}
      >
        <Box
          flex='1'
          textAlign='justify'
          pr={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading
            id='who-we-are-header'
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={{ base: 3, md: 6 }}
            color='white'
            textAlign={{ base: 'center', md: 'left' }}
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='cormorant-garamond-header'
          >
            Who we{' '}
            <span
              style={{ color: '#41e0f8' }}
              className='cormorant-garamond-italic'
            >
              are
            </span>
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='bricolage-grotesque-medium'
            width={{ base: '100%', md: '90%' }}
          >
            <Highlight
              query={['moves, inspires, and endures']}
              styles={{
                bg: '#10b0c9',
                color: 'white',
                px: 1,
                borderRadius: 'sm',
              }}
            >
              We are dreamers, creators, and cosmic architects united by a
              shared passion for multimedia excellence. Our constellation
              includes visionaries from diverse backgrounds—filmmakers,
              designers, strategists, and storytellers—all orbiting around the
              common goal of creating content that moves, inspires, and endures.
            </Highlight>
          </Text>
        </Box>
        <Box flex='1'>
          <Image
            id='who-we-are-image'
            src={OrbyteGroupPhoto2}
            alt='Orbyte Group Photo 2'
            w='100%'
            h='400px'
            objectFit={{ base: 'cover', md: 'fill' }}
            borderRadius='2xl'
          />
        </Box>
      </Flex>

      {/* ── JOIN US CTA ─────────────────────────────────────────────── */}
      <Box
        id='join-us-cta-section'
        bgGradient='linear(to-r, #10b0c9, #41e0f8)'
        py={{ base: 12, md: 16 }}
        borderRadius='xl'
        mx={{ base: 4, md: 8 }}
      >
        <Container maxW='container.xl'>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align='center'
            gap={{ base: 6, md: 12 }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Image
              src={JoinUsPhoto}
              alt='Join the Orbyte team'
              borderRadius='xl'
              maxW={{ base: '100%', md: '30%' }}
              objectFit='cover'
              boxShadow='lg'
            />
            <VStack
              align={{ base: 'center', md: 'flex-start' }}
              spacing={4}
              flex='1'
            >
              <Heading
                fontFamily='cormorant'
                fontSize={{ base: '2xl', md: '4xl' }}
              >
                Join the{' '}
                <Box as='span' fontStyle='italic'>
                  team
                </Box>
              </Heading>
              <Text
                className='carmorant-garamond-medium'
                maxW='lg'
                fontSize='md'
                textAlign={{ base: 'center', md: 'justify' }}
              >
                We’re always looking for passionate creators who want to make an
                impact through storytelling and design. At Orbyte Studio, you’ll
                collaborate with driven minds, explore bold ideas, and bring
                visions to life.
              </Text>
              <Button
                as={RouterLink}
                to='/contact'
                size='lg'
                bg='white'
                color='#10b0c9'
                fontWeight='bold'
                borderRadius='full'
                fontFamily='cormorant'
                px={8}
                _hover={{
                  bg: '#f0f9ff',
                  transform: 'translateY(-3px)',
                  boxShadow: 'xl',
                }}
                transition='all 0.3s'
              >
                Contact Us
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Our story section */}
      <Box
        id='our-story-section'
        textAlign='center'
        mb={{ base: 12, md: 20 }}
        bg='#111827'
        p={{ base: 4, md: 8 }}
        borderRadius='xl'
        w='100%'
      >
        <Heading
          className='cormorant-garamond-italic'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='bold'
          mb={{ base: 2, md: 4 }}
        >
          Our Story
        </Heading>
        <Text
          opacity={0.7}
          fontSize={{ base: 'md', md: 'lg' }}
          maxW='4xl'
          mx='auto'
          className='bricolage-grotesque-medium'
        >
          Orbyte Studio was born from a simple idea — to stand out and create
          beyond expectations. What started as a project for our multimedia
          class soon became a shared vision built on creativity, teamwork, and
          ambition. From concept to craft, every step shaped who we are today —
          a collective of storytellers and innovators turning imagination into
          experience.
        </Text>
      </Box>

      {/* Mission and Vision section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w={{ base: '100%', md: '80%' }}
        maxW='1200px'
        mb={12}
        px={{ base: 4, md: 0 }}
      >
        <Box
          flex='1'
          textAlign='justify'
          pr={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading
            id='mission-header'
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={{ base: 3, md: 6 }}
            color='white'
            textAlign={{ base: 'center', md: 'left' }}
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='cormorant-garamond-header'
          >
            Our{' '}
            <span
              style={{ color: '#41e0f8' }}
              className='cormorant-garamond-italic'
            >
              Mission
            </span>
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='bricolage-grotesque-medium'
          >
            <Highlight
              query={['inspire, connect, and transform']}
              styles={{
                bg: '#10b0c9',
                color: 'white',
                px: 1,
                borderRadius: 'sm',
              }}
            >
              At Orbyte Studio, our mission is to craft multimedia experiences
              that inspire, connect, and transform. We aim to bridge creativity
              and technology, producing stories that go beyond visuals—stories
              that evoke emotion, spark curiosity, and leave a lasting
              impression. Every project we take on is a chance to challenge
              conventions and celebrate the art of innovation.
            </Highlight>
          </Text>
        </Box>
        <Box flex='1'>
          <Image
            id='mission-image'
            src={MissionPhoto}
            alt='Orbyte Mission Photo'
            w='100%'
            h='350px'
            objectFit={{ base: 'cover', md: 'fill' }}
            borderRadius='2xl'
          />
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w={{ base: '100%', md: '80%' }}
        maxW='1200px'
        mb={16}
        px={{ base: 4, md: 0 }}
      >
        <Box flex='1' order={{ base: 2, md: 1 }}>
          <Image
            id='vision-image'
            src={VisionPhoto}
            alt='Orbyte Vision Photo'
            w='100%'
            h='350px'
            objectFit={{ base: 'cover', md: 'fill' }}
            borderRadius='2xl'
          />
        </Box>

        <Box
          flex='1'
          textAlign='justify'
          pl={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
          order={{ base: 1, md: 2 }}
        >
          <Heading
            id='vision-header'
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={{ base: 3, md: 6 }}
            color='white'
            textAlign={{ base: 'center', md: 'right' }}
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='cormorant-garamond-header'
          >
            Our{' '}
            <span
              style={{ color: '#41e0f8' }}
              className='cormorant-garamond-italic'
            >
              Vision
            </span>
          </Heading>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='bricolage-grotesque-medium'
          >
            <Highlight
              query={['ignite imagination and innovation']}
              styles={{
                bg: '#10b0c9',
                color: 'white',
                px: 1,
                borderRadius: 'sm',
              }}
            >
              Our vision is to ignite imagination and innovation across every
              medium. At Orbyte Studio, we aim to be a guiding light for
              creators who dare to dream beyond limits — shaping a future where
              stories transcend boundaries and creativity becomes a universal
              language. Through every project we pursue, we aspire to redefine
              how people experience art, design, and digital storytelling.
            </Highlight>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
