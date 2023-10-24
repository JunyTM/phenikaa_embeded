import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Input,
  Button,
  Flex,
  Title,
  Text,
  ActionIcon,
} from "@mantine/core";
export default function TrafficInfo({ objectModel }) {
  const [messloading, setMessloading] = React.useState(false);
  const [message, setMessage] = useState("");

  const handelButtonUpdate = () => {
    setMessloading(true);

    axios
      .put(import.meta.env.VITE_APP_BASE_URL + "/traffic", {
        ...objectModel,
        info_show: message,
      })
      .then((response) => {
        console.log(response.data);
        
      });

    setTimeout(() => {
      setMessloading(false);
    }, 1000);
  };

  return (
    <Container className="TrafficInfo read-the-docs">
      <Title
        p="1.5rem"
        width="100%"
        order={1}
        size="h1"
        style={{
          // marginTop: "rem",
          marginBottom: "4rem",
          width: "90%",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          textShadow: "0 0 10px #ccc",
          // backgroundColor: "#f7f7f7",
        }}
        fw={900}
        ta="center"
      >
        Quản lý thông tin hiển thị LCD
      </Title>
      <label style={{marginRight:"67%", textDecoration:"underline", fontWeight: 600}}>Mời nhập thông tin:</label>
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
          placeholder={
            objectModel.info_show
              ? "Data: " + objectModel.info_show
              : "Nhập thông tin hiển thị"
          }
          style={{
            width: "30rem",
            paddingLeft: "2rem",
            border: "4px solid #ccc",
            alignSelf: "center",
            backgroundColor: "#f7f7f7",
          }}
          rightSection={
            messloading && (
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
          onChange={(event) => {
            setMessage(event.target.value);
          }}
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
          onClick={handelButtonUpdate}
        >
          Update
        </Button>
      </Flex>
    </Container>
  );
}
