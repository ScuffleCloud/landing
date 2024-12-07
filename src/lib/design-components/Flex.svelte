<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FlexProps {
    children: Snippet;
    class?: string;
    alignItems?:
      | 'stretch'
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'baseline'
      | 'initial'
      | 'inherit';
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'center'
      | 'initial'
      | 'inherit';
    direction?: 'column' | 'row';
    flexWrap?: 'wrap' | 'nowrap' | 'reverse';
    height?: string;
    maxHeight?: string;
    width?: string;
    maxWidth?: string;
    alignSelf?: 'stretch' | 'center' | 'start' | 'end';
    justifySelf?: 'stretch' | 'center' | 'start' | 'end';
    bgColor?: string;
    flex?: string;
    flexBasis?: string;
    flexGrow?: number;
    flexShrink?: number;
    padding?: number | number[];
    margin?: number | number[];
    as?: string;
    gap?: number;
  }

  let {
    children,
    class: className,
    alignItems,
    justifyContent,
    direction,
    flexWrap,
    height,
    maxHeight,
    width,
    maxWidth,
    alignSelf,
    justifySelf,
    bgColor,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
    padding,
    margin,
    gap,
    as = 'div',
  }: FlexProps = $props();

  const handleMarginOrPadding = (values?: number | number[], isPadding = false): string => {
    if (!values) return '';

    if (Array.isArray(values)) {
      if (values.length > 4) {
        throw new Error(`${isPadding ? 'Padding' : 'Margin'} can have 4 values`);
      }
      return values.map((v) => (v === 0 ? '0' : `${v}rem`)).join(' ');
    }

    return values === 0 ? '0' : `${values}rem`;
  };

  const themeSpace = (value: number) => `${value * 0.25}rem`;
</script>

<svelte:element
  this={as}
  class={className}
  style:display="flex"
  style:justify-content={justifyContent}
  style:align-items={alignItems}
  style:flex-direction={direction}
  style:flex-wrap={flexWrap}
  style:height
  style:max-height={maxHeight}
  style:width
  style:max-width={maxWidth}
  style:background-color={bgColor}
  style:flex
  style:flex-grow={flexGrow}
  style:flex-shrink={flexShrink}
  style:flex-basis={flexBasis}
  style:align-self={alignSelf}
  style:justify-self={justifySelf}
  style:gap={gap ? themeSpace(gap) : undefined}
  style:margin={handleMarginOrPadding(margin)}
  style:padding={handleMarginOrPadding(padding, true)}
>
  {@render children()}
</svelte:element>
