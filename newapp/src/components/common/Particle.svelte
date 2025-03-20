
<script>
  import { onMount } from "svelte";

  onMount(() => {
      tsParticles.load({
        id: "tsparticlesCanvasHero",
        options: {
          fullScreen: {
            enable: false,
          },
        fpsLimit: 60,
        particles: {
          number: {
            value: 50,
          },
          shape: { type: "circle" },
          move: {
            enable: true,
            speed: 0.5,
            outModes: {
              default: "bounce",
            },
          },
          color: { value: "#00afdb" }, // Particle color
          size: {
            value: 1,
          },
          links: {
            enable: true, // Enable links
            distance: 100, // Maximum distance for linking
            color: "#00afdb", // Link color
            opacity: 0.3, // Transparency of links
            width: 1, // Line thickness
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true, // Enable mouse interaction
              mode: "grab", // Effect on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Adds new particles on click
            },
          },
          modes: {
            grab: {
              distance: 150, // Distance for grab effect
              links: {
                opacity: 0.3, // Opacity of grabbed links
              },
            },
            push: {
              quantity: 3, // Adds 3 particles on click
            },
          },
        },
      },
    // });

    });
  });
</script>

<div id="v-0-3" class="hidden lg:block absolute inset-x-0 bottom-0 w-full pointer-events-none">
  <div data-generated="true" id="tsparticlesCanvasHero"></div>
</div>
