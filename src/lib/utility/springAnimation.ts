import { Spring } from 'svelte/motion';

export function createSpringAnimation() {
    const springPosition = new Spring(
        { x: 0, y: 0 },
        {
            stiffness: 0.2,
            damping: 0.4,
        },
    );

    function handleMouseEnter() {
        springPosition.target = { x: 0, y: -5 };
    }

    function handleMouseLeave() {
        springPosition.target = { x: 0, y: 0 };
    }

    return { springPosition, handleMouseEnter, handleMouseLeave };
}
