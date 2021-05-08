export interface Presentation {
  date: string;
  description: string;
  location: string;
  presenters: string;
  title: string;
  url: string;
  videoHeight: number;
  videoRatio: number;
  videoWidth: number;
}

export const presentations: Array<Presentation> = [
  {
    title: 'React Native Web at Twitter',
    presenters: 'Justine De Caires and Nathan Thomas',
    description:
      "This talk was given following Shopify's push towards using React Native. Twitter uses React Native Web, so it was a natural fit for us to present at it. We discussed the StyleSheet, great React Native features (like the PanResponder API to handle gestures), and more.",
    date: 'January 29th, 2020',
    location: 'Shopify HQ, San Francisco, CA',
    url: 'https://www.youtube-nocookie.com/embed/GNrQTbIFsG4?start=2909',
    videoHeight: 315,
    videoRatio: 560 / 315,
    videoWidth: 560,
  },
];
