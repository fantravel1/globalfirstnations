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
    },
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
    },
    {
    name: "Tarahumara (Rarámuri)",
    region: "americas",
    location: "Sierra Madre Occidental, Chihuahua, Mexico",
    description: "Renowned as the world's greatest long-distance runners, the Rarámuri can run hundreds of miles in traditional sandals, playing kickball games that last for days across mountain terrain.",
    tags: ["Ultra-marathoners", "Kickball games", "Mountain runners"],
    emoji: "🏃"
    },
    {
        name: "Tlingit",
        region: "americas",
        location: "Southeast Alaska and British Columbia",
        description: "Pacific Northwest people famous for their sophisticated clan system, elaborate potlatch ceremonies, and masterful Chilkat blanket weaving using mountain goat wool and cedar bark.",
        tags: ["Potlatch ceremonies", "Chilkat blankets", "Clan system"],
        emoji: "🐺"
    },
    {
        name: "Embera",
        region: "americas",
        location: "Panama and Colombia",
        description: "Rainforest dwellers known for their intricate body painting with jagua fruit, living in elevated houses along rivers, and being master canoe craftsmen.",
        tags: ["Body painting", "River dwellers", "Canoe masters"],
        emoji: "🛶"
    },
    {
        name: "Seminole",
        region: "americas",
        location: "Florida Everglades, United States",
        description: "The 'Unconquered People' who never signed a peace treaty with the US government, famous for their patchwork clothing, alligator wrestling, and adapting to swampland life.",
        tags: ["Unconquered", "Patchwork clothing", "Swampland"],
        emoji: "🐊"
    },
    {
        name: "Selk'nam (Ona)",
        region: "americas",
        location: "Tierra del Fuego, Argentina and Chile",
        description: "Extinct hunter-gatherer people of the southern tip of South America, known for their elaborate initiation ceremonies, body painting, and tragic genocide by settlers.",
        tags: ["Hunter-gatherers", "Initiation ceremonies", "Extinct culture"],
        emoji: "🔥"
    },
    {
        name: "Awajún (Aguaruna)",
        region: "americas",
        location: "Amazon rainforest, Peru",
        description: "Fierce warriors who successfully resisted Inca and Spanish conquest, known for head-shrinking practices (tsantsa), shamanic dream practices, and defending their rainforest territory.",
        tags: ["Head-shrinking", "Dream shamans", "Warriors"],
        emoji: "🌿"
    },
    {
        name: "Blackfoot (Niitsitapi)",
        region: "americas",
        location: "Great Plains of Montana and Alberta",
        description: "Plains nomads who were master buffalo hunters and horse warriors, with complex bundle ceremonies, tipi paintings that told family histories, and the Sun Dance ritual.",
        tags: ["Buffalo hunters", "Horse warriors", "Sun Dance"],
        emoji: "🦬"
    },
    {
        name: "Xingu Peoples",
        region: "americas",
        location: "Xingu River Basin, Brazilian Amazon",
        description: "Multiple peaceful tribes (Kuikuro, Kalapalo, Yawalapiti) sharing the Xingu Indigenous Park, famous for their elaborate festivals, body decoration, and sustainable fishing practices.",
        tags: ["Multi-tribal", "Peaceful", "Festival culture"],
        emoji: "🐟"
    },
    {
        name: "Lakota",
        region: "americas",
        location: "Great Plains, South Dakota and surrounding states",
        description: "One of the Seven Council Fires of the Sioux Nation, famous for their resistance led by Sitting Bull and Crazy Horse, vision quests, and the sacred Black Hills.",
        tags: ["Sitting Bull", "Vision quests", "Black Hills"],
        emoji: "🏔️"
    },
    {
        name: "Mapuche",
        region: "americas",
        location: "Chile and Argentina",
        description: "The 'People of the Earth' who successfully resisted Inca and Spanish conquest for centuries, known for their silver jewelry, traditional medicine, and ongoing land rights struggles.",
        tags: ["Silver jewelry", "Traditional medicine", "Land rights"],
        emoji: "🌱"
    },
    {
    name: "Himba",
    region: "africa",
    location: "Northern Namibia and Southern Angola",
    description: "Semi-nomadic pastoralists famous for their distinctive red ochre body paint mixed with butterfat, elaborate hairstyles that indicate social status, and traditional leather clothing.",
    tags: ["Red ochre", "Hairstyle status", "Pastoralists"],
    emoji: "💄"
    },
    {
        name: "Hadza",
        region: "africa",
        location: "Northern Tanzania",
        description: "One of the last hunter-gatherer tribes in Africa, speaking a click language and living much as humans did 10,000 years ago, with no hierarchy, property ownership, or calendar.",
        tags: ["Last hunter-gatherers", "Click language", "No hierarchy"],
        emoji: "🏹"
    },
    {
        name: "Surma (Suri)",
        region: "africa",
        location: "Omo Valley, Ethiopia",
        description: "Known for their spectacular body modifications including lip plates, intricate scarification patterns, and stick fighting competitions called donga that determine marriage eligibility.",
        tags: ["Lip plates", "Stick fighting", "Body modifications"],
        emoji: "💋"
    },
    {
        name: "Hamer",
        region: "africa",
        location: "South Omo Zone, Ethiopia",
        description: "Pastoralists famous for the bull-jumping ceremony that marks the transition to manhood, elaborate hairstyles with clay and butter, and the practice of ritual whipping.",
        tags: ["Bull jumping", "Clay hairstyles", "Ritual whipping"],
        emoji: "🐂"
    },
    {
        name: "Ndebele",
        region: "africa",
        location: "South Africa and Zimbabwe",
        description: "Renowned for their geometric wall paintings in brilliant colors, intricate beadwork that communicates messages, and traditional blanket ceremonies marking life transitions.",
        tags: ["Geometric art", "Beadwork messages", "Wall paintings"],
        emoji: "🎨"
    },
    {
        name: "Pygmies (Ba'Aka)",
        region: "africa",
        location: "Central African Republic and Cameroon",
        description: "Forest peoples known for their extraordinary musical traditions, including complex polyphonic singing, expert honey hunting, and deep knowledge of medicinal forest plants.",
        tags: ["Polyphonic music", "Honey hunting", "Forest medicine"],
        emoji: "🍯"
    },
    {
        name: "Dinka",
        region: "africa",
        location: "South Sudan",
        description: "Tall cattle herders who measure wealth in cattle, practice elaborate scarification, and have a culture where cattle names reflect the animals' colors and patterns.",
        tags: ["Cattle culture", "Scarification", "Cattle names"],
        emoji: "🐄"
    },
    {
        name: "Kikuyu",
        region: "africa",
        location: "Central Kenya",
        description: "Agricultural people who traditionally lived around Mount Kenya, known for age-set systems, elaborate initiation ceremonies, and being the ethnic group of Wangari Maathai.",
        tags: ["Age-set system", "Mount Kenya", "Wangari Maathai"],
        emoji: "🌾"
    },
    {
        name: "Zulu",
        region: "africa",
        location: "KwaZulu-Natal, South Africa",
        description: "Southern Africa's largest ethnic group, famous for their warrior culture under Shaka Zulu, colorful beadwork with coded messages, and traditional dancing with shields and spears.",
        tags: ["Shaka Zulu", "Coded beadwork", "Warrior dances"],
        emoji: "⚔️"
    },
    {
        name: "Amhara",
        region: "africa",
        location: "Ethiopian Highlands",
        description: "Highland people who dominated Ethiopian politics for centuries, keepers of ancient Orthodox Christian traditions, and speakers of Amharic, Ethiopia's official language.",
        tags: ["Orthodox Christianity", "Ethiopian Highlands", "Amharic language"],
        emoji: "⛪"
    },
    {
    name: "Trobriand Islanders",
    region: "oceania",
    location: "Trobriand Islands, Papua New Guinea",
    description: "Famous for their matrilineal society, elaborate yam festivals, kula ring trading system, and being studied by anthropologist Bronisław Malinowski in groundbreaking ethnographic work.",
    tags: ["Matrilineal society", "Kula ring trade", "Yam festivals"],
    emoji: "🏝️"
    },
    {
        name: "Sentinelese",
        region: "oceania",
        location: "North Sentinel Island, Andaman Islands",
        description: "One of the world's last uncontacted peoples, living in complete isolation for thousands of years, known for their fierce protection of their island from outside contact.",
        tags: ["Uncontacted", "Isolated", "Andaman Islands"],
        emoji: "🏹"
    },
    {
        name: "Tahitian",
        region: "oceania",
        location: "Tahiti, French Polynesia",
        description: "Polynesian people famous for their traditional dance (ori Tahiti), black pearl cultivation, elaborate tattoos (tatau), and the cultural influence on European art through Gauguin.",
        tags: ["Ori Tahiti dance", "Black pearls", "Tatau tattoos"],
        emoji: "💃"
    },
    {
        name: "Fijian",
        region: "oceania",
        location: "Fiji Islands",
        description: "Melanesian and Polynesian peoples known for their warrior traditions, elaborate kava ceremonies, traditional bose (village councils), and fire-walking rituals on Beqa Island.",
        tags: ["Kava ceremonies", "Fire walking", "Bose councils"],
        emoji: "🔥"
    },
    {
        name: "Samoan",
        region: "oceania",
        location: "Samoa Islands",
        description: "Polynesian people famous for their fa'a Samoa cultural system, traditional pe'a and malu tattoos, fale architecture, and strong family structures (aiga).",
        tags: ["Fa'a Samoa", "Pe'a tattoos", "Fale houses"],
        emoji: "🌺"
    },
    {
        name: "Chamorro",
        region: "oceania",
        location: "Guam and Northern Mariana Islands",
        description: "Indigenous Micronesian people known for their ancient latte stone pillars, seafaring traditions, and maintaining cultural identity despite centuries of colonial influence.",
        tags: ["Latte stones", "Seafaring", "Colonial survival"],
        emoji: "🗿"
    },
    {
        name: "Kanaka Maoli",
        region: "oceania",
        location: "Hawaiian Islands",
        description: "Native Hawaiians known for their navigation skills across vast Pacific distances, hula dance traditions, lua martial arts, and the concept of mana (spiritual power).",
        tags: ["Navigation", "Hula dance", "Lua martial arts"],
        emoji: "🌺"
    },
    {
        name: "Yapese",
        region: "oceania",
        location: "Yap Island, Micronesia",
        description: "Micronesian people famous for their massive stone money discs (rai), traditional stick dancing, and maintaining one of the Pacific's most intact traditional cultures.",
        tags: ["Stone money", "Stick dancing", "Traditional culture"],
        emoji: "🪙"
    },
    {
        name: "Tolai",
        region: "oceania",
        location: "New Britain, Papua New Guinea",
        description: "Melanesian people known for their shell money (tabu), elaborate funeral ceremonies, traditional markets, and being among the first Pacific peoples to adopt Christianity.",
        tags: ["Shell money", "Funeral ceremonies", "Traditional markets"],
        emoji: "🐚"
    },
    {
        name: "Pitcairn Islanders",
        region: "oceania",
        location: "Pitcairn Island, British Overseas Territory",
        description: "Descendants of Bounty mutineers and Tahitian women, speaking a unique English-Tahitian creole (Pitkern), and maintaining one of the world's smallest communities with 50 residents.",
        tags: ["Bounty descendants", "Pitkern language", "Smallest community"],
        emoji: "⛵"
    },
    {
    name: "Akha",
    region: "asia",
    location: "Northern Thailand, Myanmar, Laos, China",
    description: "Hill tribe people known for their distinctive silver-adorned headdresses, terraced farming, elaborate gate ceremonies, and maintaining detailed oral genealogies going back 60+ generations.",
    tags: ["Silver headdresses", "Oral genealogies", "Gate ceremonies"],
    emoji: "👑"
    },
    {
        name: "Ifugao",
        region: "asia",
        location: "Northern Luzon, Philippines",
        description: "Builders of the spectacular Banaue Rice Terraces, a UNESCO World Heritage site, known as the 'Eighth Wonder of the World' and their sophisticated irrigation system called 'hudhud'.",
        tags: ["Rice terraces", "UNESCO heritage", "Hudhud irrigation"],
        emoji: "🌾"
    },
    {
        name: "Kalash",
        region: "asia",
        location: "Hindu Kush Mountains, Pakistan",
        description: "Unique polytheistic people in Islamic Pakistan, known for their colorful festivals, wine-making traditions, distinctive clothing, and claims of descent from Alexander the Great's soldiers.",
        tags: ["Polytheistic", "Wine making", "Festivals"],
        emoji: "🍇"
    },
    {
        name: "Mentawai",
        region: "asia",
        location: "Mentawai Islands, Indonesia",
        description: "Traditional animists known for their full-body tattoos (titi), teeth sharpening, living in harmony with jungle spirits, and being some of the world's best surfers.",
        tags: ["Full-body tattoos", "Teeth sharpening", "Surfing"],
        emoji: "🏄"
    },
    {
        name: "Bontoc",
        region: "asia",
        location: "Mountain Province, Philippines",
        description: "Former headhunters turned peaceful farmers, famous for their stone-walled rice terraces, traditional dances with spears and shields, and intricate basket weaving.",
        tags: ["Stone terraces", "Spear dances", "Basket weaving"],
        emoji: "🛡️"
    },
    {
        name: "Wa",
        region: "asia",
        location: "Myanmar-China border",
        description: "Fierce mountain warriors historically known for headhunting, now famous for their autonomous region, traditional tattooing, and resistance to outside control.",
        tags: ["Mountain warriors", "Autonomous region", "Traditional tattoos"],
        emoji: "⚔️"
    },
    {
        name: "Lepcha",
        region: "asia",
        location: "Sikkim, India and Nepal",
        description: "Peaceful 'Children of the Mountains' known for their Buddhist-Bon shamanic blend, traditional archery, medicinal plant knowledge, and unique Lepcha script.",
        tags: ["Mountain children", "Archery", "Lepcha script"],
        emoji: "🏹"
    },
    {
        name: "Toda",
        region: "asia",
        location: "Nilgiri Hills, Tamil Nadu, India",
        description: "Pastoral people with unique barrel-vaulted houses, sacred buffalo herding, polyandrous marriage system, and embroidered shawls with geometric patterns.",
        tags: ["Sacred buffalo", "Polyandry", "Barrel houses"],
        emoji: "🐃"
    },
    {
        name: "Mongol",
        region: "asia",
        location: "Mongolia and Inner Mongolia",
        description: "Nomadic herders famous for their horses, traditional gers (yurts), throat singing, archery skills, and the legacy of Genghis Khan's empire.",
        tags: ["Throat singing", "Gers", "Horse culture"],
        emoji: "🐎"
    },
    {
        name: "Kazakh",
        region: "asia",
        location: "Kazakhstan, Western China, Mongolia",
        description: "Nomadic eagle hunters known for their golden eagles used in hunting, traditional felt-making, horse games, and seasonal migrations across Central Asian steppes.",
        tags: ["Eagle hunting", "Felt making", "Nomadic"],
        emoji: "🦅"
    },
    {
        name: "Sherpa",
        region: "asia",
        location: "Nepal Himalayas",
        description: "High-altitude mountain people famous as Everest guides, known for their incredible climbing abilities, Buddhist monasteries, and adaptation to extreme altitudes.",
        tags: ["Everest guides", "High altitude", "Buddhist"],
        emoji: "🏔️"
    },
    {
        name: "Batak",
        region: "asia",
        location: "North Sumatra, Indonesia",
        description: "Lake Toba people known for their distinctive boat-shaped houses, complex clan system, traditional music with gondang drums, and former cannibalistic practices.",
        tags: ["Boat houses", "Gondang drums", "Lake Toba"],
        emoji: "🏠"
    },
    {
        name: "Orang Asli",
        region: "asia",
        location: "Peninsular Malaysia",
        description: "Original people of Malaysia comprising 18 tribes, known for their blowpipe hunting, jungle survival skills, and maintaining animistic beliefs in modern Malaysia.",
        tags: ["Blowpipe hunting", "Jungle survival", "18 tribes"],
        emoji: "🌿"
    },
    {
        name: "Kayan",
        region: "asia",
        location: "Myanmar and Thailand border",
        description: "Known as 'Long Neck' people for brass neck coils worn by women, living in traditional villages and maintaining weaving traditions despite tourism pressures.",
        tags: ["Brass neck coils", "Long neck", "Traditional weaving"],
        emoji: "💍"
    },
    {
        name: "Rohingya",
        region: "asia",
        location: "Rakhine State, Myanmar",
        description: "Persecuted Muslim minority known for their boat-building skills, Arabic script adaptation for their language, and tragic refugee crisis fleeing genocide.",
        tags: ["Boat builders", "Refugee crisis", "Arabic script"],
        emoji: "🚣"
    },
    {
        name: "Chukchi",
        region: "asia",
        location: "Chukotka Peninsula, Russia",
        description: "Arctic reindeer herders and marine hunters at the easternmost tip of Siberia, known for their shamanic traditions, throat singing, and whale hunting.",
        tags: ["Reindeer herders", "Whale hunting", "Shamanic"],
        emoji: "🐋"
    },
    {
        name: "Dayak Iban",
        region: "asia",
        location: "Sarawak, Malaysian Borneo",
        description: "Former 'Sea Dayak' headhunters now known for their elaborate longhouses, intricate tattoos, pua kumbu weaving, and gawai harvest festivals.",
        tags: ["Longhouses", "Pua kumbu", "Gawai festivals"],
        emoji: "🏘️"
    },
    {
        name: "Minangkabau",
        region: "asia",
        location: "West Sumatra, Indonesia",
        description: "World's largest matrilineal society with distinctive horn-shaped roofs (rumah gadang), spicy rendang cuisine, and strong tradition of male migration (merantau).",
        tags: ["Matrilineal", "Horn-shaped roofs", "Rendang cuisine"],
        emoji: "🏠"
    },
    {
        name: "Balti",
        region: "asia",
        location: "Baltistan, Pakistan and Ladakh, India",
        description: "High-altitude people of the Karakoram range, known for polo played on the world's highest polo ground, apricot cultivation, and Tibetan Buddhist-Islamic blend.",
        tags: ["High-altitude polo", "Apricot cultivation", "Buddhist-Islamic"],
        emoji: "🏇"
    },
    {
        name: "Aeta",
        region: "asia",
        location: "Philippines",
        description: "Among the earliest inhabitants of the Philippines, traditionally nomadic hunter-gatherers known for their detailed knowledge of rainforest plants and survival skills.",
        tags: ["Early inhabitants", "Hunter-gatherers", "Rainforest knowledge"],
        emoji: "🌳"
    },
    {
    name: "Basque (Euskera)",
    region: "europe",
    location: "Basque Country, Spain and France",
    description: "Europe's oldest surviving culture with a pre-Indo-European language isolate, known for their unique genetics, pelota sport, distinctive architecture, and fierce independence.",
    tags: ["Language isolate", "Pre-Indo-European", "Pelota sport"],
    emoji: "🏔️"
    },
    {
        name: "Faroese",
        region: "europe",
        location: "Faroe Islands, North Atlantic",
        description: "North Germanic islanders maintaining ancient traditions like grindadráp whale hunting, chain dancing, and grass-roof houses in one of Europe's most isolated communities.",
        tags: ["Whale hunting", "Chain dancing", "Grass roofs"],
        emoji: "🐋"
    },
    {
        name: "Komi",
        region: "europe",
        location: "Komi Republic, Northern Russia",
        description: "Finno-Ugric people with ancient shamanic traditions, distinctive Komi script, reindeer herding, and being among the first to adopt Christianity in the Arctic.",
        tags: ["Finno-Ugric", "Shamanic traditions", "Komi script"],
        emoji: "🦌"
    },
    {
        name: "Mari",
        region: "europe",
        location: "Mari El Republic, Russia",
        description: "Last pagan Europeans practicing ancient nature worship in sacred groves, known for their honey-based traditions and resistance to Christianization for over 1000 years.",
        tags: ["Last pagans", "Sacred groves", "Nature worship"],
        emoji: "🌳"
    },
    {
        name: "Võro",
        region: "europe",
        location: "South Estonia",
        description: "Finno-Ugric people maintaining distinct Võro language, ancient folk songs (regilaulud), traditional smoke saunas, and bog iron working traditions.",
        tags: ["Võro language", "Smoke saunas", "Bog iron"],
        emoji: "🔥"
    },
    {
        name: "Savoyard",
        region: "europe",
        location: "Savoy, French Alps",
        description: "Alpine people with Franco-Provençal language, traditional cheese-making, distinctive chalet architecture, and ancient transhumance pastoral traditions.",
        tags: ["Franco-Provençal", "Alpine cheese", "Transhumance"],
        emoji: "🧀"
    },
    {
        name: "Sorbs (Wends)",
        region: "europe",
        location: "Lusatia, Eastern Germany",
        description: "Last Slavic minority in Germany maintaining Sorbian language, elaborate Easter egg painting, traditional costumes, and pre-Christian water spirit beliefs.",
        tags: ["Slavic minority", "Easter eggs", "Water spirits"],
        emoji: "🥚"
    },
    {
        name: "Livonian",
        region: "europe",
        location: "Northern Latvia and Estonia",
        description: "Nearly extinct Finno-Ugric coastal people, traditional fishermen and seal hunters with unique Livonian language spoken by fewer than 30 people.",
        tags: ["Nearly extinct", "Seal hunters", "30 speakers"],
        emoji: "🦭"
    },
    {
        name: "Karelian",
        region: "europe",
        location: "Karelia, Finland and Russia",
        description: "Finno-Ugric people known for their epic poetry tradition (Kalevala source), distinctive wooden architecture, and forest survival skills.",
        tags: ["Kalevala epic", "Wooden architecture", "Forest skills"],
        emoji: "📜"
    },
    {
        name: "Breton",
        region: "europe",
        location: "Brittany, Western France",
        description: "Celtic people maintaining Breton language, traditional fest-noz dancing, distinctive coiffes headdresses, and ancient menhir stone traditions.",
        tags: ["Celtic language", "Fest-noz dancing", "Menhir stones"],
        emoji: "🗿"
    },
    {
        name: "Cornish",
        region: "europe",
        location: "Cornwall, Southwest England",
        description: "Celtic people with revived Cornish language, tin mining heritage, distinctive pasty cuisine, and ancient Celtic cross traditions surviving Roman conquest.",
        tags: ["Revived language", "Tin mining", "Celtic crosses"],
        emoji: "⛏️"
    },
    {
        name: "Manx",
        region: "europe",
        location: "Isle of Man, Irish Sea",
        description: "Celtic islanders with revived Manx Gaelic, unique three-legged symbol (triskelion), traditional tailless cats, and ancient Tynwald parliament.",
        tags: ["Manx Gaelic", "Triskelion", "Ancient parliament"],
        emoji: "🐱"
    },
    {
        name: "Galician",
        region: "europe",
        location: "Galicia, Northwest Spain",
        description: "Celtic-influenced people with Galician language, bagpipe traditions, ancient castro hill forts, and distinct identity from Castilian Spain.",
        tags: ["Celtic bagpipes", "Castro forts", "Galician language"],
        emoji: "🎵"
    },
    {
        name: "Kashubian",
        region: "europe",
        location: "Pomerania, Northern Poland",
        description: "Slavic minority with distinct Kashubian language, traditional fishing culture, unique embroidery patterns, and resistance to Germanic assimilation.",
        tags: ["Kashubian language", "Fishing culture", "Traditional embroidery"],
        emoji: "🎣"
    },
    {
        name: "Aromanian (Vlach)",
        region: "europe",
        location: "Balkans (Greece, Albania, North Macedonia)",
        description: "Romance-speaking nomadic shepherds, descendants of ancient Dacians/Thracians, known for transhumance lifestyle and maintaining Latin-derived language in Slavic regions.",
        tags: ["Nomadic shepherds", "Latin remnant", "Transhumance"],
        emoji: "🐑"
    },
    {
    name: "Nuer",
    region: "africa",
    location: "South Sudan and Ethiopia",
    description: "Tall cattle herders who measure wealth and status through cattle ownership, known for ritual scarification, age-set systems, and their resistance to colonial rule.",
    tags: ["Cattle wealth", "Ritual scars", "Age-sets"],
    emoji: "🐄"
    },
    {
        name: "Maasai Mara",
        region: "africa",
        location: "Kenya and Tanzania border region",
        description: "Subset of the Maasai people specifically from the famous Masai Mara ecosystem, maintaining traditional pastoralism alongside wildlife conservation.",
        tags: ["Wildlife coexistence", "Traditional pastoralism", "Conservation"],
        emoji: "🦒"
    },
    {
        name: "Herero",
        region: "africa",
        location: "Namibia and Botswana",
        description: "Pastoralists known for their distinctive Victorian-era dress adopted after German colonization, elaborate funeral ceremonies, and survival of genocide.",
        tags: ["Victorian dress", "Genocide survivors", "Funeral ceremonies"],
        emoji: "👗"
    },
    {
        name: "Bambuti",
        region: "africa",
        location: "Ituri Forest, Democratic Republic of Congo",
        description: "Forest-dwelling Pygmy people with incredible hunting skills using nets and spears, polyphonic music traditions, and deep knowledge of medicinal plants.",
        tags: ["Net hunting", "Polyphonic music", "Forest medicine"],
        emoji: "🕷️"
    },
    {
        name: "Oromo",
        region: "africa",
        location: "Ethiopia and Kenya",
        description: "Ethiopia's largest ethnic group with the ancient Gadaa democratic system, known for their coffee cultivation origins and traditional Oromo calendar.",
        tags: ["Gadaa democracy", "Coffee origins", "Traditional calendar"],
        emoji: "☕"
    },
    {
        name: "Shona",
        region: "africa",
        location: "Zimbabwe and Mozambique",
        description: "Builders of the Great Zimbabwe stone city, known for their mbira thumb piano music, stone carving traditions, and ancestral spirit mediums (svikiro).",
        tags: ["Great Zimbabwe", "Mbira music", "Spirit mediums"],
        emoji: "🏛️"
    },
    {
        name: "Xhosa",
        region: "africa",
        location: "Eastern Cape, South Africa",
        description: "Bantu people known for their click consonants, traditional beadwork, initiation ceremonies, and being Nelson Mandela's ethnic group.",
        tags: ["Click language", "Beadwork", "Mandela's people"],
        emoji: "👨"
    },
    {
        name: "Pokot",
        region: "africa",
        location: "Kenya and Uganda border",
        description: "Pastoralists and agriculturalists known for their elaborate body decoration, cattle raiding traditions, and seasonal migration patterns.",
        tags: ["Body decoration", "Cattle raiding", "Seasonal migration"],
        emoji: "🎨"
    },
    {
        name: "Mossi",
        region: "africa",
        location: "Burkina Faso",
        description: "West African kingdom builders known for their Mogho Naaba (emperor) traditions, elaborate mask festivals, and resistance to Islamic conversion.",
        tags: ["Kingdom builders", "Mask festivals", "Islamic resistance"],
        emoji: "👑"
    },
    {
        name: "Sukuma",
        region: "africa",
        location: "Northern Tanzania",
        description: "Tanzania's largest ethnic group known for their traditional snake dances, cotton cultivation, and elaborate coming-of-age ceremonies.",
        tags: ["Snake dances", "Cotton cultivation", "Coming-of-age"],
        emoji: "🐍"
    },
    {
        name: "Lobi",
        region: "africa",
        location: "Burkina Faso, Ghana, Ivory Coast",
        description: "Known for their fortress-like adobe houses, wooden sculpture traditions, and maintaining animistic beliefs despite outside religious pressure.",
        tags: ["Fortress houses", "Wooden sculptures", "Animistic beliefs"],
        emoji: "🏠"
    },
    {
        name: "Turkana",
        region: "africa",
        location: "Northern Kenya",
        description: "Nomadic pastoralists living in one of the world's harshest environments, known for their elaborate jewelry, cattle culture, and adaptation to extreme heat.",
        tags: ["Desert nomads", "Elaborate jewelry", "Extreme heat"],
        emoji: "🌵"
    },
    {
        name: "Afar",
        region: "africa",
        location: "Afar Triangle, Ethiopia/Eritrea/Djibouti",
        description: "Salt miners living in one of Earth's hottest places, known for extracting salt from ancient lake beds and trading camel caravans across the desert.",
        tags: ["Salt mining", "Hottest place", "Camel caravans"],
        emoji: "🧂"
    },
    {
        name: "Beja",
        region: "africa",
        location: "Eastern Sudan, Egypt, Eritrea",
        description: "Nomadic camel herders of the Red Sea Hills, speaking Cushitic languages and known for their traditional sword dances and distinctive hair styles.",
        tags: ["Camel herders", "Sword dances", "Cushitic language"],
        emoji: "🐪"
    },
    {
        name: "Luba",
        region: "africa",
        location: "Democratic Republic of Congo",
        description: "Central African kingdom builders known for their sophisticated political systems, intricate wood carvings, and elaborate royal investiture ceremonies.",
        tags: ["Kingdom builders", "Wood carvings", "Royal ceremonies"],
        emoji: "👑"
    },
    {
        name: "Serer",
        region: "africa",
        location: "Senegal and Gambia",
        description: "Farmers and astronomers known for their complex Serer calendar, traditional wrestling (laamb), and resistance to Islamic conversion for centuries.",
        tags: ["Serer calendar", "Traditional wrestling", "Astronomers"],
        emoji: "⭐"
    },
    {
        name: "Tonga",
        region: "africa",
        location: "Zambia and Zimbabwe",
        description: "River people of the Zambezi known for their fishing traditions, distinctive pottery, and displacement by the Kariba Dam construction.",
        tags: ["River fishing", "Distinctive pottery", "Dam displacement"],
        emoji: "🎣"
    },
    {
        name: "Baggara",
        region: "africa",
        location: "Chad, Sudan, Central African Republic",
        description: "Arab-African cattle nomads known for their horsemanship, elaborate tent decorations, and traditional camel racing competitions.",
        tags: ["Cattle nomads", "Horsemanship", "Camel racing"],
        emoji: "🏇"
    },
    {
        name: "Batwa",
        region: "africa",
        location: "Uganda, Rwanda, Burundi, Eastern DRC",
        description: "Forest-dwelling Pygmy people, original inhabitants of the Great Lakes region, known for their pottery, hunting skills, and marginalization from their ancestral forests.",
        tags: ["Original inhabitants", "Pottery makers", "Forest displaced"],
        emoji: "🏺"
    },
    {
        name: "Khoikhoi",
        region: "africa",
        location: "South Africa and Namibia",
        description: "Pastoralists known as 'Hottentots' by colonizers, famous for their click languages, cattle herding, and being among the first to encounter European settlers.",
        tags: ["Click languages", "Cattle herders", "First contact"],
        emoji: "🐂"
    },
    {
    name: "Thule (Ancestral Inuit)",
    region: "americas",
    location: "Arctic Canada, Alaska, Greenland",
    description: "Ancestors of modern Inuit who developed sophisticated ice-hunting technology, umiak boats, and spread across the Arctic displacing the earlier Dorset culture.",
    tags: ["Ice hunting", "Umiak boats", "Arctic expansion"],
    emoji: "🛶"
    },
    {
        name: "Aleut (Unangan)",
        region: "americas",
        location: "Aleutian Islands, Alaska",
        description: "Master sea hunters of the stormy North Pacific, known for their waterproof kayaks (baidarkas), intricate basketry, and survival in one of Earth's harshest marine environments.",
        tags: ["Sea hunters", "Baidarkas", "Storm survivors"],
        emoji: "🌊"
    },
    {
        name: "Copper Inuit",
        region: "americas",
        location: "Victoria Island and mainland Arctic Canada",
        description: "Unique Inuit group who used native copper for tools and weapons, lived in snow houses year-round, and had minimal contact with Europeans until the 20th century.",
        tags: ["Copper tools", "Snow houses", "Late contact"],
        emoji: "🔨"
    },
    {
        name: "Taíno",
        region: "americas",
        location: "Caribbean Islands",
        description: "Arawakan people who first encountered Columbus, known for their sophisticated agriculture, ball courts (batey), and tragic decimation by disease and colonization.",
        tags: ["Columbus contact", "Ball courts", "Agricultural"],
        emoji: "🏐"
    },
    {
        name: "Garifuna",
        region: "americas",
        location: "Caribbean coast of Central America",
        description: "Afro-indigenous people descended from Carib, Arawak, and African slaves, known for their distinctive music, cassava bread, and maritime culture.",
        tags: ["Afro-indigenous", "Distinctive music", "Cassava bread"],
        emoji: "🥖"
    },
    {
        name: "Kalinago (Island Carib)",
        region: "americas",
        location: "Lesser Antilles, Caribbean",
        description: "Fierce warriors who gave the Caribbean its name, known for their canoe raids, cassava processing, and resistance to European colonization.",
        tags: ["Caribbean warriors", "Canoe raids", "Cassava"],
        emoji: "🛶"
    },
    {
        name: "Tsilhqot'in",
        region: "americas",
        location: "British Columbia, Canada",
        description: "Interior plateau people known for their fierce independence, salmon fishing, and winning a landmark Supreme Court case recognizing Aboriginal title to their lands.",
        tags: ["Fierce independence", "Salmon fishing", "Land rights victory"],
        emoji: "🐟"
    },
    {
        name: "Nuu-chah-nulth",
        region: "americas",
        location: "Vancouver Island, British Columbia",
        description: "Pacific Northwest whalers famous for hunting gray whales from cedar canoes, elaborate potlatch ceremonies, and intricate basket weaving.",
        tags: ["Whale hunters", "Cedar canoes", "Potlatch"],
        emoji: "🐋"
    },
    {
        name: "Kwakwaka'wakw",
        region: "americas",
        location: "Northern Vancouver Island and mainland BC",
        description: "Master carvers known for their dramatic transformation masks, elaborate potlatch feasts, and the famous Thunderbird and Orca cultural symbols.",
        tags: ["Transformation masks", "Thunderbird", "Potlatch masters"],
        emoji: "🎭"
    },
    {
        name: "Makah",
        region: "americas",
        location: "Olympic Peninsula, Washington",
        description: "Only Native American tribe with treaty rights to hunt whales, known for their centuries-old whaling tradition and carved cedar longhouses.",
        tags: ["Treaty whale hunting", "Cedar longhouses", "Whaling tradition"],
        emoji: "🐋"
    },
    {
        name: "Awá",
        region: "americas",
        location: "Amazon rainforest, Brazil",
        description: "Nomadic hunter-gatherers considered Brazil's most endangered tribe, known for adopting orphaned animals as pets and their detailed knowledge of rainforest plants.",
        tags: ["Most endangered", "Animal adoption", "Nomadic hunters"],
        emoji: "🐒"
    },
    {
        name: "Pirahã",
        region: "americas",
        location: "Amazon Basin, Brazil",
        description: "Amazonian people with the world's most unusual language lacking numbers, colors, or creation myths, living entirely in the present tense.",
        tags: ["No numbers", "Present tense", "Unusual language"],
        emoji: "🗣️"
    },
    {
        name: "Matsés",
        region: "americas",
        location: "Peru-Brazil border, Amazon",
        description: "Jaguar people known for their intricate face tattoos, blow dart hunting, use of powerful plant medicines, and recent contact with outside world.",
        tags: ["Jaguar people", "Face tattoos", "Blow darts"],
        emoji: "🐆"
    },
    {
        name: "Huaorani",
        region: "americas",
        location: "Ecuadorian Amazon",
        description: "Former fierce warriors who lived in isolation until the 1950s, known for their blowguns, tree house communities, and protecting their rainforest territory.",
        tags: ["Blowguns", "Tree houses", "Recent contact"],
        emoji: "🏹"
    },
    {
        name: "Shuar",
        region: "americas",
        location: "Ecuador and Peru, Amazon headwaters",
        description: "Headhunting people famous for creating shrunken heads (tsantsa), living in scattered houses, and their powerful ayahuasca traditions.",
        tags: ["Shrunken heads", "Ayahuasca", "Headhunters"],
        emoji: "💀"
    },
    {
        name: "Machiguenga",
        region: "americas",
        location: "Urubamba River, Peruvian Amazon",
        description: "River people known for their geometric textile patterns, sustainable fishing practices, and maintaining traditional plant knowledge despite outside pressures.",
        tags: ["Geometric textiles", "Sustainable fishing", "Plant knowledge"],
        emoji: "🎨"
    },
    {
        name: "Wichí",
        region: "americas",
        location: "Gran Chaco, Argentina",
        description: "Hunter-gatherers of the dry Chaco known for their honey hunting, intricate basketry, and adaptation to one of South America's harshest environments.",
        tags: ["Honey hunting", "Intricate baskets", "Chaco adaptation"],
        emoji: "🍯"
    },
    {
        name: "Tehuelche",
        region: "americas",
        location: "Patagonia, Argentina and Chile",
        description: "Tall nomadic hunters of Patagonia who impressed early Europeans with their height, known for hunting guanaco and their distinctive cloaks.",
        tags: ["Tall nomads", "Guanaco hunters", "Distinctive cloaks"],
        emoji: "🦙"
    },
    {
        name: "Yaghan",
        region: "americas",
        location: "Tierra del Fuego, Chile",
        description: "Canoe people of the world's southernmost inhabited lands, known for their resistance to cold, detailed vocabulary for snow, and tragic near-extinction.",
        tags: ["Southernmost", "Canoe people", "Cold resistance"],
        emoji: "🛶"
    },
    {
        name: "Ona (Selk'nam)",
        region: "americas",
        location: "Tierra del Fuego, Argentina and Chile",
        description: "Extinct hunter-gatherers known for their elaborate initiation ceremonies with body painting, shamanic traditions, and tragic genocide by sheep ranchers.",
        tags: ["Extinct culture", "Body painting", "Initiation ceremonies"],
        emoji: "🎭"
    }
];

// Make it available globally
window.indigenousGroups = indigenousGroups;
