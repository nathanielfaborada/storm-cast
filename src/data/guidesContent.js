/**
 * guidesContent.js — Comprehensive Philippine Meteorological & Climatological Guides
 *
 * Author: Nathaniel Faborada (StormCast PH, Bulacan)
 * Verified against: DOST-PAGASA, World Meteorological Organization (WMO), NOAA
 */

export const meteorologicalGuides = [
  {
    id: 'philippine-typhoon-genesis-par',
    title: 'The Anatomy of Philippine Typhoons: Genesis, PAR Dynamics & Intensity Classification',
    category: 'Typhoon Science',
    readTime: '8 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'Explore how tropical cyclones originate over the Western Pacific warm pool, enter the Philippine Area of Responsibility (PAR), and how DOST-PAGASA categorizes them based on 10-minute sustained wind standards.',
    keyTakeaways: [
      'The Western Pacific warm pool sustains ocean temperatures above 28°C–30°C, providing ideal thermal energy for tropical cyclogenesis.',
      'PAR is bounded by coordinates 4°N 114°E, 25°N 114°E, 25°N 135°E, and 4°N 135°E.',
      'PAGASA uses 10-minute sustained wind averaging, while the US JTWC uses 1-minute sustained wind averaging, explaining differences in reported storm speeds.',
      'Super Typhoons are classified by PAGASA as systems with sustained winds exceeding 185 km/h (effective May 2022 revised scale).',
    ],
    content: `
### 1. The Western Pacific Cyclogenesis Engine
The Philippine archipelago lies directly on the western edge of the Northwestern Pacific Ocean basin — the most prolific tropical cyclogenesis incubator on planet Earth. While the Atlantic basin averages 12 to 14 named storms annually, the Western Pacific generates an average of 26 to 30 tropical systems per year, with approximately 20 entering the Philippine Area of Responsibility (PAR).

Three primary thermodynamic ingredients drive cyclogenesis in our region:
- **Sea Surface Temperatures (SST):** Water temperatures must exceed 26.5°C down to a depth of at least 50 meters. The Western Pacific "Warm Pool" routinely maintains surface temperatures between 29°C and 31°C, providing immense latent heat of condensation.
- **Low Vertical Wind Shear:** Weak upper-tropospheric shear (less than 10–15 knots) prevents the convective cloud column from tilting, allowing latent heat release to concentrate over the surface low-pressure center.
- **Coriolis Acceleration:** Cyclones rarely develop within 5 degrees of the Equator due to negligible Coriolis force. Between 6°N and 20°N, planetary rotation easily imparts cyclonic spin to incoming easterly waves.

### 2. Defining the Philippine Area of Responsibility (PAR)
The Philippine Area of Responsibility is a designated maritime meteorological domain demarcated by six geographical coordinate points:
1. 25°N, 120°E
2. 25°N, 135°E
3. 5°N, 135°E
4. 5°N, 115°E
5. 15°N, 115°E
6. 21°N, 120°E

Whenever a tropical disturbance crosses into these boundaries, DOST-PAGASA assumes operational warning responsibility, assigns an official Philippine domestic name from a pre-determined 4-year rotating cycle, and issues regular Severe Weather Bulletins every 3 to 6 hours.

### 3. Sustained Wind Averaging: PAGASA vs. JTWC Standards
A common point of public confusion occurs when international agencies report differing peak wind speeds for the same storm.
- **DOST-PAGASA & WMO Standard:** PAGASA measures maximum sustained surface winds using a **10-minute averaging period**. This yields lower numerical values but represents sustained aerodynamic force on structures.
- **US Joint Typhoon Warning Center (JTWC):** JTWC utilizes a **1-minute averaging period** (aligned with the US Saffir-Simpson Scale). A 1-minute sustained wind reading is mathematically approximately 12% to 15% higher than a 10-minute reading for the exact same vortex.

### 4. Official DOST-PAGASA Cyclone Classification Scale
In May 2022, DOST-PAGASA updated its tropical cyclone classification system to better reflect high-intensity extremes:
- **Tropical Depression (TD):** Maximum sustained winds up to 61 km/h.
- **Tropical Storm (TS):** Maximum sustained winds of 62 to 88 km/h.
- **Severe Tropical Storm (STS):** Maximum sustained winds of 89 to 117 km/h.
- **Typhoon (TY):** Maximum sustained winds of 118 to 184 km/h.
- **Super Typhoon (STY):** Maximum sustained winds of **185 km/h or higher**.
    `,
  },
  {
    id: 'amihan-habagat-monsoon-systems',
    title: 'Amihan and Habagat: Understanding the Monsoon Systems of the Philippines',
    category: 'Monsoons & Climate',
    readTime: '7 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'A meteorological breakdown of the Northeast Monsoon (Amihan) and Southwest Monsoon (Habagat), seasonal reversal mechanics, ITCZ interaction, and Coronas climate types.',
    keyTakeaways: [
      'Amihan (Northeast Monsoon) originates from the Siberian High, prevailing from November to February, bringing cool dry air to western Luzon and rains to eastern seaboards.',
      'Habagat (Southwest Monsoon) originates from the Southern Hemisphere subtropical high, prevailing from June to October, bringing intense moisture and floods to western Philippines.',
      'Typhoons outside PAR can still trigger disastrous Habagat flooding through monsoonal entrainment and low-level jet streams.',
      'The Coronas system divides the Philippines into four distinct rainfall regimes across the archipelago.',
    ],
    content: `
### 1. Planetary Mechanics of Monsoonal Wind Shifts
The Philippine archipelago experiences a complete reversal of prevailing wind directions twice every calendar year. This phenomenon is driven by differential solar heating between the massive Asian continental landmass and the vast tropical Indian and Pacific Oceans.

### 2. Amihan: The Northeast Monsoon (November to February)
During boreal winter, the continent of Asia cools rapidly, forming an intense, semi-permanent high-pressure cell known as the **Siberian-Mongolian High**. Cold, dense continental air flows southward across China toward the equatorial low-pressure trough.
- As this air crosses the warm waters of the East China Sea and Luzon Strait, it absorbs moisture in its lowest layers.
- Upon making contact with the eastern mountain ranges of the Philippines (Sierra Madre in Luzon, Eastern Samar, and the Diwata Mountains in Mindanao), the air is forced upward (orographic uplift).
- **Impacts:** Eastern seaboards experience their wettest months, while Western and Central Luzon enjoy crisp, dry, and cooler temperatures often dropping below 20°C in Metro Manila and 12°C in Baguio.

### 3. Habagat: The Southwest Monsoon (June to October)
During the Northern Hemisphere summer, the Asian landmass heats up dramatically, generating the Asiatic Thermal Low across northern India and Tibet. Simultaneously, high pressure dominates the southern subtropical Indian Ocean and Australian continent.
- Maritime air rushes northward across the Equator. Coriolis deflection bends these winds from southeast to southwest.
- The resulting **Southwest Monsoon (Habagat)** is hot, humid, and moisture-saturated after journeying thousands of kilometers over tropical seas.
- **Impacts:** The western coastlines of Luzon, MIMAROPA, and the Western Visayas receive intense, protracted rainfall.

### 4. Monsoonal Enhancement (Habagat Pull)
One of the most dangerous weather hazards in the Philippines occurs when an active typhoon or tropical storm passes north of the Philippines (over Taiwan or the Ryukyu Islands). Even if the storm makes no direct landfall on Philippine soil, its powerful cyclonic suction acts as a giant atmospheric pump, drawing the Habagat low-level jet stream straight across Western Luzon.
- Famous examples include **Typhoon Ondoy (2009)**, **Habagat of August 2012**, and **Typhoon Carina (2024)**, which submerged large swaths of Metro Manila and Central Luzon under several meters of floodwaters purely through enhanced monsoonal conveyor belts.

### 5. Coronas Climate Classification
PAGASA classifies Philippine regional climates into four distinct types:
- **Type I:** Two pronounced seasons — dry from November to April, wet during the rest of the year (Western Luzon, Palawan, Antique, Occidental Mindoro).
- **Type II:** No dry season, with very pronounced maximum rainfall from November to January along eastern coasts (Bicol, Samar, Leyte, Eastern Mindanao).
- **Type III:** Seasons are not very pronounced; relatively dry from November to April and wet during the rest of the year (Cagayan, Isabela, Negros, Romblon).
- **Type IV:** Rainfall is more or less evenly distributed throughout the entire year (Bohol, Cebu, Western Leyte, and parts of Mindanao).
    `,
  },
  {
    id: 'dost-pagasa-tcws-signals-citizen-guide',
    title: 'The DOST-PAGASA Tropical Cyclone Wind Signal (TCWS) Warning System Explained',
    category: 'Disaster Preparedness',
    readTime: '8 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'A citizen survival guide detailing TCWS Signals 1 through 5, warning lead times, structural impacts, and DepEd Order No. 37 school suspension rules.',
    keyTakeaways: [
      'TCWS signals warn of impending WIND speed impacts, not rainfall or flood depth.',
      'Lead times range from 36 hours (Signal 1) down to 12 hours (Signals 4 and 5).',
      'DepEd Order No. 37 automatically cancels classes and work in public schools when Signal 1 is raised.',
      'Signal 5 denotes sustained winds exceeding 185 km/h, capable of widespread catastrophic structural devastation.',
    ],
    content: `
### 1. Purpose of the Warning System
The DOST-PAGASA Tropical Cyclone Wind Signal (TCWS) system is the primary statutory warning mechanism for protecting life and property against destructive winds. A critical public safety point is that **TCWS indicates wind speed, not rainfall**. Heavy rainfall warnings (Yellow, Orange, Red) are issued separately through localized Doppler radar telemetry.

### 2. Comprehensive Breakdown of TCWS Signals

#### 🟡 TCWS Signal No. 1
- **Wind Speed:** 39 to 61 km/h (Strong breeze to near gale).
- **Lead Time:** 36 hours before onset.
- **Potential Damage:** Very light to light. Unanchored makeshift structures, banana plants, and dry branches may break.
- **Citizen Action:** Inspect roofs, secure loose outdoor objects, monitor radio bulletins, and verify emergency supplies.
- **School Suspension:** In-person and online classes from Kindergarten to Grade 12 in affected LGUs are automatically suspended under DepEd guidelines.

#### 🟠 TCWS Signal No. 2
- **Wind Speed:** 62 to 88 km/h (Gale to severe gale).
- **Lead Time:** 24 hours before onset.
- **Potential Damage:** Light to moderate. Old galvanized iron roofing sheets may peel off; shallow-rooted trees may tilt or uproot; wooden utility poles may sway violently.
- **Citizen Action:** Board up exposed glass windows; secure pets indoors; coastal sea vessels must remain in port. All collegiate classes and government operations may be suspended per LGU discretion.

#### 🔴 TCWS Signal No. 3
- **Wind Speed:** 89 to 117 km/h (Storm force to severe storm force).
- **Lead Time:** 18 hours before onset.
- **Potential Damage:** Moderate to heavy. Moderate damage to structures of light materials; substantial damage to unreinforced concrete structures; widespread communication and power outages.
- **Citizen Action:** Evacuate vulnerable structures; move away from glass facades; disconnect main electrical switches if flooding enters homes.

#### 🟣 TCWS Signal No. 4
- **Wind Speed:** 118 to 184 km/h (Typhoon force).
- **Lead Time:** 12 hours before onset.
- **Potential Damage:** Heavy to very heavy. Severe structural failure to roofs; uprooted large hardwood trees; complete destruction of makeshift dwellings.
- **Citizen Action:** Mandatory evacuation of all high-risk areas must be complete. Residents must shelter in reinforced designated concrete evacuation centers.

#### ⬛ TCWS Signal No. 5
- **Wind Speed:** **185 km/h or higher** (Super Typhoon force).
- **Lead Time:** 12 hours before onset.
- **Potential Damage:** Extreme and catastrophic. Total destruction of light housing; severe damage to steel-reinforced masonry structures; massive utility grid collapse.
- **Citizen Action:** Extreme life-threatening situation. Stay in the most secure interior room away from exterior walls and roofs until the storm has completely cleared the municipality.

### 3. DepEd Order No. 37 Guidelines
Under Department of Education (DepEd) Order No. 37, series of 2022:
- **Signal 1 or Higher:** Automatic cancellation of in-person and online classes for Kindergarten, Elementary, Junior High, and Senior High School.
- **Rainfall Warnings:** When DOST-PAGASA issues an **Orange** or **Red Rainfall Warning**, classes are automatically canceled for the entire covered municipality.
- **Flood Warnings:** If an LGU or PAGASA issues a Flood Advisory, classes are suspended automatically without requiring a separate announcement from school heads.
    `,
  },
  {
    id: 'storm-surges-coastal-hydrodynamics-philippines',
    title: 'Storm Surges vs. Tsunamis: Coastal Hydrodynamics and Survival Strategies for Philippine Shores',
    category: 'Disaster Preparedness',
    readTime: '9 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'Learn the meteorological and hydrodynamic physics of storm surges, how shallow bays amplify wave height, and why vertical evacuation timing is life-critical.',
    keyTakeaways: [
      'A storm surge is driven by sustained wind shear and barometric pressure drops, whereas a tsunami is generated by submarine earthquakes or landslides.',
      'Shallow, gently sloping coastlines (such as Leyte Gulf and San Pedro Bay) generate far higher surges than deep oceanic trenches.',
      'The inverse barometer effect causes sea level to rise 1 cm for every 1 hPa decrease in atmospheric central pressure.',
      'Storm surges reach maximum inland velocity prior to typhoon eyewall landfall, catching unevacuated coastal residents unaware.',
    ],
    content: `
### 1. The Physics of Coastal Surge Formation
A storm surge is an abnormal rise in seawater level generated directly by the aerodynamic drag of typhoon winds and the vacuum suction of extreme atmospheric low pressure.

Two primary forces drive this surge:
1. **Surface Wind Stress:** Violent sustained winds literally push seawater forward against the coastline. Over shallow waters, the water cannot dissipate downward and piles up into an advancing wall.
2. **Inverse Barometer Effect:** The center of a super typhoon features extreme low barometric pressure (often dipping below 910 hPa). For every 1 millibar (hPa) drop below normal sea level pressure (1013 hPa), ocean water rises approximately 1 centimeter purely due to relieved atmospheric weight.

### 2. Bathymetric Amplification: Why Certain Philippine Bays Are Extreme Hazards
The bathymetry (underwater topography) of a coastline dictates the severity of a storm surge:
- **Deep Ocean Drop-offs (e.g., Eastern Luzon / Aurora seaboard):** Seawater pushed by winds can circulate downward into the deep abyssal plain. Surge heights typically remain below 1.5 to 2.5 meters.
- **Shallow, Semi-Enclosed Bays (e.g., Leyte Gulf, San Pedro Bay, Manila Bay, Lingayen Gulf):** As water enters a funnel-shaped, shallow bay, the incoming volume cannot escape. It undergoes geometric compression, forcing the sea surface upward to heights of 4 to 6+ meters.

### 3. Case Study: Super Typhoon Yolanda (Haiyan, 2013)
On the morning of November 8, 2013, Super Typhoon Haiyan pushed an unprecedented storm surge into San Pedro Bay and downtown Tacloban City:
- **Recorded Surge Height:** Exceeded **5.2 meters (17 feet)** above high tide level.
- **Inland Penetration:** Traveled over 1.5 kilometers inland within 20 minutes.
- **Wave Velocity:** Estimated at over 40 km/h, carrying shipping vessels inland and destroying concrete buildings.
- **Critical Disaster Lesson:** Many residents were aware of high winds but did not understand that "storm surge" meant an incoming oceanic wall of water. Clear terminology and mandatory vertical evacuation are essential.

### 4. Coastal Survival Protocols
- **Evacuate Horizontally Early:** Move inland at least 1,000 meters from open coastlines before TCWS Signal 3 winds begin.
- **Vertical Evacuation:** If horizontal evacuation routes are cut off by rising estuarine tides, seek refuge on the 3rd floor or higher of engineered reinforced concrete structures. Never shelter on the ground floor or in wooden structures.
- **Watch the Tide Table:** If the astronomical high tide coincides with the eyewall passage (spring tide during a new or full moon), surge heights increase by an additional 1.0 to 1.8 meters.
    `,
  },
  {
    id: 'sierra-madre-luzon-typhoon-shield',
    title: "The Sierra Madre: Luzon's Natural Mountain Shield and Downstream River Basin Dynamics",
    category: 'Monsoons & Climate',
    readTime: '7 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'A geological and meteorological investigation into how the 540-kilometer Sierra Madre mountain range disrupts typhoon eyewalls, triggers orographic rainfall, and protects the Central Plains.',
    keyTakeaways: [
      'The Sierra Madre stretches 540 km along the eastern seaboard of Luzon, serving as a physical frictional barrier.',
      'When typhoons collide with the range, surface friction degrades vortex symmetry, dropping central wind speeds by 15% to 30%.',
      'The barrier effect induces intense orographic precipitation, discharging massive runoff into the Cagayan, Pampanga, and Marikina river basins.',
      'Deforestation directly threatens the hydrological sponge capacity of the range, aggravating downstream flash flooding.',
    ],
    content: `
### 1. Geological Overview of the Backbone of Luzon
Stretching from Santa Ana, Cagayan in the far north to Quezon province in the south, the Sierra Madre is the longest mountain range in the Philippines, spanning over 540 kilometers. With peaks reaching elevations of over 1,800 meters (such as Mount Bintuac and Mount Guiwan), the mountain chain acts as a gigantic natural physical rampart facing the open Pacific Ocean.

### 2. How the Mountain Range Weakens Approaching Cyclones
When an intense tropical cyclone approaches eastern Luzon, it encounters the jagged topography of the Sierra Madre:
1. **Frictional Dissipation:** The rough terrain dramatically increases surface drag. This slows down low-level inflow winds, interrupting the angular momentum balance of the rotating vortex.
2. **Core Asymmetry:** The lower levels of the cyclone are held back by the mountains while the mid-to-upper levels continue moving west. This vertical tilt disrupts the central eyewall convection, leading to rapid degradation of super typhoons down to Category 2 or 3 systems within hours of landfall.
3. **Dry Air Entrainment:** As air crosses the peaks and descends into the central plains, it undergoes adiabatic warming and drying, further suffocating the storm's convective core.

### 3. The Downstream Orographic Dilemma
While the Sierra Madre protects the western plains (including Bulacan, Pampanga, and Metro Manila) from catastrophic destructive wind fields, it forces all the moisture carried by the typhoon upward into the clouds.
- **Orographic Precipitation:** As warm maritime air is forced up the mountain slopes, it cools and condenses rapidly, generating torrential rainfall rates often exceeding 50 to 100 mm per hour.
- **River Basin Discharge:** This water cascades down three major hydrological drainage networks:
  - **Cagayan River Basin:** The largest drainage basin in the country, prone to catastrophic prolonged inundation.
  - **Pampanga River Basin:** Discharging through Central Luzon into Manila Bay.
  - **Marikina-Pasig River Basin:** Originating in the Montalban / San Mateo watersheds, directing floodwaters directly toward Marikina, Pasig, and Quezon City.

### 4. Forest Conservation as National Security
The pristine primary rainforest of the Sierra Madre functions as a colossal biological sponge, slowing rainwater infiltration and anchoring topsoil. Rampant illegal logging, quarrying, and development reduce this retention time, converting what should be gradual river discharge into deadly lahar and flash floods downstream.
    `,
  },
  {
    id: '72-hour-emergency-go-bag-protocol',
    title: '72-Hour Family Disaster Resilience: The Essential Philippine Go-Bag and Survival Protocol',
    category: 'Disaster Preparedness',
    readTime: '8 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'A practical preparedness guide tailored for Philippine households: water purification ratios, canned protein provisions, offline emergency frequencies, and flood evacuation timing.',
    keyTakeaways: [
      'Pack 4 liters of potable water per person per day for a minimum 72-hour period.',
      'Store high-calorie, ready-to-eat rations that do not require cooking gas or refrigeration.',
      'Maintain an analog AM/FM battery-powered radio tuned to verified emergency frequencies.',
      'Preserve vital civil registry documents, titles, and emergency cash inside double-sealed waterproof pouches.',
    ],
    content: `
### 1. The 72-Hour Golden Window of Self-Reliance
In the immediate aftermath of a Category 4 or 5 super typhoon, local government disaster response teams (LDRRMO), police, and military first responders face blocked roads, fallen electric poles, and severed telecommunication lines. National relief logistics typically take 48 to 72 hours to establish distribution centers. Every Filipino household must be entirely self-sufficient for a minimum of three days.

### 2. The Comprehensive Go-Bag Checklist

#### 💧 Hydration & Sustenance
- **Water Standard:** Minimum **4 liters per individual per day** (2 liters for hydration, 2 liters for sanitation). For a family of 4, store at least 48 liters in sturdy sealed jugs.
- **Water Purification:** Pack Aquatabs (Sodium Dichloroisocyanurate) or household unscented bleach (ratio: 2 drops per liter of clear water, let sit for 30 minutes).
- **Food Rations:** Easy-open canned tuna, corned beef, sardines, vacuum-sealed biscuits, peanut butter, and dried fruits. Avoid foods that increase thirst.

#### 🩹 First Aid & Medical Continuity
- 7-day backup supply of personal maintenance prescriptions (antihypertensives, insulin, asthma inhalers).
- Antibacterial ointment, povidone iodine, sterile gauze, elastic compression bandages, paracetamol, loperamide, and oral rehydration salts (ORS).
- Waterproof trauma scissors and tweezers.

#### 📻 Communications & Illumination
- **Battery-Operated AM/FM Radio:** When cellular towers collapse, analog AM radio remains the only functional medium. Tuners:
  - **DZBB Super Radyo:** 594 kHz AM
  - **DZRH:** 666 kHz AM
  - **DWRV Radio Veritas:** 846 kHz AM
- **LED Headlamps & High-Lumen Flashlights:** Keep hands free for evacuation. Avoid open flame candles which trigger house fires during gas line leaks.
- **Heavy-Duty Power Bank:** Minimum 20,000 mAh stored at 100% charge in waterproof ziplock bags with reinforced cables.

#### 📂 Document Preservation & Cash
- Original or certified true copies of birth certificates, marriage certificates, land titles, insurance policies, and government IDs sealed in double-layered waterproof pouches.
- **Emergency Cash:** Store paper currency in small denominations (₱20, ₱50, ₱100 bills and coins). ATMs and digital wallets (GCash/Maya) cannot operate without electricity or cellular signals.
    `,
  },
  {
    id: 'doppler-radar-physics-himawari-satellite',
    title: 'Doppler Weather Radar Physics & Himawari-9 Multispectral Satellite Meteorology Explained',
    category: 'Radar & Technology',
    readTime: '8 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'Understand how microwave reflectivity echoes (dBZ), Doppler frequency shifts, and geostationary satellite infrared cooling temperatures provide early typhoon warning.',
    keyTakeaways: [
      'Doppler radars emit microwave pulses and calculate precipitation density based on reflected logarithmic decibels of reflectivity (dBZ).',
      'The Doppler shift calculates radial velocity toward or away from the antenna, detecting rotating mesocyclone funnels.',
      'S-Band radars operate at 2.8 GHz (10 cm) without rain attenuation; C-Band radars operate at 5.6 GHz (5 cm) with higher localized resolution.',
      'The Himawari-9 geostationary satellite captures infrared images every 10 minutes, identifying cloud tops colder than -70°C as severe thunderstorm cores.',
    ],
    content: `
### 1. Radar Principles: Pulse-Echo Telemetry
Weather radars operate on the principle of electromagnetic scattering. The radar antenna sends out hundreds of focused microwave pulses per second. When these electromagnetic waves hit hydrometeors (raindrops, hail, or snow), a tiny portion of that energy is reflected back to the parabolic receiver dish.
- **Range Calculation:** The time delay between transmission and return dictates the precise distance to the storm cell ($d = c \\cdot t / 2$).
- **Reflectivity (dBZ):** The returned power is converted into a logarithmic scale known as **dBZ** (decibels of $Z$, where $Z$ is the radar reflectivity factor):
  - **15–30 dBZ:** Light rain or drizzle.
  - **30–40 dBZ:** Moderate rain.
  - **40–50 dBZ:** Heavy rain with strong gusty winds.
  - **50–55 dBZ:** Intense thunderstorm cells with flash flood potential.
  - **>55 dBZ:** Violent convective storm cores or tropical cyclone eyewalls with torrential deluge.

### 2. The Doppler Effect and Radial Velocity
Standard radar only reveals *where* rain is falling; Doppler radar reveals *which way the wind is blowing inside the storm*.
- As raindrops move toward the radar station, the frequency of the reflected pulse increases. As they move away, the frequency decreases.
- By calculating this frequency shift ($\\Delta f$), meteorologists generate **radial velocity maps**.
- When an inbound velocity zone sits immediately adjacent to an outbound velocity zone, meteorologists have discovered a **velocity couplet** — the signature of an actively rotating mesocyclone capable of spinning off tornadoes or extreme localized microbursts.

### 3. S-Band vs. C-Band: The PAGASA Radar Architecture
PAGASA operates two distinct radar frequency bands across the country:
- **S-Band Radars (10 cm wavelength, 2.8 GHz):** Positioned along the exposed Pacific typhoon gateway stations (Aparri in Cagayan, Virac in Catanduanes, and Guiuan in Eastern Samar). S-band pulses have long wavelengths that penetrate violent typhoon eyewalls without suffering attenuation (signal loss caused by heavy intervening rain).
- **C-Band Radars (5 cm wavelength, 5.6 GHz):** Installed at Tagaytay, Cebu, Davao, and Baler. C-band waves are more sensitive to smaller raindrops, providing crisp resolution for urban flash flood warnings.

### 4. Himawari-9 Multispectral Satellite Telemetry
Positioned 35,786 kilometers above the Equator at 140.7°E longitude, the Japanese Meteorological Agency's **Himawari-9** satellite orbits synchronously with Earth's rotation, observing the Philippine Area of Responsibility every 10 minutes.
- **Band 8 (Upper-level Water Vapor):** Maps high-altitude atmospheric jet streams and dry air boundaries that steer typhoons.
- **Band 13 (Clean Infrared Window):** Measures radiant heat emitted by clouds. Cloud tops penetrating high into the stratosphere cool down to extreme temperatures (-60°C to -85°C). The colder the cloud top on an infrared satellite view, the more explosive the convective thunderstorm updraft.
    `,
  },
  {
    id: 'enso-el-nino-la-nina-philippine-climate',
    title: 'ENSO Dynamics: How El Niño and La Niña Alter Philippine Typhoons and Rainfall Cycles',
    category: 'Monsoons & Climate',
    readTime: '8 min read',
    publishedDate: '2026-08-20',
    author: 'Nathaniel Faborada',
    summary:
      'Examine the El Niño-Southern Oscillation (ENSO) in the Niño 3.4 region, how warm and cool phases shift cyclone genesis eastward, and long-term climate resilience.',
    keyTakeaways: [
      'ENSO describes sea surface temperature anomalies across the equatorial Central and Eastern Pacific Ocean.',
      'El Niño brings severe agricultural droughts to the Philippines and delays the onset of the rainy season.',
      'During El Niño, fewer cyclones enter PAR, but those that do form further east, travel longer over warm oceans, and frequently intensify into monster Super Typhoons.',
      'La Niña brings excessive rainfall, increased cyclone landfall frequency, and massive flooding to Luzon and Visayas.',
    ],
    content: `
### 1. The Oceanic Niño Index and Walker Circulation
The El Niño-Southern Oscillation (ENSO) is the single most influential driver of interannual climate variability across the tropical Pacific. Under neutral conditions, equatorial trade winds blow steadily westward across the Pacific, pushing warm surface water toward the Philippines and Indonesia. This generates the **Western Pacific Warm Pool**, creating low pressure, rising air, and regular convective rainfall.

### 2. El Niño: The Warm Phase Dilemma
When easterly trade winds weaken or collapse, the warm pool shifts eastward toward the coast of South America (Peru and Ecuador).
- **Philippine Atmospheric Impact:** With the warm water displaced eastward, the rising branch of the Walker circulation shifts away from our archipelago. Sinking, dry atmospheric air dominates the Philippines, suppressing cloud development.
- **Drought and Water Shortages:** Key water reservoirs (such as Angat Dam in Bulacan, which supplies 90% of Metro Manila's potable water) drop to critical operational levels. Crop failures, heatwaves, and agricultural losses surge.
- **Typhoon Characteristics during El Niño:** Total cyclone counts inside PAR often decrease by 20% to 30%. However, **the proportion of Category 5 Super Typhoons increases**. Because cyclogenesis shifts eastward into the open Central Pacific, storms have a much longer runway across warm open waters, allowing them to undergo multiple rounds of rapid intensification before striking the Philippines.

### 3. La Niña: The Cool Phase Hazard
Conversely, during La Niña, trade winds strengthen dramatically, piling an excess volume of superheated water against the eastern seaboard of the Philippines.
- **Philippine Atmospheric Impact:** Rising convective motions intensify. The ITCZ and monsoon troughs become hyperactive.
- **Flooding and Landslide Surge:** Continuous, non-stop rainfall overwhelms major river catchments in Cagayan, Central Luzon, Bicol, and Eastern Visayas.
- **Typhoon Characteristics during La Niña:** Tropical cyclones form much closer to the Philippine coastline (often in the Philippine Sea just 500–800 km east of Samar or Aurora). Warning lead times are drastically compressed, and landfall frequencies rise sharply.

### 4. Community Preparation for ENSO Swings
Disaster preparedness requires proactive anticipation of the multi-year ENSO cycle:
- **During El Niño Declarations:** Implement water rationing protocols, repair municipal irrigation aqueducts, and prepare for high-intensity super typhoons in late autumn.
- **During La Niña Declarations:** Dredge urban river channels, clear drainage siltation, reinforce slope stabilization netting along mountain highways, and pre-position relief goods in flood-prone river basins.
    `,
  },
]

export const faqItems = [
  {
    q: 'What is the Philippine Area of Responsibility (PAR)?',
    a: 'The Philippine Area of Responsibility (PAR) is a designated geographical maritime boundary bounded by coordinates 4°N 114°E, 25°N 114°E, 25°N 135°E, and 4°N 135°E. DOST-PAGASA monitors all tropical cyclone activity within this perimeter and assigns official Philippine domestic names to systems that form inside or enter it.',
  },
  {
    q: 'Why does DOST-PAGASA give local domestic names to typhoons with international names?',
    a: 'PAGASA maintains a dedicated set of domestic names (e.g., Yolanda, Odette, Kristine) because local Filipino names are more recognizable, culturally familiar, and memorable for grassroots disaster risk communication across rural and provincial communities than international names assigned by the WMO Typhoon Committee.',
  },
  {
    q: 'What is the difference between the Amihan and Habagat monsoons?',
    a: 'Amihan (Northeast Monsoon) originates from the cold Siberian High between November and February, bringing cool, dry winds to Western Luzon and orographic rains to eastern seaboards. Habagat (Southwest Monsoon) runs from June to October, drawing warm, moisture-laden air from the southern hemisphere across the archipelago, frequently triggering heavy, prolonged rainfall and urban flooding along western coastal provinces.',
  },
  {
    q: 'What are the wind speed thresholds for PAGASA Tropical Cyclone Wind Signals (TCWS)?',
    a: 'Under the revised May 2022 scale: Signal 1 denotes winds of 39–61 km/h (36h lead time); Signal 2 is 62–88 km/h (24h lead); Signal 3 is 89–117 km/h (18h lead); Signal 4 is 118–184 km/h (12h lead); and Signal 5 denotes catastrophic winds of 185 km/h or higher (12h lead).',
  },
  {
    q: 'When are school classes automatically suspended in the Philippines during storms?',
    a: 'Under Department of Education (DepEd) Order No. 37 (s. 2022), classes and work in public schools from Kindergarten through Grade 12 are automatically canceled whenever TCWS Signal No. 1 or higher is hoisted over the LGU, or if PAGASA issues an Orange or Red Rainfall Warning for that municipality.',
  },
  {
    q: 'How does a storm surge differ from a tsunami?',
    a: 'A storm surge is driven by sustained typhoon wind stress and extreme barometric low pressure piling seawater against shallow coastlines, with waves peaking over several hours. A tsunami is triggered by geological seabed displacement (earthquakes, submarine landslides, or volcanic eruptions) and can strike in fair weather with very little advance notice.',
  },
  {
    q: 'Does the Sierra Madre mountain range really weaken incoming typhoons?',
    a: 'Yes. The 540-kilometer Sierra Madre mountain range increases surface frictional drag against approaching cyclones, disrupting low-level vortex symmetry and reducing central sustained winds by 15% to 30%. However, this barrier effect triggers severe orographic rainfall, discharging heavy runoff into the Cagayan, Marikina, and Pampanga river basins.',
  },
  {
    q: 'What are the most critical items for a 72-hour family emergency go-bag?',
    a: 'The highest priority items are 4 liters of potable water per person per day, a 3-day supply of non-perishable canned food, a 7-day backup of prescription medications, a battery-powered analog AM/FM radio, a high-lumen flashlight or headlamp, a 20,000+ mAh power bank, emergency cash in small denominations, and vital civil documents sealed in double waterproof pouches.',
  },
  {
    q: 'How does Doppler weather radar detect rain intensity and wind velocity?',
    a: 'Doppler radars emit microwave pulses that bounce off hydrometeors (raindrops). The returned energy determines the reflectivity factor in decibels (dBZ), reflecting rain density. The frequency shift (Doppler shift) calculates the radial velocity of wind streams toward or away from the antenna, allowing meteorologists to spot rotating mesocyclones inside storm rainbands.',
  },
  {
    q: 'How does El Niño alter typhoon behavior in the Philippine Area of Responsibility?',
    a: 'During El Niño, total tropical cyclone formation numbers inside PAR typically decline slightly due to sinking atmospheric air. However, cyclogenesis shifts eastward into Micronesia, granting storms thousands of kilometers of open warm ocean to rapidly intensify into monster Category 5 Super Typhoons before reaching Philippine shores.',
  },
]
