import { useProductsQuery } from '@crea/ui/services';
import { LoadingOverlay, Grid } from '@mantine/core';
import { ProductCard } from '@crea/ui/components';

export default function Dashboard() {
  const { data: products, isLoading } = useProductsQuery();

  return (
    <div>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Grid>
        {products.map((product: any, index: number) => (
          <Grid.Col key={index} span={4}>
            <ProductCard {...product} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
