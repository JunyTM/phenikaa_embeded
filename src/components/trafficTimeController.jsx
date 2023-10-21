import React, { useState } from "react";
import axios from "axios";
import InputTimeLED from "./inputTimeLED";
import { Container, Title, Button, Text } from "@mantine/core";

export default function TrafficTimeController({ objectModel }) {
  const [data, setData] = useState(objectModel);

  const handelButtonUpdate = () => {
    axios
      .put(import.meta.env.VITE_APP_BASE_URL + "/traffic", data)
      .then((response) => {
        console.log(response.data);
      });
  };

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
          height: "48%",
          padding: "0.5rem",
          borderRadius: "0.2rem",
          marginBottom: "0.5rem",
          // backgroundColor: "#a2a5a84f",
        }}
      >
        <InputTimeLED
          title="- Time red:"
          time={data.time_red}
          type="time_red"
          data={data}
          setTime={setData}
        />
        <InputTimeLED
          title="- Time yellow:"
          time={data.time_yellow}
          type="time_yellow"
          data={data}
          setTime={setData}
        />
        <InputTimeLED
          title="- Time green:"
          time={data.time_green}
          type="time_green"
          data={data}
          setTime={setData}
        />
      </Container>

      <Button
        w="50%"
        justify="center"
        // leftSection={icon}
        // rightSection={icon}
        variant="filled"
        onClick={handelButtonUpdate}
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
        <strong>*Note:</strong> Time traffic not allowed hight than 10s
      </Text>
    </Container>
  );
}
