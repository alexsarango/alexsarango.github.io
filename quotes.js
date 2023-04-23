const quotes = [{
    quote: '"Try again, fail again. Fail better."',
    writer: 'Samuel Beckett'
}, {
    quote: '"The belief in a supernatural source of evil is not necessary. Men alone are quite capable of every wickedness."',
    writer: 'Joseph Conrad'
}, {
    quote: '"Nothing is so common as the wish to be remarkable."',
    writer: 'William Shakespeare'
}, {
    quote: '"What we do for ourselves dies with us. What we do for others and the world remains and is immortal."',
    writer: 'Albert Pine'
}, {
    quote: '"Although the world is full of suffering, it is also full of overcoming it."',
    writer: 'Helen Keller'
}, {
    quote: '"There can be no good without evil."',
    writer: 'Russian proverb'
}, {
    quote: '"Out of suffering have emerged the strongest souls. The most massive characters are seared with scars."',
    writer: 'Khalil Gibran'
}, {
    quote: '"Hope is the thing with feathers, that perches in the soul, and sings the tune without the words, and never stops at all."',
    writer: 'Emily Dickinson'
}, {
    quote: '"And yet to every bad there is a worse."',
    writer: 'Thomas Hardy'
}, {
    quote: '"Find the place inside where there is joy, and the joy will burn out the pain."',
    writer: 'Joseph Campbell'
}, {
    quote: '"To the living, we owe respect. But to the dead, we owe only the truth."',
    writer: 'Voltaire'
}, {
    quote: '"The universe does not like the secrets. It conspires to reveal the truth to lead you to it."',
    writer: 'Lisa Unger'
}, {
    quote: '"When you look into an abyss...the abyss looks into you."',
    writer: 'Nietzsche'
}, {
    quote: '"Your memory is a monster. It summons with will of its own. You think you have a memory but it has you."',
    writer: 'John Irving'
}, {
    quote: '"The world will not be destroyed by those who do evil, but by those who watch without doing anything."',
    writer: 'Albert Einstein'
}, {
    quote: '"Life is about choices. Some we regret. Some we’re proud of. We are what we choose to be."',
    writer: 'Graham Brown'
}, {
    quote: '"The world is so unpredictable. Things happen suddenly, unexpectedly. We want to feel we’re in control of our own existence. In some ways we are, in some ways we’re not. We are ruled by the forces of chance and coincidence."',
    writer: 'Paul Auster'
}, {
    quote: '"We all have a monster within; the difference is in degree, not in kind."',
    writer: 'Douglas Preston'
}]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})