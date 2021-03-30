const Surf = require('./index.js');

Surf.insertMany([
  {
    id: 1,
    beach: 'La Jolla Shores',
    surf: '1-2',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '5',
    swell: '1.6 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg'
  },
  {
    id: 2,
    beach: 'Pacific Beach',
    surf: '2-3',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '6',
    swell: '1.7 ft at 15s SW 215',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg'
  },
  {
    id: 3,
    beach: 'Old Man\'s at Tourmaline',
    surf: '1-2',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '6',
    swell: '1.7 ft at 15s SW 215',
    water: '57 - 58',
    weather: '57',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg'
  },
  {
    id: 4,
    beach: 'Black\s Beach',
    surf: '2-3+',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1.',
    tide: '1.8',
    wind: '5',
    swell: '1.6 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg'
  },
  {
    id: 5,
    beach: 'Cardiff',
    surf: '2-3',
    report: 'Still on the smaller side this afternoon as primary SSW swell rolls in over smaller NW swell mix, good for mostly knee-waist high surf. Some texture from light+ to locally moderate westerly onshore wind but overall it\'s pretty manageable with soft, cruisy corners to work with. Tide is still on the full side, dropping down to a 4:20pm low of -0.1',
    tide: '1.9',
    wind: '5',
    swell: '2.3 ft at 16s SW 221',
    water: '57 - 58',
    weather: '53',
    suit: 'https://images.boardriders.com/global/billabong-products/all/default/hi-res/mwfu3bf4_billabong,v_blk_sd1.jpg'
  },
])
.then(() => {
  console.log('Data inserted');
})
.catch((error) => {
  console.log(error);
})