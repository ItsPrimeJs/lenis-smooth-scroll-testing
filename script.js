const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



gsap.registerPlugin(ScrollTrigger)

document.querySelectorAll('.elem').forEach((elem) => {
  const tl = gsap.timeline();

  const xTransform = Math.floor(Math.random() * 601) - 300; // Random number between -300 and 300
  const yTransform = Math.floor(Math.random() * 601) - 300; // Random number between -300 and 300
  const rotation = Math.random() * 360; // Random rotation between 0 and 360 degrees
  const scale = Math.random() * 0.5 + 0.5; // Random scale between 0.5 and 1

  tl.to(elem, {
    x: xTransform,
    y: yTransform,
    scale: 0.001,
    scrollTrigger: {
      start: 'top center',
      end: 'bottom top',
      ease: 'easeInOut',
      trigger: elem,
      scrub: 1,
    },
  })
})
