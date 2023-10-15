import React from "react";
import { Container, Title, Text } from "@mantine/core";
import SwitchModLED from "./switchModLED";
import SwitchEmerLED from "./switchEmerLED";
import InputTimeLED from "./inputTimeLED";

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
          height: "46%",
          marginTop: "1.5rem",
          borderRadius: "0.2rem",
          // backgroundColor: "#a2a5a84f",
        }}
      >
        <SwitchModLED title="- Switch Morning/Night:" />
        <SwitchEmerLED title="- Emergency:" />
        <InputTimeLED title="- Time emergency:" time="9" />
      </Container>

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
        <strong>*Note:</strong> This emergency mode will be activated in 6s and
        the police will be handle the traffic.
      </Text>
    </Container>
  );
}
