<script lang="ts">
  import plannedIcon from '$lib/images/roadmap-dot-planned.svg';
  import inProgressIcon from '$lib/images/roadmap-dot-in-progress.svg';
  import completedIcon from '$lib/images/roadmap-dot-completed.svg';

  export let title: string;
  export let year: string;
  export let content: {
    title: string;
    description: string;
  }[] = [];
  export let status: 'planned' | 'in-progress' | 'completed';
  export let showDivider: boolean = true;
  const incomplete = status === 'planned';

  const statusIcons = {
    planned: plannedIcon,
    'in-progress': inProgressIcon,
    completed: completedIcon,
  };
</script>

<div class="panel">
  <div class="left-section">
    <h2>{title}</h2>
    <p class="year">{year}</p>
  </div>
  <div class="divider-section">
    <img src={statusIcons[status]} alt={status} />
    {#if showDivider}
      <div class={['divider-line', { incomplete }]}></div>
    {/if}
  </div>
  <div class="right-section">
    {#each content as item}
      <div class="content-card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .panel {
    display: grid;
    grid-template-columns: 10rem 1px 1fr;
    gap: 4rem;
    width: 100%;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
    }

    .year {
      font-size: 1.125rem;
      color: var(--color-brown700);
    }
  }

  .divider-section {
    margin-top: 0.125rem;
    img {
      transform: translateX(-50%);
    }

    .divider-line {
      margin-top: 0.125rem;
      background-color: var(--color-orange500);
      width: 0.25rem;
      transform: translateX(-50%);
      height: 86%;
      border-radius: 0.75rem;

      &.incomplete {
        background-color: var(--color-sand600);
      }
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .content-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-weight: 500;
    }
  }

  /* Maybe we want this to be on the left side when the page is small. TODO: Check with design */
  @media (max-width: 768px) {
    .panel {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .divider-section {
      display: none;
    }
  }
</style>
