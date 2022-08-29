const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec ',
    post_text: 'Donec posuere metus vitae ipsum',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Morbi non quam nec dui luctus rutrum.Morbi non quam nec dui luctus rutrum.Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'desdevpg fdsfdsfds fdsfdsfds fdsfdsfdsfds',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Pellentesque eget nunc.Pellentesque eget nunc.Pellentesque eget nunc.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'In hac habitasse platea dictumstIn hac habitasse platea dictumstIn hac habitasse platea dictumstIn hac habitasse platea dictumst',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Morbi non quam nec dui luctus rutrumMorbi non quam nec dui luctus rutrumMorbi non quam nec dui luctus rutrum',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Duis ac nibhDuis ac nibhDuis ac nibhDuis ac nibh',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'rCurabitur at ipsum ac tellus semper interdumCurabitur at ipsum ac tellus semper interdumCurabitur at ipsum ac tellus semper interdumCurabitur at ipsum ac tellus semper interdum',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'In hac habitasse platea dictumstIn hac habitasse platea dictumstIn hac habitasse platea dictumstIn hac habitasse platea dictumst',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'instagraCras mi pede, malesuada in, imperdiet et, commodo vulputate, justxml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'lycosinstagram.cCras mi pede, malesuada in, imperdiet et, commodo vulputate, justml',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'gmpginstagram.Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justCras mi pede, malesuada in, imperdiet et, commodo vulputate, justCras mi pede, malesuada in, imperdiet et, commodo vulputate, justl',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: '/paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
