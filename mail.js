function init(){

 var text = function makePhrases() {
 var words2 = ["Поздравляем с Днём защитника Отечества и хотим пожелать силы, мужества и отваги! <br> Пусть каждый день будет успешным, <br> Каждый поступок — достойным, <br> Каждая идея — отличной, <br> каждое слово — твёрдым, <br> А каждое действие — уверенным. <br> Желаем быть здоровым, любимым и непобедимым", 
	"С днем 23 Февраля <br> Мы поздравляем вас, друзья! <br> Желаем мира вечного <br> И счастья бесконечного. <br> Здоровья, силы духа, воли, <br> Любви, достатка в вашем доме, <br> В делах успеха и добра. <br> Сегодня Вам кричим: «Ура!»", 
	"Сегодня праздник важный — защитника Отечества. <br> Вы, смелые, отважные, примите поздравления. <br> Желаем чести, мужества, в делах — успеха, сил. <br> Чтобы каждый день спокойным был и радость приносил!", 
	"Пусть мягкие волны моря настоящего успеха, <br> Взаимной любви, полного благополучия, <br> Душевного спокойствия и истинного счастья <br> Ласково и нежно качают Вас по этой жизни, <br> Одаривая приятными сюрпризами в любой день, <br> И тем более — в праздники! <br> С 23 февраля!",
	"Коллеги дорогие, <br> Поздравить вас хочу! <br> Препятствия любые <br> Пусть будут по плечу! <br> <br>  И где бы ни шагали, <br> Пускай у вас внутри <br> Решительность пылает <br> И мужество горит!",
	"Поздравляем с Днем защитника Отечества <br> И от чистого сердца хотим пожелать <br> Сохранять спокойствие и уверенность в любой жизненной ситуации, <br> Совершать красивые и добрые поступки, <br> Беречь и крепко любить своих родных, <br> Заботиться о будущем и с успехом достигать больших высот!",
	"Страна своих героев знает <br> И в праздники не забывает. <br> И мы Вас тоже поздравляем, <br> Здоровья крепкого желаем. <br> Друзей достойных, уважения <br> И по карьере продвижения!",
	"Двадцать третье февраля <br> Стало праздником не зря — <br> В этот день традиционно <br> Вам желаем всенародно <br> Счастья, мира и удачи, <br> Радости, любви в придачу!",
];

 var rand2 = Math.floor(Math.random() * words2.length);

 var phrase =  words2[rand2];
 return phrase;
 }

 document.getElementById('generate').onclick = 
 function(){ document.getElementById('text').innerHTML = text();
document.getElementById("generate").style.visibility = "hidden";

 
 };
 
}
window.onload = init;