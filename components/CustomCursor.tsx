'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addActive = () => cursor.classList.add('active');
    const removeActive = () => cursor.classList.remove('active');

    document.addEventListener('mousemove', moveCursor);

    const bindTargets = () => {
      const hoverTargets = document.querySelectorAll('.hover-target, a, button');
      hoverTargets.forEach((target) => {
        target.addEventListener('mouseenter', addActive);
        target.addEventListener('mouseleave', removeActive);
      });
    };

    bindTargets();

    // Re-bind on DOM changes (for dynamically rendered sections)
    const observer = new MutationObserver(bindTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return <div className="cursor" id="cursor" />;
}
