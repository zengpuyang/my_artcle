var plaintext=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var cipher=['d','g','f','h','b','u','l','a','e','p','q','r','j','x','m','y','n','w','i','k','c','z','o','v','s','t'];
var example='As we have read from above, quitting-smoking seems easy, but in reality it is rarely achieved. There is something provoking and interesting in this paradox, just because sword does not wear the stone as dripping water does.  The ability to do something over and over again in a short time may imply its easiness, but in a long run, a lifetime maybe, things turn out to be quite the opposite. Also, as is often the case, one may have obtained all the tools and opportunities to achieve something, but in the end they still fail due to the will shortage.  So how could we avoid the dilemma? Here is the prime condition of success: will and perseverance. Concentrate you energy, thought and mind exclusively on the business in which you are engaged, hang on in there and be patient, for, as Emerson put it, no one can cheat you out of your ultimate success but yourself.';
var e=_.chain(example.split('')).map(function(parameter){
    var index=plaintext.indexOf(parameter.toLowerCase());
        if(index>-1){
        return( cipher[index])
    }
        else{return parameter}})
    .reduce(function(parameter1, parameter2){ return parameter1 + parameter2; }, '')
    .value(console.log(e));



_.chain(e)
    .split('')
    .groupBy()
    .value();