import './ProductDetails.scss';
import { ProductDetailsTabs } from './components/ProductDetailsTabs';
import { ProductSlider } from './components/ProductSlider';
import { useAppDispatch, useProductDetails } from '@crea/ui/hooks';
import { useGetProductQuery } from '@crea/ui/services';
import { resetProductDetailsAction } from '@crea/ui/store';
import { formatDate } from '@crea/ui/utils/date.utils';
import {
  Anchor,
  Breadcrumbs,
  Card,
  Divider,
  Grid,
  Group,
  Kbd,
  LoadingOverlay,
  Rating,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useParams } from 'react-router-dom';
import { useUnmount } from 'react-use';

const renderPriceWithSymbol = (currencyCode: string, price: number) => {
  return (
    <>
      <small>{getSymbolFromCurrency(currencyCode.toUpperCase()) || '$'}</small> {price}
    </>
  );
};

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

      {(product && isSuccess) && (
        <>
          <Card padding="md" withBorder={true}>
            <Breadcrumbs>
              <Anchor href="/products">Home</Anchor>

              <Text>{product.name}</Text>
            </Breadcrumbs>
          </Card>

          <Grid mt={10}>
            <Grid.Col span={6}>
              <ProductSlider images={product.images} />
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
                    {product.commentsCount} Comments
                  </Text>
                </Group>

                <Text c="dimmed">{product.description}</Text>

                <Divider my="sm" />

                <Group>
                  <Text>Price:</Text>

                  <Title c="orange" order={3} weight={900}>
                    {renderPriceWithSymbol(product.currency, product.price)}
                  </Title>
                </Group>

                <Group>
                  <Text>
                    ETA{' '}
                    <Tooltip label="Estimated Time of Arrival">
                      <Kbd>?</Kbd>
                    </Tooltip>{' '}
                    :
                  </Text>

                  <Text fw={500}>{formatDate(product.arrivalDate)}</Text>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>

          <ProductDetailsTabs productId={id!} information={product.information} />
        </>
      )}
    </div>
  );
}
