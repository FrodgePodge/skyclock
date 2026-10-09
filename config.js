/*
  Sky Clock settings. Edit the values, save, and reload the page (in Lively: right-click the wallpaper > Reload,
  or just re-apply it). Nothing else in the package needs touching.
*/
window.SKYCLOCK_CONFIG = {

  // Where you are, in decimal degrees. Approximate is fine: a degree is about 110 km, and the sky barely
  // changes across that. Latitude is positive north of the equator, negative south; longitude is positive east
  // of Greenwich, negative west. (Look yourself up on any map: right-click > "What's here?".)
  latitude: 51.5,    // London is 51.5, Sydney is -33.9
  longitude: -0.1,   // London is -0.1, Sydney is 151.2

  // The way your window faces, as seen from your desk. A compass point (N, NNE, NE, ENE, E, ESE, SE, SSE, S,
  // SSW, SW, WSW, W, WNW, NW, NNW) or a bearing in degrees clockwise from north (north 0, east 90, south 180).
  // The stars and planets are shown as seen through that window, with its direction in the middle of the screen;
  // east of it is on the right. The sun and moon are shown all the way round, so they're never out of sight.
  window: 'NE',

  // How many monitors the wallpaper is spread across: 1, 2 or 3 (side by side, left to right), or 'auto' to work it
  // out from the shape of the window. In Lively, set the screen layout to "Span" to stretch it across them all.
  // The clocks sit on the second monitor (or the only one).
  monitors: 'auto',

  // The gap between neighbouring monitors' screens (the two bezels and any space between them), in pixels of a
  // 1080p screen. The picture carries on behind it, so things line up across the gap. 50 suits most desks; raise it if
  // your monitors are further apart, lower it if they're closer.
  bezel: 50,

  // The clocks, left to right (at most 5; any more are ignored). Timezone names come from the tz database:
  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones  (the "TZ identifier" column).
  // Leave the list empty for no clocks.
  cities: [
    { name: 'San Francisco', timezone: 'America/Los_Angeles' },
    { name: 'New York',      timezone: 'America/New_York' },
    { name: 'London',        timezone: 'Europe/London' },
    { name: 'Tokyo',         timezone: 'Asia/Tokyo' },
    { name: 'Sydney',        timezone: 'Australia/Sydney' }
  ],

  // The order of the clocks: 'listed' keeps them as you wrote them above, left to right. 'timezone' sorts them
  // from west to east. Cities in the same timezone then stay in the order you listed them, unless you give one a
  // `nudge` (add `, nudge: -1` to move it left of its neighbours, `, nudge: 1` to move it right).
  order: 'listed',

  // The timezone the "+3h" / "−8h" offsets under each clock are measured from. 'local' means this computer's own.
  home: 'local',

  // The little frog in the garden, and the little crab beside it. Either can be switched off.
  frog: true,
  crab: true,

  // In Lively, the "Customise" panel (the sliders and boxes beside the wallpaper) also has these settings and wins
  // over this file. Set this to false to make this file the only source.
  livelyPanel: true
};
