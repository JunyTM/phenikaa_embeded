import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TrafficInfo from "./trafficInfo";
import TrafficTimeController from "./trafficTimeController";

const PRIMARY_COL_HEIGHT = rem(750);

export default function LeadGrid() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const isEmpty = (v) => {
    return Object.keys(v).length === 0;
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/traffic")
      .then((response) => {
        setData(response.data.data);
      });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      {isEmpty(data) ? (
        <Container size="fluid"></Container>
      ) : (
        <Container
          size="fluid"
          style={{
            display: "flex",
            backgroundColor: "rgba(252, 251, 249, 0.88);",
          }}
        >
          <Container style={{ width: "500px" }} className="mainBox">
            <TrafficTimeController objectModel={data} />
          </Container>
          <TrafficInfo objectModel={data} />
        </Container>
      )}
    </React.Fragment>
  );
}
