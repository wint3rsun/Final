import React, { useState } from 'react';
import TopNav from "../../TopNav";
import Pet from "../../Pet";
import Footer from "../../Footer";
import "./myPets.scss";

export default function MyPets() {

  const animals = [
    {
    id: 1,
    name: "Coolca",
    description: "Shes popular, energetic, witty and perhaps a little too uncontrolled. But whatd you expect from somebody with her position. She was born in an average family in a normal village. She lived free of worries until she was about 13 years old, but at that point things began to change. She did volunteering work and was learning a lot of new skills. Through plenty of trial and error, she managed to thrive in a fantastic world. But with her intrepidness and sense of humor, theres nothing to stop her from reaching full potential. She could quickly become a force to be reckoned with. Despite all this success, she is currently searching for a higher purpose. She feels like theres more secrets than answers in this world. Luckily she has a close group of friends to support her",
    avatar_url: "https://img.freepik.com/free-vector/cute-cool-cat-wearing-glasses-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4268.jpg?w=1380&t=st=1659984340~exp=1659984940~hmac=03189393b79ea11880f7d0edd12ecf4ca3e0e47c126af239451f236ac0604c44",
    required_level: 0
    },
    {
    id: 2,
    name: "Stoneling",
    description: "He's dauntless, independent and malicious. But this is all just a facade, a mechanism to deal with his troubled past. He was born and grew up in a poor family in a wealthy capital, he lived comfortably until he was about 9 years old, but at that point everything changed. He lost his brothers in an invasion and was forsaken by all. Against all odds he had to survive in a bleak world. But with his persistance and vigor, he managed to conquer all fears and doubts and escape hell. This has turned him into the man he is today. After finally turning life around, he now works as help for hire. By doing so, he hopes to find answers to the events of the past and finally find stability and security he has never had",
    avatar_url: "https://img.freepik.com/free-vector/cute-shark-fish-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3791.jpg?w=1380&t=st=1659984658~exp=1659985258~hmac=3a48bf7eca939ce2cfc5b7538be8461292d31945f3646e1343e0fcdb23ca43e0",
    required_level: 1
    },
    {
    id: 3,
    name: "Sundaemon",
    description: "She's mysterious, arrogant and efficient. But there's more than meets the eye, not surprising for somebody with her horrifying past. She was born and grew up in a fairly rich family in a merchant community, she lived in peace until she was about 12 years old, but at that point things changed. She maimed somebody during a robbery gone wrong and was headed for a life of crime. While persued by the authority she had to survive in a rough world. But with her wisdom and bravery, she managed to find a new home and battle the elements. This has turned her into the woman she is today. Powerless to change the past, she now works on meeting new, kind people. By doing so, she hopes to find vengeance for the actions in the past and finally find joys and comforts of life she has never had.",
    avatar_url: "https://img.freepik.com/free-vector/cute-blue-tyrannosaurus-rex_138676-2073.jpg?w=1380&t=st=1659984655~exp=1659985255~hmac=bb915a55b6ffbd4484b0d056cb282ca23d9b09458b5eda30a2eb40d43a3bd3af",
    required_level: 3
    },
    {
    id: 4,
    name: "Hyenanana",
    description: "He's reliable, charming, daring and perhaps a little too greedy. But what'd you expect from somebody with his position. He was born in a loving family in a developing port. He lived free of trouble until he was about 17 years old, but at that point things began to change. He got an important job and was strengthening the relationship with both parents. Through plenty of trial and error, he is part of an adventure in a fantasy world. But with his persistence and cunning, there's nothing to stop him from going beyond expectations. He could quickly become a true inspiration for many. But anything could happen; he is currently looking for a place to truly call home. He feels like there's more to experience in this world. Luckily he has great parents to support him.",
    avatar_url: "https://img.freepik.com/free-vector/cute-baby-sleeping-cloud-pillow-cartoon-icon-illustration_138676-2812.jpg?w=1380&t=st=1659984882~exp=1659985482~hmac=78db6e141f9de175a4a44c325b2d4482ae39578d603004a4a0b7bad6dec8a886",
    required_level: 4
    },
    {
    id: 5,
    name: "FoolishPhantasm",
    description: "She's reliable, elegant, thoughtful and perhaps a little too foolish. This is to be expected from somebody with her position. She was born in an ordinary family in a developed city. She lived happily until she was about 16 years old, but at that point life changed. She started to travel the world and was gaining a little fame. By never giving up, she managed to thrive in a wild world. But with her wits and persistence, there's nothing to stop her from improving the world. She could quickly become a true inspiration for many. But who really knows what will happen; she is currently still learning, exploring and discovering. She feels like there's more than meets the eye in this world. Luckily she has great friends to support her.",
    avatar_url: "https://img.freepik.com/free-vector/cute-australian-shepherd_138676-2071.jpg?w=1380&t=st=1659984885~exp=1659985485~hmac=028b68e65372245efb1be89fba4aeed884f79baba914d7151dc070df07ea9734",
    required_level: 5
    },
    {
    id: 6,
    name: "Megangster",
    description: "He's just, sensitive, faithful and perhaps a little too facetious. This is to be expected from somebody with his position. He was born in a loving family in a major capital. He lived happily until he was about 19 years old, but at that point things changed. He got a new pet and was learning a new language. Alongside great friends, he is unstoppable in a fantasy world. But with his sense of humor and compassion, there's nothing to stop him from reaching great success. He could quickly become a true friend for life. But anything could happen; he is currently learning how to reach full potential. He feels like there's more to see, taste and experience in this world. Luckily he has wise teachers and great friends to support him.",
    avatar_url: "https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=1380&t=st=1659984917~exp=1659985517~hmac=a05b4822256d492eb9f5fb4ca4ad68d256deb09a610a8c4dd460350adc78ae15",
    required_level: 6
    },
    {
    id: 7,
    name: "Slayerk",
    description: "She's keen, greedy and precise. This isn't surprising considering for someone with her ugly past. She was born and grew up in a high class family in a poor city, she lived in peace until she was about 9 years old, but at that point things took a turn for the worst. She killed somebody during an epidemic and was headed for a life of misery. While persued by the authority she had to survive in a relentless world. But with her bravery and courage, she managed to go beyond expectations and reach full potential. This has turned her into the woman she is today.With a new chance at life, she now works a small job with low pay. By doing so, she hopes to find inner peace and finally find tranquility she has never had.",
    avatar_url: "https://img.freepik.com/free-vector/cute-panda-sipping-boba-milk-tea-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2173.jpg?w=1380&t=st=1659984910~exp=1659985510~hmac=281680750f07f382aa1a5570c1755b2dd9e869db6034042640895fb4a4c6fd59",
    required_level: 7
    },
    {
    id: 8,
    name: "MidnightBandit",
    description: "He's skillful, witty and vulgar. But there's more than meets the eye, not surprising for somebody with his disturbing past. He was born and grew up in a lower class family in a broken community, he lived without worry until he was about 14 years old, but at that point things took a turn for the worst. He lost his siblings in a freak fire and was forgotten by everybody. While obstructed by many he had to survive in a odd world. But with his charm and determination, he managed to survive everything and train to perfection. This has turned him into the man he is today. With the lessons of the past, he now works as a travelling gun for hire. By doing so, he hopes to start life over on a good note and finally find friends he has never had.",
    avatar_url: "https://img.freepik.com/free-vector/cute-sloth-yoga-cartoon-icon-illustration_138676-2250.jpg?w=1380&t=st=1659984904~exp=1659985504~hmac=5816f543d52022b6c5ec9320593542053fbd790aa81c49f5b92299b13bc9b2dd",
    required_level: 8
    },
    {
    id: 9,
    name: "KindHobbit",
    description: "She's driven, hospitable, intrepid and perhaps a little too nervous. This is to be expected from somebody with her position. She was born in a large family in an important town. She lived free of trouble until she was about 16 years old, but at that point things changed. She started working for the family company and was very successful. With determination and some luck, she is trying to reach the top in a outlandish world. But with her skills and compassion, there's nothing to stop her from staying ahead of the game. She could quickly become somebody who could change the world. But for now that's speculation; she is currently having fun with friends. She feels like there's more to enjoy in this world. Luckily she has wise teachers and great friends to support her.",
    avatar_url: "https://img.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_138676-2198.jpg?w=1380&t=st=1659984897~exp=1659985497~hmac=b7604d68059c9dca54f33f45c662c1ab12f7476bd99194ae8589a43759f6e4d1",
    required_level: 9
    },
    {
    id: 10,
    name: "Kegnome",
    description: "He's analytical, talkative, eager and perhaps a little too grouchy. But what'd you expect from somebody with his position. He was born in a small family in a merchant capital. He lived comfortably until he was about 18 years old, but at that point things began to change. He moved out and was learning how to cook in new styles. Having overcome plenty of obstacles, he boomed in a fantastic world. But with his talents and powers, there's nothing to stop him from accomplish all goals. He could quickly become somebody who could change the world. But things could change quickly; he is currently improving upon skills and talents. He feels like there's more than we know in this world. Luckily he has great parents to support him.",
    avatar_url: "https://img.freepik.com/free-vector/cute-unicorn-floating-with-balloon-cartoon-vector-icon-illustration_138676-2229.jpg?w=1380&t=st=1659984894~exp=1659985494~hmac=ef5a893e15eb5d8a281271a3822dddbf7060dd2f9bcb417e480b2f1e1b0c3d26",
    required_level: 10
    },
    {
    id: 11,
    name: "Votia",
    description: "Votia is an often praised and vastly glorified goddess. Snow, guidance and infinity are dominant elements this divine being is associated with and people tend to see her as disrespectful and obsessive. Often depicted as a somewhat humanoid cobra Votia is usually worshipped through oaths and gifts. There's a few main places for those in need of the wisdom of Votia, but natural altars and homemade shrines are preferred by most. Worshippers are quite numerous and tend to come in the form of teachers and the wealthy and these seem to be the only people aided by this goddess. Sometimes even when the right oaths and gifts are not met. Votia has no desire for lovers. This only helps focus the power Votia may provide, but even gods stand vulnerable when on their own.",
    avatar_url: "https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=1380&t=st=1659984892~exp=1659985492~hmac=9b0d19dfbc1bf12477b2686b34775dbe07a80dc7555c227500fdb60ddef0511c",
    required_level: 11
    }
    ]

  const [open, setOpen] = useState(true);

  return (
    <div onClick={() => setOpen(true)}>
      <TopNav />  
    <main>
      <section className="py-1 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Your Cats</h1>
            <p className="lead text-muted">Something short to descrbe the pet rules or something</p>
            <p>
              <a href="#" className="btn btn-primary my-2">some button</a>
            </p>
          </div>
        </div>
      </section>
    
      <div className="album py-5 bg-light">
        <div onClick={(e) => {
          e.stopPropagation();
        }} className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Pet pet={animals[0]}/>
            <Pet pet={animals[1]}/>
            <Pet pet={animals[2]}/>
            <Pet pet={animals[3]}/>
            <Pet pet={animals[4]}/>
            <Pet pet={animals[5]}/>
            <Pet pet={animals[6]}/>
            <Pet pet={animals[7]}/>
            <Pet pet={animals[8]}/>
            <Pet pet={animals[9]}/>
            <Pet pet={animals[10]}/>
          </div>
        </div>
      </div> 
    </main>

    <Footer/>
    
    </div>
  );
}