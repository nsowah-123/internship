/**
 * Task 3: 3D Movie Finder Page
 * 56 Curated Blockbusters with Real TMDb HD Posters & Three.js Background
 */

// ============================================================================
// 1. Curated 56 Movies Database with Real HD Posters
// ============================================================================
const MOVIES_DATABASE = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft along with a team of researchers through a mysterious wormhole.",
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 2,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    year: 2024,
    rating: 8.6,
    director: "Denis Villeneuve",
    cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a choice between love and the fate of the universe.",
    posterUrl: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg"
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on Gotham City, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 5,
    title: "Oppenheimer",
    genre: "Drama",
    year: 2023,
    rating: 8.9,
    director: "Christopher Nolan",
    cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
  },
  {
    id: 6,
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    year: 2018,
    rating: 8.4,
    director: "Bob Persichetti, Peter Ramsey",
    cast: "Shameik Moore, Jake Johnson, Hailee Steinfeld",
    synopsis: "Teen Miles Morales becomes the new Spider-Man and joins other Spider-Heroes from parallel dimensions to stop a threat to all reality.",
    posterUrl: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
  },
  {
    id: 7,
    title: "Blade Runner 2049",
    genre: "Cyberpunk",
    year: 2017,
    rating: 8.0,
    director: "Denis Villeneuve",
    cast: "Ryan Gosling, Harrison Ford, Ana de Armas",
    synopsis: "Young Blade Runner K unearths a long-buried secret that leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    posterUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
  },
  {
    id: 8,
    title: "The Matrix",
    genre: "Cyberpunk",
    year: 1999,
    rating: 8.7,
    director: "Lana & Lilly Wachowski",
    cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    synopsis: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    director: "Anthony & Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Scarlett Johansson",
    synopsis: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions.",
    posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 10,
    title: "Parasite",
    genre: "Drama",
    year: 2019,
    rating: 8.5,
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: 11,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    director: "Quentin Tarantino",
    cast: "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl: "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg"
  },
  {
    id: 12,
    title: "Spirited Away",
    genre: "Animation",
    year: 2001,
    rating: 8.6,
    director: "Hayao Miyazaki",
    cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
    synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
  },
  {
    id: 13,
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
    director: "Ridley Scott",
    cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    synopsis: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    posterUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    id: 14,
    title: "The Batman",
    genre: "Action",
    year: 2022,
    rating: 7.8,
    director: "Matt Reeves",
    cast: "Robert Pattinson, Zoë Kravitz, Paul Dano, Colin Farrell",
    synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    posterUrl: "https://image.tmdb.org/t/p/w500/741tO4EOElHAiPnCGqO8v9QdJ4o.jpg"
  },
  {
    id: 15,
    title: "Whiplash",
    genre: "Drama",
    year: 2014,
    rating: 8.5,
    director: "Damien Chazelle",
    cast: "Miles Teller, J.K. Simmons, Paul Reiser",
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    posterUrl: "https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg"
  },
  {
    id: 16,
    title: "Mad Max: Fury Road",
    genre: "Action",
    year: 2015,
    rating: 8.1,
    director: "George Miller",
    cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners and a drifter named Max.",
    posterUrl: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
  },
  {
    id: 17,
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    director: "Frank Darabont",
    cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
    synopsis: "A banker convicted of uxoricide forms a friendship over a quarter of a century with a hardened convict, while maintaining his innocence and finding hope through common decency.",
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 18,
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan, Robert Duvall",
    synopsis: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family when patriarch Vito Corleone barely survives an assassination attempt.",
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    id: 19,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    director: "Robert Zemeckis",
    cast: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
    synopsis: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75 who yearns to be reunited with his childhood sweetheart.",
    posterUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
  },
  {
    id: 20,
    title: "Titanic",
    genre: "Drama",
    year: 1997,
    rating: 7.9,
    director: "James Cameron",
    cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    synopsis: "An aristocratic girl falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic on its maiden voyage across the Atlantic.",
    posterUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    id: 21,
    title: "Jurassic Park",
    genre: "Adventure",
    year: 1993,
    rating: 8.2,
    director: "Steven Spielberg",
    cast: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
    synopsis: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes cloned dinosaurs to run loose.",
    posterUrl: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg"
  },
  {
    id: 22,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    year: 2001,
    rating: 8.8,
    director: "Peter Jackson",
    cast: "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
    synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterUrl: "https://image.tmdb.org/t/p/w500/p2Gqd16nWnvKRuehF8Kqx1T5nUN.jpg"
  },
  {
    id: 23,
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
    year: 2003,
    rating: 9.0,
    director: "Peter Jackson",
    cast: "Elijah Wood, Viggo Mortensen, Ian McKellen, Sean Astin",
    synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterUrl: "https://image.tmdb.org/t/p/w500/4C4AoMSAI96wrnaLY5dzaL5uw09.jpg"
  },
  {
    id: 24,
    title: "Star Wars: The Empire Strikes Back",
    genre: "Sci-Fi",
    year: 1980,
    rating: 8.7,
    director: "Irvin Kershner",
    cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    synopsis: "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader.",
    posterUrl: "https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg"
  },
  {
    id: 25,
    title: "The Lion King",
    genre: "Animation",
    year: 1994,
    rating: 8.5,
    director: "Roger Allers, Rob Minkoff",
    cast: "Matthew Broderick, Jeremy Irons, James Earl Jones",
    synopsis: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. After tragedy strikes, Simba flees and learns his destiny.",
    posterUrl: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  },
  {
    id: 26,
    title: "WALL·E",
    genre: "Animation",
    year: 2008,
    rating: 8.4,
    director: "Andrew Stanton",
    cast: "Ben Burtt, Elissa Knight, Jeff Garlin",
    synopsis: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    posterUrl: "https://image.tmdb.org/t/p/w500/Agc6lw8pb6BIGVeguvdjDT0p9Mb.jpg"
  },
  {
    id: 27,
    title: "Top Gun: Maverick",
    genre: "Action",
    year: 2022,
    rating: 8.3,
    director: "Joseph Kosinski",
    cast: "Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm",
    synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on an impossible mission.",
    posterUrl: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
  },
  {
    id: 28,
    title: "The Wolf of Wall Street",
    genre: "Comedy",
    year: 2013,
    rating: 8.2,
    director: "Martin Scorsese",
    cast: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    synopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    posterUrl: "https://image.tmdb.org/t/p/w500/3UcnvqfvMhsuGjH0T0N1WvGz6o0.jpg"
  },
  {
    id: 29,
    title: "Goodfellas",
    genre: "Crime",
    year: 1990,
    rating: 8.7,
    director: "Martin Scorsese",
    cast: "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco",
    synopsis: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    posterUrl: "https://image.tmdb.org/t/p/w500/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg"
  },
  {
    id: 30,
    title: "The Shining",
    genre: "Horror",
    year: 1980,
    rating: 8.4,
    director: "Stanley Kubrick",
    cast: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
    synopsis: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    posterUrl: "https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg"
  },
  {
    id: 31,
    title: "Alien",
    genre: "Horror",
    year: 1979,
    rating: 8.5,
    director: "Ridley Scott",
    cast: "Sigourney Weaver, Tom Skerritt, John Hurt, Ian Holm",
    synopsis: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating a mysterious transmission of unknown origin from an uncharted planetoid.",
    posterUrl: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"
  },
  {
    id: 32,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    year: 2022,
    rating: 8.1,
    director: "Daniel Kwan, Daniel Scheinert",
    cast: "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan, Jamie Lee Curtis",
    synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    posterUrl: "https://image.tmdb.org/t/p/w500/w3LhuJMYiUXy0QVoM3XqsP0i3YU.jpg"
  },
  {
    id: 33,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation",
    year: 2023,
    rating: 8.7,
    director: "Joaquim Dos Santos, Kemp Powers",
    cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac",
    synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence, but clashes on how to handle a new threat.",
    posterUrl: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
  },
  {
    id: 34,
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    director: "David Fincher",
    cast: "Brad Pitt, Edward Norton, Helena Bonham Carter, Meat Loaf",
    synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    posterUrl: "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg"
  },
  {
    id: 35,
    title: "Joker",
    genre: "Crime",
    year: 2019,
    rating: 8.4,
    director: "Todd Phillips",
    cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    synopsis: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain in Gotham City.",
    posterUrl: "https://image.tmdb.org/t/p/w500/udDcoVBuGshICdjsTCZek1TVXpG.jpg"
  },
  {
    id: 36,
    title: "Avatar: The Way of Water",
    genre: "Sci-Fi",
    year: 2022,
    rating: 7.7,
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang",
    synopsis: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race.",
    posterUrl: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },
  {
    id: 37,
    title: "The Silence of the Lambs",
    genre: "Crime",
    year: 1991,
    rating: 8.6,
    director: "Jonathan Demme",
    cast: "Jodie Foster, Anthony Hopkins, Scott Glenn, Ted Levine",
    synopsis: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    posterUrl: "https://image.tmdb.org/t/p/w500/uS9m8OBkCz76e73nSg8c3Vibx6b.jpg"
  },
  {
    id: 38,
    title: "Se7en",
    genre: "Crime",
    year: 1995,
    rating: 8.6,
    director: "David Fincher",
    cast: "Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey",
    synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    posterUrl: "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg"
  },
  {
    id: 39,
    title: "The Departed",
    genre: "Crime",
    year: 2006,
    rating: 8.5,
    director: "Martin Scorsese",
    cast: "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg",
    synopsis: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    posterUrl: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61Tq.jpg"
  },
  {
    id: 40,
    title: "Inglourious Basterds",
    genre: "Action",
    year: 2009,
    rating: 8.3,
    director: "Quentin Tarantino",
    cast: "Brad Pitt, Christoph Waltz, Michael Fassbender, Diane Kruger",
    synopsis: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans.",
    posterUrl: "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg"
  },
  {
    id: 41,
    title: "Django Unchained",
    genre: "Action",
    year: 2012,
    rating: 8.5,
    director: "Quentin Tarantino",
    cast: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
    synopsis: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    posterUrl: "https://image.tmdb.org/t/p/w500/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg"
  },
  {
    id: 42,
    title: "Saving Private Ryan",
    genre: "Action",
    year: 1998,
    rating: 8.6,
    director: "Steven Spielberg",
    cast: "Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns",
    synopsis: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    posterUrl: "https://image.tmdb.org/t/p/w500/bdD39MpSVhKjxarTxLSfX6baoMP.jpg"
  },
  {
    id: 43,
    title: "The Prestige",
    genre: "Drama",
    year: 2006,
    rating: 8.5,
    director: "Christopher Nolan",
    cast: "Christian Bale, Hugh Jackman, Scarlett Johansson, Michael Caine",
    synopsis: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    posterUrl: "https://image.tmdb.org/t/p/w500/bdWlavX4LJgzhxjsZunqA9eYwB9.jpg"
  },
  {
    id: 44,
    title: "Memento",
    genre: "Drama",
    year: 2000,
    rating: 8.4,
    director: "Christopher Nolan",
    cast: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
    synopsis: "A man with short-term memory loss attempts to track down his wife's murderer using tattoos and notes on his body.",
    posterUrl: "https://image.tmdb.org/t/p/w500/fFYBLu2Hnx27CWLOMd425ExDkgK.jpg"
  },
  {
    id: 45,
    title: "Arrival",
    genre: "Sci-Fi",
    year: 2016,
    rating: 7.9,
    director: "Denis Villeneuve",
    cast: "Amy Adams, Jeremy Renner, Forest Whitaker",
    synopsis: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    posterUrl: "https://image.tmdb.org/t/p/w500/x2Vf7cBKueNmADTWUVntWnAUyTZ.jpg"
  },
  {
    id: 46,
    title: "Coco",
    genre: "Animation",
    year: 2017,
    rating: 8.4,
    director: "Lee Unkrich, Adrian Molina",
    cast: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
    synopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    posterUrl: "https://image.tmdb.org/t/p/w500/g7CHF8gTLGooTbP4GznIGwaqAGL.jpg"
  },
  {
    id: 47,
    title: "Up",
    genre: "Animation",
    year: 2009,
    rating: 8.3,
    director: "Pete Docter, Bob Peterson",
    cast: "Edward Asner, Jordan Nagai, John Ratzenberger",
    synopsis: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with thousands of balloons, inadvertently taking a young stowaway.",
    posterUrl: "https://image.tmdb.org/t/p/w500/eAdO0qa9m0NFSVLZ26PvCwmPlsr.jpg"
  },
  {
    id: 48,
    title: "Ratatouille",
    genre: "Animation",
    year: 2007,
    rating: 8.1,
    director: "Brad Bird, Jan Pinkava",
    cast: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
    synopsis: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
    posterUrl: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg"
  },
  {
    id: 49,
    title: "Monsters, Inc.",
    genre: "Animation",
    year: 2001,
    rating: 8.1,
    director: "Pete Docter, David Silverman",
    cast: "John Goodman, Billy Crystal, Mary Gibbs, Steve Buscemi",
    synopsis: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters after a child enters Monstropolis.",
    posterUrl: "https://image.tmdb.org/t/p/w500/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg"
  },
  {
    id: 50,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    year: 2014,
    rating: 8.1,
    director: "Wes Anderson",
    cast: "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
    synopsis: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    posterUrl: "https://image.tmdb.org/t/p/w500/eWoyfxyzaIDsICcxmu0oGTSV86X.jpg"
  },
  {
    id: 51,
    title: "Back to the Future",
    genre: "Sci-Fi",
    year: 1985,
    rating: 8.5,
    director: "Robert Zemeckis",
    cast: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
    synopsis: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend Doc Brown.",
    posterUrl: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg"
  },
  {
    id: 52,
    title: "The Truman Show",
    genre: "Comedy",
    year: 1998,
    rating: 8.2,
    director: "Peter Weir",
    cast: "Jim Carrey, Ed Harris, Laura Linney, Noah Emmerich",
    synopsis: "An insurance salesman discovers his entire whole life is actually a reality TV show broadcast across the globe 24 hours a day.",
    posterUrl: "https://image.tmdb.org/t/p/w500/vuB3gug6N9bFw29cR37Zq0y4nO0.jpg"
  },
  {
    id: 53,
    title: "No Country for Old Men",
    genre: "Crime",
    year: 2007,
    rating: 8.2,
    director: "Ethan & Joel Coen",
    cast: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
    synopsis: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    posterUrl: "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg"
  },
  {
    id: 54,
    title: "Psycho",
    genre: "Horror",
    year: 1960,
    rating: 8.5,
    director: "Alfred Hitchcock",
    cast: "Anthony Perkins, Janet Leigh, Vera Miles, John Gavin",
    synopsis: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    posterUrl: "https://image.tmdb.org/t/p/w500/tdwWvwoPbH8AB2UnICa7S55Xw13.jpg"
  },
  {
    id: 55,
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    rating: 7.8,
    director: "Jordan Peele",
    cast: "Daniel Kaluuya, Allison Williams, Bradley Whitford, Catherine Keener",
    synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him reaches a boiling point.",
    posterUrl: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"
  },
  {
    id: 56,
    title: "A Quiet Place",
    genre: "Horror",
    year: 2018,
    rating: 7.5,
    director: "John Krasinski",
    cast: "Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe",
    synopsis: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    posterUrl: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
  }
];

// ============================================================================
// 2. Movie Finder Engine (Live Search & Filter)
// ============================================================================
class MovieFinderApp {
  constructor(movies) {
    this.movies = movies;
    this.activeGenre = 'all';
    this.searchQuery = '';

    // DOM Elements
    this.grid = document.getElementById('movies-grid');
    this.searchInput = document.getElementById('search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.genreFilters = document.getElementById('genre-filters');
    this.visibleCountEl = document.getElementById('visible-count');
    this.totalCountEl = document.getElementById('total-count');
    this.emptyState = document.getElementById('empty-state');
    this.resetSearchBtn = document.getElementById('reset-search-btn');
    
    // Modal Elements
    this.modal = document.getElementById('movie-modal');
    this.modalContent = document.getElementById('modal-content');
    this.modalCloseBtn = document.getElementById('modal-close-btn');

    this.init();
  }

  init() {
    this.totalCountEl.textContent = this.movies.length;

    // Real-time live filtering on every keystroke
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.toggleClearButton();
      this.filterAndRender();
    });

    // Clear search button
    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.toggleClearButton();
      this.filterAndRender();
      this.searchInput.focus();
    });

    // Reset button in empty state
    this.resetSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.activeGenre = 'all';
      this.toggleClearButton();
      this.updateGenrePillsUI();
      this.filterAndRender();
    });

    // Genre filter chip clicks
    this.genreFilters.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      this.activeGenre = chip.getAttribute('data-genre');
      this.updateGenrePillsUI();
      this.filterAndRender();
    });

    // Modal close listeners
    this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.closeModal();
      }
    });

    // Initial render
    this.filterAndRender();
  }

  toggleClearButton() {
    if (this.searchQuery.length > 0) {
      this.clearSearchBtn.classList.add('visible');
    } else {
      this.clearSearchBtn.classList.remove('visible');
    }
  }

  updateGenrePillsUI() {
    const chips = this.genreFilters.querySelectorAll('.filter-chip');
    chips.forEach((c) => {
      if (c.getAttribute('data-genre') === this.activeGenre) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });
  }

  filterAndRender() {
    const filtered = this.movies.filter((movie) => {
      // 1. Genre filter check
      const matchesGenre = this.activeGenre === 'all' || movie.genre.toLowerCase() === this.activeGenre.toLowerCase();

      // 2. Search query check (title, director, synopsis, or cast)
      const matchesQuery = 
        !this.searchQuery ||
        movie.title.toLowerCase().includes(this.searchQuery) ||
        movie.director.toLowerCase().includes(this.searchQuery) ||
        movie.synopsis.toLowerCase().includes(this.searchQuery) ||
        movie.cast.toLowerCase().includes(this.searchQuery);

      return matchesGenre && matchesQuery;
    });

    this.visibleCountEl.textContent = filtered.length;
    this.renderCards(filtered);
  }

  renderCards(moviesList) {
    this.grid.innerHTML = '';

    if (moviesList.length === 0) {
      this.emptyState.classList.remove('hidden');
      return;
    }

    this.emptyState.classList.add('hidden');

    moviesList.forEach((movie) => {
      const card = document.createElement('article');
      card.className = 'movie-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="card-poster">
          <img class="poster-img" src="${movie.posterUrl}" alt="${movie.title} Poster" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'">
          <div class="poster-overlay-gradient"></div>
          <div class="poster-floating-meta">
            <span class="genre-tag">${movie.genre}</span>
            <span class="rating-badge">★ ${movie.rating}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${movie.title}</h3>
            <span class="release-year">${movie.year}</span>
          </div>
          <p class="card-synopsis">${movie.synopsis}</p>
          <div class="card-footer">
            <span>Dir. ${movie.director}</span>
            <span class="view-details-btn">
              Details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => this.openModal(movie));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.openModal(movie);
      });

      this.grid.appendChild(card);
    });
  }

  openModal(movie) {
    this.modalContent.innerHTML = `
      <div class="modal-layout">
        <div class="modal-poster-col">
          <img src="${movie.posterUrl}" alt="${movie.title} Poster" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'">
        </div>
        <div class="modal-info-col">
          <h2 class="modal-title">${movie.title}</h2>
          <div class="modal-badges-row">
            <span class="genre-tag">${movie.genre}</span>
            <span class="rating-badge">★ ${movie.rating} / 10</span>
            <span class="release-year" style="color: #94a3b8; font-size: 0.9rem;">Year: ${movie.year}</span>
          </div>
          <p class="modal-desc">${movie.synopsis}</p>
          <div class="modal-grid-meta">
            <div class="meta-item">
              <span class="meta-label">Director</span>
              <span class="meta-val">${movie.director}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Starring</span>
              <span class="meta-val">${movie.cast}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// ============================================================================
// 3. Three.js 3D Background (Floating Cinema Rings & Light Particles)
// ============================================================================
function initCinema3DBackground() {
  if (typeof THREE === 'undefined') return;

  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07090e, 0.035);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 16;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Ambient & Directional Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const light1 = new THREE.PointLight(0x6366f1, 2.5, 40);
  light1.position.set(12, 10, 8);
  scene.add(light1);

  const light2 = new THREE.PointLight(0x06b6d4, 2, 40);
  light2.position.set(-12, -10, 5);
  scene.add(light2);

  // Group of floating Torus cinema rings
  const group = new THREE.Group();
  scene.add(group);

  const toruses = [];
  const torusGeom = new THREE.TorusGeometry(1.6, 0.08, 16, 50);

  for (let i = 0; i < 9; i++) {
    const mat = new THREE.MeshStandardMaterial({
      color: i % 2 === 0 ? 0x6366f1 : 0x06b6d4,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.8
    });
    const mesh = new THREE.Mesh(torusGeom, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 32,
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 12 - 2
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.012,
      rotY: (Math.random() - 0.5) * 0.012,
      floatSpeed: 0.008 + Math.random() * 0.008,
      offset: Math.random() * Math.PI * 2
    };
    group.add(mesh);
    toruses.push(mesh);
  }

  // Floating ambient stardust
  const starCount = 180;
  const starGeom = new THREE.BufferGeometry();
  const starPos = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i += 3) {
    starPos[i] = (Math.random() - 0.5) * 40;
    starPos[i + 1] = (Math.random() - 0.5) * 40;
    starPos[i + 2] = (Math.random() - 0.5) * 25;
  }

  starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    size: 0.1,
    color: 0x818cf8,
    transparent: true,
    opacity: 0.5
  });
  const stars = new THREE.Points(starGeom, starMat);
  scene.add(stars);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    camera.position.x = mouseX * 2.2;
    camera.position.y = -mouseY * 2.2;
    camera.lookAt(0, 0, 0);

    toruses.forEach((t) => {
      t.rotation.x += t.userData.rotX;
      t.rotation.y += t.userData.rotY;
      t.position.y += Math.sin(elapsed * 1.5 + t.userData.offset) * 0.006;
    });

    stars.rotation.y = elapsed * 0.02;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ============================================================================
// 4. App Bootstrap
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCinema3DBackground();
  new MovieFinderApp(MOVIES_DATABASE);
});