import { MIN_COMMENT_LENGTH } from '@crea/ui/constants';
import { useLazyGetProductCommentsQuery, useLazyGetProductQuery, useSendCommentMutation } from '@crea/ui/services';
import { Alert, Button, Divider, Group, Input, Rating, Stack, Textarea } from '@mantine/core';
import React, { useMemo, useState } from 'react';

interface LeaveCommentProps {
  productId: string;
}

export function LeaveComment({ productId }: React.PropsWithChildren<LeaveCommentProps>) {
  const [sendComment, { isLoading, isSuccess }] = useSendCommentMutation();
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(3);
  const [getProductDetails] = useLazyGetProductQuery();
  const [getProductComments] = useLazyGetProductCommentsQuery();

  const isSubmitBtnDisabled = useMemo(() => {
    return comment.length < MIN_COMMENT_LENGTH;
  }, [comment]);

  const handleSendCommentSuccess = () => {
    getProductDetails({ productId });
    getProductComments({ productId });
  };

  const handleCommentSubmit = () => {
    const payload = {
      productId,
      text: comment,
      score: rating,
    };

    sendComment(payload).then(handleSendCommentSuccess);
  };

  return (
    <Stack className="leave-comment-card" mb={50} pos="relative">
      {isSuccess ? (
        <Alert title="Submitted!" color="green">
          Thank you for your feedback.
        </Alert>
      ) : (
        <>
          <Textarea
            placeholder="Your feedback is highly appreciated"
            label="Your comment"
            withAsterisk={true}
            minRows={5}
            value={comment}
            onChange={(event) => setComment(event.currentTarget.value)}
          />
          <Input.Description mb={10}>Minimum {MIN_COMMENT_LENGTH} characters</Input.Description>

          <Group>
            <Input.Label>Rate your experience:</Input.Label>
            <Rating value={rating} onChange={setRating} />
          </Group>
          <Button disabled={isSubmitBtnDisabled} onClick={handleCommentSubmit} loading={isLoading}>
            Submit
          </Button>
        </>
      )}

      <Divider my="sm" />
    </Stack>
  );
}
