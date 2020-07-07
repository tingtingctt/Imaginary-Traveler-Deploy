const mongoose = require("../config/mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below


const bookSeed = [
  {
    title: "Alburquerque",
    author: "Rudolfo Anaya",
    year:"1992",
    location:"Isleta Blvd,  Los Padillas neighborhood in Albuquerque, New Mexico",
    picture: "",
    description:
      "We were invited by your friend Isidro. His family was having a matanza. We had fallen in love that summer and suddenly it was October, a more brilliant October I never saw again. The entire river was golden, the alamos had turned the color of fire. Long strings of geese flew south and filled the valley with their call, and we, too, drove south along Isleta. Farmers lined the road, their trucks filled with bushels of green chile, red chile ristras, corn and pumpkins, apples. It was autumn and the fiesta of the harvest drew people together.",
  },
  {
    title: "Little Fires Everywhere",
    author: "Celeste Ng",
    year:"2017",
    location:"Golden Gate Bridge, San Francisco, CA",
    picture: "",
    description:
      "Mia found an apartment, a room for rent in the Sunset in a house whose plaster was the color of sea salt, with a stern and elderly landlady who eyed her stomach and asked only, “There going to be an angry husband knocking on my door in a week?” For the last three months of her pregnancy, Mia walked the city, circling the lagoon in Golden Gate Park, climbing Coit Tower, one day crossing the Golden Gate Bridge in a fog so dense she could hear, but not see, the traffic rushing alongside her. The fog mirrored her state of mind so perfectly she felt as if she were walking through her own brain: a haze of formless, pervasive emotion, nothing she could grasp, but full of looming thoughts that appeared from nowhere, startling her, then receded into whiteness again before she was even sure what she had seen.",
  },

  {
    title: "Foucault’s Pendulum",
    author: "Umberto Eco",
    year:"1988",
    location:"292 Rue Saint-Martin, 75003 Paris, France",
    picture: "https://c8.alamy.com/comp/FF65KN/electric-flying-machine-ngaston-tissandiers-experiment-using-an-electric-FF65KN.jpg",
    description:
      "Still unable to take my eyes from the key of the vault, I retreated, step by step, for I had learned the path by heart in the few minutes I had been there.  Great metal tortoises filed past me on either side, imposing enough to signal their presence at the corner of my eyes.  I fell back along the nave toward the front entrance, and again those menacing prehistoric birds of wire and rotting canvas loomed over me, evil dragonflies that some secret power had hung from the ceiling of the nave.  I saw them as sapiential metaphors, far more meaningful than their didactic pretext.  A swarm of Jurassic insects and reptiles, allegory of the long terrestrial migrations the Pendulum was tracing, aimed at me like angry archons with their long archeopterix-beaks…",
  },
  {
    title: "Foucault’s Pendulum",
    author: "Umberto Eco",
    year:"1988",
    location:"Av. Frederico Pontes, s/n Comércio, Salvador, State of Bahia, Brazil",
    picture: "https://worldtripdiaries.com/wp-content/uploads/salvador-brazil-world-trip-diaries-20.jpg",
    description:
      "We met there the next morning, and it was a fish market, an Arab souk, a saint’s day fair that had proliferated with cancerous virulence, like a Lourdes overrun by the forces of evil, wizard rainmakers side by side with ecstatic and stigmatized Capuchins. There were little propitiatory sacks with prayers sewn into the lining, little hands in semiprecious stones, the middle finger extended, coral horns, crucifixes, Stars of David, sexual symbols of pre-Judaic religions, hammocks, rugs, purses, sphinxes, sacred hearts, Bororo quivers, shell necklaces. The degenerate mystique of the European conquistadors was owed to the occult knowledge of the slaves, just as the skin of every passerby told a similar story of lost genealogies.",
  },
  {
    title: "Play It As It Lays",
    author: "Joan Didion",
    year:"1970",
    location:"101 to 110 Interchange, Los Angeles, CA",
    picture: "",
    description:
      "Once she was on the freeway and had maneuvered her way to a fast lane she turned on the radio at high volume and she drove. She drove the San Diego to the Harbor, the Harbor up to the Hollywood, the Hollywood to the Golden State, the Santa Monica, the Santa Ana, the Pasadena, the Ventura. She drove it as a riverman runs a river, every day more attuned to its currents , its deceptions, and just as a riverman feels the pull of the rapids in the lull between sleeping and waking so Maria lay at night in the still of Beverly Hills and saw the great signs soar overhead at seventy miles an hour, Normandie ¼ Vermont ¾ Harbor Fwy 1. Again and again she returned to an intricate stretch just south of the interchange where successful passage from the Hollywood onto the Harbor required a diagonal move across four lanes of traffic. On the afternoon she finally did it without once braking or once losing the beat on the radio she was exhilarated, and that night slept dreamlessly.",
  },
  {
    title: "Kingbird Highway",
    author: "Ken Kaufman",
    year:"2007",
    location:"Dry Tortugas National Park, Florida",
    picture: "https://fcit.usf.edu/florida/docs/t/i/tortugas.jpg",
    description:
      "Around and beyond the seething bird metropolis of Bush Key, the colors of the water were intense: milky emerald in the shallows, cobalt in the deeper waters. Off to the northeast we could see a couple of white-sand shoals that barely broke the surface. Farther away to the west was Logger-head Key, crowned with the thin feathery tops of Casuarina trees, with a lighthouse standing in the center. Beyond these fragments, there was nothing but the wide ocean horizon. The fort was clearly being reclaimed by nature. Grass and prickly pear grew atop the walls where we stood. Water dripping through the lime cement in the upper walls over decades had begun to form stalactites in places. Some parts of the fort had been reinforced recently with concrete: more were crumbling, with signs warning visitors away. But if nature was going to retake the fort, it was going to take a while.",
  },
  {
    title: "Kingbird Highway",
    author: "Ken Kaufman",
    year:"2007",
    location:"Gambell, St Lawrence Island, Alaska",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/GambellAlaska.jpg/250px-GambellAlaska.jpg",
    description:
      "The sun, low in the northwestern sky, must have caught the edge of the cloud bank, because the mist around me was gradually pervaded with a yellow glow that grew brighter as I walked. Where minutes before everything had been a study in blue-gray, now it seemed I was walking in a golden cloud. In this eerie setting, it seemed, anything could happen. And it did. Out of the golden mist behind me came a bird the color of deep snow, the color of distant icebergs, a bird of shocking white… Just at the point where it would have melted into the cloud, it circled once, as if to return, and I heard myself saying aloud “Come back, come back,” but the bird resumed its course and vanished forever.",
  },
  {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    year:"1925",
    location:"1 Gatsby Lane, Great Neck NY",
    picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F09%2Fgreat-gatsby-house-10.jpg",
    description:
      "It was dawn now on Long Island and we went about opening the rest of the windows downstairs, filling the house with grey turning, gold tuning light. The shadow of a tree fell abruptly across the dew and ghostly birds began to sing among the blue leaves. There was a slow pleasant movement in the air, scarcely a wind, promising a cool lovely day. I don’t think she ever loved him.” Gatsby turned around from the window and looked at me challengingly.",
  },
  {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    year:"1925",
    location:"Wall Street New York Stock Exchange",
    picture: "https://media.gettyimages.com/photos/new-york-stock-exchange-and-broad-street-looking-south-from-wall-new-picture-id174049784?s=612x612",
    description:
      "Most of the time I worked. In the early morning the sun threw my shadow westward as I hurried down the white chasms of lower New York to the Probity Trust. I knew the other clerks and young bond-salesmen by their first names and lunched with them in dark crowded restaurants on little pig sausages and mashed potatoes and coffee… I began to like New York, the racy, adventurous feel of it at night and the satisfaction that the constant flicker of men and women and machines gives to the restless eye.",
  },
  {
    title: "Sweetbitter",
    author: "Stephanie Danler",
    year:"2016",
    location:"101 E 19th St, New York, NY 10003, Union Square Cafe",
    picture: "https://1.bp.blogspot.com/-kz7obH_ZCNY/Ti9iMC-r6wI/AAAAAAAABok/e29pxdqW0o4/s1600/Union_Square_Cafe_entrance.JPG",
    description:
      "And then,the bar. Timeless: long, dark mahogany, with stools high enough to make you feel like you were afloat. The bar had soft music, dim lighting tinkling layers of noise, the bumps of a neighbor’s knee, the reach of someone’s arm by your face to take a glittering martini, the tap of a hostess as she escorted guests behind your back, the blur of plates being passed, the rattle of drinks, the virtuoso performance of bartenders slapping bottles into the back bar while also delivering bread, while also taking an order with the requisite substitutions and complications. All the best regulars came in and greeted the hostess saying, Any space at the bar tonight?",
  },
  {
    title: "Sweetbitter",
    author: "Stephanie Danler",
    year:"2016",
    location:"Grand st, Willamsburg, Brooklyn",
    picture: "https://caprijetrealty.com/wp-content/uploads/2019/06/img_2997-img_2999.jpg",
    description:
      "I ran home, crossing to the opposite side of Grand Street so I wouldn’t be contaminated by the demons lounging outside of Clem’s. I ran up my four flights of stairs too, ran into the apartment, stole Jesse’s wine key and mug, and ran up the last flight, pushing out onto the roof.  The sky was like the paintings. No, the paintings were trying to represent this sunset. The sky was aflame and throwing sparks, the orange clouds rimmed with purple like ash.  The windows in each high-rise in Manhattan were lit up like the buildings were burning down. I was out of breath, overtired from the museum. My heart drummed. A voice said, You have to live with it…",
  },
  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    year:"1831",
    location:"Paris Notre-Dame -- Place Jean-Paul-II, Paris, France",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cath%C3%A9drale_Notre-Dame_de_Paris%2C_3_June_2010.jpg/520px-Cath%C3%A9drale_Notre-Dame_de_Paris%2C_3_June_2010.jpg",
    description:
      "Admirable, however, as the Paris of the present day appears to you, build up and put together again in imagination the Paris of the fifteenth century. Look at the light through that surprising host of steeples, towers, and belfries. Pour forth amid the immense city, break against the points of its islands, compress within the arches of the bridges, the current of the Seine, with its large patches of green and yellow, more changeable than a serpent's skin. Define clearly the Gothic profile of this old Paris upon an horizon of azure, make its contour float in a wintry fog which clings to its innumerable chimneys. Drown it in deep night, and observe the extraordinary play of darkness and light in this sombre labyrinth of buildings. Throw into it a ray of moonlight, which shall show its faint outline and cause the huge heads of the towers to stand forth from amid the mist. Or revert to that dark picture, touch up with shade the thousand acute angles of the spires and gables, and make them stand out, more jagged than a shark's jaw, upon the copper-coloured sky of evening. Now compare the two.",
  },

  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    year:"1831",
    location:"6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cath%C3%A9drale_Notre-Dame_de_Paris%2C_3_June_2010.jpg/520px-Cath%C3%A9drale_Notre-Dame_de_Paris%2C_3_June_2010.jpg",
    description:
      "His cathedral was enough for him. It was peopled with marble figures of kings, saints and bishops who at least did not laugh in his face and looked at him with only tranquillity and benevolence. The other statues, those of monsters and demons, had no hatred for him – he resembled them too closely for that. It was rather the rest of mankind that they jeered at. The saints were his friends and blessed him; the monsters were his friends and kept watch over him. He would sometimes spend whole hours crouched before one of the statues in solitary conversation with it. If anyone came upon him then he would run away like a lover surprised during a serenade.",
  },
  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    year:"1831",
    location:"Chemin de Halage, Évry, Île-de-France",
    picture: "https://image.freepik.com/free-photo/pont-neuf-vintage-color-oldest-standing-bridge-across-river-seine-paris_109442-299.jpg",
    description:
      "When the boatman had left him he stood on the bank, staring straight ahead in a dazed fashion.  It is not rare for the fatigue of a great sorrow to produce such an effect on the mind.  The sun had sunk below the lofty Tour de Nesle and the twilight had begun.  The sky and the water were both white.  Between them, the left bank of the Seine, on which his eyes were fixed, projected its dark mass.  Only the outlines of its houses were visible, standing out sharply against the light background of the sky and the river.",
  },
  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    year:"1831",
    location:"Rue du Temple, Paris, France",
    picture: "http://www.parisrues.com/imagesold/03/031ruedutemple01.jpg",
    description:
      "Just then Clopin Trouillefou came back in and cried out in a thunderous voice, “Midnight!”  At this word all the vagabonds, men, women and children, rushed out of the tavern with a great clatter of weapons and iron instruments.  The moon was behind a cloud and the Court of Miracles was in total darkness.  Not a light was showing in it but it was far from deserted.  A crowd of men and women could be distinguished, talking in low tones.  All sorts of weapons gleamed in the shadows.  Clopin Trouillefou stood up on a large stone and shouted, “Fall in!” There was agitated movement in the darkness.  The immense multitude formed itself into a single column.  After several minutes the king raised his voice again: “Now, silence in crossing the city! The password is ‘Petite flambe en baguenaud.’ Don’t light the torches till we get to Notre Dame.  Forward march!",
  },
  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    year:"1831",
    location:"Place de Greve, Paris, France",
    picture: "https://www.artnet.com/WebServices/images/ll00201lld6bCGFgVeECfDrCWvaHBOcTtt/thomas-shotter-boys-place-de-greve,-paris.jpg",
    description:
      "It was the priest.  He looked like a phantom.  It was an effect of the moonlight, which seems to reveal only the ghosts of things to us. “Listen,” he said to her.  She shuddered at the sound of that sinister voice which she had not heard for so long.  He spoke in short gasps which betrayed deep inward agitation: “Listen. We’re here. I want to talk to you.  This is the Place de Greve. We’ve come to the end.  Fate has delivered us to each other.  Your life is in my hands and my soul is in yours.",
  },
  {
    title: "The Guns of August",
    author: "Barbara Tuchman",
    year:"1962",
    location:"Westminster Hall, London, England",
    picture: "https://upload.wikimedia.org/wikipedia/en/5/5d/Funeral_of_Edward_VII_-1910_-cropped.JPG",
    description:
      "So gorgeous was the spectacle on the May morning of 1910 when nine kings rode in the funeral of Edward VII of England that the crowd waiting in hushed and black-clad awe, could not keep back gasps of admiration. In scarlet and blue and green and purple, three by three the sovereigns rode through the palace gates, with plumed helmets, gold braid, crimson sashes, and jeweled orders flashing in the sun. After them came five heirs apparent, forty more imperial or royal highnesses, seven queens--four dowager and three regnant --and a scattering of special ambassadors from uncrowned countries. Together they represented seventy nations in the greatest assemblage of royalty and rank ever gathered in one place and of its kind the last. The muffled tongue of Big Ben tolled nine by the clock as the cortege left the palace, but on history’s clock it was sunset, and the sun of the old world was setting in a dying blaze of splendor never to be seen again.",
  },
  {
    title: "Shaker, Why Don’t You Sing?",
    author: "Maya Angelou",
    year:"1983",
    location:" Savannah, Georgia,  and multiple cities",
    picture: "https://www.southmag.com/wormsloe3-1500(1).jpg",
    description:
      "A GEORGIA SONG, We swallow the odors of southern cities, Fat back boiled to submission, Tender evening poignancies of Magnolia and the great green Smell of fresh sweat, In Southern fields, The sound of distant Feet running, or dancing, And the liquid notes of Sorrow songs, Waltzes, screams and French Quadrilles float over The loam of Georgia. Sing me to sleep, Savannah. Clocks run down in Tara’s halls and dusty Flags droop their unbearable Sadness. Remember our days, Susannah. Oh, the blood-red clay, Wet still with ancient Wrongs, and Abenaa Singing her Creaole air to Macon. We long, dazed, for winter evenings And a whitened moon, And the snap of controllable fires. Cry for our souls, Augusta. We need a wind to strike Sharply, as the thought of love Betrayed can stop the heart. An absence of tactile Romance, no lips offering Succulence, nor eyes Rolling, disconnected from A Sambo face. Dare us new dreams, Columbus. A cool new moon, a Winter’s night, clam blood, Sluggish, moving only Out of habit, we need Peace. Oh Atlanta, oh deep, and Once lost city Chant for us a new song.  A song Of Southern peace.",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    year:"1897",
    location:"Carpathian Mountains, Romania",
    picture: "https://carpathiandreams.com/wp-content/uploads/2019/01/DSC_9946cpdd.jpg",
    description:
      "...and bringing out all the glorious colours of this beautiful range, deep blue and purple in the shadows of the peaks, green and brown where grass and rock mingled, and an endless perspective of jagged rock and pointed crags, till these were themselves lost in the distance, where the snowy peaks rose grandly. Here and there seemed mighty rifts in the mountains, through which, as the sun began to sink, we saw now and again the white gleam of falling water. One of my companions touched my arm as we swept round the base of a hill and opened up the lofty, snow-covered peak of a mountain, which seemed, as we wound our serpentine way, to be right before us.“Look! Isten szek!” --”God’s seat!” --and he crossed himself reverently",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    year:"1897",
    location:"Vale of Heath, Hampstead Heath, London, England",
    picture: "https://www.heathandhampstead.org.uk/wp-content/uploads/2018/03/Y1A2513-1024x701.jpg",
    description:
      "THE WESTMINSTER GAZETTE, 25 SEPTEMBER A HAMPSTEAD MYSTERY The neighborhood of Hampstead is just at present exercised with a series of events which seem to run on lines parallel to those of what was known to the writers of headlines as “The Kensington Horror”, or “The Stabbing Woman”, or “The Woman in Black”. During the past two or three days several cases have occurred of young children straying from home or neglecting to return from their playing on the Heath. In all these cases the children were too young to give any properly intelligible account of themselves, but the consensus of their excuses is that they had been with a “bloofer lady”...There is, however, possibly a serious side to the question, for some of the children, indeed all who have been missed at night, have been slightly torn or wounded in the throat",
  },
  {
    title: "The Big Sleep",
    author: "Raymond Chandler",
    year:"1939",
    location:"Hollywood Blvd and Highland Ave",
    picture: "https://i.pinimg.com/originals/09/1a/a5/091aa549a601b3a10280de2e5fdba2bb.jpg",
    description:
      "I got to my fee, tipped my hat to the blonde and went out after him. He walked west, swinging his cane in a small tight arc just above his right shoe. He was easy to follow. His coat was cut from a rather loud piece of horse robe with shoulders so wide that his neck stuck up out of it like a celery stalk and his head wobbled on it as he walked. We went a block and a half. At the Highland Avenue traffic signal I pulled up beside him and let him see me… I leaned against a pepper tree in the parkway and waited. The thunder in the foothills ws rumbling again. The glare of lightning was reflected on piled-up black clouds off to the south. A few tentative raindrops splashed down on the sidewalk and made spots as large as nickels. The air was as still as the air in General Sternwood’s orchid house.",
  },
  {
    title: "The Big Sleep",
    author: "Raymond Chandler",
    year:"1939",
    location:"3765 Alta Brea Crescent, West Hollwood",
    picture: "https://lh3.googleusercontent.com/proxy/kP0hF3XQiM2zRV2kXED6dLM0s2VF2vq1bG_QmX943pnc9-kG-1DJ4jLRYLJrmEaUIi8x3qzZcTBx_H5-ZBV9AO2tSWZRqyp5lvH9SSFBlspT1kzksPL_2MjQk7kZ8HvIMFyMvdGJ0SS7mpsyKeJuIDscz9py1s3PToV1sYcOoNKsdTRvIQ",
    description:
      "The Registration read: Carmen Sternwood, 3765 Alta Brea Crescent, West Hollwood. I went back to my car again and sat and sat. The top dripped on my knees and my stomach burned from the whiskey. No more cars came up the hill. No lights went on in the house before which I was parked. It seemed like a nice neighborhood to have bad habits in.",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
