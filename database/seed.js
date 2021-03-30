const Surf = require('./index.js');

Surf.insertMany([
  {
    id: 1,
    beach: 'La Jolla Shores',
    city: 'San Diego',
    surf: '1-2',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '5',
    swell: '1.6 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/la-jolla-shores/5842041f4e65fad6a77088cc'
  },
  {
    id: 2,
    beach: 'Pacific Beach',
    city: 'San Diego',
    surf: '2-3',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '6',
    swell: '1.7 ft at 15s SW 215',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/pacific-beach/5842041f4e65fad6a7708841'
  },
  {
    id: 3,
    beach: 'Old Man\'s at Tourmaline',
    city: 'San Diego',
    surf: '1-2',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '6',
    swell: '1.7 ft at 15s SW 215',
    water: '57 - 58',
    weather: '57',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/old-man-s-at-tourmaline/5842041f4e65fad6a77088c4'
  },
  {
    id: 4,
    beach: 'Black\s Beach',
    city: 'San Diego',
    surf: '2-3+',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '5',
    swell: '1.6 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/blacks/5842041f4e65fad6a770883b'
  },
  {
    id: 5,
    beach: 'Cardiff',
    city: 'San Diego',
    surf: '2-3',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1',
    tide: '1.9',
    wind: '5',
    swell: '2.3 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/cardiff-reef-overview/5842041f4e65fad6a77088b1?camId=583496ce3421b20545c4b52a'
  },
  {
    id: 6,
    beach: 'Venice Breakwater',
    city: 'Los Angeles',
    surf: '2-3+',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1',
    tide: '5.6',
    wind: '3',
    swell: '1.9 ft at 15s SW 210',
    water: '57 - 58',
    weather: '51',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/venice-breakwater/590927576a2e4300134fbed8'
  },
  {
    id: 7,
    beach: 'El Porto Manhattan Beach',
    city: 'Los Angeles',
    surf: '2-3',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1',
    tide: '1.9',
    wind: '5',
    swell: '2.3 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg',
    livestream: 'https://www.surfline.com/surf-report/cardiff-reef-overview/5842041f4e65fad6a77088b1?camId=583496ce3421b20545c4b52a'
  },
])
.then(() => {
  console.log('Data inserted');
})
.catch((error) => {
  console.log(error);
})