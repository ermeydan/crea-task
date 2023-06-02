import { LeaveComment } from './LeaveComment';
import { ProductComment } from './ProductComment';
import { useProductComments } from '@crea/ui/hooks';
import { Comment } from '@crea/ui/interfaces';
import { useLazyGetProductCommentsQuery } from '@crea/ui/services';
import { Alert, Badge, Divider, Group, LoadingOverlay, Tabs, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';

interface ProductDetailsTabsProps {
  productId: string;
  information: string;
}

export function ProductDetailsTabs({ productId, information }: React.PropsWithChildren<ProductDetailsTabsProps>) {
  const [getComments, { isLoading }] = useLazyGetProductCommentsQuery();
  const [activeTab, setActiveTab] = useState<string | null>('information');
  const comments = useProductComments();

  useEffect(() => {
    if (activeTab === 'comments') {
      getComments({ productId });
    }
  }, [activeTab]);

  return (
    <Tabs className="product-details-tabs" value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="information">Information</Tabs.Tab>
        <Tabs.Tab value="comments">Comments</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="information" pt="xs">
        {information}
      </Tabs.Panel>

      <Tabs.Panel value="comments" pt="xs" pos="relative">
        <LoadingOverlay visible={isLoading} overlayBlur={2} />

        <>
          <LeaveComment productId={productId} />

          {comments && comments!.length > 0 ? (
            <>
              <Group>
                <Title order={2}>All Comments</Title>
                <Badge>{comments.length}</Badge>
              </Group>

              <Divider size="md" mt={10} mb={20} />
              {comments!.map((comment: Comment, index: number) => (
                <ProductComment
                  key={index}
                  score={comment.score}
                  text={comment.text}
                  username={comment.username}
                  date={comment.date}
                />
              ))}
            </>
          ) : (
            <Alert title="No comments yet." color="cyan">
              Why don't you start the conversation?
            </Alert>
          )}
        </>
      </Tabs.Panel>
    </Tabs>
  );
}
