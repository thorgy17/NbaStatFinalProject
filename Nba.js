(function() {
    "use strict"
    //Functionality added for button click functions to work on window load
    window.onload = function (){
        addPics();
        let FnBtn = id("FnBtn");
        FnBtn.onclick = revealFnBox;
        let LnBtn = id("LnBtn");
        LnBtn.onclick = revealLnBox;
        let MvpBtn = id("MvpBtn");
        MvpBtn.onclick = revealMvpBox;
        let DpoyBtn = id("DpoyBtn");
        DpoyBtn.onclick = revealDpoyBox;
        let RoyBtn = id("RoyBtn");
        RoyBtn.onclick = revealRoyBox;
    }
    //Allows for First name stats box to be displayed when first name results button is clicked
    function revealFnBox(){
        let Fn = id("Fn");
        let Ln = id("Ln");
        let Mvp = id("Mvp");
        let Roy = id("Roy");
        let Dpoy = id("Dpoy");
        Fn.classList.remove('hidden');
        Ln.classList.add('hidden')
        Mvp.classList.add('hidden')
        Roy.classList.add('hidden')
        Dpoy.classList.add('hidden')
        //Each box that is not in use is hidden when button is clicked
        makeRequestFN();
        // Request function that pulls data for first name of player entered when button is clicked following user input
    }
    function revealLnBox(){
        let Fn = id("Fn");
        let Mvp = id("Mvp");
        let Roy = id("Roy");
        let Dpoy = id("Dpoy");
        let Ln = id("Ln");
        Ln.classList.remove('hidden');
        Fn.classList.add('hidden');
        Mvp.classList.add('hidden');
        Roy.classList.add('hidden');
        Dpoy.classList.add('hidden');
        //Each box that is not in use is hidden when button is clicked
        makeRequestLN();
        // Request function that pulls data for last name of player entered when button is clicked following user input
    }
    function revealMvpBox(){
        let Fn = id("Fn");
        let Ln = id("Ln");
        let Roy = id("Roy");
        let Dpoy = id("Dpoy");
        let Mvp = id("Mvp");
        Mvp.classList.remove('hidden');
        Ln.classList.add('hidden')
        Fn.classList.add('hidden')
        Roy.classList.add('hidden')
        Dpoy.classList.add('hidden')
        //Each box that is not in use is hidden when button is clicked
        fillMvpPics();
        //Pictures of MVP candidates are displayed when function is called after button click
    }
    function revealDpoyBox(){
        let Fn = id("Fn");
        let Ln = id("Ln");
        let Mvp = id("Mvp");
        let Roy = id("Roy");
        let Dpoy = id("Dpoy");
        Dpoy.classList.remove('hidden');
        Ln.classList.add('hidden')
        Mvp.classList.add('hidden')
        Roy.classList.add('hidden')
        Fn.classList.add('hidden')
        //Each box that is not in use is hidden when button is clicked
        fillDpoyPics();
        //Pictures of DPOY candidates are displayed when function is called after button click
    }
    function revealRoyBox(){
        let Fn = id("Fn");
        let Ln = id("Ln");
        let Mvp = id("Mvp");
        let Dpoy = id("Dpoy");
        let Roy = id("Roy");
        Roy.classList.remove('hidden');
        Ln.classList.add('hidden')
        Mvp.classList.add('hidden')
        Fn.classList.add('hidden')
        Dpoy.classList.add('hidden')
        //Each box that is not in use is hidden when button is clicked
        fillRoyPics();
        //Pictures of ROY candidates are displayed when function is called after button click
    }

    function addPics(){
        //List of images are used to iterate through and create image elements for each image upon window load or function call
        let imgList = ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bradley_Beal_2020.jpg/1200px-Bradley_Beal_2020.jpg',
            'https://sportshub.cbsistatic.com/i/r/2021/04/27/f92c1721-81ec-4c62-a513-b016297f8a87/thumbnail/1200x675/70045b164dccab775301397e7ce004c2/russell-westbrook.jpg',
            'https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2021/01/GettyImages-1294689785.jpg',
            'https://media.gq.com/photos/5f57b3f8b356afdae15b0ea3/1:1/w_2656,h_2656,c_limit/GQ-JimmyButler-090820.jpg',
            'https://www.gannett-cdn.com/presto/2018/12/31/PIND/80a825f2-33c2-4c5e-9152-2053898c3ce9-PacersHawks_RS_18.jpg']
        //Each link is iterated through and an image element is added for each image along with appending each image to corresponding div
        for(let i = 0;i<imgList.length;i++){
            let imgPath = imgList[i];
            let img = document.createElement("img");
            img.src = imgPath;
            id("leaderPics").appendChild(img);
        }
    }

    function showResultFN(response){
        id('Fn').innerHTML = response
    }
    function showResultLN(response){
        id('Ln').innerHTML = response
    }
    //Show result functions are used to add JSON response from API into corresponding web page boxes to be displayed


    function makeRequestFN() {

        let userInput = qs("input").value;
        //The fetch method used here includes a strict format prior to the promise in order to retrieve from specific API
        //i.e the inclusion of the rapidapi key and rapidapi host as headers
        fetch("https://api-nba-v1.p.rapidapi.com/players/firstName/" + userInput, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a3d2029d34msh079703dc80c85c1p1596a9jsn11fcf1476416",
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
            }
        })
            .then(checkStatus)
            .then(showResultFN)
            .catch(function Error(error){
                alert("Error during fetch occurred")
            });

    }
    function makeRequestLN() {

        let userInput = qs("input").value;
        //The fetch method used here includes a strict format prior to the promise in order to retrieve from specific API
        //i.e the inclusion of the rapidapi key and rapidapi host as headers
        fetch("https://api-nba-v1.p.rapidapi.com/players/lastName/" + userInput, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a3d2029d34msh079703dc80c85c1p1596a9jsn11fcf1476416",
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
            }
        })
            .then(checkStatus)
            .then(showResultLN)
            .catch(function Error(error){
                alert("Error during fetch occurred")
            });

    }

    function fillMvpPics(){
        //Box must be cleared each time function is called so images do not continuously display over and over again
        id("MvpPics").innerHTML = ''
        //List of images are used to iterate through and create image elements for each image upon window load or function call
        let imgList = ['https://upload.wikimedia.org/wikipedia/commons/7/7e/Nikola_Jokic_free_throw_%28cropped%29.jpg',
            'https://cdn.nba.com/manage/2020/10/GettyImages-1227898076-784x491.jpg',
            'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1067,w_1600/http%3A%2F%2Fhoopshabit.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1204260032.jpeg',
            'https://cdn.vox-cdn.com/thumbor/LY09hfXQ3lEVUCD6zI9zt35S2ko=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22337179/1231385418.jpg',
            'https://s.yimg.com/ny/api/res/1.2/cPHxvzMISLE4eEwgs5uBhA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-04/6a4139f0-a6f5-11eb-bde6-fdc37ad5e21f']
        //Each link is iterated through and an image element is added for each image along with appending each image to corresponding div
        for(let i = 0;i<imgList.length;i++){
            let imgPath = imgList[i];
            let img = document.createElement("img");
            img.src = imgPath;
            id("MvpPics").appendChild(img);
        }

    }

    function fillDpoyPics(){
        //Box must be cleared each time function is called so images do not continuously display over and over again
        id("DpoyPics").innerHTML = ''
        let imgList = ['https://pbs.twimg.com/profile_images/1196886549243154432/DOAmZ1LH_400x400.jpg',
            'https://sportshub.cbsistatic.com/i/r/2020/02/25/5688bf1d-4c3d-4d92-8e55-62dbba75ef27/thumbnail/1200x675/25d728ad2e30f9c4f00be4b4856502d4/ben-simmons-2.jpg',
            'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNjM5MjM2OTY4NDI0NTM2/bam-adebayo-heat-defender.jpg',
            'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1067,w_1600/http%3A%2F%2Fhoopshabit.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1204260032.jpeg',
            'https://www.gannett-cdn.com/presto/2018/12/31/PIND/80a825f2-33c2-4c5e-9152-2053898c3ce9-PacersHawks_RS_18.jpg']
        //Each link is iterated through and an image element is added for each image along with appending each image to corresponding div
        for(let i = 0;i<imgList.length;i++){
            let imgPath = imgList[i];
            let img = document.createElement("img");
            img.src = imgPath;
            id("DpoyPics").appendChild(img);
        }

    }

    function fillRoyPics(){
        //Box must be cleared each time function is called so images do not continuously display over and over again
        id("RoyPics").innerHTML = ''
        let imgList = ['https://sportshub.cbsistatic.com/i/r/2021/03/19/7c4f7c15-4fc3-4a30-a741-3017f9741f96/thumbnail/1200x675/06cfca78e9cb3f97ed29196700a55270/untitled-design-2021-03-19t134623-667.png',
            'https://cdn.nba.com/manage/2021/01/GettyImages-1230201611-scaled-e1609532009825-784x492.jpg',
            'https://images.rivals.com/image/upload/f_auto,q_auto,t_large/shbjqio0y3xtehvk7ly8',
            'https://ewscripps.brightspotcdn.com/18/98/3087731447399d4a7e45add46ca1/ap21043134109294.jpg',
            'https://i.guim.co.uk/img/media/fe087ca0b55f8b3df65bd16a72cb0eca9d61e31d/512_137_4604_2763/master/4604.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=beb3976dd8727c104b1d7bd758c8c96c']
        //Each link is iterated through and an image element is added for each image along with appending each image to corresponding div
        for(let i = 0;i<imgList.length;i++){
            let imgPath = imgList[i];
            let img = document.createElement("img");
            img.src = imgPath;
            id("RoyPics").appendChild(img);
        }

    }

    //Helper functions that allow for response from api is checked and validated in case an error occurs
    //as well as quick document.getelementbyID and queryselector functions for more efficient code
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }
    function id(id) {
        return document.getElementById(id);
    }
    function qs(query) {
        return document.querySelector(query);
    }
})()