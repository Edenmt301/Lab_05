/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

const All_collections= document.querySelectorAll(".collection")
const location_items=All_collections[0]
const browser_items=All_collections[1]
const screen_items=All_collections[2]
const browsing_history_items=All_collections[3]

first=location_items.children
first[0].firstElementChild.innerHTML=location.href
first[1].firstElementChild.innerHTML=location.protocol
first[2].firstElementChild.innerHTML=location.host
first[3].firstElementChild.innerHTML=location.port
first[4].firstElementChild.innerHTML=location.hostname

second=browser_items.children
second[0].firstElementChild.innerHTML=navigator.appName
second[1].firstElementChild.innerHTML=navigator.appVersion
second[2].firstElementChild.innerHTML=navigator.platform
second[3].firstElementChild.innerHTML=navigator.language
second[4].firstElementChild.innerHTML=navigator.cookieEnabled

third=screen_items.children
third[0].firstElementChild.innerHTML=screen.height
third[1].firstElementChild.innerHTML=screen.width
third[2].firstElementChild.innerHTML=screen.pixelDepth

fourth=browsing_history_items.children
fourth[0].firstElementChild.innerHTML=history.length
fourth[1].firstElementChild.innerHTML=history.state

// Display the BOM Information on the innerHTML of the elements