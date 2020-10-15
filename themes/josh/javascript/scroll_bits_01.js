


function observeHeaders(container) {
  const observer = new IntersectionObserver((records, observer) => {
    for (const record of records) {
      const targetInfo = record.boundingClientRect;
      const stickyTarget = record.target.parentElement.querySelector('.sticky-scroll-alert');
      const rootBoundsInfo = record.rootBounds;

      // Started sticking.
      if (targetInfo.bottom < rootBoundsInfo.top) {
        fireEvent(true, stickyTarget);
      }

      // Stopped sticking.
      if (targetInfo.bottom >= rootBoundsInfo.top &&
          targetInfo.bottom < rootBoundsInfo.bottom) {
       fireEvent(false, stickyTarget);
      }
    }
  }, {threshold: [0], root: container});

  // Add the top sentinels to each section and attach an observer.
  const sentinels = addSentinels(container, 'sticky_sentinel--top');
  sentinels.forEach(el => observer.observe(el));
};