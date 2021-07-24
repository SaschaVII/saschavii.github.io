// Variables
const card1 = [0, 0];
const card2 = [0, 0];
const card3 = [0, 0];
const card4 = [0, 0];
const missingCard = [0, 0];

function buttonClicked() {
	var selectNum1 = document.getElementById("number1");
	var selectNum2 = document.getElementById("number2");
	var selectNum3 = document.getElementById("number3");
	var selectNum4 = document.getElementById("number4");

	var selectSuit1 = document.getElementById("suit1");
	var selectSuit2 = document.getElementById("suit2");
	var selectSuit3 = document.getElementById("suit3");
	var selectSuit4 = document.getElementById("suit4");

	card1[0] = parseInt(selectNum1.value);
	card1[1] = parseInt(selectSuit1.value);

	card2[0] = parseInt(selectNum2.value);
	card2[1] = parseInt(selectSuit2.value);

	card3[0] = parseInt(selectNum3.value);
	card3[1] = parseInt(selectSuit3.value);

	card4[0] = parseInt(selectNum4.value);
	card4[1] = parseInt(selectSuit4.value);

	getMissingCard();
}

function getMissingCard(){
	// determine suit based on card 4 suit
	missingCard[1] = card4[1];

	// determine number based on code from arrangment of card 1-3
	var order = [card1, card2, card3];
	var determiner = 0;
	var cardCount = 0;

	var card1Value = card1[0]*10 + card1[1];
	var card2Value = card2[0]*10 + card2[1];
	var card3Value = card3[0]*10 + card3[1];


	if (card1Value > card2Value && card1Value > card3Value){
		if (card2Value > card3Value){
			determiner = 210;
		} else {
			determiner = 201;
		}
	} else if (card2Value > card1Value && card2Value > card3Value) {
		if (card1Value > card3Value){
			determiner = 120;
		} else {
			determiner = 21;
		}
	} else if (card3Value > card1Value && card3Value > card2Value) {
		if (card1Value > card2Value){
			determiner = 102;
		} else {
			determiner = 12;
		}
	}

	switch(determiner) {
		case 12:
		    cardCount = 1;
		    break;
		case 21:
		    cardCount = 2;
		    break;
		case 102:
		    cardCount = 3;
		    break;
		case 120:
		    cardCount = 4;
		    break;
		case 201:
		    cardCount = 5;
		    break;
		case 210:
		    cardCount = 6;
		    break;
	  	default:
	    	console.log("input card selection not possible");
	}

	missingCard[0] = card4[0] + cardCount;
	console.log("Determined missing card is: " + missingCard[0] + " " + missingCard[1]);

	getCardStrings(missingCard[0], missingCard[1]);
}

function getCardStrings(inputCardNum, inputCardSuit){
	var cardNum = "0";
	var cardSuit = "0";

	if(inputCardNum > 12) {inputCardNum -= 12;}
	switch(inputCardNum) {
		case 0:
			cardNum = "2";
			break;
		case 1:
			cardNum = "3";
			break;
		case 2:
			cardNum = "4";
			break;
		case 3:
			cardNum = "5";
			break;
		case 4:
			cardNum = "6";
			break;
		case 5:
			cardNum = "7";
			break;
		case 6:
			cardNum = "8";
			break;
		case 7:
			cardNum = "9";
			break;
		case 8:
			cardNum = "10";
			break;
		case 9:
			cardNum = "Jack";
			break;
		case 10:
			cardNum = "Queen";
			break;
		case 11:
			cardNum = "King";
			break;
		case 12:
			cardNum = "Ace";
			break;
		default:
			console.log("ERROOOOOOR!");
	}

	switch(inputCardSuit) {
		case 0:
			cardSuit = "&clubs;";
			break;
		case 1:
			cardSuit = "&diams;";
			break;
		case 2:
			cardSuit = "&hearts;";
			break;
		case 3:
			cardSuit = "&spades;";
			break;
		default:
			console.log("ERROOOOOOR!");
	}

	document.getElementById("txt1").innerHTML = cardNum;
	document.getElementById("txt2").innerHTML = cardSuit;
}