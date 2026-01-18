-- Schema visualiser screenshot
-- SQL queries from our editor on Supabase
-- This is not a functional file. Just for Reference!

-- Game title table
CREATE TABLE IF NOT EXISTS game_title (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  game_name VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  synopsis TEXT NOT NULL,
  release_date TEXT,
  box_art TEXT
);

INSERT INTO game_title (game_name, genre, synopsis, release_date, box_art) VALUES ('Doom 3', 'Horror-FPS', 'Doom 3 is the third main installment in the Doom franchise, and sets a much darker and realistic tone compared to the first two games. The game uses dynamic stencil shadows as part of the lighting system and was one of the first games to feature more complicated materials and normal maps over single textures. Doom 3 is visually stunning and atmospherically breathtaking.', '3/8/2004', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Doom3box.jpg');

INSERT INTO game_title (game_name, genre, synopsis, release_date, box_art) VALUES ('Diablo II', 'RPG', 'Diablo II follows on from the events of the first game in which Diablo, Lord of Terror is back and is using a new vessel in order to complete his objective: to turn the earthly world of Sanctuary into an eternal bastion of hell itself. The game features 5 selectable character classes: Barbarian, Sorcerer, Necromancer, Paladin or Amazonian, while the expansion called Lord of Destruction pushes that number up to 7 and includes the Druid and Assassin class. Prepare for a long adventure of chasing Diablo accross the world of sanctuary to stop him from unleashing hell upon it.', '28/6/2000', 'https://upload.wikimedia.org/wikipedia/en/d/d5/Diablo_II_Coverart.png');

CREATE TABLE IF NOT EXISTS game_reviews (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255) NOT NULL,
  review_content TEXT,
  score INTEGER NOT NULL,
  review_target INTEGER REFERENCES game_title(id)
);

INSERT INTO game_reviews (author, review_content, score, review_target) VALUES ('Enthused Elliot', 'I bought Doom 3 back in 2005 and enjoyed the hell out of it. Compared to anything else at the time, the game was visually and atmospherically groundbreaking. The gameplay is somewhat different compared to the other previous Doom games - the originals were much faster paced and threw troves of demons at you, whereas Doom 3 builds up atmospheric suspense to many of these encounters and they are often more challenging to take down. This difference was not appreciated by many but it is something I was more than OK with!', 4, 1), ('Monolithic Malcolm', 'I did not get the chance to play Doom 3 until about 2009 when my brother brought it over to install. Very different to the past games (perhaps in a good way), way more story driven and so much atmosphere. In a way I feel that the game derives alot of lessons give or take from Half-Life.', 3, 1), ('XxMegaSorcererxX', 'Diablo 2 is one of those platinum releases that never dies, like my level 97 hardcore Sorc. One thing that has died however is my storage space, I have 3 stash characters completely full of ears. Better luck next time DT clan :)', 5, 2);