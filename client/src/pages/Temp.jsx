import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CelestialTeam } from '@/constants/CelestialTeam';

gsap.registerPlugin(ScrollTrigger);

const Temp = () => {
  const curveRef = useRef(null);
  const radius = 420; // Fixed radius for the arc

  // Animate the whole curve on scroll-in
  useEffect(() => {
    gsap.fromTo(
      '.celestial-card',
      { opacity: 0, y: 80, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: curveRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Container
      as='section'
      id='team'
      maxW='container.xl'
      py={{ base: 16, md: 24 }}
      overflow='hidden'
      position='relative'
    >
      {/* ----- Hero ----- */}
      <VStack spacing={6} textAlign='center' mb={{ base: 16, md: 20 }}>
        <AnimatedContent threshold={0.2}>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color='whiteAlpha.800'
            letterSpacing='widest'
            textTransform='uppercase'
            fontWeight='medium'
            className='major-mono-display-regular'
          >
            Celestial Innovators
          </Text>
        </AnimatedContent>

        <AnimatedContent distance={60} duration={1}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight='extrabold'
            bgGradient='linear(to-r, white, whiteAlpha.900)'
            bgClip='text'
            lineHeight='0.9'
            maxW='900px'
          >
            Architects of Tomorrow
          </Heading>
        </AnimatedContent>

        <AnimatedContent delay={0.3}>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color='whiteAlpha.700'
            maxW='700px'
            lineHeight='1.7'
          >
            Visionary minds shaping the future – aligned in a perfect celestial
            arc.
          </Text>
        </AnimatedContent>
      </VStack>

      {/* ----- Static Curved Layout ----- */}
      <Box
        ref={curveRef}
        position='relative'
        h={{ base: '420px', md: '560px' }}
        perspective='1400px'
        overflow='visible'
      >
        <Box
          position='absolute'
          top='50%'
          left='50%'
          w='1px'
          h='1px'
          transform='translate(-50%, -50%)'
          transformStyle='preserve-3d'
        >
          {CelestialTeam.map((member, idx) => {
            const total = CelestialTeam.length;
            const angleStep = 180 / (total - 1); // 180° arc
            const angle = -90 + angleStep * idx; // start left, end right
            const rad = (angle * Math.PI) / 180;

            const x = radius * Math.cos(rad);
            const z = radius * Math.sin(rad) - radius; // shift forward
            const rotateY = -angle;

            return (
              <Box
                key={idx}
                className='celestial-card'
                position='absolute'
                top='50%'
                left='50%'
                w='260px'
                h='340px'
                ml='-130px'
                mt='-170px'
                transform={`translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`}
                transformOrigin='center'
                opacity={0} // will be animated in
              >
                {/* Glass Card */}
                <Box
                  bg='whiteAlpha.100'
                  backdropFilter='blur(14px)'
                  border='1px solid'
                  borderColor='whiteAlpha.300'
                  borderRadius='2xl'
                  p={4}
                  h='full'
                  display='flex'
                  flexDir='column'
                  justify='space-between'
                  boxShadow='0 12px 40px rgba(0,0,0,0.35)'
                  transition='transform 0.3s ease'
                  _hover={{
                    transform: 'translateY(-12px) scale(1.03)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
                  }}
                >
                  {/* Avatar */}
                  <Box flex='1' overflow='hidden' borderRadius='xl'>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        objectFit='cover'
                        w='full'
                        h='full'
                      />
                    ) : (
                      <Box
                        bgGradient='linear(to-br, purple.500, indigo.600)'
                        w='full'
                        h='full'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        color='white'
                        fontSize='5xl'
                        fontWeight='bold'
                      >
                        {member.name.charAt(0)}
                      </Box>
                    )}
                  </Box>

                  {/* Name + Role */}
                  <VStack spacing={1} mt={3} align='start'>
                    <Text
                      fontWeight='bold'
                      color='white'
                      fontSize='md'
                      noOfLines={1}
                    >
                      {member.name}
                    </Text>
                    <Text fontSize='sm' color='whiteAlpha.700'>
                      {member.role}
                    </Text>
                  </VStack>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ----- CTA ----- */}
      <Flex justify='center' mt={{ base: 16, md: 20 }}>
        <Box
          maxW='500px'
          w='100%'
          bg='rgba(20,20,40,0.7)'
          backdropFilter='blur(16px)'
          border='1px solid'
          borderColor='whiteAlpha.300'
          borderRadius='2xl'
          p={{ base: 8, md: 10 }}
          textAlign='center'
          boxShadow='0 20px 60px rgba(0,0,0,.4)'
        >
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color='whiteAlpha.800'
            fontWeight='medium'
            mb={3}
            className='major-mono-display-regular'
          >
            Inspired by the Stars?
          </Text>
          <Heading fontSize={{ base: '3xl', md: '5xl' }} color='white' mb={6}>
            Join the Celestial Circle
          </Heading>
          <Button
            as={RouterLink}
            to='/contact'
            size='lg'
            bg='white'
            color='black'
            fontWeight='bold'
            px={8}
            borderRadius='full'
            _hover={{
              bg: 'whiteAlpha.900',
              transform: 'translateY(-2px)',
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Temp;
