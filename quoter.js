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

const locationDirections = {
  // WEST OF BANFF (BC side / Highway 93N / Lake Louise direction)
  "lake_louise": "WEST",
  "lake_louise_ski_hill": "WEST",
  "moraine_lake": "WEST",
  "field": "WEST",
  "emerald_lake": "WEST",
  "golden": "WEST",
  "jasper": "WEST",
  "columbia_icefield": "WEST",
  "bow_lake_numti_jah_lodge": "WEST",
  "baker_creek": "WEST",
  "castle_junction": "WEST",
  "johnston_canyon": "WEST",
  "cory_pass": "WEST",
  "fireside_trailhead": "WEST",
  "bourgeau_lake_trailhead": "WEST",
  "healy_creek": "WEST",
  "red_earth_creek": "WEST",
  "sunshine": "WEST",
  "sunshine_village": "WEST",
  "storm_mountain_lodge": "WEST",
  "lake_ohara": "WEST",
  "radium_hot_springs": "WEST",
  "kicking_horse_resort": "WEST",
  "panorama_ski_area": "WEST",
  "saskatchewan_river_crossing": "WEST",

  // EAST OF BANFF (Calgary side / Canmore / Kananaskis direction)
  "canmore": "EAST",
  "harvie_heights": "EAST",
  "deadmans_flats": "EAST",
  "exshaw": "EAST",
  "lac_des_arcs": "EAST",
  "seebe": "EAST",
  "cochrane": "EAST",
  "calgary": "EAST",
  "calgary_city": "EAST",
  "yyc": "EAST",
  "edmonton": "EAST",
  "bragg_creek": "EAST",
  "kananaskis": "EAST",
  "kananaskis_village": "EAST",
  "kananaskis_golf_course": "EAST",
  "nakiska": "EAST",
  "engadine_lodge": "EAST",
  "goat_creek": "EAST",
  "mount_shark_helipad": "EAST",
  "jamieson_road": "EAST",
  "rafter_six_ranch": "EAST",
  "mini_thni_nakoda_lodge": "EAST",
  "nakoda_casino": "EAST",

  // IN OR IMMEDIATE BANFF (Hub / Neutral)
  "banff": "HUB",
  "mount_norquay": "HUB",
  "norquay": "HUB",
  "bankhead": "HUB",
  "johnson_lake": "HUB",
  "lake_minnewanka": "HUB",
  "two_jack_lake": "HUB"
};

// Helper to look up Banff -> Location base rate for current vehicle
function getBanffRate(location) {
  if (location === "banff") return 0;
  
  const match = dataset.products.find(p => 
    p.product_type === activeType &&
    ((p.from.toLowerCase() === "banff" && p.to.toLowerCase() === location) ||
     (p.from.toLowerCase() === location && p.to.toLowerCase() === "banff"))
  );

  return match ? match.prices[activeVehicle] : 0;
}
function onQuickTurnToggle() {
  const isQuick = document.getElementById('isQuickReturn').checked;
  if (isQuick) {
    // Quick turn automatically implies a return trip
    document.getElementById('isReturn').checked = true;
  }
  calculateQuote();
}


function CalculatePrice(pFrom, pTo) {
  const from = pFrom.toLowerCase();
  const to = pTo.toLowerCase();

  // 1. Direct or Reverse Exact Route Match
  const directMatch = dataset.products.find(p => 
    p.product_type === activeType &&
    ((p.from.toLowerCase() === from && p.to.toLowerCase() === to) ||
     (p.from.toLowerCase() === to && p.to.toLowerCase() === from))
  );

  if (directMatch) {
    return directMatch.prices[activeVehicle];
  }

  // 2. Off-Center Calculation Logic
  const dirFrom = locationDirections[from] || "WEST";
  const dirTo = locationDirections[to] || "WEST";

  const rateFrom = getBanffRate(from);
  const rateTo = getBanffRate(to);

  // Manual pricing flag check (e.g., Moraine Lake)
  if (rateFrom === -1 || rateTo === -1) return -1;
  if (rateFrom === 0 || rateTo === 0) return -1; // Missing rate

  // OPPOSITE SIDES (Trans-Banff): West to East OR East to West
  if ((dirFrom === "WEST" && dirTo === "EAST") || (dirFrom === "EAST" && dirTo === "WEST")) {
    return rateFrom + rateTo;
  } 
  
  // SAME SIDE (Deadhead Return): Max(Banff->From, Banff->To) * 2 + 50
  return (Math.max(rateFrom, rateTo)) + 50;
}

    function setProductType(type) {
      activeType = type;
      ['transfer', 'tour', 'package'].forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        if (t === type) {
          btn.className = "py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all bg-white text-gray-900 shadow-sm";
        } else {
          btn.className = "py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all text-gray-600 hover:text-gray-900";
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
        if (tier === v) {
          btn.className = "py-2 px-1 text-center border-2 border-blue-600 bg-blue-50 text-blue-700 rounded-xl font-medium text-xs sm:text-sm transition-all";
        } else {
          btn.className = "py-2 px-1 text-center border-2 border-gray-200 bg-white text-gray-600 rounded-xl font-medium text-xs sm:text-sm transition-all";
        }
      });
      calculateQuote();
    }

    // Extract all unique locations into one master atomic array
    function getAtomicLocations() {
      const locations = new Set();
      const filtered = dataset.products.filter(p => p.product_type === activeType);
      console.log(activeType);
      filtered.forEach(p => {
        if (p.from) locations.add(p.from.toLowerCase());
        if (p.to) locations.add(p.to.toLowerCase());
      });
      return Array.from(locations).sort();
    }

    // Populate BOTH dropdowns with the exact same master list
    function populateAtomicDropdowns() {
      const locations = getAtomicLocations();
      const originSelect = document.getElementById('origin-select');
      const destSelect = document.getElementById('dest-select');

      const currentOrigin = originSelect.value || 'banff';
      const currentDest = destSelect.value || 'canmore';

      originSelect.innerHTML = '';
      destSelect.innerHTML = '';

      locations.forEach(loc => {
        const formatted = loc.replace(/_/g, ' ').toUpperCase();
        
        // Add to Pickup dropdown
        const optA = document.createElement('option');
        optA.value = loc;
        optA.textContent = formatted;
        originSelect.appendChild(optA);

        // Add to Destination dropdown
        const optB = document.createElement('option');
        optB.value = loc;
        optB.textContent = formatted;
        destSelect.appendChild(optB);
      });

      originSelect.value = currentOrigin;
      destSelect.value = currentDest;

      calculateQuote();
    }

    // Atomic UI Swap
    function reverseDestination() {
      const originSelect = document.getElementById('origin-select');
      const destSelect = document.getElementById('dest-select');

      const temp = originSelect.value;
      originSelect.value = destSelect.value;
      destSelect.value = temp;

      calculateQuote();
    }

    function onPaxChange() {
      const pax = parseInt(document.getElementById('pax-input').value) || 1;
      if (pax <= 4) setVehicle('taxi');
      else if (pax <= 6) setVehicle('suv');
      else setVehicle('bus24');
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

  if (basePrice === -1) {
    quoteDisplay.textContent = 'Manual';
    quoteNotes.textContent = 'Custom Route / Call Dispatch';
    return;
  }

  // 1. Calculate vehicle wait time surcharge
  const waitRate = dataset.hourly_rates[activeVehicle] || 100;
  let total = basePrice + (waitHours * waitRate);

  // 2. Apply Return Trip & Quick Turn Discounts
  let noteText = `${activeVehicle.toUpperCase()} Flat Rate`;

  if (isReturn) {
    if (isQuickReturn) {
      // Return leg is 50% off -> Base + (Base * 0.5) = 1.5x
      total *= 1.5;
      noteText = `Quick Return (1.5x Base Rate)`;
    } else {
      // Standard Round Trip -> 2x Base Rate
      total *= 2;
      noteText = `Round Trip (2x Base Rate)`;
    }
  } else if (isQuickReturn) {
    // If Quick Return is checked without Return Trip, uncheck or note it
    noteText += ` (Requires Return Trip)`;
  }

  if (waitHours > 0) {
    noteText += ` + ${waitHours}h wait`;
  }

  quoteDisplay.textContent = `$${total.toFixed(0)}`;
  quoteNotes.textContent = noteText;
}
	
	
function __GOODcalculateQuote() {
  if (activeType === 'package') return;

  const origin = document.getElementById('origin-select').value;
  const dest = document.getElementById('dest-select').value;
  const waitHours = parseFloat(document.getElementById('wait-time').value) || 0;
  const isReturn = document.getElementById('isReturn').checked;

  const quoteDisplay = document.getElementById('quote-display');
  const quoteNotes = document.getElementById('quote-notes');

  if (origin.toLowerCase() === dest.toLowerCase()) {
    quoteDisplay.textContent = '$0';
    quoteNotes.textContent = 'Origin and Destination are identical';
    return;
  }

  const basePrice = CalculatePrice(origin, dest);

  if (basePrice === -1) {
    quoteDisplay.textContent = 'Manual';
    quoteNotes.textContent = 'Custom Route / Call Dispatch';
    return;
  }

  const waitRate = dataset.hourly_rates[activeVehicle] || 100;
  let total = basePrice + (waitHours * waitRate);

  if (isReturn) total *= 2;

  quoteDisplay.textContent = `$${total.toFixed(0)}`;
  
  let noteText = `${activeVehicle.toUpperCase()} Flat Rate`;
  if (isReturn) noteText = `Round Trip (${noteText})`;
  if (waitHours > 0) noteText += ` + ${waitHours}h wait`;
  
  quoteNotes.textContent = noteText;
}
    function _calculateQuote() {
      if (activeType === 'package') return;

      const origin = document.getElementById('origin-select').value.toLowerCase();
      const dest = document.getElementById('dest-select').value.toLowerCase();
      const waitHours = parseFloat(document.getElementById('wait-time').value) || 0;
      const isReturn = document.getElementById('isReturn').checked;

      const quoteDisplay = document.getElementById('quote-display');
      const quoteNotes = document.getElementById('quote-notes');

      if (origin === dest) {
        quoteDisplay.textContent = '$0';
        quoteNotes.textContent = 'Origin and Destination are identical';
        return;
      }

      // 1. Direct route match
      let product = dataset.products.find(p => 
        p.product_type === activeType && 
        p.from.toLowerCase() === origin && 
        p.to.toLowerCase() === dest
      );

      // 2. Reverse route match fallback
      if (!product) {
        product = dataset.products.find(p => 
          p.product_type === activeType && 
          p.from.toLowerCase() === dest && 
          p.to.toLowerCase() === origin
        );
      }

      let basePrice = 0;

      if (product) {
        basePrice = product.prices[activeVehicle];
      } else {
        // 3. Off-center deadhead formula fallback (Origin -> Banff -> Dest)
        const originBanff = dataset.products.find(p => p.from === 'banff' && p.to.toLowerCase() === origin);
        const destBanff = dataset.products.find(p => p.from === 'banff' && p.to.toLowerCase() === dest);

        if (originBanff && destBanff) {
          const priceA = originBanff.prices[activeVehicle];
          const priceB = destBanff.prices[activeVehicle];
          if (priceA > 0 && priceB > 0) {
            basePrice = (Math.max(priceA, priceB) * 2) + 30;
          } else {
            basePrice = -1;
          }
        } else {
          quoteDisplay.textContent = 'N/A';
          quoteNotes.textContent = 'Custom Route (Call Dispatch)';
          return;
        }
      }

      if (basePrice === -1) {
        quoteDisplay.textContent = 'Manual';
        quoteNotes.textContent = 'Moraine Lake (Call Dispatch)';
        return;
      }

      const waitRate = dataset.hourly_rates[activeVehicle] || 100;
      let total = basePrice + (waitHours * waitRate);

      if (isReturn) total *= 2;

      quoteDisplay.textContent = `$${total.toFixed(0)}`;
      
      let noteText = `${activeVehicle.toUpperCase()} Flat Rate`;
      if (isReturn) noteText = `Round Trip (${noteText})`;
      if (waitHours > 0) noteText += ` + ${waitHours}h wait`;
      
      quoteNotes.textContent = noteText;
    }

    function renderPackages() {
      document.getElementById('origin-select').innerHTML = '<option>Custom Location</option>';
      document.getElementById('dest-select').innerHTML = '<option>Wedding / Event Package</option>';
      document.getElementById('quote-display').textContent = 'Custom';
      document.getElementById('quote-notes').textContent = 'Contact sales for package rates';
    }

    // Initialize dropdowns on load