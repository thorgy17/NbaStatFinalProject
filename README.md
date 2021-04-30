# NbaStatFinalProject

<h1>About the site </h1>
<p>In this repository you will find access to an application that has the ease of bringing all of the current NBA rankings including rookie of the year,
defensive player of the year and the most valuable player rankings at the click of a button. The purpose of this site is to bring all of these items
together into one convienient place so a user will not have to go an find these rankings across multiple websites. The application also includes the use 
of the "Api-NBA" (https://rapidapi.com/api-sports/api/api-nba?endpoint=5bb76a6ce4b085e3f4087c6d) api for retrieval of relevant player info that is also
included in the websites capabilities. The user has the capability of accessing players date of birth, age, height, weight, team, seasons active, jersey number
and other relevant facts about any player just by searching them by their first or last name and clicking either the first name results or last name results button
to initiate this search and display the info.

<p> Other features includes beginning the user starting on the starting page "Entrance to the stats kingdom" and are met with the question who is the basketball goat?
Answering this question with any player will grant the access button but the correct answer is "Lebron" or "Lebron James" because he is indeed the Greatest Of All Time.
The main page will then be accessed once the enter button is clicked and directions on how to use the site are displayed along with the current league leaders 
for all of the common NBA statistics (PPG, APG, RPG, SPG and BPG). Each button on the site is where the functionality of displaying each desired piece of info lies and 
is what allows for the ease of use of this website. Currently it is tough to find a site that brings together all of these aspects on one page which is what this site
aims to accomplish.

<h1> Directions on Use: </h1>

<p> Begin on the html file MainScreen.html which includes links to the main page of use. Once this html file is run the user may access the main site by inputting the 
"correct" player that will allow access to the site; entering a player like Michael Jordan will work. Once the user hits enter they will be brought to the Nba.html
page which includes the 5 buttons and a search bar to search for players and their stats. To search a player, either input their first or last name (using both first 
and last name does not currently work with the Api) and click the corresponding result button: click result by first name if first name is entered and result
by last name if last name is entered. To display MVP, DPOY and ROY simply click any of the buttons and the previous box displayed will be hidden. 

<h1> About the code: </h1>
<p> The entire program contains 2 html files, 2 css files that correspond with the html files and 2 javascript files to correspond with their respective html files.
the MainScreen html, css and javascript files, while limited, include code to display a starting page with a text box, text and a hidden enter button into the main
site that is then displayed when the user inputs text into the text box and submits this. Submission and text box validating is completing via JS functionality.

<p> For the main site: Nba.html and its respective css and javascript files includes html that displays the main header with 5 buttons, a text box and directions
for use, and another section for the league leaders stats. Javascript functionality allows the first name and last name result buttons to use fetch() to access
the stats api and search for the inputted player in the textbox and javascript will also use innerHTML to display these results in the corresponding box. Each box
when displayed via the click of a button will be unhidden when the class name "hidden" is removed with the javascript via the various display functions written.
Other functions in the JS include functions that will spawn the images via createElement() in the leage leaders, MVP, DPOY and ROY boxes and functions are also
used to clear those images so they do not continuously spawn each time the button is clicked. Functions are also added to hide boxes that are not in use (for
example when the MVP box is displayed every other box is then hidden and vice versa) with classlist.remove and classlist.add being utilized here. Some helper functions
like id and qs are created to make document.getelementbyID or document.queryselector are created for cleaner code as well as a checkStatus function for cleaner
fetch function. A small set of code is used for the API in the fetch() to handle the API by including the key to access the API as well as the host link; following
this code is a straightforward promise and catch set up in both makeRequest functions. All JavaScript code is unobtrusive.

<p> Finally the CSS on both pages allows for a clean interface with the starting page including a gate as the background to create this idea that the user
is entering the stat kingdom (background is set to be a picture using CSS) and CSS is also used to center all text on the page for a cleaner starting page
interface. For the main stats page a gif is used as the background via CSS background capabilities and other CSS additions include centering all text, adding 
borders to each box displayed on the page as well as coloring the text and section backgrounds accordinly to match the theme. The goal of the UI design with 
CSS was to create a unique and vibrant look that accompanied the simple yet effective website functionalities. 

<h1> Sources: </h1>

https://www.nba.com (Used to gather league leader info, MVP, DPOY and ROY data)

https://rapidapi.com/api-sports/api/api-nba?endpoint=5bb76a6ce4b085e3f4087c6d (API used for stat retrieval)

Images:
https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bradley_Beal_2020.jpg/1200px-Bradley_Beal_2020.jpg
https://sportshub.cbsistatic.com/i/r/2021/04/27/f92c1721-81ec-4c62-a513-b016297f8a87/thumbnail/1200x675/70045b164dccab775301397e7ce004c2/russell-westbrook.jpg
https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2021/01/GettyImages-1294689785.jpg
https://media.gq.com/photos/5f57b3f8b356afdae15b0ea3/1:1/w_2656,h_2656,c_limit/GQ-JimmyButler-090820.jpg
https://www.gannett-cdn.com/presto/2018/12/31/PIND/80a825f2-33c2-4c5e-9152-2053898c3ce9-PacersHawks_RS_18.jpg

https://upload.wikimedia.org/wikipedia/commons/7/7e/Nikola_Jokic_free_throw_%28cropped%29.jpg
https://cdn.nba.com/manage/2020/10/GettyImages-1227898076-784x491.jpg
https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1067,w_1600/http%3A%2F%2Fhoopshabit.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1204260032.jpeg
https://cdn.vox-cdn.com/thumbor/LY09hfXQ3lEVUCD6zI9zt35S2ko=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22337179/1231385418.jpg
https://s.yimg.com/ny/api/res/1.2/cPHxvzMISLE4eEwgs5uBhA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-04/6a4139f0-a6f5-11eb-bde6-fdc37ad5e21f

https://sportshub.cbsistatic.com/i/r/2021/03/19/7c4f7c15-4fc3-4a30-a741-3017f9741f96/thumbnail/1200x675/06cfca78e9cb3f97ed29196700a55270/untitled-design-2021-03-19t134623-667.png
https://sportshub.cbsistatic.com/i/r/2020/02/25/5688bf1d-4c3d-4d92-8e55-62dbba75ef27/thumbnail/1200x675/25d728ad2e30f9c4f00be4b4856502d4/ben-simmons-2.jpg
https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNjM5MjM2OTY4NDI0NTM2/bam-adebayo-heat-defender.jpg
https://www.gannett-cdn.com/presto/2018/12/31/PIND/80a825f2-33c2-4c5e-9152-2053898c3ce9-PacersHawks_RS_18.jpg

https://pbs.twimg.com/profile_images/1196886549243154432/DOAmZ1LH_400x400.jpg
https://cdn.nba.com/manage/2021/01/GettyImages-1230201611-scaled-e1609532009825-784x492.jpg
https://images.rivals.com/image/upload/f_auto,q_auto,t_large/shbjqio0y3xtehvk7ly8
https://ewscripps.brightspotcdn.com/18/98/3087731447399d4a7e45add46ca1/ap21043134109294.jpg






