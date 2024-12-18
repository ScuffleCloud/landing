<script lang="ts">
  import { page } from '$app/stores';
  import GithubStats from './GithubStats.svelte';
  import Pill from '$lib/design-components/Pill.svelte';
  import tempLogo from '$lib/images/temp-logo.svg';
  import { theme } from '$lib/theme';
  import backButton from '$lib/images/back-button.svg';
  import Flex from '$lib/design-components/Flex.svelte';
  import { showMobileMenu } from '$lib/layout';
  import HideOn from '$lib/utility/hide-on.svelte';
  import arrowLineRight from '$lib/images/arrow-line-right.svg';
  let pathname = $derived($page?.url?.pathname ?? '/');
</script>

<div class="header-container-wrapper">
  <div class="header-container">
    <header>
      <div class="logo-container">
        <img src={tempLogo} alt="GitHub" />
        scuffle
      </div>
      <HideOn mobile>
        <nav>
          <ul>
            <li class:active={pathname === '/'}>
              <a href="/">Homepage</a>
            </li>
            <li class:active={pathname.startsWith('/roadmap')}>
              <a href="/roadmap">Roadmap</a>
            </li>
            <li class:active={pathname.startsWith('/about')}>
              <a href="/about">about</a>
            </li>
          </ul>
        </nav>
      </HideOn>
      <Flex direction="row" gap={2} alignItems="center" class="hide-on-small">
        <GithubStats />
        <Pill color={theme.colors.orange500}>
          <Flex direction="row" alignItems="center" gap={1}>
            <p class="demo-text">Get a demo</p>
            <img src={backButton} alt="Back" />
          </Flex>
        </Pill>
      </Flex>
      <button onclick={() => ($showMobileMenu = !$showMobileMenu)} class="hide-on-desktop">
        X
      </button>
    </header>
    {#if $showMobileMenu}
      <div class="mobile-menu">
        <ul>
          <li>
            <a href="/" class:active={pathname === '/'}>
              Homepage
              <img src={arrowLineRight} alt="Arrow" />
            </a>
          </li>
          <li>
            <a href="/roadmap" class:active={pathname.startsWith('/roadmap')}>
              Roadmap
              <img src={arrowLineRight} alt="Arrow" />
            </a>
          </li>
          <li>
            <a href="/about" class:active={pathname.startsWith('/about')}>
              About
              <img src={arrowLineRight} alt="Arrow" />
            </a>
          </li>
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  .header-container-wrapper {
    background-color: var(--color-light100);
    position: sticky;
    top: 0;
    z-index: 100;

    .header-container {
      background-color: var(--color-light100);
      max-width: calc(var(--layout-width) + 3rem);
      margin: 0 auto;
      padding: 1rem;
      width: 100%;

      header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--brown-800);
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;

          img {
            filter: drop-shadow(0px 2px 4px 0px rgb(0, 0, 0, 0.05));
          }
        }

        nav {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          /* Offset navbar */
          margin-left: clamp(0rem, calc((100vw - 800px) * 0.2), 4rem);

          ul {
            position: relative;
            padding: 0;
            margin: 0;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            background-size: contain;

            li {
              position: relative;
              display: flex;
              padding: 1rem;

              a {
                display: flex;
                height: 100%;
                align-items: center;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.5rem;
                text-transform: capitalize;
                text-decoration: none;
              }

              &.active {
                a {
                  font-weight: 700;
                }
              }
            }

            .active::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 0.5625rem;
              width: 1.5rem;
              height: 0.25rem;
              background-color: var(--color-orange500);
            }
          }
        }

        .demo-text {
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.625rem;
          white-space: nowrap;
        }
      }
    }

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
  }
</style>
