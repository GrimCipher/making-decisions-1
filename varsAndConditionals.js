let jonSnowAttack = 25
let jamieLannisterAttack = 35

let jonSnowHealth = 100
let jonSnowDefense = 0

// if (jonSnowAttack > jamieLannisterAttack){
//     console.log('jonSnow Wins')
// }else if (jonSnowAttack < jamieLannisterAttack)
// {console.log('jamie Wins')}
// else {console.log(`they are equal's`)
// }

jonSnowDefense += 10

// if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
//     console.log('jonSnow has died')
// } else{
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//      console.log('jonSnow is hurt but still ready for a fight')
//      console.log(jonSnowHealth)
// }

if(jonSnowHealth + 50 > 100){
     jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

// let coinLandsHead = true

// if(!coinLandsHead){
//     console.log('the fight goes on')
// } else {
    // console.log('jon finds time to heal')
// }

// for(let i = 0; i < 5; i++){
//     if(jonSnowHealth <= 0){
//         console.log('jon has died')
//     } else {
//         jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//         console.log(`jon Snow's health is reduced to ${jonSnowHealth}`)
//     }
// }

// while(jonSnowHealth > 0){
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(`jon snow's health is ${jonSnowHealth}`)
//     if(jonSnowHealth <= 0){
//         console.log(`jon has died`)
//     }
// }