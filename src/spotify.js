//import './style.css'
//import * as THREE from 'three'

var redirect_uri = "http://localhost:8000/";
var client_id = "b125b5d4ba6f4e619e84880fa7a9a74f"; 
var client_secret = "72f1c662c0644873a7622402af1b59fd";
var access_token = null;
var refresh_token = null;
var timeRange = "long_term";

var myProfil = null;
var topSongs = null;
var topArtists = null;
var onRepeat = null;

const SCOPES = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read user-top-read streaming user-read-playback-state user-read-recently-played playlist-read-private playlist-modify-private";

const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";
const ME = "https://api.spotify.com/v1/me";
const TOPSONGS = "https://api.spotify.com/v1/me/top/tracks";
const TOPARTISTS = "https://api.spotify.com/v1/me/top/artists";
const SHOWS = "https://api.spotify.com/v1/me/shows";
const PLAYLISTS = "https://api.spotify.com/v1/me/playlists?limit=50";
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

function setTimeRange(){
    timeRange = document.getElementById("timerange").value;
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
        myProfil = data;
        localStorage.setItem("myProfil", JSON.stringify(myProfil));
        /**
        let inhalt = 
            "Dein Name: " + data.display_name
            + "<br>"
            + "<img src='" + data.images[0].url + "' alt='dein Profilbild' width='128' height='128'></img>"
            + "<br>"
            + "Du hast " + data.followers.total + " Follower*innen"
        ;
        document.getElementById("output").innerHTML = inhalt;
        */
        
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
        topSongs = data;
        localStorage.setItem("topSongs", JSON.stringify(topSongs));
        
        /**
        let inhalt = "";
        for (let i = 0; i < 10; i++) {
            inhalt +=
                "<div>"
                + "<p>Dein Top " + (i+1) + " Song</p>"
                + "<br>"
                + "<img src='" + data.items[i].album.images[0].url + "' alt='Hier folgt ein Cover' width='128' height='128'></img>"
                + data.items[i].name + " von " + data.items[i].artists[0].name
                + "</div>"
                + "<br>"
            ;
        }
        document.getElementById("output").innerHTML = inhalt;
        */
        
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
        topArtists = data;
        localStorage.setItem("topArtists", JSON.stringify(topArtists));
        
        /**
        let inhalt = "";
        for (let i = 0; i < 10; i++) {
            inhalt +=
                "<div>"
                + "<p>Dein Top " + (i+1) + " Artist</p>"
                + "<br>"
                + "<img src='" + data.items[i].images[0].url + "' alt='Artist Bild' width='128' height='128'></img>"
                + data.items[i].name
                + "</div>"
                + "<br>"
            ;
        }
        document.getElementById("output").innerHTML = inhalt;
        */
        
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

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
        var data = JSON.parse(this.responseText);
        //console.log(data);
        onRepeat = data;
        localStorage.setItem("onRepeat", JSON.stringify(onRepeat));
        
        /**
        let inhalt = "";
        for (let i = 0; i < data.tracks.items.length; i++) {
            inhalt +=
                "<div>"
                + "<p>Der " + (i+1) + ". Track: " + data.tracks.items[i].track.name + "</p>"
                + "<br>"
                + "<img src='" + data.tracks.items[i].track.album.images[0].url + "' width='128' height='128'></img>"
                + "</div>"
                + "<br>"
            ;
        }
        document.getElementById("output").innerHTML = inhalt;
        */
        
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
        var data = JSON.parse(this.responseText);
        //console.log(data);
        localStorage.setItem("recentlyPlayed", JSON.stringify(data));
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
        fuelleFestivalPlaylist(data.id);
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
    else {
        console.log(this.responseText); 
        alert(this.responseText);
    }
}

function callbackArtistsTopTracks(){
    if ( this.status == 200 ){
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

function callbackFuelleFestivalPlaylist(){
    if ( this.status == 201 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
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

function getShows(){
    callApi( "GET", SHOWS, null, callbackShows);
}

function getPlaylists(){
    callApi( "GET", PLAYLISTS, null, callbackPlaylists);
}

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
    sammleArtistTopTracks();
    /**
    console.log("Hier kommen die Daten:");
    console.log(myProfil);
    console.log(topSongs);
    console.log(topArtists);
    console.log(onRepeat);
    console.log("Datenausgabe fertig");
    */
}

function getTopArtistsTopTracks(artistID) {
    callApi( "GET", "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?market=DE", null, callbackArtistsTopTracks);
}

function sammleArtistTopTracks() {
    let topArtists = JSON.parse(localStorage.getItem("topArtists")).items;
    let artistsTopTracks = {"uris":[]};
    localStorage.setItem("artistsTopTracks", JSON.stringify(artistsTopTracks));
    for (let i = 0; i < 10; i++) {
        //console.log(topArtists[i].id);
        getTopArtistsTopTracks(topArtists[i].id);
    }
}

function setFestivalPlaylist(){
    let spotifyUserID = JSON.parse(localStorage.getItem("myProfil")).id;
    let playlistName = JSON.parse(localStorage.getItem("myProfil")).display_name + "s Spotify Festival 2023";
    let body = {
        "name": playlistName, 
        "description": "Deine Playlist zum Spotify Festival 2023.", 
        "public": "false"
    };
    callApi( "POST", "https://api.spotify.com/v1/users/" + spotifyUserID + "/playlists", JSON.stringify(body), callbackFestivalPlaylist);
}

function fuelleFestivalPlaylist(playlistId){
    //console.log(playlistId);
    
    let trackUriListe = {"uris":[]};
    for (let i = 0; i < 20; i++) {
        let topTrackUri = JSON.parse(localStorage.getItem("topSongs")).items[i].uri;
        trackUriListe.uris.push(topTrackUri);
    }
    //console.log(trackIdListe);

    //trackUriListe.uris.push("Jetzt kommen Artists");

    let artistsTopTracks = JSON.parse(localStorage.getItem("artistsTopTracks"));
    for (let i = 0; i < artistsTopTracks.uris.length; i++) {
        if (!(trackUriListe.uris.includes(artistsTopTracks.uris[i]))) {
            trackUriListe.uris.push(artistsTopTracks.uris[i]);
        }    
    }

    //Random Anordnung
    //console.log(trackUriListe);

    callApi( "POST", "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", JSON.stringify(trackUriListe), callbackFuelleFestivalPlaylist);
}


