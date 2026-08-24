const dataset = {
  "hourly_rates": { "taxi": 100, "suv": 100, "bus24": 150 },
  "products": [
    { "product_type": "tour", "from": "banff", "to": "BANFF SIGHTSEEING HOURLY", "prices": { "taxi": 100, "suv": 175, "bus24": 200 } },
    { "product_type": "tour", "from": "banff", "to": "BANFF SIGHTSEEING HALFDAY", "prices": { "taxi": 350, "suv": 550, "bus24": 600 } },
    { "product_type": "tour", "from": "banff", "to": "LAKE LOUISE TOUR 3HR", "prices": { "taxi": 300, "suv": 425, "bus24": 600 } },
    { "product_type": "transfer", "from": "banff", "to": "BAKER CREEK", "prices": { "taxi": 125, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "BANKHEAD", "prices": { "taxi": 40, "suv": 150, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "BOURGEAU LAKE TRAILHEAD", "prices": { "taxi": 60, "suv": 150, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "BOW LAKE NUMTI JAH LODGE", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "BRAGG CREEK", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "CALGARY", "prices": { "taxi": 300, "suv": 425, "bus24": 600 } },
    { "product_type": "transfer", "from": "yyc", "to": "BANFF", "prices": { "taxi": 330, "suv": 450, "bus24": 650 } },
    { "product_type": "transfer", "from": "yyc", "to": "KANANASKIS", "prices": { "taxi": 350, "suv": 475, "bus24": 700 } },
    { "product_type": "transfer", "from": "yyc", "to": "LAKE LOUISE", "prices": { "taxi": 450, "suv": 625, "bus24": 800 } },
    { "product_type": "transfer", "from": "calgary", "to": "KANANASKIS", "prices": { "taxi": 350, "suv": 475, "bus24": 700 } },
    { "product_type": "transfer", "from": "calgary", "to": "LAKE LOUISE", "prices": { "taxi": 450, "suv": 625, "bus24": 800 } },
    { "product_type": "transfer", "from": "lake louise", "to": "CALGARY", "prices": { "taxi": 425, "suv": 600, "bus24": 750 } },
    { "product_type": "transfer", "from": "banff", "to": "CANMORE", "prices": { "taxi": 85, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "CASTLE JUNCTION", "prices": { "taxi": 95, "suv": 150, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "COCHRANE", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "CORY PASS", "prices": { "taxi": 45, "suv": 150, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "COLUMBIA ICEFIELD", "prices": { "taxi": 450, "suv": 625, "bus24": 800 } },
    { "product_type": "transfer", "from": "banff", "to": "DEADMANS FLATS", "prices": { "taxi": 95, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "EDMONTON", "prices": { "taxi": 700, "suv": 900, "bus24": 1200 } },
    { "product_type": "transfer", "from": "banff", "to": "EMERALD LAKE", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "ENGADINE LODGE", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "EXSHAW", "prices": { "taxi": 125, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "FIELD", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "FIRESIDE TRAILHEAD", "prices": { "taxi": 45, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "GOAT CREEK", "prices": { "taxi": 125, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "GOLDEN", "prices": { "taxi": 300, "suv": 425, "bus24": 600 } },
    { "product_type": "transfer", "from": "banff", "to": "HARVIE HEIGHTS", "prices": { "taxi": 75, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "HEALY CREEK", "prices": { "taxi": 55, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "JAMIESON ROAD", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "JOHNSON LAKE", "prices": { "taxi": 55, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "JOHNSTON CANYON", "prices": { "taxi": 85, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "JASPER", "prices": { "taxi": 550, "suv": 700, "bus24": 1000 } },
    { "product_type": "transfer", "from": "banff", "to": "KANANASKIS VILLAGE", "prices": { "taxi": 200, "suv": 300, "bus24": 450 } },
    { "product_type": "transfer", "from": "banff", "to": "KANANASKIS GOLF COURSE", "prices": { "taxi": 175, "suv": 250, "bus24": 400 } },
    { "product_type": "transfer", "from": "banff", "to": "LAC DES ARCS", "prices": { "taxi": 125, "suv": 150, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "LAKE LOUISE", "prices": { "taxi": 185, "suv": 250, "bus24": 400 } },
    { "product_type": "transfer", "from": "banff", "to": "LAKE MINNEWANKA", "prices": { "taxi": 55, "suv": 150, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "LAKE OHARA", "prices": { "taxi": 200, "suv": 300, "bus24": 450 } },
    { "product_type": "transfer", "from": "banff", "to": "MINI THNI NAKODA LODGE", "prices": { "taxi": 200, "suv": 300, "bus24": 450 } },
    { "product_type": "transfer", "from": "banff", "to": "MORAINE LAKE", "prices": { "taxi": -1, "suv": -1, "bus24": -1 } },
    { "product_type": "transfer", "from": "banff", "to": "MOUNT SHARK HELIPAD", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "NAKODA CASINO", "prices": { "taxi": 175, "suv": 250, "bus24": 400 } },
    { "product_type": "transfer", "from": "banff", "to": "RADIUM HOT SPRINGS", "prices": { "taxi": 300, "suv": 425, "bus24": 600 } },
    { "product_type": "transfer", "from": "banff", "to": "RAFTER SIX RANCH", "prices": { "taxi": 150, "suv": 225, "bus24": 400 } },
    { "product_type": "transfer", "from": "banff", "to": "RED EARTH CREEK", "prices": { "taxi": 85, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "SASKATCHEWAN RIVER CROSSING", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } },
    { "product_type": "transfer", "from": "banff", "to": "SEEBE", "prices": { "taxi": 150, "suv": 225, "bus24": 400 } },
    { "product_type": "transfer", "from": "banff", "to": "STORM MOUNTAIN LODGE", "prices": { "taxi": 100, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "TWO JACK LAKE", "prices": { "taxi": 55, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "banff", "to": "YYC", "prices": { "taxi": 300, "suv": 425, "bus24": 600 } },
    { "product_type": "transfer", "from": "banff", "to": "LAKE LOUISE SKI HILL", "prices": { "taxi": 185, "suv": 250, "bus24": 400 } },
    { "product_type": "transfer", "from": "banff", "to": "MOUNT NORQUAY", "prices": { "taxi": 55, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "norquay", "to": "CANMORE", "prices": { "taxi": 125, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "norquay", "to": "LAKE LOUISE", "prices": { "taxi": 225, "suv": 350, "bus24": 475 } },
    { "product_type": "transfer", "from": "banff", "to": "SUNSHINE", "prices": { "taxi": 85, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "sunshine", "to": "LAKE LOUISE", "prices": { "taxi": 225, "suv": 350, "bus24": 475 } },
    { "product_type": "transfer", "from": "sunshine", "to": "CANMORE", "prices": { "taxi": 150, "suv": 225, "bus24": 400 } },
    { "product_type": "transfer", "from": "sunshine", "to": "MOUNT NORQUAY", "prices": { "taxi": 125, "suv": 175, "bus24": 250 } },
    { "product_type": "transfer", "from": "sunshine", "to": "CALGARY", "prices": { "taxi": 350, "suv": 475, "bus24": 700 } },
    { "product_type": "transfer", "from": "banff", "to": "KICKING HORSE RESORT", "prices": { "taxi": 325, "suv": 425, "bus24": 600 } },
    { "product_type": "transfer", "from": "banff", "to": "PANORAMA SKI AREA", "prices": { "taxi": 375, "suv": 525, "bus24": 675 } },
    { "product_type": "transfer", "from": "banff", "to": "NAKISKA", "prices": { "taxi": 250, "suv": 375, "bus24": 550 } }
  ]
};

let activeType = 'transfer';
let activeVehicle = 'taxi';

const SPUR_RATE_PER_KM = {
  taxi: 2.50,
  suv: 3.50,
  bus24: 5.00
};

// Municipal / Bylaw restricted routes
const restrictedRoutes = [
  { from: "canmore", to: "harvie_heights" },
  { from: "canmore", to: "deadmans_flats" }
];

// Master location definitions including direction and East-side spur distances
const locationMaster = {
  // WEST OF BANFF
  "lake_louise":               { region: "WEST", spur_distance: 0 },
  "lake_louise_ski_hill":      { region: "WEST", spur_distance: 0 },
  "moraine_lake":              { region: "WEST", spur_distance: 0 },
  "field":                     { region: "WEST", spur_distance: 0 },
  "emerald_lake":              { region: "WEST", spur_distance: 0 },
  "golden":                    { region: "WEST", spur_distance: 0 },
  "jasper":                    { region: "WEST", spur_distance: 0 },
  "columbia_icefield":         { region: "WEST", spur_distance: 0 },
  "bow_lake_numti_jah_lodge":  { region: "WEST", spur_distance: 0 },
  "baker_creek":               { region: "WEST", spur_distance: 0 },
  "castle_junction":           { region: "WEST", spur_distance: 0 },
  "johnston_canyon":           { region: "WEST", spur_distance: 0 },
  "cory_pass":                 { region: "WEST", spur_distance: 0 },
  "fireside_trailhead":        { region: "WEST", spur_distance: 0 },
  "bourgeau_lake_trailhead":   { region: "WEST", spur_distance: 0 },
  "healy_creek":               { region: "WEST", spur_distance: 0 },
  "red_earth_creek":           { region: "WEST", spur_distance: 0 },
  "sunshine":                  { region: "WEST", spur_distance: 0 },
  "sunshine_village":          { region: "WEST", spur_distance: 0 },
  "storm_mountain_lodge":      { region: "WEST", spur_distance: 0 },
  "lake_ohara":                { region: "WEST", spur_distance: 0 },
  "radium_hot_springs":        { region: "WEST", spur_distance: 0 },
  "kicking_horse_resort":      { region: "WEST", spur_distance: 0 },
  "panorama_ski_area":         { region: "WEST", spur_distance: 0 },
  "saskatchewan_river_crossing":{ region: "WEST", spur_distance: 0 },

  // EAST OF BANFF (Spur distances applied only to off-highway points)
  "canmore":                   { region: "EAST", spur_distance: 0 },
  "harvie_heights":            { region: "EAST", spur_distance: 0 },
  "deadmans_flats":            { region: "EAST", spur_distance: 0 },
  "exshaw":                    { region: "EAST", spur_distance: 15 },
  "lac_des_arcs":              { region: "EAST", spur_distance: 0 },
  "seebe":                     { region: "EAST", spur_distance: 5 },
  "cochrane":                  { region: "EAST", spur_distance: 0 },
  "calgary":                   { region: "EAST", spur_distance: 0 },
  "calgary_city":              { region: "EAST", spur_distance: 0 },
  "yyc":                       { region: "EAST", spur_distance: 0 },
  "edmonton":                  { region: "EAST", spur_distance: 0 },
  "bragg_creek":               { region: "EAST", spur_distance: 20 },
  "kananaskis":                { region: "EAST", spur_distance: 28 },
  "kananaskis_village":        { region: "EAST", spur_distance: 28 },
  "kananaskis_golf_course":    { region: "EAST", spur_distance: 25 },
  "nakiska":                   { region: "EAST", spur_distance: 22 },
  "engadine_lodge":            { region: "EAST", spur_distance: 35 },
  "goat_creek":                { region: "EAST", spur_distance: 10 },
  "mount_shark_helipad":       { region: "EAST", spur_distance: 40 },
  "jamieson_road":             { region: "EAST", spur_distance: 10 },
  "rafter_six_ranch":          { region: "EAST", spur_distance: 5 },
  "mini_thni_nakoda_lodge":    { region: "EAST", spur_distance: 5 },
  "nakoda_casino":             { region: "EAST", spur_distance: 0 },

  // HUB
  "banff":                     { region: "HUB",  spur_distance: 0 },
  "mount_norquay":             { region: "HUB",  spur_distance: 0 },
  "norquay":                   { region: "HUB",  spur_distance: 0 },
  "bankhead":                  { region: "HUB",  spur_distance: 0 },
  "johnson_lake":              { region: "HUB",  spur_distance: 0 },
  "lake_minnewanka":           { region: "HUB",  spur_distance: 0 },
  "two_jack_lake":             { region: "HUB",  spur_distance: 0 }
};

function isRouteRestricted(from, to) {
  return restrictedRoutes.some(rule => 
    (rule.from === from && rule.to === to) ||
    (rule.from === to && rule.to === from)
  );
}

function getBanffRate(location) {
  if (location === "banff") return 0;
  
  const match = dataset.products.find(p => 
    p.product_type === activeType &&
    ((p.from.toLowerCase() === "banff" && p.to.toLowerCase() === location) ||
     (p.from.toLowerCase() === location && p.to.toLowerCase() === "banff"))
  );

  return match ? match.prices[activeVehicle] : 0;
}

function CalculatePrice(pFrom, pTo) {
  const from = pFrom.toLowerCase();
  const to = pTo.toLowerCase();

  // 1. Territory Restriction Check
  if (isRouteRestricted(from, to)) return -2;

  // 2. Direct or Reverse Exact Route Match (Overrides dynamic calculation)
  const directMatch = dataset.products.find(p => 
    p.product_type === activeType &&
    ((p.from.toLowerCase() === from && p.to.toLowerCase() === to) ||
     (p.from.toLowerCase() === to && p.to.toLowerCase() === from))
  );

  if (directMatch && directMatch.prices[activeVehicle] > 0) {
    return directMatch.prices[activeVehicle];
  }

  // 3. Fallback Off-Center Calculation Logic
  const locA = locationMaster[from] || { region: "WEST", spur_distance: 0 };
  const locB = locationMaster[to] || { region: "WEST", spur_distance: 0 };

  const rateFrom = getBanffRate(from);
  const rateTo = getBanffRate(to);

  if (rateFrom === -1 || rateTo === -1) return -1; // Unpriced / Manual route
  if (rateFrom === 0 && from !== "banff") return -1;
  if (rateTo === 0 && to !== "banff") return -1;

  // TRANS-BANFF TRIP (East to West or West to East)
  if ((locA.region === "EAST" && locB.region === "WEST") || 
      (locA.region === "WEST" && locB.region === "EAST")) {
    return rateFrom + rateTo;
  }

  // EAST-ONLY TRIP (Adds spur distance surcharge)
  if (locA.region === "EAST" && locB.region === "EAST") {
    const baseStemPrice = Math.max(rateFrom, rateTo);
    const totalSpurDistance = locA.spur_distance + locB.spur_distance;
    const perKmRate = SPUR_RATE_PER_KM[activeVehicle] || 2.50;
    
    return baseStemPrice + ((totalSpurDistance * 2) * perKmRate);
  }

  // WEST-ONLY OR HUB TRIPS
  return Math.max(rateFrom, rateTo);
}

function calculateQuote() {
  if (activeType === 'package') return;

  const origin = document.getElementById('origin-select').value;
  const dest = document.getElementById('dest-select').value;
  const waitHours = parseFloat(document.getElementById('wait-time').value) || 0;
  
  const isReturn = document.getElementById('isReturn').checked;
  const isQuickReturn = document.getElementById('isQuickReturn').checked;

  const quoteDisplay = document.getElementById('quote-display');
  const quoteNotes = document.getElementById('quote-notes');

  if (origin.toLowerCase() === dest.toLowerCase()) {
    quoteDisplay.textContent = '$0';
    quoteNotes.textContent = 'Origin and Destination are identical';
    return;
  }

  const basePrice = CalculatePrice(origin, dest);

  if (basePrice === -2) {
    quoteDisplay.textContent = 'N/A';
    quoteNotes.textContent = 'Restricted Territory (Out of Zone)';
    return;
  }

  if (basePrice === -1) {
    quoteDisplay.textContent = 'Manual';
    quoteNotes.textContent = 'Custom Route / Call Dispatch';
    return;
  }

  // Hourly wait time surcharge calculation
  const waitRate = dataset.hourly_rates[activeVehicle] || 100;
  let total = basePrice + (waitHours * waitRate);

  let noteText = `${activeVehicle.toUpperCase()} Flat Rate`;

  if (isReturn) {
    if (isQuickReturn) {
      total *= 1.5; // Quick Turn Half-Price Return
      noteText = `Quick Return (1.5x Base Rate)`;
    } else {
      total *= 2;   // Standard Round Trip
      noteText = `Round Trip (2x Base Rate)`;
    }
  } else if (isQuickReturn) {
    noteText += ` (Requires Return Trip)`;
  }

  if (waitHours > 0) {
    noteText += ` + ${waitHours}h wait`;
  }

  quoteDisplay.textContent = `$${total.toFixed(0)}`;
  quoteNotes.textContent = noteText;
}

function onQuickTurnToggle() {
  const isQuick = document.getElementById('isQuickReturn').checked;
  if (isQuick) {
    document.getElementById('isReturn').checked = true;
  }
  calculateQuote();
}

function setProductType(type) {
  activeType = type;
  ['transfer', 'tour', 'package'].forEach(t => {
    const btn = document.getElementById(`btn-${t}`);
    if (btn) {
      if (t === type) {
        btn.className = "py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all bg-white text-gray-900 shadow-sm";
      } else {
        btn.className = "py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all text-gray-600 hover:text-gray-900";
      }
    }
  });

  if (type === 'package') {
    renderPackages();
  } else {
    populateAtomicDropdowns();
  }
}

function setVehicle(v) {
  activeVehicle = v;
  ['taxi', 'suv', 'bus24'].forEach(tier => {
    const btn = document.getElementById(`veh-${tier}`);
    if (btn) {
      if (tier === v) {
        btn.className = "py-2 px-1 text-center border-2 border-blue-600 bg-blue-50 text-blue-700 rounded-xl font-medium text-xs sm:text-sm transition-all";
      } else {
        btn.className = "py-2 px-1 text-center border-2 border-gray-200 bg-white text-gray-600 rounded-xl font-medium text-xs sm:text-sm transition-all";
      }
    }
  });
  calculateQuote();
}

function getAtomicLocations() {
  const locations = new Set();
  const filtered = dataset.products.filter(p => p.product_type === activeType);
  filtered.forEach(p => {
    if (p.from) locations.add(p.from.toLowerCase());
    if (p.to) locations.add(p.to.toLowerCase());
  });
  return Array.from(locations).sort();
}

function populateAtomicDropdowns() {
  const locations = getAtomicLocations();
  const originSelect = document.getElementById('origin-select');
  const destSelect = document.getElementById('dest-select');

  if (!originSelect || !destSelect) return;

  const currentOrigin = originSelect.value || 'banff';
  const currentDest = destSelect.value || 'canmore';

  originSelect.innerHTML = '';
  destSelect.innerHTML = '';

  locations.forEach(loc => {
    const formatted = loc.replace(/_/g, ' ').toUpperCase();
    
    const optA = document.createElement('option');
    optA.value = loc;
    optA.textContent = formatted;
    originSelect.appendChild(optA);

    const optB = document.createElement('option');
    optB.value = loc;
    optB.textContent = formatted;
    destSelect.appendChild(optB);
  });

  originSelect.value = currentOrigin;
  destSelect.value = currentDest;

  calculateQuote();
}

function reverseDestination() {
  const originSelect = document.getElementById('origin-select');
  const destSelect = document.getElementById('dest-select');

  if (!originSelect || !destSelect) return;

  const temp = originSelect.value;
  originSelect.value = destSelect.value;
  destSelect.value = temp;

  calculateQuote();
}

function onPaxChange() {
  const paxInput = document.getElementById('pax-input');
  if (!paxInput) return;
  
  const pax = parseInt(paxInput.value) || 1;
  if (pax <= 4) setVehicle('taxi');
  else if (pax <= 6) setVehicle('suv');
  else setVehicle('bus24');
}

function renderPackages() {
  const originSelect = document.getElementById('origin-select');
  const destSelect = document.getElementById('dest-select');
  const quoteDisplay = document.getElementById('quote-display');
  const quoteNotes = document.getElementById('quote-notes');

  if (originSelect) originSelect.innerHTML = '<option>Custom Location</option>';
  if (destSelect) destSelect.innerHTML = '<option>Wedding / Event Package</option>';
  if (quoteDisplay) quoteDisplay.textContent = 'Custom';
  if (quoteNotes) quoteNotes.textContent = 'Contact sales for package rates';
}
