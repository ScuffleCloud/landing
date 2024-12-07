<script lang="ts">
  import { PUBLIC_GITHUB_REPO_ID } from '$env/static/public';
  import Flex from '$lib/design-components/Flex.svelte';
  import Pill from '$lib/design-components/Pill.svelte';
  import github from '$lib/images/github.svg';
  import { createQuery } from '@tanstack/svelte-query';

  const query = createQuery({
    queryKey: ['stargazers-count'],
    queryFn: async () =>
      await fetch(`https://api.github.com/repositories/${PUBLIC_GITHUB_REPO_ID}`).then((res) =>
        res.json(),
      ),
  });
</script>

<a href="https://github.com/ScuffleCloud" class="pill-link">
  <Pill color="white" borderColor="#00000012">
    <Flex direction="row" alignItems="center" gap={2}>
      <span style="font-weight: 600;">Contribute</span>
      <div class="divider"></div>
      <Flex direction="row" alignItems="center" gap={2}>
        <img src={github} alt="GitHub" class="github-icon" />
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
    width: 0.125rem;
    height: 1.25rem;
    background-color: #ddd;
    border-radius: 1px;
  }

  .github-icon {
    width: 1.35rem;
    height: 1.35rem;
  }
</style>
