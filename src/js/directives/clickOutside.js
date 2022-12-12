const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
            // const { parentNode } = el;

            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.addEventListener('mousedown', el.clickOutsideEvent);
    },
    unmounted: el => {
        document.removeEventListener('mousedown', el.clickOutsideEvent);
    },
};

export default clickOutside;
