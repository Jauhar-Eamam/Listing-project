const sampleListing = [
  {
    title: "Seaside Serenity Villa",
    description:
      "A luxurious beachfront villa offering mesmerizing ocean views and private access to the shore.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 25000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Mountain Escape Cabin",
    description:
      "Cozy wooden cabin nestled in the Himalayas, perfect for peace lovers and trekkers.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/uNQ506y0XtfPS0EaZNm83TEgX-TdN3l8A6yZBGSkkmo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YmZsZHIuY29tL1RV/OU5VRDBDL2F0L3Ro/ZmoyamZ6djNrd3Ju/c3g1ZnJoLzFCQl9T/a3lsaW5lX1N1aXRl/X2JlZHJvb20uanBn/P2Zvcm1hdD1qcGcm/YXV0bz13ZWJwJmRy/dXBhbC1pbWFnZS1z/dHlsZT1jYXJkJndp/ZHRoPTgwMCZoZWln/aHQ9NjAwJnByZWNy/b3A9NTk4MCw0NDg1/LHgzNzQseTAsc2Fm/ZSZoPTI5OTJiYTBh/Jml0b2s9c05Pck9V/alE",
    },
    price: 18000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Desert Dunes Resort",
    description:
      "Experience the calm beauty of the Thar Desert with luxury tents and cultural nights.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/yGSBbGu19KgBQaT7OJ_xfR-fDOBSB3hgbKpPyWnBrLs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDYvMWUvZTMvNTAv/anctbWFycmlvdHQt/aG90ZWwtbXVtYmFp/LmpwZw",
    },
    price: 12000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Royal Heritage Haveli",
    description:
      "Stay in a 200-year-old haveli with antique furniture, traditional Rajasthani decor, and royal hospitality.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/p9A4zoBPcEJJ4If7E-_V1upR7Xg3bkkIYqalA14WUn0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvc3F1YXJl/NjAwLzQzMDA4NjU3/LndlYnA_az0zNmU0/MmNhMTFjZWY0YzFh/MjE3YjRjMjkwY2E4/YzEwZGI1YzJiNjg0/NTgyYjQ2NDYzN2U1/MTdiYjY2OTMwNzk0/Jm89",
    },
    price: 20000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Backwater Bliss Houseboat",
    description:
      "A floating paradise offering a serene escape through Kerala’s tranquil backwaters.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/pDKMPCU5wvk36fXnmYFy0RZgOrdtimNdcqOVEtlnm_g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9xLXh4/LmJzdGF0aWMuY29t/L3hkYXRhL2ltYWdl/cy9ob3RlbC9zcXVh/cmU2MDAvNDY0MzAz/OTQyLndlYnA_az05/MmE4YjI4NDc1YzA1/Mjc4YThlMjhkYjMy/ZGJmMjEzNGIyYzM4/Mjg3NjhhNzQ2MWIz/Y2EyMWI5MTk0Yjcy/MmQzJm89",
    },
    price: 15000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Snowpeak Chalet",
    description:
      "Elegant chalet surrounded by snow-capped mountains with a warm fireplace and breathtaking views.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/X2SN_W5cuiZrcgvGbjZv0ZDO2GaL8fGSpjyYvMl3-zU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTAz/NDE3NDAyL3Bob3Rv/L2x1eHVyeS1jb25z/dHJ1Y3Rpb24taG90/ZWwtd2l0aC1zd2lt/bWluZy1wb29sLWF0/LXN1bnNldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TnlQ/Q19jLXdFM1dfQ0lt/QTR0NTdGcHlHeTZm/NDI4Q1lST2Q4MGp4/VkM0QT0",
    },
    price: 30000,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Urban Luxe Apartment",
    description:
      "A modern, centrally located apartment with skyline views and high-end amenities.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/ABw6ueeENYIobzkJtOFJlK8DbTEkimlWTs2WV6vhJX8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZW10Y29udGVu/dC5jb20vaG90ZWwt/aW1nL3RoZS1ieWtl/LWhvdGVscy1ocDIu/d2VicA",
    },
    price: 22000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Forest Whisper Lodge",
    description:
      "Eco-friendly lodge deep in the forest for nature enthusiasts and wildlife explorers.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/YGrsW1sYlJn5rZIVDuHrYlD3nnErvetS0gZFufDTx9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTgw/MjI1NS9wZXhlbHMt/cGhvdG8tMTgwMjI1/NS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    },
    price: 10000,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Forest Whisper Lodge",
    description:
      "Eco-friendly lodge deep in the forest for nature enthusiasts and wildlife explorers.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/YGrsW1sYlJn5rZIVDuHrYlD3nnErvetS0gZFufDTx9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTgw/MjI1NS9wZXhlbHMt/cGhvdG8tMTgwMjI1/NS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    },
    price: 10000,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Mountain Crest Retreat",
    description:
      "A serene mountain cabin offering panoramic views, perfect for hikers and peace seekers.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/Ms2ymDfQ1X4A1drDuAtW6LUhi6n4q8UodKcGgKKUFmY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg3/MzYzMzM3L3Bob3Rv/L21vZGVybi1ob3Rl/bC1idWlsZGluZy1p/bi1zdW1tZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVS/VkRjYWRaVEtzNXQy/Sy1DRWVYVDZEaUpR/NjhGbmJzNnU5Ri0w/U192OFE9",
    },
    price: 8500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Ocean Pearl Resort",
    description:
      "Luxury beachfront stay with sunset views, water sports, and coastal dining experiences.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/RHhW87oNomlwU6CWEb2-84hXD0nV0EVge26f1ZqpGrY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8w/Ni8yMy8wMi8wMy9z/aW5nYXBvcmUtNTA1/NDdfNjQwLmpwZw",
    },
    price: 15000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Desert Mirage Camp",
    description:
      "Traditional Rajasthani-style desert tents with camel rides and starry night experiences.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/O-gaoioMXaHbv06bv0yDLwtO5YNeVK7GxAkMNRyzong/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/bWFoYWJhbGlwdXJh/bS9tNS85OTk5cHh4/NDQueHg0NC4xNTEx/MjQxMzAwMTgubDht/NS9jYXRhbG9ndWUv/aW50ZXJjb250aW5l/bnRhbC1jaGVubmFp/LW1haGFiYWxpcHVy/YW0tcmVzb3J0LXBl/cnVyLW1haGFiYWxp/cHVyYW0taG90ZWxz/LTIxNnp5ZGctMjUw/LmpwZz93PTY0MCZx/PTc1",
    },
    price: 7000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Riverbend Cottage",
    description:
      "Cozy riverside cottage surrounded by pine forests, ideal for fishing and relaxation.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/YA_gCv1aN6NLfxmRrMmFwfqYYDK9ztlaBueGuWDH7KI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsLmloZy5jb20v/aXMvaW1hZ2UvaWhn/L2loZy1yZWZyZXNo/LWxwLW9mZmVyLWNh/cm91c2VsLWdhcm5l/ci1zdnAtMTMyMHg2/NjAtMT8kT3JpZ2lu/YWwk",
    },
    price: 9200,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Tea Valley Estate",
    description:
      "Stay amid rolling tea gardens, enjoy fresh brews, nature walks, and misty mornings.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/FlNF9jqVXey1p_aUqKh9QfaxSGM12WH4ShIV8bFnSIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/Mi8xMS8wNy81OS9o/b3RlbC02ODYyMTU5/XzY0MC5qcGc",
    },
    price: 11000,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Skyline City Penthouse",
    description:
      "Ultra-modern penthouse in the heart of the city with rooftop pool and skyline views.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/xV0u2dHMshfSUpAwS1nFtPPhUztoXi4IRod_c2JVFZM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMwL0ludGVyY29u/dGluZW50YWxfSG90/ZWxfKDI0OTI1OTg3/MjgwKS5qcGc",
    },
    price: 25000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Lakeside Haven",
    description:
      "Elegant resort beside a tranquil lake with kayaking, birdwatching, and bonfire nights.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/EBMhCzBXCsf0HGhWDrxf0ND30BUbD002UwsiH0h9SsM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MzAvMDcvYmIvZjcv/c3RheS1hdC1vdXIt/bmV3LWhvdGVsLmpw/Zw",
    },
    price: 12000,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Coral View Villa",
    description:
      "Private seaside villa with coral reef snorkeling and open-air dining.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/QkJNt-d_97dg36FHjH_0oS5oV_GY7abJYBUwaJ0z5Wk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sdXh1/cnktaG90ZWwtbG9i/YnktcmVzdGF1cmFu/dC02MDkwNzg0Lmpw/Zw",
    },
    price: 18000,
    location: "Lakshadweep",
    country: "India",
  },
  {
    title: "Whispering Pines Chalet",
    description:
      "Snow-clad chalet surrounded by deodar forests, offering skiing and fireplace evenings.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/fYH6KHqPxrSCUAEkU1HOHztIZs4krzxe9Y_Z3fzAuzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MmMvMWMvZDkvOTYv/d2VsY29tZS10by10/aGUtaG9saWRheS5q/cGc",
    },
    price: 14000,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Heritage Haveli Stay",
    description:
      "Live like royalty in a restored Rajasthani haveli with traditional cuisine and music.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/kRLi0j7HwWsU_YpiA5gwr_7Q80DjDCI9aZXQFM-reXM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW1nYWNhZGVteS5j/b20vc2l0ZXMvZGVm/YXVsdC9maWxlcy9k/b3JtMS5qcGc",
    },
    price: 9500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Bamboo Grove Eco Stay",
    description:
      "Sustainable bamboo cottages amid tropical greenery, promoting eco-conscious tourism.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/gNOwx9zaLDf95MU2urKMFR85TPgT6t1rB5SaudoIqcY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MmMvMDkvOTUvY2Uv/b3VyLWhvdGVsLWlz/LWxvY2F0ZWQuanBn",
    },
    price: 8200,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Hilltop Orchard Lodge",
    description:
      "Peaceful hill lodge surrounded by apple orchards, ideal for photography and treks.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/qCHzYL69AvQYOTluoJFk9rpyarDv-ilhI91hjn1wCVo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/ZXJpYWwtc2hvdC1h/cmlhLWhvdGVsLWxh/cy12ZWdhc18xODE2/MjQtNDI4ODEuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
    },
    price: 8700,
    location: "Kullu",
    country: "India",
  },
  {
    title: "Island Breeze Hut",
    description:
      "Beach hut experience with palm-lined shores, hammocks, and fresh seafood delights.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/1qAqzKfkKBxUkEZoAvC7Kr_SWB3dX6HZmIhItqPhSRU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzcwL0hvdGVsX0lu/ZGlnb19DSU1HODY3/Ni5KUEc",
    },
    price: 9800,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Royal Garden Palace",
    description:
      "Lavish palace hotel featuring Mughal gardens, marble halls, and regal hospitality.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/T-aT3LJrJsg58DslxguXFUh4QuXglJ18y5Yy1VGsE5s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAz/MDE2OTM0L3Bob3Rv/L2VudHJhbmNlLW9m/LWx1eHVyeS1ob3Rl/bC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RFhGenVjQjJ4/V0dmM1BJNl95amhM/S0R2ckZjR2xPcE9q/WGg2S0RJOHJxVT0",
    },
    price: 30000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Mist Valley Homestay",
    description:
      "Simple yet scenic homestay in mist-covered hills, perfect for meditation and writing.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/RLs9RM9aIFERGRLf4snpW_uNlO1Ps_C5V3eliBiwmMU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I0L0hvbGlkYXlf/SW5uX2FuZF9TdWl0/ZXNfLV9EYXZlbnBv/cnQsX0lvd2EuanBn",
    },
    price: 6000,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Sapphire Sands Resort",
    description:
      "High-end resort on golden sands offering luxury spa, private cabanas, and jet skiing.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/iGI3SvSbwpg7-vb8Et9nn8UQjJHPzb4Cl0DdYDyxksY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAz/MDE5NTI4L3Bob3Rv/L3JvYWQtZnJvbnQt/b2YtbHV4dXJ5LWJ1/aWxkaW5nLWluLWNs/ZWFyLXNreS1hdC1u/aWdodC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eGtqVUJ5/WE5FNVNkTVNlWXhM/cUl3d2VaTWc5WFo2/eG5XRUs3eXBkZU80/ST0",
    },
    price: 19000,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Coconut Bay Cottage",
    description:
      "Relaxing coastal retreat surrounded by coconut palms and gentle sea breeze.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/IF8wGRH6Hn6jDZo1RMrl51GDCqyJNiNs3-OaCDcSbF0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWhncGxjLmNvbS9-/L21lZGlhL0ltYWdl/cy9JL0loZy1QbGMv/aW1hZ2VzL25ld3Mv/MjAyNS9paGctNTB0/aC1vcGVuLWhvdGVs/LW1pbGVzdG9uZS1p/bi1pbmRpYS1jcm93/bmUtcGxhemEtbHVj/a25vdy1pbWFnZS0y/LmpwZw",
    },
    price: 10500,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Emerald Lakeview Resort",
    description:
      "Glass-front villas overlooking a serene emerald lake, featuring boating and yoga decks.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/on-OCVZAwQvbRPGgP7HwDcFKwT3L4A8czN_TTp5Q8RE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW1naG90ZWxzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvaW1n/LWhvdGVscy1JQURH/Vl8wMDYtRHVzay1F/eHRlcmlvci1ob21l/LmpwZw",
    },
    price: 16000,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Valley Breeze Camp",
    description:
      "Adventure camp in lush valleys with paragliding, trekking, and riverside camping.",
    image: {
      filename: "listingImage",
      url: "https://imgs.search.brave.com/a49JG3KGR01jB7CoTaE5t--I4lvwPb4wazlIL8v25kY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtcmVzb3VyY2Vz/LWVsZW1lbnRvci5t/aXJhaS5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzE2/MzcvaG9tZS1zbGlk/ZXItdGVycmF6YS1y/ZXN0YXVyYW50ZS53/ZWJw",
    },
    price: 7500,
    location: "Bir Billing",
    country: "India",
  },
];

module.exports = { data: sampleListing };
