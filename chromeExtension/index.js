// let boxButton = document.getElementById("box");

// boxButton.addEventListener("click", function(){
//     console.log("I want to open the box")
// });



const inputBtn = document.getElementById("input-btn")
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveAllBtn = document.getElementById("save-tab-btn");
// const tabs = [
//     {url: "https://www.linkedin.com/in/manjoshramesh"}
// ];
const key ="myleads";
const leadsFromLocalStorage = JSON.parse(localStorage.getItem(key));

let myLeads = [];

inputBtn.addEventListener("click", function () {
    saveLead(inputEl.value);
});

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

saveAllBtn.addEventListener("click",function(){
    //grab the url from chrome tab
    chrome.tabs.query({active :true, currentWindow :true},function(tabs){
        saveLead(tabs[0].url);
    })
})
if(leadsFromLocalStorage) {
    console.log(leadsFromLocalStorage);
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


function saveLead( value ) {
    myLeads.push( value);
    console.log(myLeads);
    inputEl.value="";
    persistInLocalStorage();
    render(myLeads);
}
function render(leads){
    let listItems="";
    for (let i =0 ; i < leads.length ;i++){
    //listItems += "<li><span>del</span><a target=\"_blank\" href=\""+lead+"\">"+ lead +"</a></li>";
    listItems += `<li>
                        <a target="_blank" href="${leads[i]}">
                            ${leads[i]}
                        </a>
                </li>`;
     //  ulEl.innerHTML += "<li>"+lead+"</li>";

      //create element
      //set text content
    //   //append to ul
    //   const li = document.createElement("li");
    //   li.textContent = lead;
    //   ulEl.append(li);
    }
    console.log(listItems);
    ulEl.innerHTML = listItems;
}

function persistInLocalStorage(){
    let value = JSON.stringify(myLeads);
    localStorage.setItem(key,value);
}

