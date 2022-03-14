let btn = document.getElementById ('btn');
let output = document.getElementById ('output');
let quotes = 
[
    'Gandalf “A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.”',
    'Gandalf “He that breaks a thing to find out what it is, has left the path of wisdom.”',
    'Gandalf “When in doubt, follow your nose.”',
    'Gandalf “Death is just another path, one that we all must take.”',
    'Gandalf “The burned hand teaches best. After that, advice about fire goes to the heart.”',
    'Gandalf “All you have to decide is what to do with the time that is given to you.”',
    'Sam “It’s the job that’s never started as takes longest to finish.”',
    'Sam “There’s some good in this world, Mr. Frodo… and it’s worth fighting for.”',
    'Sam “Potatoes. Boil ’em, mash ’em, stick ’em in a stew.”',
    'Sam “I can’t carry it for you, but I can carry you.”',
    'Sam “Do you remember the taste of strawberries?”',
    'Sam “I made a promise, Mr. Frodo. A promise. ‘Don’t you leave him, Samwise Gamgee.’ And I don’t mean to. I don’t mean to.”',
    'Aragorn “A hunted man sometimes wearies of distrust and longs for friendship.”',
    'Aragorn “I WOULD HAVE GONE WITH YOU TO THE END, INTO THE VERY FIRES OF MORDOR.”',
    'Aragorn “IF BY MY LIFE OR DEATH I CAN PROTECT YOU, I WILL. YOU HAVE MY SWORD.”',
    'Aragorn “THERE IS ALWAYS HOPE.”',
    'Gimli “Memory is not what the heart desires. That is only a mirror.”',
    'Gimli “Let Them Come! There Is One Dwarf Yet In Moria Who Still Draws Breath!”',
    'Gimli "Well, This Is A Thing Unheard Of! An Elf Will Go Underground, Where A Dwarf Dare Not? Ohhhh! Oh, Id Never Hear The End Of It!"',
    'Boromir “It is a strange fate that we should suffer so much fear and doubt over so small a thing … such a little thing.”',
    'Sauron “You can not hide, I see you! There is no life after me. Only death!”',
    'Legolas “THEY’RE TAKING THE HOBBITS TO ISENGARD.”',
    'Legolas “A RED SUN RISES. BLOOD HAS BEEN SPILLED THIS NIGHT.”',
    'Legolas “THIS FOREST IS OLD. VERY OLD. FULL OF MEMORIES...AND ANGER.”',
    'Legolas “WHAT ABOUT [DYING] SIDE BY SIDE WITH A FRIEND?”',
    'Legolas “SHALL I DESCRIBE IT TO YOU? OR WOULD YOU LIKE ME TO FIND YOU A BOX?”'
];

 btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML =randomQuote;
})
