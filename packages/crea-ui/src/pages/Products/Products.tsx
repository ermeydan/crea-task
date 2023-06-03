import { ProductCard } from '@crea/ui/components';
import { Product } from '@crea/ui/interfaces';
import { useProductsQuery } from '@crea/ui/services';
import { Badge, Divider, Grid, Group, LoadingOverlay, Title } from '@mantine/core';

export default function Products() {
  const { data: products = [] as Product[], isLoading } = useProductsQuery();

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

          <Divider size="md" mt={10} mb={10} />

          <Grid mt={10}>
            {products.map((product: Product) => (
              <Grid.Col key={product.id} span={4}>
                <ProductCard {...product} />
              </Grid.Col>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
