document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const wrapper = document.querySelector('.wrapper .outer');

    function resetAnimation() {
      wrapper.style.transition = 'none';  
      wrapper.style.transform = 'translateY(1)'; 

      wrapper.offsetHeight;

      setTimeout(() => {
        wrapper.style.transition = 'transform 20s linear';
      }, 100);
    }

    wrapper.addEventListener('animationiteration', resetAnimation);
  });