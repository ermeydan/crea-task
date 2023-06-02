import { LeaveComment } from './LeaveComment';
import { ProductComment } from './ProductComment';
import { Comment } from '@crea/ui/interfaces';
import { useLazyGetProductCommentsQuery } from '@crea/ui/services';
import { Alert, Badge, LoadingOverlay, Tabs } from '@mantine/core';
import React, { useEffect, useState } from 'react';

interface ProductDetailsTabsProps {
  productId: string;
  information: string;
}

export function ProductDetailsTabs({ productId, information }: React.PropsWithChildren<ProductDetailsTabsProps>) {
  const [getComments, { data: comments = [] as Comment[], isLoading }] = useLazyGetProductCommentsQuery();
  const [activeTab, setActiveTab] = useState<string | null>('information');

  useEffect(() => {
    if (activeTab === 'comments' && comments && !comments.length) {
      getComments({ productId });
    }
  }, [activeTab]);

  return (
    <Tabs className="product-details-tabs" value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="information">Information</Tabs.Tab>
        <Tabs.Tab value="comments">Comments {!!comments!.length && <Badge>{comments!.length}</Badge>}</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="information" pt="xs">
        Gallery tab content
        {information}
      </Tabs.Panel>

      <Tabs.Panel value="comments" pt="xs" pos="relative">
        <LoadingOverlay visible={isLoading} overlayBlur={2} />

        <>
          <LeaveComment productId={productId} />

          {comments!.length > 0 ? (
            <>
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
