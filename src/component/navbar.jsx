import { Link, Stack } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Stack
      className="Header"
      bgGradient="linear(to-l, #10101a,#FF0080)"
      direction="horizontal"
      gap={3}
      ariant="secondary"
      justifyContent="space-around"
      padding="20px"
      color="#fff"
    >
      <Link href="/" _hover={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link href="#about" _hover={{ textDecoration: "none" }}>
        About Me
      </Link>
      <Link href="#skills" _hover={{ textDecoration: "none" }}>
        Skills
      </Link>
      <Link href="#projects" _hover={{ textDecoration: "none" }}>
        Projects
      </Link>
      <Link href="#contacts" _hover={{ textDecoration: "none" }}>
        Contact
      </Link>
    </Stack>
  );
};
