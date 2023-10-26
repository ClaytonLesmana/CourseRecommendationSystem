import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function CardOutput() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section> */}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Business Requirement Modelling</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Requisite(s): 31266 Introduction to Information Systems OR 31060
        Information Systems Principles OR 31472 Introduction to Collaborative
        Systems OR 31484 Information Systems Foundations OR 31414 Information
        Systems
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View Course
      </Button>
    </Card>
  );
}
