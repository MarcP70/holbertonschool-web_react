import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Function to get notifications by userId
export function getAllNotificationsByUser(userId) {
  const { entities, result } = normalizedData;

  return result
    .filter((notificationId) => entities.notifications[notificationId].author === userId)
    .map((notificationId) => entities.messages[entities.notifications[notificationId].context]);
}

/* ------------------------ */

// Define user entity
const user = new schema.Entity('users');

// Define message entity with 'guid' as the id attribute
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

// Define notification entity with relationships to user and message
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the notifications data
export const normalizedData = normalize(notificationsData.default, [notification]);

// Export normalized data and entities
export default normalizedData;
