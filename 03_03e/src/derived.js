
import { derived } from 'svelte/store';
import { today } from './readable.js';


export let weekFromNow = derived(today, $date => {
  weekFromNow = new Date($date.getFullYear(), $date.getMonth(), $date.getDate()+7);
  return weekFromNow;
})
