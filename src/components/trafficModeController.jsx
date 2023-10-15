import React from "react";
import { Container, Title, Flex } from "@mantine/core";
import SwitchModLED from "./switchModLED";
import SwitchEmerLED from "./switchEmerLED";

export default function TrafficModeController() {
  return (
    <Container size="fluid" className="TrafficModeController read-the-docs">
      <Title
        p="1rem"
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
        Traffic Mode In Day
      </Title>

      <Container
        style={{
          width: "100%",
          height: "60%",
          borderRadius: "0.5rem",
          backgroundColor: "#a2a5a84f",
        }}
      >
        <SwitchModLED title="- Switch Morning/Night:" />
        <SwitchEmerLED title="- Emergency:" />
      </Container>
    </Container>
  );
}
