
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

let myData =  [
    {
        "name": "Left Handed fork",
        "short-description": "A four pronged fork for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy food-picker-upper, these special individuals can join in the life of finer things"
    },
    {
        "name": "Left Handed Spoon",
        "short-description": "One deep pocketed spoon for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy soup-scooper, these special individuals can join in the life of finer things"
    },
    {
        "name": "Left Handed Knife",
        "short-description": "A superiorly serated for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy meat-divider, these special individuals can join in the life of finer things"
    },
    {
        "name": "Left Handed Wine Glass",
        "short-description": "A perfectly balanced glass for lefties",
        "long-description": "Left handed Americans are exluded from fine dining no longer. With this specialtiy drinking-vessel these special individuals can join in the life of finer things"
    },
    {
        "name": "Left Handed Scissors",
        "short-description": "A ergonomically designed paper shears",
        "long-description": "With special care considereed for the Left Handed Americans, these scissors are able to conform to the strict comfort requirements that define us, across all our products"
    },
    {
        "name": "Left Handed Can Opener",
        "short-description": "A durable and powerful tool to open tin cans ",
        "long-description": "When the cat is waiting for his food, there is no time to waste trying to get your uncoordinated right hand around a forgien right handed can opener"
    },
    {
        "name": "Left Handed Spatula",
        "short-description": "A slick and springly pancake flipper",
        "long-description": "When it comes to breakfast, only the perfect flip will do for your flap-jacks. Everyone knows that there is zero room for error when there is a house full of hungry people expecting the best from the left handed spatula weilder"
    },
    {
        "name": "Left Handed Cork Screw",
        "short-description": "A convenient way to open wine",
        "long-description": "Those eager to get into a bottle don't deserver to dork around with dilusions of using difficult cork screws. The left handed cork screw allows you to get into the bottle without any drama"
    },
    {
        "name": "Left Handed Whisk",
        "short-description": "Beatting and Blendings for all",
        "long-description": "Perfectly fluffy omeletes should not be limited to those that are right-handed. The left handed whisk allows anyone to experience the joy that is a properly cooked omlete"
    },
    {
        "name": "Left Handed Sponge",
        "short-description": "No more excuses, you can clean too",
        "long-description": "The perfect gift for that relative that always disappears after a holiday dinner. They claim they can't help out due to the lack of left handed cleaning implements. This removes all excuses, everyone can clean"
    }
]
myData = myData.map( (x) => {
    x.id = camelize(x.name);
    return x;
})
module.exports= myData;