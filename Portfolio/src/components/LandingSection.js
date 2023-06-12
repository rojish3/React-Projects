import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    <Avatar size='2xl' src="https://i.pravatar.cc/150?img=7"></Avatar>
    <Heading size='md'>Hello I'm Pete!</Heading>
    <br />
    <Heading size='lg' textAlign='center'>A frontend developer <br /> specialised in React</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
