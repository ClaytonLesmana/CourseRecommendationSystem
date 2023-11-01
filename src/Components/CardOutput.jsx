import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function CardOutput({ title }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        {/* Course Title */}
        <Text size="lg" fw={700}>
          {title}
        </Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
      </Group>

      {/* <Text size="sm" c="dimmed">
        Requisite(s): 31266 Introduction to Information Systems OR 31060
        Information Systems Principles OR 31472 Introduction to Collaborative
        Systems OR 31484 Information Systems Foundations OR 31414 Information
        Systems
      </Text> */}

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View Course
      </Button>
    </Card>
  );
}
