import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile';
import './index.css';
import user from '../src/user.json';


ReactDOM.createRoot(document.getElementById('root')).render(<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>);
