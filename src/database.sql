CREATE TABLE gallery (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(15000),
"description" VARCHAR (250) NOT NULL,
"likes" INTEGER DEFAULT 0
);


INSERT INTO gallery ("path", "description", "likes")
VALUES ('https://i0.wp.com/www.westminsterspeed.com/wp-content/uploads/2014/09/Honda-Accord-Window-Tint-1.jpg?w=256&h=256&crop=1&ssl=1', 'Photo of the exact type of car I drive', '0'), 
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgH2198ycNS2ge1P6Xdy6gbfmQvEpIWR56Sg&usqp=CAU', 'Photo of my favorite food', '0'), 
('https://icons.iconarchive.com/icons/twitter/twemoji-flags/256/Somalia-Flag-icon.png', 'This a photo of the country I am from', '0');



--  console.log(req.params);
--     const galleryId = req.params.id;
--     for(const galleryItem of galleryItems) {
--         if(galleryItem.id == galleryId) {
--             galleryItem.likes += 1;
--         }
--     }