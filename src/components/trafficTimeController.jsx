import React from "react";
import InputTimeLED from "./inputTimeLED";
import { Container, Title, Button, Text } from "@mantine/core";

export default function TrafficTimeController() {
  // const icon = <IconPhoto size={14} />;

  return (
    <Container size="fluid" className="TrafficTimeController read-the-docs">
      <Title
        p="1rem"
        // mb="0.2rem"
        order={1}
        size="h3"
        style={{
          margin: "auto",
          width: "90%",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          textShadow: "0 0 10px #ccc",
        }}
        fw={900}
        ta="center"
      >
        Traffic Control Time Down
      </Title>

      <Container
        style={{
          width: "90%",
          height: "50%",
          padding: "0.5rem",
        }}
      >
        <InputTimeLED title="- Time red:" time="9" />
        <InputTimeLED title="- Time yellow:" time="3" />
        <InputTimeLED title="- Time green:" time="6" />
      </Container>

      <Button
        w="50%"
        justify="center"
        // leftSection={icon}
        // rightSection={icon}
        variant="filled"
      >
        submit
      </Button>

      <Text
        style={{
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          fontWeight: 500,
          fontSize: "0.9rem",
          textShadow: "0 0 10px #ccc",
        }}
        mt="1rem"
        ta="center"
      >
        <strong >*Note:</strong> Time traffic not allowed hight than 10s
      </Text>
    </Container>
  );
}
