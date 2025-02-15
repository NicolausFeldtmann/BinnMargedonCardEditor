function init() {
    renderCards();
    renderBackSide();
}

function renderCards() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
        for (let i = 0; i < dataCard.length; i++) {
            let fracName = dataCard[i].fraction;
            let charName = dataCard[i].name;
            let waff1 = dataCard[i].weapon1;
            let waff2 = dataCard[i].weapon2;
            let waff3 = dataCard[i].weapon3;
            let waff4 = dataCard[i].weapon4;
            let waff5 = dataCard[i].weapon5;
            let waffName1 = dataCard[i].weapName1;
            let waffName2 = dataCard[i].weapName2;
            let waffName3 = dataCard[i].weapName3;
            let waffName4 = dataCard[i].weapName4;
            let waffName5 = dataCard[i].weapName5;
            let dc1 = dataCard[i].dice1;
            let dc2 = dataCard[i].dice2;
            let dc3 = dataCard[i].dice3;
            let dc4 = dataCard[i].dice4;
            let dc5 = dataCard[i].dice5;
            let dc6 = dataCard[i].dice6;
            let dc7 = dataCard[i].dice7;
            let dc8 = dataCard[i].dice8;
            let dc9 = dataCard[i].dice9;
            let dc10 = dataCard[i].dice12;
            let dc11 = dataCard[i].dice11;
            let dc12 = dataCard[i].dice11;
            let dc13 = dataCard[i].dice12;
            let dc14 = dataCard[i].dice14;
            let dc15 = dataCard[i].dice15;
            let dc16 = dataCard[i].dice16;
            let dc17 = dataCard[i].dice17;
            let dc18 = dataCard[i].dice18;
            let dc19 = dataCard[i].dice19;
            let dc20 = dataCard[i].dice20;
            contentRef.innerHTML += getCardTemplate(fracName, charName, waff1, waff2, waff3, waff4, waff5, waffName1, waffName2, waffName3, waffName4, waffName5, dc1, dc2, dc3, dc4, dc5, dc6, dc7, dc8,dc9, dc10, dc11, dc12, dc13, dc14, dc15, dc16, dc17, dc18, dc19, dc20, i);
        }
}

function renderBackSide() {
    let contentRef = document.getElementById('backSide');
    contentRef. innerHTML += "";
    for (let i = 0; i < dataCard.length; i++) {
        let fracName = dataCard[i].fraction;
        let charName = dataCard[i].name;
        let unit1 = dataCard[i].unitType1;
        let unit2 = dataCard[i].unitType2;
        let unit3 = dataCard[i].unitType3;
        let tempo1 = dataCard[i].tempo1;
        let tempo2 = dataCard[i].tempo2;
        let tempo3 = dataCard[i].tempo3;
        let am1 = dataCard[i].amor1;
        let am2 = dataCard[i].amor2;
        let am3 = dataCard[i].amor3;
        let lp1 = dataCard[i].LP1;
        let lp2 = dataCard[i].LP2;
        let lp3 = dataCard[i].LP3;
        contentRef.innerHTML += getBacksideTemplate(fracName, charName, unit1, unit2, unit3, tempo1, tempo2, tempo3, am1, am2, am3, lp1, lp2, lp3)
        const ruleArea = document.getElementsByClassName('ruleArea');
        for (let j = 0; j < dataCard[i].rulz.length; j++) {
            ruleArea[i].innerHTML += `
            <tr class="rule">
                <td class="ruleTitel"><b>${dataCard[i].rulz[j].sonderRegel}:</b></td>
                <td class="ruleCnt">${dataCard[i].rulz[j].regelInhalt}</td>
            </tr>`;
        }
    }
}