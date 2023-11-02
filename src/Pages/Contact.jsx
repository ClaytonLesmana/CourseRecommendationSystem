import { useState } from "react";
import {
  TextInput,
  Textarea,
  Card,
  Button,
  Group,
  Title,
} from "@mantine/core";
import {
  AiOutlineYoutube,
  AiOutlinePhone,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiTwitter, FiSun } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import { BsSun } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
// import { FiTwitter } from "react-icons/ci";
 
// BsSun,
// FiTwitter,
 
import "../Styles/Contact.css";
// ... other imports and code ...
 
export default function Contact() {
  return (
    <>
      <div className="ContactUs-container">
        <Group justify="center" gap="xs">
          <div className="ContactUs-section">
            <div className="contact-header">
              <Title className="title">Contact Us</Title>
              <p>
                Leave your email and we will get back to you within 24 hours
              </p>
            </div>
            <div className="contact-details">
              <Group>
                <MdAlternateEmail size={30} />
                <Title size="h3">Email</Title>
                <p>coursematcher@gmail.com</p>
              </Group>
              <Group>
                <AiOutlinePhone size={30} />
                <Title size="h3">Phone</Title>
                <p>+61-450-916-106</p>
              </Group>
              <Group>
                <HiOutlineLocationMarker size={30} />
                <Title size="h3">Location</Title>
                <p>UTS Building 2</p>
              </Group>
              <Group>
                <FiSun size={26} />
                <Title size="h3">Working Hours</Title>
                <p>8 a.m. - 11 p.m.</p>
              </Group>
            </div>
            <Group className="social-icons">
              <FiTwitter size={25} />
              <AiOutlineYoutube size={25} />
              <AiOutlineInstagram size={25} />
            </Group>
          </div>
        </Group>
 
        <div className="cards-section">
          <Card
            className="card"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <TextInput mt="md" placeholder="your@email.com" label="Email" />
            <TextInput mt="md" placeholder="" label="Name" />
 
            <Textarea
              className="Textarea"
              mt="md"
              placeholder="Type your message here..."
              label="Your Message"
              minRows={5} // Initial number of rows
            />
 
            <Group justify="flex-end" mt="lg">
              <Button>Send Message</Button>
            </Group>
          </Card>
        </div>
      </div>
    </>
  );
}