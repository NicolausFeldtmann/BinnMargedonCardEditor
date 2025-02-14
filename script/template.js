function getCardTemplate(fracName, charName, tempo1, tempo2, tempo3, unit1, unit2, unit3, am1, am2, am3, lp1, lp2, lp3, waff1, waff2, waff3, waff4, waff5, waffName1, waffName2, waffName3, waffName4, waffName5, dc1, dc2, dc3, dc4, dc5, dc6, dc7, dc8, dc9, dc10, dc11, dc12, dc13, dc14, dc15, dc16, dc17, dc18, dc19, dc20, i) {

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
                    <div class="wepTabRow">
                        <img class="weaponIcon1" src="${waff1}">
                        <div class="weaponName">${waffName1}</div>
                            <div class="diceRow">
                            <img class="dice" src="${dc1}">
                            <img class="dice" src="${dc2}">
                            <img class="dice" src="${dc3}">
                            <img class="dice" src="${dc4}">
                        </div>
                    </div>
                    
                    <div class="wepTabRow">
                        <img class="weaponIcon1" src="${waff2}">
                        <div class="weaponName">${waffName2}</div>
                            <div class="diceRow">
                            <img class="dice" src="${dc5}">
                            <img class="dice" src="${dc6}">
                            <img class="dice" src="${dc7}">
                            <img class="dice" src="${dc8}">
                        </div>
                    </div>

                    <div class="wepTabRow">
                        <img class="weaponIcon2" src="${waff3}">
                        <div class="weaponName">${waffName3}</div>
                            <div class="diceRow">
                            <img class="dice" src="${dc9}">
                            <img class="dice" src="${dc10}">
                            <img class="dice" src="${dc11}">
                            <img class="dice" src="${dc12}">
                        </div>
                    </div>

                    <div class="wepTabRow">
                        <img class="weaponIcon2" src="${waff4}">
                        <div class="weaponName">${waffName4}</div>
                            <div class="diceRow">
                            <img class="dice" src="${dc13}">
                            <img class="dice" src="${dc14}">
                            <img class="dice" src="${dc15}">
                            <img class="dice" src="${dc16}">
                        </div>
                    </div>

                    <div class="wepTabRow">
                        <img class="weaponIcon2" src="${waff5}">
                        <div class="weaponName">${waffName5}</div>
                            <div class="diceRow">
                            <img class="dice" src="${dc17}">
                            <img class="dice" src="${dc18}">
                            <img class="dice" src="${dc19}">
                            <img class="dice" src="${dc20}">
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