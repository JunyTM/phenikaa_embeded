import React from "react";
import axios from "axios";
import {
  Title,
  Flex,
  Input,
  Switch,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function SwitchModLED(props) {
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

  const handelTrafficMode = (event) => {
    console.log("is night:", event.target.checked);
    axios
      .put(import.meta.env.VITE_APP_BASE_URL + "/traffic", {
        ...props.data,
        is_night: event.target.checked,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

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
      <Switch
        size="md"
        color="dark.4"
        onLabel={sunIcon}
        offLabel={moonIcon}
        style={{ alignSelf: "center" }}
        onChange={handelTrafficMode}
      />
    </Flex>
  );
}
