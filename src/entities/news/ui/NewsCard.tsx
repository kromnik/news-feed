import Card from 'antd/es/card';
import Tag from 'antd/es/tag';
import Space from 'antd/es/space';
import Typography from 'antd/es/typography';
import type { FC } from 'react';

const { Title, Paragraph } = Typography;

interface NewsCardProps {
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
}

export const NewsCard: FC<NewsCardProps> = ({ title, body, tags, reactions }) => (
  <Card style={{ marginBottom: 16 }}>
    <Title level={4}>{title}</Title>
    <Paragraph ellipsis={{ rows: 3 }} style={{textAlign: 'start'}}>{body}</Paragraph>
    <Space size={[0, 8]} wrap>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Space>
    <div style={{ marginTop: 8 }}>
     👍 {reactions.likes} | 👎 {reactions.dislikes}
   </div>
  </Card>
);