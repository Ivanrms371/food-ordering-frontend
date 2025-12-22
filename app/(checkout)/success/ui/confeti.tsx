"use client";

import confetti from "canvas-confetti";

export function fireCheckoutConfetti() {
  const count = 60;
  const defaults = {
    origin: { y: 0.6 },
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      ticks: 240,
      gravity: 0.4,
      scalar: 0.9,
    });
  }

  fire(0.4, {
    spread: 30,
    startVelocity: 45,
  });

  fire(0.4, {
    spread: 70,
    decay: 0.92,
    scalar: 0.9,
  });

  fire(0.3, {
    spread: 100,
    startVelocity: 25,
    decay: 0.94,
  });
}
