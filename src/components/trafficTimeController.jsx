import React, { useState } from "react";
import axios from "axios";
import InputTimeLED from "./inputTimeLED";
import SwitchModLED from "./switchModLED";
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
    <Container className="TrafficTimeController read-the-docs">
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
        Điều khiển thời gian đèn giao thông
      </Title>

      <Container
        style={{
          width: "90%",
          height: "34%",
          padding: "0.5rem",
          borderRadius: "0.2rem",
        }}
      >
        <InputTimeLED
          title="- Thời gian đèn đỏ:"
          time={data.time_red}
          type="time_red"
          data={data}
          setTime={setData}
        />
        <InputTimeLED
          title="- Thời gian đèn vàng:"
          time={data.time_yellow}
          type="time_yellow"
          data={data}
          setTime={setData}
        />
        <InputTimeLED
          title="- Thời gian đèn xanh:"
          time={data.time_green}
          type="time_green"
          data={data}
          setTime={setData}
        />
      </Container>

      <Container
        style={{
          width: "100%",
          height: "26%",
          borderRadius: "0.2rem",
        }}
      >
        <SwitchModLED title="*Chế độ ban đêm:" data={data} setData={setData} />
        {/* <SwitchEmerLED title="- Emergency:" data={data} setData={setData} /> */}
        <InputTimeLED
          title="*Thời gian đèn ưu tiên:"
          type="time_emergency"
          time={data.time_emergency}
          data={data}
          setTime={setData}
        />
      </Container>

      <Button
        w="50%"
        justify="center"
        variant="filled"
        onClick={handelButtonUpdate}
      >
        Cập nhập
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
        <strong>*Lưu ý:</strong> Thiết lập thời gian cho các đèn cần nhỏ hơn 10s
      </Text>
    </Container>
  );
}
