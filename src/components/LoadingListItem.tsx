import React from 'react';
import './LoadingListItem.css';

const LoadingListItem: React.FC = () => (
  <svg>
    <rect x="20" y="0" rx="3" width="60" height="50" />
    <rect x="100" y="0" rx="3" ry="3" width="200" height="20" />
    <rect x="100" y="25" rx="3" ry="3" width="200" height="10" />
    <rect x="100" y="40" rx="3" ry="3" width="80" height="10" />
  </svg>
);

export default LoadingListItem;
