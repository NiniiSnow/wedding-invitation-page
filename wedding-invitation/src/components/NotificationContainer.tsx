import React from 'react';
import { useNotification } from '../context/NotificationContext';
import './Notification.css';

export const NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`notification notification-${notif.type}`}
        >
          <span>{notif.message}</span>
          <button
            className="notification-close"
            onClick={() => removeNotification(notif.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};
