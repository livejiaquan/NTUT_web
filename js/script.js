window.addEventListener('DOMContentLoaded', () => {
  const smoothScrollTo = (targetSelector) => {
    const element = document.querySelector(targetSelector);
    if (!element) {
      return;
    }

    const headerOffset = 120;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = Math.max(targetPosition - headerOffset, 0);

    window.scrollTo({
      behavior: 'smooth',
      top: scrollPosition
    });
  };

  document.querySelectorAll('[data-scroll-target]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const { scrollTarget } = trigger.dataset;
      if (!scrollTarget) {
        return;
      }

      event.preventDefault();
      smoothScrollTo(scrollTarget);
    });
  });

  const feedbackButton = document.querySelector('[data-feedback-button]');
  if (feedbackButton) {
    feedbackButton.addEventListener('click', (event) => {
      event.preventDefault();
      alert('這個是假的,不過還是謝謝你的支持');
    });
  }
});
