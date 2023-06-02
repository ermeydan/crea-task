import './ProductDetails.scss';
import { ProductDetailsTabs } from './components/ProductDetailsTabs';
import { ProductSlider } from './components/ProductSlider';
import { useAppDispatch, useProductDetails } from '@crea/ui/hooks';
import { useGetProductQuery } from '@crea/ui/services';
import { resetProductDetailsAction } from '@crea/ui/store';
import { Grid, Group, LoadingOverlay, Rating, Stack, Text, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useUnmount } from 'react-use';

const imgs = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export default function ProductDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isLoading, isSuccess } = useGetProductQuery({ productId: id! });
  const product = useProductDetails();

  useUnmount(() => {
    dispatch(resetProductDetailsAction());
  });

  return (
    <div className="page-product-details">
      <LoadingOverlay visible={isLoading} overlayBlur={2} />

      {product && isSuccess && (
        <>
          <Grid mt={30}>
            <Grid.Col span={6}>
              <ProductSlider images={imgs} />
            </Grid.Col>

            <Grid.Col span={6}>
              <Stack>
                <Title order={2}>{product.name}</Title>

                <Group spacing={15}>
                  <Text fz="xs" fw={500}>
                    {product.score}
                  </Text>

                  <Rating value={product.score} fractions={2} readOnly={true} />

                  <Text fz="xs" fw={500}>
                    -
                  </Text>

                  <Text fz="xs" fw={500}>
                    123 Comments
                  </Text>
                </Group>

                <Text c="dimmed">
                  Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives
                  it to try biting a Steel-type Pokémon.
                </Text>

                <Title c="orange" order={3} weight={900}>
                  {product.price}
                </Title>

                <Text fw={500}>Arrival Date: 10.11.2222</Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <ProductDetailsTabs productId={id!} information={product.information} />
        </>
      )}
    </div>
  );
}