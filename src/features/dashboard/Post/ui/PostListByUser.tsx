import type { FC } from 'react';

import { getPostsByUser } from '@entities/Post/api/server';

import { getTagBadge } from '@entities';

import { Card, CardContent, Chip, EmptyState, HeartIcon, Typography } from '@ui';

import { PostCreateTrigger, PostDeleteTrigger } from './triggers';

interface Props {
  userId: number;
}

const PostListByUser: FC<Props> = async ({ userId }) => {
  const data = await getPostsByUser(userId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <Typography variant="h3" as="h3">
            Posts
          </Typography>
          <Typography variant="caption" tone="muted" as="span">
            {data.total} total
          </Typography>
        </div>
        <PostCreateTrigger userId={userId} />
      </div>

      {data.posts.length === 0 ?
        <EmptyState title="No posts yet" description="This user hasn’t published any posts." />
      : <div className="flex flex-col gap-3">
          {data.posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="!flex-col gap-3 py-4">
                <div className="flex items-start justify-between gap-3">
                  <Typography variant="body" weight="semibold">
                    {post.title}
                  </Typography>
                  <PostDeleteTrigger post={post} />
                </div>
                <Typography variant="body-sm" tone="muted">
                  {post.body}
                </Typography>
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => {
                    const badge = getTagBadge(tag);
                    return (
                      <Chip key={tag} size="sm" variant="soft" color={badge.color}>
                        #{badge.label}
                      </Chip>
                    );
                  })}
                  <Typography
                    variant="caption"
                    tone="muted"
                    as="span"
                    className="inline-flex items-center gap-1.5"
                  >
                    {post.views.toLocaleString()} views
                    <span aria-hidden>|</span>
                    <HeartIcon size={12} className="text-danger" aria-hidden />
                    {post.reactions.likes}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      }
    </div>
  );
};

export default PostListByUser;
