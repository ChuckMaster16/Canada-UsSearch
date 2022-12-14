const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//will search the state.json file for the excisting states and filter the city and states
const searchStates = async searchText => {
  const res = await fetch('../data/states.json');
  const states = await res.json();

//get matches to current text input
let matches = states.filter(state => {
  const regex =  new RegExp(`^${searchText}`, 'gi');
  return state.name.match(regex) || state.abbr.match(regex);
 });

//when the input is zero or less nothing gets displayed
 if (searchText.length === 0){
   matches=[];
   matchList.innerHTML='';
 }
console.log(matches)
outputHtml(matches);
};
//show results on the html Page
const outputHtml = matches => {
  if(matches.length > 0) {
    const html = matches.map(
      match =>`
      <div  class="card card-body mb-1">
      <h4> ${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span><span class="text-success"> ${match.Country}</span></h4>
      <small>Lat:${match.lat} / Long: ${match.long}</small>
      </div>
      `
    ).join('');
      // console.log(html);
      matchList.innerHTML = html;
  }
};
search.addEventListener("input", ()=> searchStates(search.value))
;





















function hi(){
  console.log("hello there java")
}
hi();
