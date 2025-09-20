

const images = ["images/hero1.webp", "images/hero2.jpg", "images/hero3.jpg"];
let current = 0;

const bg = document.getElementById("heroBg");
const overlay = document.getElementById("heroOverlay");

function changeImage() {
  const next = (current + 1) % images.length;

  // Set overlay to next image
  overlay.src = images[next];

  // Reset clip-path small circle at bottom-right
  gsap.set(overlay, { clipPath: "circle(0% at 100% 100%)" });

  // Animate circle expansion
  gsap.to(overlay, {
    clipPath: "circle(150% at 100% 100%)",
    duration: 2,
    ease: "power3.inOut",
    onComplete: () => {
      // After animation, move overlay image to bg and reset
      bg.src = images[next];
      overlay.src = "";
      current = next;
    },
  });
}

// Auto change every 4s
setInterval(changeImage, 4000);
