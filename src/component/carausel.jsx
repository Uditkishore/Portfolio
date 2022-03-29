import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiHeroku } from "react-icons/si";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Flex } from "@chakra-ui/react";
export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid="md">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Card
            style={{
              display: "flex",
              backgroundColor: " #10101a",
              textAlign: "justify",
            }}
          >
            <Card.Img
              variant="top"
              src="https://miro.medium.com/max/1400/1*Y_bMOVx7qF8cyJ7rF6qI_A.jpeg"
            />
            <Card.Body className="mb-4">
              <Card.Text>
                The Company offers its customers an assortment of building
                materials, home improvement products, and facilities
                maintenance, repair and operations products and provides a
                number of services, including home improvement installation
                services and tool and equipment rental.
              </Card.Text>
              <Flex
                m={"20px"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                gap={3}
              >
                <Button
                  _hover={{ textDecoration: "none" }}
                  href="https://github.com/SakethReddy1111/Home_Depot"
                  target={"_blank"}
                  className="btn-lg w-50  "
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <AiFillGithub /> <span>Github</span>
                </Button>
                <Button
                  _hover={{ textDecoration: "none" }}
                  href="https://friendly-swanson-b92bb2.netlify.app/"
                  target={"_blank"}
                  className="btn-lg w-50  "
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <SiHeroku /> <span>Deployed</span>
                </Button>
                <Button
                  _hover={{ textDecoration: "none" }}
                  href="https://medium.com/@uditkishor/the-totality-of-cloning-the-home-depot-website-731c655e43c3"
                  target={"_blank"}
                  className="btn-lg w-50  "
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <SiHeroku /> <span>Blog</span>
                </Button>
              </Flex>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <>
            <Card
              style={{
                backgroundColor: " #10101a",
                textAlign: "justify",
              }}
            >
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/1400/1*-o0Gs4y3ES5Kjjnj4FB3ig.png"
              />
              <Card.Body className="mb-4">
                <Card.Text>
                  Dineout App provides you with exciting offers on a plethora of
                  restaurants, exclusive discounts on buffets, complimentary
                  dishes & a lot more. Get up to 50% off on food & drinks.
                  Discover new places, cuisines & premium restaurants without
                  the fear of over-spending.
                </Card.Text>
                <Flex
                  m={"20px"}
                  justifyContent={"center"}
                  flexWrap={"wrap"}
                  gap={3}
                >
                  <Button
                    _hover={{ textDecoration: "none" }}
                    href="https://github.com/Uditkishore/CW-Project"
                    target={"_blank"}
                    className="btn-lg w-50  "
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >                    <AiFillGithub /> <span>Github</span>
                  </Button>
                  <Button
                    _hover={{ textDecoration: "none" }}
                    href="https://affectionate-swirles-dc9e0e.netlify.app/index.html"
                    target={"_blank"}
                    className="btn-lg w-50  "
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",

                      gap: "5px",
                    }}
                  >
                    <SiHeroku /> <span>Deployed</span>
                  </Button>
                  <Button
                    _hover={{ textDecoration: "none" }}
                    href="https://medium.com/@walsongodwin/how-did-we-build-dine-out-co-in-website-clone-d6151d399436"
                    target={"_blank"}
                    className="btn-lg w-50  "
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <SiHeroku /> <span>Blog</span>
                  </Button>
                </Flex>
              </Card.Body>
            </Card>
          </>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
