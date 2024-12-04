<script lang="ts">
  import Flex from '$lib/design-components/Flex.svelte';
  import Pill from '$lib/design-components/Pill.svelte';
  import github from '$lib/images/github.svg';
  const REPO_ID = 594510762;

  import { createQuery } from '@tanstack/svelte-query';

  const query = createQuery({
    queryKey: ['stargazers-count'],
    queryFn: async () =>
      await fetch(`https://api.github.com/repositories/${REPO_ID}`).then((res) => res.json()),
  });
</script>

<a href="https://github.com/ScuffleCloud" class="pill-link">
  <Pill color="white" borderColor="#00000012">
    <Flex direction="row" alignItems="center" gap={2}>
      <span style="font-weight: 600;">Contribute</span>
      <div class="divider"></div>
      <Flex direction="row" alignItems="center" gap={2}>
        <img src={github} alt="GitHub" />
        {#if !$query.data}
          <p class="loading">---</p>
        {:else}
          <p>{$query.data.stargazers_count}</p>
        {/if}
      </Flex>
    </Flex>
  </Pill>
</a>

<style>
  .loading {
    opacity: 0.3;
  }
  .pill-link {
    text-decoration: none;
    height: 100%;
  }
  :global(.pill-link > *) {
    height: 100%;
  }

  .divider {
    width: 2px;
    height: 20px;
    background-color: #ddd;
    border-radius: 1px;
  }
</style>
