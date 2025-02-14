function getCardTemplate(fracName, charName, tempo1, tempo2, tempo3, unit1, unit2, unit3, am1, am2, am3, lp1, lp2, lp3, waff1, waff2, waff3, waff4, waff5, waffName1, waffName2, waffName3, waffName4, waffName5, dc1, dc2, dc3, dc4, dc5, dc6, dc7, dc8, i) {

    return `
        <div class="card">
            <div class="cardContent">
                <div class="cardHead">
                    <h2>${fracName}</h2>
                    <h3>${charName}</h3>
                </div>
                <table>
                    <tr class="fracProp">
                        <td class="uniName">${unit1}</td>
                        <td class="amor">Amor: ${am1}</td>
                        <td class="LP">LP: ${lp1}</td>
                        <td class="speed">Speed: ${tempo1}</td> 
                    </tr>
                </table>
                <div class="weapons">
                    <h4>WAFFEN</h4>
                </div>
                <div class="weaponTable">
                    <div class="wepTabRow1">
                        <img class="weaponIcon1" src="${waff1}">
                        <div class="weaponName">${waffName1}</div>
                            <div class="diceRow1">
                            <img class="dice" src="${dc1}">
                            <img class="dice" src="${dc2}">
                            <img class="dice" src="${dc3}">
                            <img class="dice" src="${dc4}">
                        </div>
                    </div>
                    
                    <div class="wepTabRow2">
                        <img class="weaponIcon2" src="${waff2}">
                        <div class="weaponName">${waffName2}</div>
                            <div class="diceRow1">
                            <img class="dice" src="${dc5}">
                            <img class="dice" src="${dc6}">
                            <img class="dice" src="${dc7}">
                            <img class="dice" src="${dc8}">
                        </div>
                    </div>
                    
                </div>
                <div class="spcRuleCont">
                    <table>
                        <tbody class="ruleArea"></tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}