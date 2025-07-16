// Sample data for indigenous groups
const indigenousGroups = [
    {
        name: "Inuit",
        region: "americas",
        location: "Arctic regions of Canada, Alaska, and Greenland",
        description: "The Inuit are indigenous peoples who have traditionally inhabited the Arctic regions, known for their sophisticated adaptation to extreme cold environments.",
        tags: ["Arctic", "Hunter-gatherers", "Inuktitut"],
        emoji: "🏔️"
    },
    {
        name: "Maasai",
        region: "africa",
        location: "Kenya and Tanzania",
        description: "Semi-nomadic pastoral people known for their distinctive customs, dress, and close relationship with wildlife in East Africa.",
        tags: ["Pastoral", "Warriors", "Maa language"],
        emoji: "🦁"
    },
    {
        name: "Yanomami",
        region: "americas",
        location: "Amazon rainforest of Brazil and Venezuela",
        description: "One of the largest indigenous groups in the Amazon, known for their deep knowledge of rainforest ecology and traditional medicines.",
        tags: ["Rainforest", "Shamanism", "Yanomaman"],
        emoji: "🌳"
    },
    {
        name: "Ainu",
        region: "asia",
        location: "Hokkaido, Japan",
        description: "Indigenous people of northern Japan with distinct culture, language, and spiritual beliefs centered around nature worship.",
        tags: ["Animism", "Bear worship", "Ainu language"],
        emoji: "🐻"
    },
    {
        name: "Aboriginal Australians",
        region: "oceania",
        location: "Australia",
        description: "The world's oldest continuous culture, with over 65,000 years of history and deep spiritual connection to the land.",
        tags: ["Dreamtime", "Rock art", "250+ languages"],
        emoji: "🪃"
    },
    {
        name: "Sami",
        region: "europe",
        location: "Northern Norway, Sweden, Finland, and Russia",
        description: "Indigenous people of northern Europe known for reindeer herding, traditional crafts, and the joik musical tradition.",
        tags: ["Reindeer herding", "Joik", "Sami languages"],
        emoji: "🦌"
    },
    {
        name: "Quechua",
        region: "americas",
        location: "Andes Mountains of South America",
        description: "Descendants of the Inca Empire, maintaining traditional agricultural practices and languages across the Andean region.",
        tags: ["Inca heritage", "Terraced farming", "Quechua language"],
        emoji: "⛰️"
    },
    {
        name: "Berber",
        region: "africa",
        location: "North Africa",
        description: "Indigenous peoples of North Africa with ancient cultures spanning Morocco, Algeria, Tunisia, Libya, and parts of other countries.",
        tags: ["Amazigh", "Desert culture", "Berber languages"],
        emoji: "🏜️"
    },
    {
        name: "Hmong",
        region: "asia",
        location: "Southeast Asia and China",
        description: "Mountain-dwelling people with rich textile traditions and complex spiritual beliefs, spread across multiple countries.",
        tags: ["Textiles", "Shamanism", "Hmong language"],
        emoji: "🧵"
    },
    {
        name: "Tuareg",
        region: "africa",
        location: "Sahara Desert across Mali, Niger, Algeria, Libya, and Burkina Faso",
        description: "Known as the 'Blue People of the Sahara' for their indigo veils, the Tuareg are nomadic Berber pastoralists and traditional caravan traders.",
        tags: ["Nomadic", "Blue veils", "Tifinagh script"],
        emoji: "🐪"
    },
    {
        name: "Shipibo-Konibo",
        region: "americas",
        location: "Ucayali River basin, Peruvian Amazon",
        description: "Amazonian people renowned for their intricate geometric art inspired by ayahuasca visions and their deep knowledge of medicinal plants.",
        tags: ["Ayahuasca", "Geometric art", "Plant medicine"],
        emoji: "🌿"
    },
    {
        name: "Kayapó",
        region: "americas",
        location: "Xingu River region, Brazilian Amazon",
        description: "Fierce protectors of the Amazon rainforest known for their elaborate body painting, feather ornaments, and environmental activism.",
        tags: ["Environmental activism", "Body art", "Forest guardians"],
        emoji: "🦜"
    },
    {
        name: "Guaraní",
        region: "americas",
        location: "Paraguay, Brazil, Argentina, Bolivia",
        description: "One of South America's most influential indigenous groups whose language is an official language of Paraguay and whose culture deeply influenced the region.",
        tags: ["Official language", "Yerba mate", "Jesuit missions"],
        emoji: "🧉"
    },
    {
        name: "Nenets",
        region: "asia",
        location: "Arctic tundra of northern Russia",
        description: "Reindeer herders of the Arctic tundra who maintain traditional nomadic lifestyles across the vast Russian Arctic, from Kola to Taymyr peninsulas.",
        tags: ["Reindeer herding", "Arctic nomads", "Chums"],
        emoji: "❄️"
    },
    {
        name: "Karen",
        region: "asia",
        location: "Northern Thailand and Myanmar",
        description: "Hill tribe people known for their traditional clothing, elephant conservation efforts, and resistance to assimilation.",
        tags: ["Hill tribes", "Elephant conservation", "Traditional dress"],
        emoji: "🐘"
    },
    {
        name: "Dogon",
        region: "africa",
        location: "Bandiagara Escarpment, Mali",
        description: "Renowned for their complex cosmology, astronomical knowledge, elaborate mask dances, and unique cliff-dwelling architecture.",
        tags: ["Astronomy", "Mask dances", "Cliff dwellings"],
        emoji: "🎭"
    },
    {
        name: "Fulani",
        region: "africa",
        location: "West and Central Africa",
        description: "One of Africa's largest ethnic groups, traditionally nomadic cattle herders spread across the Sahel region with rich oral traditions.",
        tags: ["Cattle herding", "Nomadic", "Oral traditions"],
        emoji: "🐄"
    },
    {
        name: "Evenk",
        region: "asia",
        location: "Siberia, Mongolia, and Northeast China",
        description: "Traditional reindeer herders and hunters spread across vast areas of northern Asia, known for their shamanic traditions and adaptation to taiga life.",
        tags: ["Reindeer herding", "Shamanism", "Taiga hunters"],
        emoji: "🌲"
    },
    {
        name: "Huli",
        region: "oceania",
        location: "Papua New Guinea Highlands",
        description: "Known for their elaborate wig-making traditions, warrior culture, and colorful body decoration in the rugged highlands of Papua New Guinea.",
        tags: ["Wig culture", "Warriors", "Body decoration"],
        emoji: "🎨"
    },
    {
        name: "Iban",
        region: "asia",
        location: "Borneo, Malaysia",
        description: "Former headhunters known as 'Sea Dayaks,' now famous for their longhouse communities, intricate weaving, and woodcarving traditions.",
        tags: ["Longhouses", "Weaving", "Woodcarving"],
        emoji: "🏠"
    },
    {
        name: "Wodaabe",
        region: "africa",
        location: "Niger, Chad, Cameroon",
        description: "Nomadic cattle herders famous for their elaborate beauty contests where men compete with ornate makeup and dance to attract wives.",
        tags: ["Beauty contests", "Cattle herding", "Face painting"],
        emoji: "💄"
    },
    {
        name: "Tsaatan",
        region: "asia",
        location: "Northern Mongolia",
        description: "One of the world's last reindeer herding peoples, numbering only about 80 families who live in the Mongolian taiga following ancient traditions.",
        tags: ["Reindeer herding", "Nomadic", "Endangered culture"],
        emoji: "🦌"
    },
    {
        name: "Naga",
        region: "asia",
        location: "Northeast India and Myanmar",
        description: "Hill tribes known for their fierce warrior traditions, elaborate festivals, colorful traditional dress, and rich oral literature.",
        tags: ["Warriors", "Festivals", "Oral literature"],
        emoji: "⚔️"
    },
    {
        name: "Haida",
        region: "americas",
        location: "Haida Gwaii, British Columbia",
        description: "Pacific Northwest people renowned for their sophisticated art, monumental totem poles, and sustainable relationship with marine resources.",
        tags: ["Totem poles", "Marine culture", "Pacific art"],
        emoji: "🗿"
    },
    {
        name: "Yupik",
        region: "americas",
        location: "Alaska and Siberia",
        description: "Arctic people who maintain traditional subsistence hunting and fishing while adapting to modern challenges in the Bering Sea region.",
        tags: ["Arctic hunting", "Marine mammals", "Subsistence"],
        emoji: "🐋"
    },
    {
        name: "Maori",
        region: "oceania",
        location: "New Zealand",
        description: "Polynesian people of New Zealand known for their powerful haka dance, intricate tattoos (ta moko), and strong cultural renaissance movement.",
        tags: ["Haka", "Ta moko", "Cultural renaissance"],
        emoji: "🌀"
    },
    {
        name: "San",
        region: "africa",
        location: "Kalahari Desert, Southern Africa",
        description: "Among Africa's oldest peoples, the San are traditional hunter-gatherers known for their extensive knowledge of the desert and click languages.",
        tags: ["Hunter-gatherers", "Click languages", "Desert knowledge"],
        emoji: "🏹"
    },
    {
        name: "Nanai",
        region: "asia",
        location: "Amur River, Russia and China",
        description: "River people who live along the Amur River, known for their fish-skin clothing, shamanic traditions, and deep spiritual connection to nature.",
        tags: ["Fish-skin clothing", "Shamanism", "River culture"],
        emoji: "🐟"
    },
    {
        name: "Cherokee",
        region: "americas",
        location: "Southeastern United States",
        description: "One of the largest Native American tribes, known for developing their own written language and maintaining strong cultural traditions despite historical displacement.",
        tags: ["Written language", "Trail of Tears", "Cultural resilience"],
        emoji: "🪶"
    },
    {
        name: "Māori",
        region: "oceania",
        location: "New Zealand (Aotearoa)",
        description: "Polynesian people of New Zealand renowned for their powerful haka dance, intricate tā moko tattoos, and strong cultural renaissance movement.",
        tags: ["Haka", "Tā moko", "Cultural renaissance"],
        emoji: "🌀"
    },
    {
        name: "Khoisan",
        region: "africa",
        location: "Kalahari Desert, Southern Africa",
        description: "Among Africa's oldest peoples and once the largest human group on Earth, known for their click languages and extensive desert survival knowledge.",
        tags: ["Click languages", "Hunter-gatherers", "Ancient heritage"],
        emoji: "🏹"
    },
    {
        name: "Dayak",
        region: "asia",
        location: "Borneo (Malaysia and Indonesia)",
        description: "Indigenous peoples of Borneo famous for their magnificent longhouses, intricate beadwork, traditional tattooing, and former headhunting culture.",
        tags: ["Longhouses", "Beadwork", "River communities"],
        emoji: "🏘️"
    },
    {
        name: "Ojibwe",
        region: "americas",
        location: "Great Lakes region, North America",
        description: "One of the largest Native American groups, known for birchbark canoes, wild rice harvesting, and the Midewiwin spiritual society.",
        tags: ["Birchbark canoes", "Wild rice", "Midewiwin"],
        emoji: "🛶"
    },
    {
        name: "Masai Mara",
        region: "africa",
        location: "Kenya and Tanzania border region",
        description: "Subset of the Maasai people specifically from the famous Masai Mara ecosystem, maintaining traditional pastoralism alongside wildlife conservation.",
        tags: ["Wildlife coexistence", "Traditional pastoralism", "Conservation"],
        emoji: "🦒"
    },
    {
        name: "Sámi",
        region: "europe",
        location: "Sápmi (Northern Scandinavia and Russia)",
        description: "Indigenous people of northern Europe known for reindeer herding, the joik musical tradition, and their distinctive traditional clothing (gákti).",
        tags: ["Reindeer herding", "Joik music", "Gákti clothing"],
        emoji: "🦌"
    },
    {
        name: "Penan",
        region: "asia",
        location: "Sarawak, Malaysian Borneo",
        description: "Semi-nomadic hunter-gatherers of the Borneo rainforest, known for their detailed knowledge of forest plants and sustainable living practices.",
        tags: ["Forest nomads", "Plant knowledge", "Sustainable living"],
        emoji: "🌿"
    },
    {
        name: "Wayuu",
        region: "americas",
        location: "Guajira Peninsula, Colombia and Venezuela",
        description: "Desert-dwelling people known for their colorful woven bags (mochilas), matriarchal society, and adaptation to arid coastal environments.",
        tags: ["Mochila weaving", "Matriarchal", "Desert adaptation"],
        emoji: "🧺"
    },
    {
        name: "Mursi",
        region: "africa",
        location: "Omo Valley, Ethiopia",
        description: "Pastoralist people famous for the lip plates worn by women, intricate body scarification, and traditional stick fighting competitions.",
        tags: ["Lip plates", "Body scarification", "Stick fighting"],
        emoji: "💋"
    }
    {
        name: "Purépecha",
        region: "americas",
        location: "Michoacán, Mexico",
        description: "Also called Tarascans, they built a powerful pre-Columbian empire with Tzintzuntzan as capital, never conquered by the Aztecs, and renowned for copper metallurgy and feather mosaics.",
        tags: ["Copper metallurgy", "Feather art", "Tzintzuntzan"],
        emoji: "⚱️"
    },
    {
        name: "Mazahua",
        region: "americas",
        location: "State of México, Michoacán, Querétaro",
        description: "Known as 'deer-foot people,' famous for traditional silver crescent earrings worn by women and the elaborate Xita Corpus ceremony honoring ancient rain-bringing spirits.",
        tags: ["Silver jewelry", "Xita Corpus", "Rain ceremonies"],
        emoji: "💍"
    },
    {
        name: "Mazatec",
        region: "americas",
        location: "Sierra Mazateca, Oaxaca",
        description: "Mountain people who call themselves 'Ha shuta enima' (People of Custom), world-famous for shamanic use of sacred mushrooms, notably through María Sabina.",
        tags: ["Sacred mushrooms", "María Sabina", "Mountain shamans"],
        emoji: "🍄"
    },
    {
        name: "Chinantec",
        region: "americas",
        location: "Oaxaca and Veracruz, Mexico",
        description: "Living in the Chinantla region with 14 different languages, known for elaborate huipiles, VOS sentence structure, and adaptation to highland and lowland environments.",
        tags: ["14 languages", "Huipiles", "VOS grammar"],
        emoji: "🌄"
    },
    {
        name: "Triqui",
        region: "americas",
        location: "Western Oaxaca, Mexico",
        description: "Renowned for distinctive woven huipiles and being exceptionally skilled basketball players, living in La Mixteca Baja region with strong community traditions.",
        tags: ["Basketball champions", "Woven huipiles", "Mountain dwellers"],
        emoji: "🏀"
    },
    {
        name: "Cora",
        region: "americas",
        location: "Nayarit and Jalisco, Mexico",
        description: "Call themselves Naáyarite, historically resisted Spanish conquest until 1722, with complex sun-worship religion blending pre-Columbian beliefs and Catholicism.",
        tags: ["Sun worship", "Resistance", "Sierra Madre"],
        emoji: "☀️"
    },
    {
        name: "Tepehuán",
        region: "americas",
        location: "Durango, Chihuahua, Nayarit",
        description: "Mountain People divided into Northern (Ódami), Southeastern (O'dam), and Southwestern (Audam) groups, known for the great 1616-1619 rebellion against Spanish rule.",
        tags: ["Mountain dwellers", "1616 rebellion", "Three branches"],
        emoji: "⛰️"
    },
    {
        name: "Chol",
        region: "americas",
        location: "Chiapas, Mexico",
        description: "Maya people known as 'Winik' (the people), skilled in traditional agriculture, weaving, and maintaining ancient Maya calendar knowledge in tropical rainforest regions.",
        tags: ["Maya calendar", "Tropical agriculture", "Winik people"],
        emoji: "📅"
    },
    {
        name: "Mixe",
        region: "americas",
        location: "Sierra Mixe, Oaxaca",
        description: "Autonomous mountain communities with 169,000 people speaking Mixe-Zoquean languages, operating independently with communal property and traditional governance systems.",
        tags: ["Autonomous communities", "Mountain autonomy", "Communal property"],
        emoji: "🏔️"
    },
    {
        name: "Chontal de Oaxaca",
        region: "americas",
        location: "Coastal Oaxaca, Mexico",
        description: "Lowland and Highland groups speaking Tequistlatecan languages, possibly related to California Hokan family, with only about 200 fluent speakers remaining.",
        tags: ["Endangered language", "Coastal culture", "Tequistlatecan"],
        emoji: "🌊"
    }
];

// Make it available globally
window.indigenousGroups = indigenousGroups;
