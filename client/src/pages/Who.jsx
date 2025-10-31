import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  Flex,
  Image,
  Highlight,
} from '@chakra-ui/react';
import OrbyteAnimation from '@/assets/logo-animation-v2.mp4';
import OrbyteGroupPhoto1 from '@/assets/orbyte-group-photo-1.webp';
import OrbyteGroupPhoto2 from '@/assets/orbyte-group-photo-2.webp';
const Who = () => {
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
    >
      {/* About Orbyte Studio */}
      <Box
        bgColor='#10b0c9'
        p='20px'
        w='100%'
        h={{ base: '35vh', md: '60vh' }}
        textAlign='center'
        borderRadius={16}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Text
          className='bricolage-grotesque-medium'
          fontSize={{ base: '1rem', md: '1.2rem' }}
          mb={{ base: 2, md: 4 }}
          mt={8}
        >
          about orbyte studio
        </Text>
        <Heading
          className='cormorant-garamond-header'
          fontSize={{ base: '2rem', md: '5rem' }}
          textAlign='center'
          letterSpacing='1px'
          lineHeight={0.9}
        >
          H
          <Box
            as='span'
            className='cormorant-garamond-italic'
            color='#41e0f8'
            fontSize={{ base: '2rem', md: '5rem' }}
          >
            o
          </Box>
          w it all st
          <Box
            as='span'
            className='cormorant-garamond-italic'
            fontSize={{ base: '2rem', md: '5rem' }}
          >
            a
          </Box>
          rted
        </Heading>
      </Box>
      {/* Animation */}
      {/* <Box h={{ base: '10vh', md: '30vh' }}>
        <Box
          as='video'
          autoPlay
          muted
          loop
          playsInline
          borderRadius='2xl'
          boxShadow='2xl'
          width='100%'
          maxW='900px'
          position='absolute'
          bottom={{ base: '43%', md: '15%' }}
          left={{ base: '0', md: '20%' }}
          src={OrbyteAnimation}
        >
          Your browser does not support the video tag.
        </Box>
      </Box> */}

      {/* Reason why it started */}
      <Box w='100%' display='flex' justifyContent='center'>
        <Text
          fontSize={{ base: '0.9rem', md: '1rem' }}
          textAlign='center'
          className='bricolage-grotesque-medium'
          mb={{ base: 2, md: 4 }}
          mt={{ base: 2, md: 4 }}
          lineHeight={1.5}
          w='80%'
        >
          It all began in our Multimedia class — a simple project that sparked a
          much bigger idea. We wanted to stand out, to create something beyond
          requirements, something that reflected who we are as IT students —
          creative, curious, and driven by a single vision: to make an impact
          through innovation and design.
        </Text>
      </Box>

      {/* Testimonials */}
      <SimpleGrid
        w='100%'
        mt={{ base: 8, md: 24 }}
        mb={{ base: 8, md: 12 }}
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 8, md: 16 }}
        justifyItems='center'
      >
        {/* Core Members */}
        <Box textAlign='center' mb={{ base: 8, md: 0 }}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
            color='teal.300'
            mb={{ base: 2, md: 4 }}
            className='bricolage-grotesque-medium'
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
            className='bricolage-grotesque-medium'
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
            className='bricolage-grotesque-medium'
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

      {/* General Team Section */}
      <Box mt={{ base: 8, md: 16 }} textAlign='center' mb={{ base: 8, md: 16 }}>
        <Heading
          className='cormorant-garamond-italic'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='bold'
          mb={{ base: 2, md: 4 }}
        >
          Meet Our Leadership
        </Heading>
        <Text
          opacity={0.7}
          fontSize='sm'
          maxW='2xl'
          mx='auto'
          className='bricolage-grotesque-medium'
        >
          At Orbyte Studio, leadership is more than direction — it’s
          collaboration in motion. What began as a group of passionate
          multimedia students evolved into a team of creators, thinkers, and
          visionaries who lead with purpose.
        </Text>
      </Box>

      {/* what are we building section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        maxW='1200px'
        mb={16}
        px={{ base: 4, md: 0 }}
      >
        <Box flex='1' order={{ base: 2, md: 1 }}>
          <Image
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
            fontSize='4xl'
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

      {/* Who are we section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
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
            fontSize='4xl'
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
            src={OrbyteGroupPhoto2}
            alt='Orbyte Group Photo 2'
            w='100%'
            h='400px'
            objectFit={{ base: 'cover', md: 'fill' }}
            borderRadius='2xl'
          />
        </Box>
      </Flex>

      {/* Join us CTA section */}
    </Container>
  );
};

export default Who;
