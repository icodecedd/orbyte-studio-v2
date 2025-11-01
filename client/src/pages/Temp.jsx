'use client';

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
import { motion } from 'framer-motion';

// ── Asset Imports ─────────────────────────────────────────────────────
import OrbyteAnimation from '@/assets/logo-animation-v2.mp4';
import OrbyteGroupPhoto1 from '@/assets/orbyte-group-photo-1.webp';
import OrbyteGroupPhoto2 from '@/assets/orbyte-group-photo-2.webp';
import JoinUsPhoto from '@/assets/join-us-photo.webp';
import ChiefExecutiveOfficer from '@/assets/pii-chief-executive-officer.webp';
import ProjectManager from '@/assets/pii-project-manager.webp';
import CreativeDirector from '@/assets/pii-creative-director.webp';
import ITSpecialist from '@/assets/pii-it-specialist.webp';
import MissionPhoto from '@/assets/mission-pii.webp';
import VisionPhoto from '@/assets/vision-pii.webp';

// ── Motion wrapper ─────────────────────────────────────────────────────
const MotionBox = motion(Box);
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Temp = () => {
  return (
    <Box
      as='section'
      id='about'
      minH='100vh'
      bg='#0a1d2e'
      color='white'
      overflowX='hidden'
    >
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <Box
        position='relative'
        overflow='hidden'
        py={{ base: 20, md: 32 }}
        textAlign='center'
        bgGradient='linear(to-b, #0b6477, #10b0c9)'
        borderBottomRadius={{ base: '2xl', md: '3xl' }}
      >
        <Container maxW='container.xl'>
          <VStack spacing={{ base: 4, md: 6 }}>
            <Text
              fontFamily='bricolage'
              fontWeight='medium'
              fontSize={{ base: 'sm', md: 'lg' }}
              letterSpacing='wide'
              textTransform='uppercase'
              opacity={0.9}
            >
              About Orbyte Studio
            </Text>

            <Heading
              fontFamily='cormorant'
              fontSize={{ base: '4xl', md: '7xl' }}
              lineHeight={0.9}
              letterSpacing='tight'
            >
              H
              <Box as='span' color='#41e0f8' fontStyle='italic'>
                o
              </Box>
              w it all st
              <Box as='span' fontStyle='italic'>
                a
              </Box>
              rted
            </Heading>
          </VStack>
        </Container>
      </Box>

      {/* ── ORIGIN STORY ─────────────────────────────────────────────── */}
      <Container maxW='container.lg' py={{ base: 12, md: 20 }}>
        <MotionBox
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Text
            fontFamily='bricolage'
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight='tall'
            textAlign='center'
            maxW='3xl'
            mx='auto'
            opacity={0.9}
          >
            It all began in our <strong>Multimedia class</strong> — a simple
            project that sparked a much bigger idea. We wanted to stand out, to
            create something beyond requirements, something that reflected who
            we are as IT students — creative, curious, and driven by a single
            vision:{' '}
            <strong>to make an impact through innovation and design</strong>.
          </Text>
        </MotionBox>
      </Container>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <Box
        bg='#111827'
        py={{ base: 12, md: 20 }}
        borderTop='1px solid'
        borderColor='#1f2937'
      >
        <Container maxW='container.xl'>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 10, md: 16 }}
          >
            {[
              {
                num: 4,
                label: 'Core Members',
                help: 'The backbone of our organization — leading every initiative and vision.',
                color: 'teal.400',
              },
              {
                num: 9,
                label: 'On-the-Job Trainees',
                help: 'Dedicated interns bringing fresh ideas and real-world impact.',
                color: 'cyan.400',
              },
              {
                num: 1,
                label: 'Vision',
                help: 'To inspire, innovate, and make technology a bridge for creativity.',
                color: 'purple.400',
              },
            ].map((stat, i) => (
              <Box key={i} textAlign='center' px={4}>
                <MotionBox
                  variants={fadeInUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  <Heading
                    fontSize={{ base: '5xl', md: '6xl' }}
                    fontWeight='bold'
                    color={stat.color}
                    fontFamily='bricolage'
                  >
                    {stat.num}
                  </Heading>
                  <Text
                    fontFamily='bricolage'
                    fontWeight='medium'
                    fontSize={{ base: 'lg', md: 'xl' }}
                    mt={2}
                  >
                    {stat.label}
                  </Text>
                  <Text
                    fontFamily='bricolage'
                    opacity={0.7}
                    maxW='sm'
                    mx='auto'
                    mt={2}
                    fontSize='sm'
                  >
                    {stat.help}
                  </Text>
                </MotionBox>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── LEADERSHIP INTRO ─────────────────────────────────────────── */}
      <Container
        maxW='container.lg'
        py={{ base: 12, md: 20 }}
        textAlign='center'
      >
        <MotionBox
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Heading
            fontFamily='cormorant'
            fontStyle='italic'
            fontSize={{ base: '3xl', md: '5xl' }}
            mb={4}
          >
            Meet Our Leadership
          </Heading>
          <Text
            fontFamily='bricolage'
            opacity={0.75}
            maxW='2xl'
            mx='auto'
            fontSize={{ base: 'sm', md: 'md' }}
          >
            At Orbyte Studio, leadership is more than direction — it’s
            collaboration in motion. What began as a group of passionate
            multimedia students evolved into a team of creators, thinkers, and
            visionaries who lead with purpose.
          </Text>
        </MotionBox>
      </Container>

      {/* ── WHAT WE BUILD ─────────────────────────────────────────────── */}
      <Container maxW='container.xl' py={{ base: 12, md: 20 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          gap={{ base: 8, md: 12 }}
          mb={{ base: 12, md: 20 }}
        >
          <Box flex='1' order={{ base: 2, md: 1 }}>
            <Image
              src={OrbyteGroupPhoto1}
              alt='Orbyte team working together'
              borderRadius='2xl'
              objectFit='cover'
              height={{ base: '300px', md: '450px' }}
              width='100%'
              boxShadow='dark-lg'
            />
          </Box>

          <VStack
            flex='1'
            align={{ base: 'center', md: 'flex-end' }}
            spacing={4}
            order={{ base: 1, md: 2 }}
          >
            <Heading
              fontFamily='cormorant'
              fontSize={{ base: '2xl', md: '4xl' }}
              textAlign={{ base: 'center', md: 'right' }}
            >
              What are we{' '}
              <Box as='span' color='#41e0f8' fontStyle='italic'>
                building
              </Box>
            </Heading>
            <Text
              fontFamily='bricolage'
              fontSize={{ base: 'md', md: 'lg' }}
              textAlign={{ base: 'center', md: 'right' }}
              maxW='lg'
              opacity={0.95}
            >
              <Highlight
                query={['crafting the future']}
                styles={{
                  bg: '#10b0c9',
                  color: 'white',
                  px: '2',
                  py: '1',
                  borderRadius: 'md',
                }}
              >
                At Orbyte Studio, we're crafting the future of multimedia
                storytelling. Like celestial bodies that illuminate the cosmos,
                we create content that captures imagination and transforms ideas
                into stellar experiences.
              </Highlight>
            </Text>
          </VStack>
        </Flex>

        {/* ── WHO WE ARE ─────────────────────────────────────────────── */}
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          align='center'
          gap={{ base: 8, md: 12 }}
        >
          <VStack
            flex='1'
            align={{ base: 'center', md: 'flex-start' }}
            spacing={4}
          >
            <Heading
              fontFamily='cormorant'
              fontSize={{ base: '2xl', md: '4xl' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Who we{' '}
              <Box as='span' color='#41e0f8' fontStyle='italic'>
                are
              </Box>
            </Heading>
            <Text
              fontFamily='bricolage'
              fontSize={{ base: 'md', md: 'lg' }}
              textAlign={{ base: 'center', md: 'left' }}
              maxW='lg'
              opacity={0.95}
            >
              <Highlight
                query={['moves, inspires, and endures']}
                styles={{
                  bg: '#10b0c9',
                  color: 'white',
                  px: '2',
                  py: '1',
                  borderRadius: 'md',
                }}
              >
                We are dreamers, creators, and cosmic architects united by a
                shared passion for multimedia excellence. Our constellation
                includes visionaries from diverse backgrounds—filmmakers,
                designers, strategists, and storytellers—all orbiting around the
                common goal of creating content that moves, inspires, and
                endures.
              </Highlight>
            </Text>
          </VStack>

          <Box flex='1'>
            <Image
              src={OrbyteGroupPhoto2}
              alt='Orbyte team portrait'
              borderRadius='2xl'
              objectFit='cover'
              height={{ base: '300px', md: '450px' }}
              width='100%'
              boxShadow='dark-lg'
            />
          </Box>
        </Flex>
      </Container>

      {/* ── JOIN US CTA ─────────────────────────────────────────────── */}
      <Box
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
                fontFamily='bricolage'
                maxW='lg'
                fontSize={{ base: 'sm', md: 'md' }}
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

      {/* ── OUR STORY + LEADERSHIP GRID ───────────────────────────────── */}
      <Container
        maxW='container.lg'
        py={{ base: 12, md: 20 }}
        textAlign='center'
      >
        <MotionBox
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Heading
            fontFamily='cormorant'
            fontStyle='italic'
            fontSize={{ base: '3xl', md: '5xl' }}
            mb={4}
          >
            Our Story
          </Heading>
          <Text
            fontFamily='bricolage'
            opacity={0.75}
            maxW='2xl'
            mx='auto'
            mb={12}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Orbyte Studio was born from a simple idea — to stand out and create
            beyond expectations. What started as a project for our multimedia
            class soon became a shared vision built on creativity, teamwork, and
            ambition.
          </Text>
        </MotionBox>

        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4 }}
          spacing={{ base: 6, md: 10 }}
        >
          {[
            { src: ChiefExecutiveOfficer, title: 'CEO' },
            { src: ProjectManager, title: 'Project Manager' },
            { src: CreativeDirector, title: 'Creative Director' },
            { src: ITSpecialist, title: 'IT Specialist' },
          ].map((person, i) => (
            <MotionBox
              key={i}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              cursor='pointer'
            >
              <Image
                src={person.src}
                alt={person.title}
                borderRadius='lg'
                objectFit='cover'
                width='100%'
                height='auto'
                boxShadow='lg'
                border='2px solid'
                borderColor='#1f2937'
              />
              <Text
                mt={3}
                fontFamily='bricolage'
                fontWeight='medium'
                fontSize='sm'
              >
                {person.title}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* ── MISSION ─────────────────────────────────────────────────── */}
      <Box bg='#111827' py={{ base: 12, md: 20 }}>
        <Container maxW='container.xl'>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align='center'
            gap={{ base: 8, md: 12 }}
            mb={{ base: 12, md: 20 }}
          >
            <VStack
              flex='1'
              align={{ base: 'center', md: 'flex-start' }}
              spacing={4}
            >
              <Heading
                fontFamily='cormorant'
                fontSize={{ base: '2xl', md: '4xl' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Our{' '}
                <Box as='span' color='#41e0f8' fontStyle='italic'>
                  Mission
                </Box>
              </Heading>
              <Text
                fontFamily='bricolage'
                fontSize={{ base: 'md', md: 'lg' }}
                textAlign={{ base: 'center', md: 'left' }}
                maxW='lg'
                opacity={0.95}
              >
                <Highlight
                  query={['inspire, connect, and transform']}
                  styles={{
                    bg: '#10b0c9',
                    color: 'white',
                    px: '2',
                    py: '1',
                    borderRadius: 'md',
                  }}
                >
                  At Orbyte Studio, our mission is to craft multimedia
                  experiences that inspire, connect, and transform. We aim to
                  bridge creativity and technology, producing stories that go
                  beyond visuals—stories that evoke emotion, spark curiosity,
                  and leave a lasting impression.
                </Highlight>
              </Text>
            </VStack>

            <Box flex='1'>
              <Image
                src={MissionPhoto}
                alt='Orbyte mission illustration'
                borderRadius='2xl'
                objectFit='cover'
                height={{ base: '300px', md: '400px' }}
                width='100%'
                boxShadow='dark-lg'
              />
            </Box>
          </Flex>

          {/* ── VISION ─────────────────────────────────────────────── */}
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            align='center'
            gap={{ base: 8, md: 12 }}
          >
            <Box flex='1'>
              <Image
                src={VisionPhoto}
                alt='Orbyte vision illustration'
                borderRadius='2xl'
                objectFit='cover'
                height={{ base: '300px', md: '400px' }}
                width='100%'
                boxShadow='dark-lg'
              />
            </Box>

            <VStack
              flex='1'
              align={{ base: 'center', md: 'flex-end' }}
              spacing={4}
            >
              <Heading
                fontFamily='cormorant'
                fontSize={{ base: '2xl', md: '4xl' }}
                textAlign={{ base: 'center', md: 'right' }}
              >
                Our{' '}
                <Box as='span' color='#41e0f8' fontStyle='italic'>
                  Vision
                </Box>
              </Heading>
              <Text
                fontFamily='bricolage'
                fontSize={{ base: 'md', md: 'lg' }}
                textAlign={{ base: 'center', md: 'right' }}
                maxW='lg'
                opacity={0.95}
              >
                <Highlight
                  query={['ignite imagination and innovation']}
                  styles={{
                    bg: '#10b0c9',
                    color: 'white',
                    px: '2',
                    py: '1',
                    borderRadius: 'md',
                  }}
                >
                  Our vision is to ignite imagination and innovation across
                  every medium. At Orbyte Studio, we aim to be a guiding light
                  for creators who dare to dream beyond limits — shaping a
                  future where stories transcend boundaries and creativity
                  becomes a universal language.
                </Highlight>
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Temp;
