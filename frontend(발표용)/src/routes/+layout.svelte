<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import '../styles.css';

  let userId = '';

  function refreshUserId() {
    if (!browser) return;
    userId = localStorage.getItem('adhd_user_id') || '';
  }

  onMount(() => {
    refreshUserId();
    const timer = setInterval(refreshUserId, 500);
    window.addEventListener('storage', refreshUserId);
    return () => {
      clearInterval(timer);
      window.removeEventListener('storage', refreshUserId);
    };
  });
</script>

{#if userId}
  <div class="global-user-id">
    <span>고유ID</span>
    <strong>{userId}</strong>
  </div>
{/if}

<slot />
