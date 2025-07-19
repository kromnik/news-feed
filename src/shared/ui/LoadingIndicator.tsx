import { Spin } from 'antd';

export const LoadingIndicator = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <Spin size="large" />
  </div>
);
