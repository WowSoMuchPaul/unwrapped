import coverUrl from '../static/images/PaulApproved.jpeg';

const client_id = "b125b5d4ba6f4e619e84880fa7a9a74f";
const redirect_uri = "http://localhost:8000/";
const scope = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read user-top-read streaming user-read-playback-state user-read-recently-played playlist-read-private playlist-modify-private playlist-modify-public ugc-image-upload";

// Spotify API Endpoints
const authorizeEndpoint = "https://accounts.spotify.com/authorize"
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const profilEndpoint = "https://api.spotify.com/v1/me";
const topSongsEndpoint = "https://api.spotify.com/v1/me/top/tracks";
const topArtistsEndpoint = "https://api.spotify.com/v1/me/top/artists";
const onRepeatEndpoint = "https://api.spotify.com/v1/search?q=On%20Repeat&type=playlist";
const recentlyPlayedEndpoint = "https://api.spotify.com/v1/me/player/recently-played";

// Data structure that manages the current active token, caching it in localStorage
const currentToken = {
    get access_token() { return localStorage.getItem('access_token') || null; },
    get refresh_token() { return localStorage.getItem('refresh_token') || null; },
    get expires_in() { return localStorage.getItem('expires_in') || null },
    get expires() { return localStorage.getItem('expires') || null },
  
    save: function (response) {
      const { access_token, refresh_token, expires_in } = response;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('expires_in', expires_in);
  
      const now = new Date();
      const expiry = new Date(now.getTime() + (expires_in * 1000));
      localStorage.setItem('expires', expiry);
    }
};

export async function onPageLoad(){
   
    // On page load, try to fetch auth code from current browser search URL
    const args = new URLSearchParams(window.location.search);
    const code = args.get('code');

    // If we find a code, we're in a callback, do a token exchange
    if (code) {
        console.log("Code found in URL, exchanging for token");
        await getToken(code);

        // Remove code from URL so we can refresh correctly.
        const url = new URL(window.location.href);
        url.searchParams.delete("code");

        const updatedUrl = url.search ? url.href : url.href.replace('?', '');
        window.history.replaceState({}, document.title, updatedUrl);
    }

    // Prüft, ob der Nutzer eingeloggt ist.
    return (currentToken.access_token && currentToken.access_token != "undefined");
}

export async function redirectToSpotifyAuthorize() {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomValues = crypto.getRandomValues(new Uint8Array(64));
    const randomString = randomValues.reduce((acc, x) => acc + possible[x % possible.length], "");
  
    const code_verifier = randomString;
    const data = new TextEncoder().encode(code_verifier);
    const hashed = await crypto.subtle.digest('SHA-256', data);
  
    const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  
    window.localStorage.setItem('code_verifier', code_verifier);
  
    const authUrl = new URL(authorizeEndpoint)
    const params = {
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      code_challenge_method: 'S256',
      code_challenge: code_challenge_base64,
      redirect_uri: redirect_uri,
    };
  
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString(); // Redirect the user to the authorization server for login
}

// Soptify API Calls
async function getToken(code) {
    const code_verifier = localStorage.getItem('code_verifier');
  
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: client_id,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
        code_verifier: code_verifier,
      }),
    });

    if(response.status == 200) {
        const token = await response.json();
        currentToken.save(token);
    }
}

export async function refreshToken() {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: client_id,
        grant_type: 'refresh_token',
        refresh_token: currentToken.refresh_token
      }),
    });
    if (response.status == 200) {
        const token = await response.json();
        currentToken.save(token);
    }else{
        console.log("refresh Token failed");
    }
}

// Click handlers

export async function loginWithSpotifyClick() {
    await redirectToSpotifyAuthorize();
}
  
export async function logoutClick() {
    localStorage.clear();
    window.location.href = redirect_uri;
}
  



// DATEN ABRUFEN

/**
 * Wandelt ein Bild in Base64 um.
 * @param {*} path 
 * @returns ein Bild als Base64 String
 */
async function getBase64Image(path) {
    const response = await fetch(path);
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onloadend = () => {
            // Teilt den String in zwei Teile, um nur den reinen Base64-Teil zu erhalten
            const base64Data = reader.result.split(',')[1];
            resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

/**
 * Schickt HTTP-Requests an die Spotify API und verarbeitet die Antworten.
 * @param {*} method 
 * @param {*} url 
 * @param {*} body 
 * @returns 
 */
async function callApi(method, url, body) {
    let response;
    //Prüft, ob der Token noch gültig ist, falls nicht wird ein neuer Token angefordert.
    const now = new Date();
    if (new Date(currentToken.expires) < now) {
        await refreshToken();
        console.log("Token refreshed");
    }
    if(method == "GET") {
        //API call ohne Body
        response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await currentToken.access_token
            }
        })
    }else if (method == "PUT"){
        response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await currentToken.access_token
            },
            body: body
        }) 
    }else{
        //API call mit Body
        response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await currentToken.access_token
            },
            body: JSON.stringify(body)
        }) 
    }
    //Response Status abfragen
    const status = await response.status;
    if (status == 200 || status == 201){
        //Bei erfolgreichem call die erfragten Daten returnen
        return response.json();
    }else if (status == 401 ){
        console.log("Token expired, please refresh token");
        logoutClick();
        return response;
        //await refreshToken();
        //callApi(method, url, body);
    }else if (status == 202){
        //Erfolgreicher Request, Cover wurde gesetzt
        return response;
    }else{
        //Bei Fehlern den Response loggen und zurückgeben
        console.log(response);
        return response;
    }
}

/**
 * Liefert die Profil-Daten des Nutzers.
 * @returns die Profil-Daten des Nutzers
 */
export async function getMe(){
    const data = await callApi("GET", profilEndpoint, null);

    let myProfil = {};
    myProfil.name = data.display_name;
    myProfil.imageUrl = data.images[1].url;
    myProfil.id = data.id;
    myProfil.follower = data.followers.total;
    myProfil.country = data.country;

    return myProfil;
}

/**
 * Liefert die Top Songs des Nutzers.
 * @param {*} timeRange 
 * @returns die Top Songs des Nutzers
 */
export async function getTopSongs(timeRange){
    const data = await callApi("GET", topSongsEndpoint + "?time_range=" + timeRange, null);
    let topSongs = [];
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

    return topSongs
}

/**
 * Liefert die Top Künstler*innen des Nutzers.
 * @param {*} timeRange 
 * @returns die Top Künstler*innen des Nutzers
 */
export async function getTopArtists(timeRange){
    const data = await callApi("GET", topArtistsEndpoint + "?time_range=" + timeRange, null);
    let topArtists = [];
    //Fuer jede*n Artist ein Object mit allen benötigten Daten anlegen.
    for (let i = 0; i < 6; i++) {
        let artistData = data.items[i];
        let artistObject = {};
        artistObject.id = artistData.id;
        artistObject.name = artistData.name;
        artistObject.imageUrl = artistData.images[1].url;
        topArtists.push(artistObject);
    }

    return topArtists
}

/**
 * Liefert eine Liste der Songs der Spotify Playlist "On Repeat".
 * @returns Liste der Songs der Spotify Playlist "On Repeat"
 */
export async function getOnRepeat(){
    const idData = await callApi("GET", onRepeatEndpoint, null);
    const onRepeatId = idData.playlists.items[0].id;
    const onRepeatPlaylist = await callApi("GET", "https://api.spotify.com/v1/playlists/" + onRepeatId, null);
    const data = onRepeatPlaylist.tracks.items;
    let onRepeat = [];
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

    return onRepeat;    
}

/**
 * Liefert eine Liste der zuletzt gehörten Songs des Nutzers.
 * @returns Liste der zuletzt gehörten Songs
 */
export async function getRecentlyPlayed(){
    const recentlyPlayedList = await callApi("GET", recentlyPlayedEndpoint, null);
    const data = recentlyPlayedList.items;
    let recentlyPlayed = [];
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

    return recentlyPlayed;
}

/**
 * Erstellt eine neue Playlist mit einer Mischung aus Top Songs und on Repeat Songs des Nutzers.
 * Der Playlist wird außerdem ein Cover hinzugefügt.
 * @param {} timeRange 
 */
export async function setFestivalPlaylist(timeRange){
    const profil = await getMe();
    const topSongs = await getTopSongs(timeRange);
    const onRepeat = await getOnRepeat();
    let spotifyUserID = profil.id;
    let playlistName = profil.name + "s unwrapped 2024";
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
        "description": "Deine Playlist zum unwrapped 2024 basierend auf " + zeitInfo + ".", 
        "public": "false"
    };
    const playlistId = (await callApi("POST", "https://api.spotify.com/v1/users/" + spotifyUserID + "/playlists", body)).id;

    //Liste mit allen Track-Uris füllen, die zur Playlist hinzugefuegt werden sollen.

    let trackListe = [];

    for (let i = 0; i < 20; i++) {
        //Falls es zwischen Top Tracks und on Repeat Ueberschneidungen gibt, werden diese gefiltert, um keinen Track doppelt hinzuzufuegen.
        if(!(trackListe.includes(topSongs[i].uri))) {
            trackListe.push(topSongs[i].uri);
        }
        if(!(trackListe.includes(onRepeat[i].uri))) {
            trackListe.push(onRepeat[i].uri);
        }
    }

    //Zufaelliges shufflen der Trackliste mit der Fisher Yates Methode
    for (let i = trackListe.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = trackListe[i];
        trackListe[i] = trackListe[j];
        trackListe[j] = k;
    }

    //Alle Tracks der Playlist hinzufuegen
    let trackUriListe = {"uris": trackListe, "position": 0};
    callApi("POST", "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", trackUriListe);

    
    let base64Cover = await (getBase64Image(coverUrl));
    let coverRes = await (callApi("PUT", "https://api.spotify.com/v1/playlists/" + playlistId + "/images", base64Cover));
    //Beim Cover setzten scheint Spotify etwas unzuverlässig zu sein, daher wird der Request so lange wiederholt, bis er erfolgreich ist.
    //Kein 100% sauberer Weg, aber zunächst ein ausreichender Workaround.
    while(coverRes.status != 202){
        coverRes = await (callApi("PUT", "https://api.spotify.com/v1/playlists/" + playlistId + "/images", base64Cover));
    }
}