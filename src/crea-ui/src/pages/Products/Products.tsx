import { ProductCard } from '@crea/ui/components';
import { useProductsQuery } from '@crea/ui/services';
import { Badge, Grid, Group, LoadingOverlay, Title } from '@mantine/core';

export default function Products() {
  const { data: products, isLoading } = useProductsQuery();

  return (
    <div>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />

      {products && products.length && (
        <>
          <Group spacing="xs">
            <Title order={2}>Products</Title>
            <Badge mb={2} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
              {products.length}
            </Badge>
          </Group>
          <hr />
          <Grid>
            {products.map((product: any, index: number) => (
              <Grid.Col key={index} span={4}>
                <ProductCard {...product} />
              </Grid.Col>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
