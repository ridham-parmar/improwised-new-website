
<script>
  import { onMount } from "svelte";

  onMount(() => {
    tsParticles.load({
            id: "tsparticlesCanvas",
            options: {
                fullScreen: {
                    enable: false,
                },
                shape: { type: "circle" },

                fpsLimit: 60,
                particles: {
                    number: {
                        value: 40,
                    },
                    //   links: {
                    //     enable: true,
                    //     distance: 50
                    //   },
                    move: {
                        enable: true,
                        speed: 0.5,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    color: { value: "#00afdb" }, // Red color for particles
                    size: {
                        value: 1,
                    },
                },
            },
        });
  });
</script>

<div
id="v-0-3"
class="absolute inset-x-0 top-0 h-5 lg:h-24 w-full pointer-events-none"
>
<div data-generated="true" id="tsparticlesCanvas"></div>
</div>
