<script>
    import { user } from './users.js'
    import { today } from './readable.js'
    import { weekFromNow } from './derived.js'


    user.set({ username: 'leom12345' });
  </script>
  
  <p>Your username is: <span style="color: coral;">{$user.username}</span></p>
  <p>Today's Date is {$today}</p>
  <p>{$weekFromNow}</p>