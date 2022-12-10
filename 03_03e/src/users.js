import { writable } from 'svelte/store';

export const user = writable({
  username: 'leomofthings',
  name: 'Ayodele Aransiola',
  email: 'ayo@example.com'
});