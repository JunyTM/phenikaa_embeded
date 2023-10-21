import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TrafficGrap from "./trafficGrap";
import TrafficInfo from "./trafficInfo";
import TrafficTimeController from "./trafficTimeController";
import TrafficModeController from "./trafficModeController";

const PRIMARY_COL_HEIGHT = rem(750);

export default function LeadGrid() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

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
        <Container size="fluid" className="LeadGrid"></Container>
      ) : (
        <Container size="fluid" className="LeadGrid">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={80}>
            <Skeleton
              height={PRIMARY_COL_HEIGHT}
              radius="md"
              visible={loading}
              children={<TrafficGrap />}
            />

            <Grid gutter="lg">
              <Grid.Col>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  visible={loading}
                  children={<TrafficInfo objectModel={data} />}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  visible={loading}
                  children={<TrafficTimeController objectModel={data} />}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  visible={loading}
                  children={<TrafficModeController objectModel={data} />}
                />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      )}
    </React.Fragment>
  );
}
