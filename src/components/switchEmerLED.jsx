import React, { useState } from "react";
import axios from "axios";
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
  const [emerLoading, setEmerLoading] = useState(false);
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

  const handelButtonUpdate = () => {
    axios
      .put(import.meta.env.VITE_APP_BASE_URL + "/traffic", {
        ...props.data,
        is_emergency: true,
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
      {!emerLoading ? (
        <Button
          variant="filled"
          color="rgba(189, 185, 185, 1)"
          radius="lg"
          style={{ alignSelf: "center" }}
          onClick={handelButtonUpdate}
        >
          Button
        </Button>
      ) : (
        <ActionIcon
          size="xl"
          loading
          loaderProps={{ type: "dots" }}
          style={{ alignSelf: "center", backgroundColor: "#a2a5a84f" }}
        />
      )}
    </Flex>
  );
}
