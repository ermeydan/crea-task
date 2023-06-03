import { formatDate } from '@crea/ui/utils/date.utils';
import { Divider, Group, Rating, Text, Title } from '@mantine/core';
import React from 'react';

interface ProductCommentProps {
  score: number;
  username: string;
  text: string;
  date: string;
}

export function ProductComment({ score, username, text, date }: React.PropsWithChildren<ProductCommentProps>) {
  return (
    <div className="product-comment-item">
      <Group spacing={15}>
        <Rating value={score} fractions={2} readOnly={true} />

        <Text fz="xs" fw={500}>
          {score}
        </Text>
      </Group>

      <Title order={6} mt={10} mb={10}>
        {username} - <small>{formatDate(date)}</small>
      </Title>

      <Text fz="xs" fw={500}>
        {text}
      </Text>

      <Divider my="sm" />
    </div>
  );
}
