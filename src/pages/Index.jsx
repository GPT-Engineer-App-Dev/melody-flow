import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaSearch, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.900" color="white" p={4} align="center">
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            MusicStream
          </Link>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/" display="flex" alignItems="center">
              <FaHome />
              <Text ml={2}>Home</Text>
            </Link>
            <Link as={RouterLink} to="/browse" display="flex" alignItems="center">
              <FaSearch />
              <Text ml={2}>Browse</Text>
            </Link>
            <Link as={RouterLink} to="/library" display="flex" alignItems="center">
              <FaBook />
              <Text ml={2}>Library</Text>
            </Link>
            <Link as={RouterLink} to="/profile" display="flex" alignItems="center">
              <FaUser />
              <Text ml={2}>Profile</Text>
            </Link>
          </HStack>
        </HStack>
        <Spacer />
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h1" size="xl" mb={6}>
          Featured Playlists
        </Heading>
        <VStack spacing={4} align="start">
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Heading as="h2" size="md">Top Hits</Heading>
            <Text>Enjoy the latest hits from around the world.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Heading as="h2" size="md">Chill Vibes</Heading>
            <Text>Relax and unwind with these chill tracks.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Heading as="h2" size="md">Workout</Heading>
            <Text>Get pumped with these high-energy songs.</Text>
          </Box>
        </VStack>
      </Box>

      <Box as="footer" bg="gray.900" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 MusicStream</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;