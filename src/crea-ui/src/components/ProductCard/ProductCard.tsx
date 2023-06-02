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

const imgs = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export function ProductCard({
  id,
  name,
  description,
  price,
  score,
  currency,
  images,
}: React.PropsWithChildren<Product>) {
  const { classes } = useStyles();

  const slides = imgs.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  const renderPriceWithSymbol = (price: number, currencyCode = 'USD') => {
    return (
      <>
        {price} <small>{getSymbolFromCurrency(currencyCode.toUpperCase())}</small>
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
        <Text fw={500} fz="lg">
          {name}
        </Text>
      </Group>

      <Group spacing={5}>
        <Rating value={score} fractions={2} readOnly={true} />
        <Text fz="xs" fw={500}>
          {score}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort.
        Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
      </Text>

      <Group position="apart" mt="md">
        <div>
          <Text fz="xl" span={true} fw={500} className={classes.price}>
            {renderPriceWithSymbol(price, currency)}
          </Text>
        </div>

        <Button component="a" href={`/products/${id}`} radius="md">
          Buy now
        </Button>
      </Group>
    </Card>
  );
}
