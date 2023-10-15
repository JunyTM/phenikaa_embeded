import React, { useState } from "react";
import {
  Title,
  Flex,
  ActionIcon,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function SwitchEmerLED(props) {
  const [emerLoading, setEmerLoading] = useState(true);
  const theme = useMantineTheme();
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );
  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Flex
      w="100%"
      ml={10}
      mih={50}
      gap={30}
      justify="space-between"
      align="flex-start"
      direction="row"
      wrap="wrap"
      //   bg={"#f7f7f7"}
    >
      <Title
        order={3}
        size="h5"
        style={{
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          alignSelf: "center",
        }}
        fw={900}
        ta="center"
      >
        {props.title}
      </Title>
      {emerLoading ? (
        <Button
          variant="filled"
          color="rgba(189, 185, 185, 1)"
          radius="lg"
          style={{ alignSelf: "center" }}
        >
          Button
        </Button>
      ) : (
        <ActionIcon
          size="xl"
          loading
          loaderProps={{ type: "dots" }}
          style={{ alignSelf: "center" }}
        />
      )}
    </Flex>
  );
}
