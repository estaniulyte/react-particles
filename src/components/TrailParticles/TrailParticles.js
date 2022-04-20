import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const TrailParticles = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "background": {
          "color": "#000"
        },
        "fpsLimit": 120,
        "emitters": {
          "position": {
            "x": 50,
            "y": 50
          },
          "size": {
            "width": 50,
            "height": 50,
            "mode": "precise"
          },
          "rate": {
            "delay": 0.25,
            "quantity": 4
          }
        },
        "particles": {
          "number": {
            "value": 0,
            "limit": 300
          },
          "color": {
            "value": [
              "#5bc0eb",
              "#fde74c",
              "#9bc53d",
              "#e55934",
              "#fa7921"
            ]
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 1
          },
          "size": {
            "value": 3
          },
          "links": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "outModes": {
              "default": "destroy"
            },
            "bounce": false,
            "path": {
              "enable": true,
              "delay": {
                "value": 0.1
              },
              "options": {
                "size": 5,
                "draw": false,
                "increment": 0.001
              },
              "generator": "perlinNoise"
            },
            "trail": {
              "enable": true,
              "fillColor": "#000000",
              "length": 20
            },
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "events": {
            "onHover": {
              "enable": false,
              "mode": "grab"
            },
            "onClick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 200,
              "links": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            }
          }
        },
        "detectRetina": true
      }}
    />
  );
};

export default TrailParticles;