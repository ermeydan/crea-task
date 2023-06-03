import { Product } from '@crea/ui/interfaces';
import { Carousel } from '@mantine/carousel';
import { Button, Card, Group, Image, Rating, Text, createStyles, getStylesRef, rem } from '@mantine/core';
import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));

export function ProductCard({
  id,
  description,
  name,
  images,
  price,
  score,
  currency,
}: React.PropsWithChildren<Product>) {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  const renderPriceWithSymbol = (currencyCode: string, price: number) => {
    return (
      <>
        <small>{getSymbolFromCurrency(currencyCode.toUpperCase()) || '$'}</small> {price}
      </>
    );
  };

  return (
    <Card radius="md" withBorder={true} padding="xl">
      <Card.Section>
        <Carousel
          withIndicators={true}
          loop={true}
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={700} fz="md">
          {name}
        </Text>
      </Group>

      <Group spacing={5}>
        <Rating value={score} fractions={2} readOnly={true} />
        <Text fz="xs" fw={500}>
          ({score})
        </Text>
      </Group>

      <Text fz="xs" c="dimmed" mt="sm">
        {description}
      </Text>

      <Group position="apart" mt="md">
        <div>
          <Text fz="xl" span={true} fw={500} className={classes.price}>
            {renderPriceWithSymbol(currency, price)}
          </Text>
        </div>

        <Button component="a" href={`/products/${id}`} radius="md">
          Buy now
        </Button>
      </Group>
    </Card>
  );
}
