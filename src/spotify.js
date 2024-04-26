
var redirect_uri = "http://localhost:8000/";
var client_id = "b125b5d4ba6f4e619e84880fa7a9a74f";//import.meta.env.VITE_client_id; 
var client_secret = "72f1c662c0644873a7622402af1b59fd";//import.meta.env.VITE_client_secret;
var access_token = null;
var refresh_token = null;
var timeRange = "long_term";

var myProfil = null;
var topSongs = null;
var topArtists = null;
var onRepeat = null;
var recentlyPlayed = null;
var playlistId = null;
//var artistTopTracks = null;

const SCOPES = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read user-top-read streaming user-read-playback-state user-read-recently-played playlist-read-private playlist-modify-private playlist-modify-public ugc-image-upload";

const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";
const ME = "https://api.spotify.com/v1/me";
const TOPSONGS = "https://api.spotify.com/v1/me/top/tracks";
const TOPARTISTS = "https://api.spotify.com/v1/me/top/artists";
//const SHOWS = "https://api.spotify.com/v1/me/shows";
//const PLAYLISTS = "https://api.spotify.com/v1/me/playlists?limit=50";
const ONREPEAT = "https://api.spotify.com/v1/search?q=On%20Repeat&type=playlist";
const RECENTLYPLAYED = "https://api.spotify.com/v1/me/player/recently-played";

export function onPageLoad(){
    //client_id = localStorage.getItem("client_id");
    //client_secret = localStorage.getItem("client_secret");
    //Wird die Seite nicht zum ersten Mal aufgerufen, wird die Weiterleitung verarbeitet.
    if ( window.location.search.length > 0 ){
        handleRedirect();
    }else if (localStorage.getItem("access_token") != undefined && localStorage.getItem("refresh_token") != undefined){
        access_token = localStorage.getItem("access_token");
        refresh_token = localStorage.getItem("refresh_token");
        //console.log("Access granted.");
        getAllData();
    }
}

function handleRedirect(){
    let code = getCode();
    fetchAccessToken( code );
    window.history.pushState("", "", redirect_uri); // remove param from url
}

function getCode(){
    let code = null;
    const queryString = window.location.search;
    if ( queryString.length > 0 ){
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code')
    }
    return code;
}

/**
 * Requestet die Autorisation.
 * Leitet benötigete Daten an Spotify weiter, lässt Auth. extern bestätigen.
 * Gibt Code zurück
 */
export function authorizationReq() {
    console.log("Req gestartet");
    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=" + SCOPES;
    window.location.href = url; // Leitet zu Spotify weiter
}

function fetchAccessToken(code){
    let body = "grant_type=authorization_code";
    body += "&code=" + code; 
    body += "&redirect_uri=" + encodeURI(redirect_uri);
    body += "&client_id=" + client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);
}

function refreshAccessToken(){
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        if ( data.access_token != undefined ){
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if ( data.refresh_token  != undefined ){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

// DATEN ABRUFEN

function callApi(method, url, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(body);
    xhr.onload = callback;
}

function callbackMe(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        myProfil = {};
        myProfil.name = data.display_name;
        myProfil.imageUrl = data.images[1].url;
        myProfil.id = data.id;
        myProfil.follower = data.followers.total;
        myProfil.country = data.country;

        localStorage.setItem("myProfil", JSON.stringify(myProfil));
        
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function callbackSongs(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        topSongs = [];

        //Fuer jeden Song ein Object mit allen benötigten Daten anlegen.
        for (let i = 0; i < 20; i++) {
            let songData = data.items[i];
            let songObject = {};
            songObject.id = songData.id;
            songObject.uri = songData.uri;
            songObject.name = songData.name;
            songObject.albumName = songData.album.name;
            songObject.imageUrl = songData.album.images[1].url;
            songObject.artists = [];
            songData.artists.forEach(artistElement => {
                let artist = {};
                artist.id = artistElement.id;
                artist.name = artistElement.name;

                songObject.artists.push(artist);
            });

            topSongs.push(songObject);
            
        }

        localStorage.setItem("topSongs", JSON.stringify(topSongs));
        
        
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function callbackArtists(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        topArtists = [];

        //Fuer jede*n Artist ein Object mit allen benötigten Daten anlegen.
        for (let i = 0; i < 3; i++) {
            let artistData = data.items[i];
            let artistObject = {};
            artistObject.id = artistData.id;
            artistObject.name = artistData.name;
            artistObject.imageUrl = artistData.images[1].url;
            //getTopArtistsTopTracks(artistObject.id);
            //console.log(artistTopTracks);

            topArtists.push(artistObject);
            
        }

        localStorage.setItem("topArtists", JSON.stringify(topArtists));
         
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

/**
function callbackShows(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        let inhalt = "";
        for (let i = 0; i < data.items.length; i++) {
            inhalt +=
                "<div>"
                + "<p>Deine " + (i+1) + ". gespeicherte Show</p>"
                + "<br>"
                + "<img src='" + data.items[i].show.images[0].url + "' alt='Artist Bild' width='128' height='128'></img>"
                + data.items[i].show.name
                + "<br>"
                + data.items[i].show.html_description
                + "</div>"
                + "<br>"
            ;
        }
        document.getElementById("output").innerHTML = inhalt;
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}
*/

/**
function callbackPlaylists(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        let inhalt = "";
        for (let i = 0; i < data.items.length; i++) {
            inhalt +=
                "<div>"
                + "<p>Deine " + (i+1) + ". Playlist " + data.items[i].name + "</p>"
                + "<br>"
                + "<img src='" + data.items[i].images[0].url + "' width='128' height='128'></img>"
                + "<br>"
                + data.items[i].description
                + "</div>"
                + "<br>"
            ;
        }
        document.getElementById("output").innerHTML = inhalt;
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}
*/

function callbackOnRepeatSearch(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        let onRepeatId = data.playlists.items[0].id;
        callApi( "GET", "https://api.spotify.com/v1/playlists/" + onRepeatId, null, callbackOnRepeat);
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function callbackOnRepeat(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText).tracks.items;
        //console.log(data);
        onRepeat = [];

        for (let i = 0; i < data.length; i++) {
            let track = {};
            let datatrack = data[i].track;
            track.id = datatrack.id;
            track.uri = datatrack.uri;
            track.name = datatrack.name;
            track.artists = [];
            datatrack.artists.forEach(artistElement => {
                let artist = {};
                artist.id = artistElement.id;
                artist.name = artistElement.name;

                track.artists.push(artist);
            });
            track.image = datatrack.album.images[1].url;

            onRepeat.push(track);
        }

        localStorage.setItem("onRepeat", JSON.stringify(onRepeat));    
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}

function callbackRecentlyPlayed(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText).items;
        //console.log(data);
        recentlyPlayed = [];

        for (let i = 0; i < data.length; i++) {
            let track = {};
            let datatrack = data[i].track;
            track.id = datatrack.id;
            track.uri = datatrack.uri;
            track.name = datatrack.name;
            track.artists = [];
            datatrack.artists.forEach(artistElement => {
                let artist = {};
                artist.id = artistElement.id;
                artist.name = artistElement.name;

                track.artists.push(artist);
            });
            track.image = datatrack.album.images[1].url;

            recentlyPlayed.push(track);
        }

        localStorage.setItem("recentlyPlayed", JSON.stringify(recentlyPlayed));
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}

function callbackFestivalPlaylist(){
    if ( this.status == 201 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        playlistId = data.id;
        fuelleFestivalPlaylist(playlistId);
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}

/**
function callbackArtistsTopTracks(){
    if ( this.status == 200 ){
        artistTopTracks = JSON.parse(this.responseText);
        
        var data = JSON.parse(this.responseText);
        let artistsTopTracks = JSON.parse(localStorage.getItem("artistsTopTracks"));
        for (let i = 0; i < 2; i++) {
            //console.log(data.tracks[i].name);
            artistsTopTracks.uris.push(data.tracks[i].uri);
            //console.log(artistsTopTracks);
        }
        localStorage.setItem("artistsTopTracks", JSON.stringify(artistsTopTracks));
        
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}
*/

function callbackFuelleFestivalPlaylist(){
    if ( this.status == 201 ){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        //API Call, um der Playlist ein Cover hinzuzufuegen
        let coverBody = "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";
        callApi( "PUT", "https://api.spotify.com/v1/playlists/" + playlistId + "/images", coverBody, callbackPlaylistCover);
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}

function callbackPlaylistCover(){
    if ( this.status == 202 ){
        //var data = JSON.parse(this.responseText);
        console.log("Cover erfolgreich hinzugefuegt.");
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else if ( this.status == 503 ){
        console.log("Service ist aktuell nicht verfuegbar. Cover konnte nicht geladen werden.");
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}

function getMe(){
    callApi( "GET", ME, null, callbackMe);
}

function getTopSongs(){
    callApi( "GET", TOPSONGS + "?time_range=" + timeRange, null, callbackSongs);
}

function getTopArtists(){
    callApi( "GET", TOPARTISTS + "?time_range=" + timeRange, null, callbackArtists);
}

/**
function getShows(){
    callApi( "GET", SHOWS, null, callbackShows);
}
*/

/**
function getPlaylists(){
    callApi( "GET", PLAYLISTS, null, callbackPlaylists);
}
*/

function getOnRepeat(){
    callApi( "GET", ONREPEAT, null, callbackOnRepeatSearch);
}

function getRecentlyPlayed(){
    callApi( "GET", RECENTLYPLAYED, null, callbackRecentlyPlayed);
}

function getAllData(){
    getMe();
    getTopSongs();
    getTopArtists();
    getOnRepeat();
    getRecentlyPlayed();
    //sammleArtistTopTracks();
    /**
    console.log("Hier kommen die Daten:");
    console.log(myProfil);
    console.log(topSongs);
    console.log(topArtists);
    console.log(onRepeat);
    console.log("Datenausgabe fertig");
    */
}

/**
function getTopArtistsTopTracks(artistID) {
    callApi( "GET", "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?market=DE", null, callbackArtistsTopTracks);
}
*/

/**
function sammleArtistTopTracks() {
    let topArtists = JSON.parse(localStorage.getItem("topArtists")).items;
    let artistsTopTracks = {"uris":[]};
    localStorage.setItem("artistsTopTracks", JSON.stringify(artistsTopTracks));
    for (let i = 0; i < 10; i++) {
        //console.log(topArtists[i].id);
        getTopArtistsTopTracks(topArtists[i].id);
    }
}
*/

export function setTimeRangeLong() {
    timeRange = "long_term";
    localStorage.removeItem("topArtists");
    localStorage.removeItem("topSongs");
    getTopArtists();
    getTopSongs();
    console.log("time range: Long");
}

export function setTimeRangeMid() {
    timeRange = "medium_term";
    localStorage.removeItem("topArtists");
    localStorage.removeItem("topSongs");
    getTopArtists();
    getTopSongs();
    console.log("time range: Medium");
}

export function setTimeRangeShort() {
    timeRange = "short_term";
    localStorage.removeItem("topArtists");
    localStorage.removeItem("topSongs");
    getTopArtists();
    getTopSongs();
    console.log("time range: Short");
}

export function setFestivalPlaylist(){
    let spotifyUserID = JSON.parse(localStorage.getItem("myProfil")).id;
    let playlistName = JSON.parse(localStorage.getItem("myProfil")).name + "s Spotify Festival 2023";
    let zeitInfo = "deiner Spotify Erfahrung";
    if(timeRange == "long_term") {
        zeitInfo = "deiner gesamten Spotify Erfahrung";
    }
    if(timeRange == "medium_term") {
        zeitInfo = "den letzten 6 Monaten deiner Spotify Erfahrung";
    }
    if(timeRange == "short_term") {
        zeitInfo = "den letzten 4 Wochen deiner Spotify Erfahrung";
    }
    let body = {
        "name": playlistName, 
        "description": "Deine Playlist zum Spotify Festival 2023 basierend auf " + zeitInfo + ".", 
        "public": "false"
    };
    callApi( "POST", "https://api.spotify.com/v1/users/" + spotifyUserID + "/playlists", JSON.stringify(body), callbackFestivalPlaylist);
}

function fuelleFestivalPlaylist(playlistId){
    
    //Liste mit allen Track-Uris füllen, die zur Playlist hinzugefuegt werden sollen.

    let trackListe = [];

    for (let i = 0; i < 20; i++) {
        let topTrackUri = JSON.parse(localStorage.getItem("topSongs"));
        trackListe.push(topTrackUri[i].uri);
    }
    for (let i = 0; i < 20; i++) {
        let onRepeatTrackUri = JSON.parse(localStorage.getItem("onRepeat"))[i].uri;
        //Falls es zwischen Top Tracks und on Repeat Ueberschneidungen gibt, werden diese gefiltert, um keinen Track doppelt hinzuzufuegen.
        if(!(trackListe.includes(onRepeatTrackUri))) {
            trackListe.push(onRepeatTrackUri);
        }
    }

    //Zufaelliges shufflen der Trackliste mit der Fisher Yates Methode
    for (let i = trackListe.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = trackListe[i];
        trackListe[i] = trackListe[j];
        trackListe[j] = k;
    }

    let trackUriListe = {"uris": trackListe};
    callApi( "POST", "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", JSON.stringify(trackUriListe), callbackFuelleFestivalPlaylist);
}


