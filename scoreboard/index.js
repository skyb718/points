let hScoreEl = document.getElementById('h_score')
let gScoreEl = document.getElementById('g_score')
let h_score = 0
let g_score = 0
function hpoint1() {
    h_score += 1
    hScoreEl.innerText = h_score
}
function hpoint2(){
    h_score += 2
    hScoreEl.innerText = h_score
}
function hpoint3(){
    h_score += 3
    hScoreEl.innerText = h_score
}
function gpoint1(){
    g_score += 1
    gScoreEl.innerText = g_score
}
function gpoint2(){
    g_score += 2
    gScoreEl.innerText = g_score
}
function gpoint3(){
    g_score += 3
    gScoreEl.innerText = g_score
}