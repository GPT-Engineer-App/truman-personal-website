import { Box, Flex, Heading, Text, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" mb={4}>
          Harry Truman
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580128636867-7224f71904fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIYXJyeSUyMFRydW1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzc4ODI3OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Harry Truman" mb={4} />
        <Text mt={4}>Harry Truman is a professional software developer with over 10 years of experience in the tech industry, specializing in modern web technologies. He is passionate about building scalable and efficient applications that improve user experiences.</Text>
      </Box>
      <VStack spacing={2} mt={4}>
        <Link href="mailto:harry.truman@example.com" isExternal>
          <IconButton aria-label="Email Harry" icon={<FaEnvelope />} />
        </Link>
        <Link href="https://www.linkedin.com/in/harrytruman" isExternal>
          <IconButton aria-label="LinkedIn profile" icon={<FaLinkedin />} />
        </Link>
        <Link href="https://github.com/harrytruman" isExternal>
          <IconButton aria-label="GitHub profile" icon={<FaGithub />} />
        </Link>
        <Link href="https://twitter.com/harrytruman" isExternal>
          <IconButton aria-label="Twitter profile" icon={<FaTwitter />} />
        </Link>
      </VStack>
    </Flex>
  );
};

export default Index;
