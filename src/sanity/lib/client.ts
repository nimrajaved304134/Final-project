import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '42z6giha', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset (e.g., 'production')
  apiVersion: '2023-01-01', // Use a valid API version or match the latest date
  useCdn: true, // Use `true` for faster responses, but it may return stale data
});

export default client;
