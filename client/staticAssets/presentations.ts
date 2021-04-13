export interface Presentation {
  date: string;
  description: string;
  location: string;
  meetupTitle: string;
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
    meetupTitle: 'React Native at Shopify Meetup',
    presenters: 'Justine De Caires and Nathan Thomas',
    description:
      "This talk was given at the Shopify HQ in San Francisco, CA following Shopify's big push towards using React Native throughout its product suite. Twitter uses React Native Web extensively inside its web apps, so it was a natural fit for us to present at it. We discussed the StyleSheet, great primitives offered up by the library (like the PanResponder API to handle touch primitives), and more.",
    date: 'January 29th, 2020',
    location: 'Shopify HQ, San Francisco, CA',
    url: 'https://www.youtube-nocookie.com/embed/GNrQTbIFsG4?start=2909',
    videoHeight: 315,
    videoRatio: 560 / 315,
    videoWidth: 560,
  },
];
