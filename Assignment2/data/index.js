
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

let myData =  [
    {
        "name": "Left Handed Fork",
        "short-description": "A four pronged fork for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy food-picker-upper, these special individuals can join in the life of finer things",
        "image-path": "/public/images/fork.jpg",
        "image-author": "Ursula Spaulding",
        "image-src": "https://unsplash.com/photos/bmxYEhqLVEk"
    },
    {
        "name": "Left Handed Spoon",
        "short-description": "One deep pocketed spoon for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy soup-scooper, these special individuals can join in the life of finer things",
        "image-path": "/public/images/spoon.jpg",
        "image-author": "Mira Bozhko",
        "image-src": "https://unsplash.com/photos/418PePb7SzE"
    },
    {
        "name": "Left Handed Knife",
        "short-description": "A superiorly serated for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy meat-divider, these special individuals can join in the life of finer things",
        "image-path": "/public/images/knife.jpg",
        "image-author": "Benjamin Faust",
        "image-src": "https://unsplash.com/photos/XLxhM6UH4pA"
    },
    {
        "name": "Left Handed Wine Glass",
        "short-description": "A perfectly balanced glass for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy drinking-vessel these special individuals can join in the life of finer things",
        "image-path": "/public/images/wine-glass.jpg",
        "image-author": "Elle Hughes",
        "image-src": "https://unsplash.com/photos/rYEUdOG2ves"
    },
    {
        "name": "Left Handed Scissors",
        "short-description": "A ergonomically designed paper shears",
        "long-description": "With special care considereed for the Left Handed Americans, these scissors are able to conform to the strict comfort requirements that define us, across all our products",
        "image-path": "/public/images/scissors.jpg",
        "image-author": "Annie Spratt",
        "image-src": "https://unsplash.com/photos/kJp3p5tH_QQ"

    },
    {
        "name": "Left Handed Can Opener",
        "short-description": "A durable and powerful tool to open tin cans ",
        "long-description": "When the cat is waiting for his food, there is no time to waste trying to get your uncoordinated right hand around a forgien right handed can opener",
        "image-path": "/public/images/can.jpg",
        "image-author": "Michael Walter",
        "image-src": "https://unsplash.com/photos/5PGinqrLDKk"
    },
    {
        "name": "Left Handed Spatula",
        "short-description": "A slick and springly pancake flipper",
        "long-description": "When it comes to breakfast, only the perfect flip will do for your flap-jacks. Everyone knows that there is zero room for error when there is a house full of hungry people expecting the best from the left handed spatula weilder",
        "image-path": "/public/images/spatula.jpg",
        "image-author": "chuttersnap",
        "image-src": "https://unsplash.com/photos/R9DeG1PnE9U"
    },
    {
        "name": "Left Handed Cork Screw",
        "short-description": "A convenient way to open wine",
        "long-description": "Those eager to get into a bottle don't deserver to dork around with dilusions of using difficult cork screws. The left handed cork screw allows you to get into the bottle without any drama",
        "image-path": "/public/images/cork.jpg",
        "image-author": "Elisha Terada",
        "image-src": "https://unsplash.com/photos/MDJvfXJGnRM"
    },
    {
        "name": "Left Handed Whisk",
        "short-description": "Beatting and Blendings for all",
        "long-description": "Perfectly fluffy omeletes should not be limited to those that are right-handed. The left handed whisk allows anyone to experience the joy that is a properly cooked omlete",
        "image-path": "/public/images/whisk.jpg",
        "image-author": "Bernard Tuck",
        "image-src": "https://unsplash.com/photos/NIAYlj9OWzM"
    },
    {
        "name": "Left Handed Sponge",
        "short-description": "No more excuses, you can clean too",
        "long-description": "The perfect gift for that relative that always disappears after a holiday dinner. They claim they can't help out due to the lack of left handed cleaning implements. This removes all excuses, everyone can clean",
        "image-path": "/public/images/clean.jpg",
        "image-author": "Jennifer Burk",
        "image-src": "https://unsplash.com/photos/wP9yLk_VKI8"
    }
]
myData = myData.map( (x) => {
    x.id = camelize(x.name);
    return x;
})
module.exports= myData;