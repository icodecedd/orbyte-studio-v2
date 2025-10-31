import FadeContent from '@/blocks/Animations/FadeContent/FadeContent';
import { Box, Button, Menu, Portal, IconButton, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  FiHome,
  FiInfo,
  FiLock,
  FiLogIn,
  FiMail,
  FiMenu,
  FiMessageSquare,
  FiUsers,
  FiX,
} from 'react-icons/fi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      bottom={{ base: 2, md: 4 }}
      zIndex={2}
      display='flex'
      position='fixed'
      gap={{ base: 0.25, md: 0.5 }}
      p={{ base: 0.5, md: 1 }}
      borderRadius='xl'
      bg='rgba(255, 255, 255, 0.05)'
      backdropFilter='blur(16px)'
      border='1px solid rgba(255, 255, 255, 0.18)'
      boxShadow='0 4px 30px rgba(0, 0, 0, 0.1)'
    >
      <FadeContent
        blur={true}
        duration={1000}
        easing='ease-out'
        initialOpacity={0}
      >
        <Button
          as={RouterLink}
          to='/'
          variant='ghost'
          color='white'
          size='xs'
          fontWeight='medium'
          fontSize={{ base: '2xs', md: 'xs' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 1.5 }}
        >
          <FiHome
            size={14}
            style={{ marginRight: { base: '2px', md: '4px' } }}
          />
          <Text>Home</Text>
        </Button>
        <Button
          as={RouterLink}
          to='/about'
          variant='ghost'
          color='white'
          size='xs'
          fontWeight='medium'
          fontSize={{ base: '2xs', md: 'xs' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 1.5 }}
        >
          <FiInfo
            size={14}
            style={{ marginRight: { base: '2px', md: '4px' } }}
          />
          <Text>About</Text>
        </Button>
        <Button
          as={RouterLink}
          to='/team'
          variant='ghost'
          color='white'
          size='xs'
          fontWeight='medium'
          fontSize={{ base: '2xs', md: 'xs' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 1.5 }}
        >
          <FiUsers
            size={14}
            style={{ marginRight: { base: '2px', md: '4px' } }}
          />
          <Text>Team</Text>
        </Button>
        <Button
          as={RouterLink}
          to='/projects'
          variant='ghost'
          color='white'
          size='xs'
          fontWeight='medium'
          fontSize={{ base: '2xs', md: 'xs' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 1.5 }}
        >
          <IoBriefcaseOutline
            size={14}
            style={{ marginRight: { base: '2px', md: '4px' } }}
          />
          <Text>Projects</Text>
        </Button>

        <Menu.Root
          closeOnSelect
          onExitComplete={() => setIsMenuOpen(false)}
          positioning={{ placement: 'top-end' }}
          size={{ base: 'sm', md: 'md' }}
        >
          <Menu.Trigger asChild>
            <IconButton
              variant='ghost'
              aria-label='Menu'
              color='white'
              size='xs'
              borderRadius='lg'
              transition='all 0.3s ease-in-out'
              bg='rgba(255, 255, 255, 0.05)'
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              _expanded={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={14} /> : <FiMenu size={14} />}
            </IconButton>
          </Menu.Trigger>

          <Portal>
            <Menu.Positioner>
              <Menu.Content
                borderRadius='xl'
                bg='rgba(255, 255, 255, 0.05)'
                backdropFilter='blur(16px)'
                border='1px solid rgba(255, 255, 255, 0.18)'
                boxShadow='0 4px 30px rgba(0, 0, 0, 0.1)'
                p={1.5}
                minW={{ base: '100px', md: '120px' }}
              >
                <Menu.Item
                  value='blogs'
                  as={RouterLink}
                  to='/blogs'
                  color='white'
                  borderRadius='lg'
                  fontWeight='medium'
                  fontSize={{ base: '2xs', md: 'xs' }}
                  bg='rgba(255, 255, 255, 0.05)'
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
                  py={1.5}
                  px={2.5}
                >
                  <FiLock size={14} style={{ marginRight: '6px' }} />
                  Blogs
                </Menu.Item>
                <Menu.Item
                  value='contact'
                  as={RouterLink}
                  to='/contact'
                  color='white'
                  borderRadius='lg'
                  fontWeight='medium'
                  fontSize={{ base: '2xs', md: 'xs' }}
                  bg='rgba(255, 255, 255, 0.05)'
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
                  py={1.5}
                  px={2.5}
                >
                  <FiMail size={14} style={{ marginRight: '6px' }} />
                  <Text mt={1}>Contact</Text>
                </Menu.Item>
                <Menu.Item
                  as={RouterLink}
                  to='/feedback'
                  value='feedback'
                  color='white'
                  borderRadius='lg'
                  fontWeight='medium'
                  fontSize={{ base: '2xs', md: 'xs' }}
                  bg='rgba(255, 255, 255, 0.05)'
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
                  py={1.5}
                  px={2.5}
                >
                  <FiMessageSquare size={14} style={{ marginRight: '6px' }} />
                  <Text mt={1}>Feedback</Text>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </FadeContent>
    </Box>
  );
};
