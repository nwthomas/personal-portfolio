const SCENE = {
  scenes: [{ nodes: [0] }],
  nodes: [
    { children: [1, 2, 3] },
    {
      camera: 0,
      translation: [76.66666666666654, 530.0000000000008, 999.9999999999999],
      rotation: [-1.1368683772161603e-16, 0, 0, 1],
      children: [4],
    },
    { visible: true, extensions: { KHR_lights_punctual: { light: 0 } } },
    {
      mesh_spe: 0,
      material: 0,
      spe_interaction: 0,
      translation: [-149.16666666666677, 631.0000000000011, 124.83527003649215],
      rotation: [
        0.4016652535971908,
        0.4242404682021621,
        0.04794653650653585,
        0.8101766343392915,
      ],
      scale: [1, 1, 1],
      visible: true,
      castShadow: true,
      receiveShadow: true,
      hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      type: "mesh3d",
      uuid: "0BDAB419-4978-4570-A9A8-4B3DD4900327",
      spe_cloner_visible: true,
    },
    {
      translation: [850000, 1300000, 1000000],
      rotation: [0, 0, 0.5, 0],
      visible: true,
      extensions: { KHR_lights_punctual: { light: 1 } },
    },
  ],
  meshes: [],
  meshes_spe: [
    {
      type: "CubeGeometry",
      parameters: {
        width: 250,
        height: 250,
        depth: 250,
        widthSegments: 1,
        heightSegments: 1,
        depthSegments: 1,
        cornerRadius: 55,
        cornerSegments: 14,
      },
    },
  ],
  materials: [
    {
      material_0_Phong: {
        extensions: {
          KHR_materials_common: {
            technique: "PHONG",
            values: {
              ambient: [
                0.34901960784313724,
                0.34901960784313724,
                0.34901960784313724,
              ],
              diffuse: [
                0.34901960784313724,
                0.34901960784313724,
                0.34901960784313724,
              ],
              specular: [
                0.06666666666666667,
                0.06666666666666667,
                0.06666666666666667,
              ],
              shininess: 30,
              emission: [0, 0, 0],
              transparent: true,
              transparency: 1,
            },
          },
        },
        spe_options: {
          side: 0,
          wireframe: false,
          flatShading: false,
          visible: true,
        },
        spe_layers: [
          {
            type: "color",
            uniforms: {
              alpha: { name: "alpha", value: 1, type: 1 },
              mode: { name: "mode", value: 0, type: 1 },
              color: { name: "color", value: 2565930, type: 6 },
            },
          },
          {
            type: "light",
            uniforms: {
              alpha: { name: "alpha", value: 1, type: 1 },
              mode: { name: "mode", value: 0, type: 1 },
            },
          },
        ],
      },
    },
  ],
  cameras: [
    {
      type: "Orthographic",
      orthographic: { xmag: 1680, ymag: 1050, zfar: 100000, znear: -50000 },
      spe_options: { zoom: 1 },
    },
  ],
  buffers: [],
  bufferViews: [],
  accessors: [],
  extensions: {
    KHR_lights_punctual: {
      lights: [
        {
          type: "hemispheric",
          name: "Default Ambient Light",
          color: [0.8274509803921568, 0.8274509803921568, 0.8274509803921568],
          intensity: 0.75,
        },
        {
          type: "directional",
          name: "Default Directional Light",
          color: [1, 1, 1],
          intensity: 0.75,
          shadows: {
            castShadow: false,
            shadowmapViewRight: 5,
            shadowmapViewLeft: -5,
            shadowmapViewTop: 5,
            shadowmapViewBottom: -5,
            shadowmapViewNear: 0.5,
            shadowmapViewFar: 500,
          },
        },
      ],
    },
  },
  spline: {
    interactions: [
      {
        uuid: "D30B4AF0-E78F-4D24-8E06-0FD39D4C1FB9",
        selectedState: 0,
        states: [
          "5F1F0D77-45A5-4995-9FE5-F14D62F96E69",
          "8C4641D1-11B1-43D8-8BDE-292CB9A654A8",
        ],
        events: [
          {
            type: 2,
            ui: { isCollapsed: false },
            targets: [
              {
                easing: 4,
                duration: 1000,
                delay: 0,
                cubicControls: [0.5, 0.05, 0.1, 0.3],
                springParameters: {
                  mass: 1,
                  stiffness: 80,
                  damping: 10,
                  velocity: 0,
                },
                repeat: false,
                cycle: false,
                rewind: false,
                object: "0BDAB419-4978-4570-A9A8-4B3DD4900327",
                state: "8C4641D1-11B1-43D8-8BDE-292CB9A654A8",
              },
            ],
          },
        ],
      },
    ],
    interactionStates: {
      "5F1F0D77-45A5-4995-9FE5-F14D62F96E69": {
        uuid: "5F1F0D77-45A5-4995-9FE5-F14D62F96E69",
        name: "Base State",
        position: [-149.16666666666677, 631.0000000000011, 124.83527003649215],
        rotation: [
          1.0911635162272582,
          0.8123948554331338,
          -0.3925730260345294,
          "XYZ",
        ],
        scale: [1, 1, 1],
        hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        geometry: { width: 250, height: 250, depth: 250 },
        material: {
          layersList: [
            {
              id: 0,
              type: "color",
              defines: {},
              uniforms: {
                f0_alpha: { value: 1 },
                f0_mode: { value: "0" },
                f0_color: { value: 2565930 },
              },
            },
            {
              id: 1,
              type: "light",
              defines: {},
              uniforms: { f1_alpha: { value: 1 }, f1_mode: { value: "0" } },
            },
          ],
        },
      },
      "8C4641D1-11B1-43D8-8BDE-292CB9A654A8": {
        uuid: "8C4641D1-11B1-43D8-8BDE-292CB9A654A8",
        name: "State 1",
        position: [-194.8333333333333, 535.0000000000006, 124],
        rotation: [
          0.5953547652378274,
          -0.43808859704053105,
          1.4934635349808456,
          "XYZ",
        ],
        scale: [1, 1, 1],
        hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        geometry: { width: 250, height: 250, depth: 250 },
        material: {
          layersList: [
            {
              id: 0,
              type: "color",
              defines: {},
              uniforms: {
                f0_alpha: { value: 1 },
                f0_mode: { value: 0 },
                f0_color: { value: 3355443 },
              },
            },
            {
              id: 1,
              type: "light",
              defines: {},
              uniforms: { f1_alpha: { value: 1 }, f1_mode: { value: 0 } },
            },
          ],
        },
      },
    },
    textures: {},
    images: {},
    mainCameraIndex: 1,
    usePrimitives: true,
    bgColor: [0.09803921568627451, 0.09803921568627451, 0.09803921568627451],
    bgAlpha: 1,
    orbitDamped: true,
    orbitTarget: [
      76.66666666666654,
      530.0000000000006,
      -3.0724878895486494e-14,
    ],
    cameraType: "Orthographic",
    cameraRotate: false,
    cameraPan: false,
    cameraZoom: false,
    viewMode: 1,
    viewWidth: 512,
    viewHeight: 512,
    quality: "high",
    useOrbitControls: false,
  },
};

export default SCENE;
