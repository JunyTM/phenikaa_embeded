import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import React, { useState } from "react";
import TrafficGrap from "./trafficGrap";
import TrafficInfo from "./trafficInfo";
import TrafficTimeController from "./trafficTimeController";
import TrafficModeController from "./trafficModeController";

const PRIMARY_COL_HEIGHT = rem(750);

export default function LeadGrid() {
  useState(() => {
    setTimeout(() => {
      console.log("set loading to true");
      setLoading(false);
    }, 1000);
  }, []);

  const [loading, setLoading] = useState(true);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
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
              children={<TrafficInfo />}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              visible={loading}
              children={<TrafficTimeController />}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              visible={loading}
              children={<TrafficModeController />}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
