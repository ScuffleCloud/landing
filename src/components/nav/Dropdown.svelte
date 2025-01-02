<script lang="ts">
  import arrowLineRight from '$lib/images/arrow-line-right.svg';
  import { page } from '$app/stores';

  let pathname = $derived($page?.url?.pathname ?? '/');
</script>

<div class="mobile-menu">
  <ul>
    <li>
      <a href="/" class={{ active: pathname === '/' }}>
        Homepage
        <img src={arrowLineRight} alt="Arrow" />
      </a>
    </li>
    <li>
      <a href="/roadmap" class={{ active: pathname.startsWith('/roadmap') }}>
        Roadmap
        <img src={arrowLineRight} alt="Arrow" />
      </a>
    </li>
    <li>
      <a href="/about" class={{ active: pathname.startsWith('/about') }}>
        About
        <img src={arrowLineRight} alt="Arrow" />
      </a>
    </li>
  </ul>
</div>

<style>
  .mobile-menu {
    position: absolute;
    background: var(--color-light100);
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    width: 100%;
    left: 0;
    right: 0;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 0.5rem;

      li {
        a {
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--color-brown700);
          text-decoration: none;
          font-weight: 500;
          line-height: 1.5rem;

          &.active {
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
