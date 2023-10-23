import React, { useState } from "react";
import axios from "axios";
import {
  Title,
  Flex,
  ActionIcon,
  Button,
  useMantineTheme,
  rem,
  Switch,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function SwitchEmerLED(props) {
  const handelSwitchUpdate = (event) => {
    console.log("is night:", event.target.checked);
    axios
      .put(import.meta.env.VITE_APP_BASE_URL + "/traffic", {
        ...props.data,
        is_emergency: event.target.checked,
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
      {/* {!emerLoading ? ( */}
      <Switch
        size="lg"
        onLabel="ON"
        offLabel="OFF"
        style={{
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          alignSelf: "center",
        }}
        onChange={handelSwitchUpdate}
      />
      {/* ) : (
        <ActionIcon
          size="xl"
          loading
          loaderProps={{ type: "dots" }}
          style={{ alignSelf: "center", backgroundColor: "#a2a5a84f" }}
        />
      )} */}
    </Flex>
  );
}
