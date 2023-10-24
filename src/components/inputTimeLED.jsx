import React, { useState } from "react";
import { Title, Flex, Input } from "@mantine/core";

export default function InputTimeLED(props) {
  return (
    <Flex
      w="95%"
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
      <Input
        variant="unstyled"
        size="sm"
        radius="xs"
        value={props.time}
        style={{
          alignSelf: "center",
          paddingLeft: ".2rem",
          paddingRight: "0.2rem",
          width: "3.6rem",
          border: "1px solid #ccc",
          backgroundColor: "#f7f7f7",
          fontWeight: 600,
        }}
        onChange={(event) => {
          console.log(event.target.value);
          if (event.target.value == NaN || event.target.value == "" || event.target.value < 0 || event.target.value == null) {
            event.target.value = 0;
          }
          props.setTime({
            ...props.data,
            [props.type]: parseInt(event.target.value),
          });
        }}
      />
    </Flex>
  );
}
