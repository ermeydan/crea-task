import { Grid } from '@mantine/core';
import { ProductCard } from '@crea/ui/components';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <ProductCard />
        </Grid.Col>
      </Grid>
    </div>
  );
}
