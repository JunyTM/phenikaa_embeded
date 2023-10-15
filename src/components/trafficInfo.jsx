import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  Button,
  Flex,
  Text,
  ActionIcon,
} from "@mantine/core";

export default function TrafficInfo() {
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
  },[]);

  return (
    <Container size="fluid" className="TrafficInfo read-the-docs">
      <Text
        p="2rem"
        style={{
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          fontSize: "2rem",
        }}
        fw={900}
        ta="center"
        variant="gradient"
        gradient={{
          from: "rgba(255, 56, 56, 1)",
          to: "rgba(3, 91, 255, 1)",
          deg: 90,
        }}
      >
        Traffic Information Control
      </Text>
      <Flex
        mih={100}
        gap={30}
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Input
          variant="unstyled"
          size="xl"
          radius="xs"
          placeholder="Input LED information"
          style={{
            width: "30rem",
            // padding: "0.1rem",
            paddingLeft: "2rem",
            border: "4px dashed #ccc",
            alignSelf: "center",
            backgroundColor: "#f7f7f7",
          }}
          rightSection={
            loading && (
              <ActionIcon
                size="xl"
                loading
                loaderProps={{ type: "dots" }}
                style={{
                  backgroundColor: "#a2a5a84f",
                }}
              />
            )
          }
        />
        <Button
          variant="filled"
          color="rgba(142, 128, 255, 1)"
          size="lg"
          radius="md"
          style={{
            width: "10rem",
            height: "4rem",
            alignSelf: "center",
          }}
          className="buttonUpdate"
        >
          Update
        </Button>
      </Flex>
    </Container>
  );
}
