/**
 * Stellt Funktionen zur Verfügung, um mit der Spotify API zu interagieren.
 * @module spotify
 */

import {playlistCover, playlistCoverMid, playlistCoverShort, profilBackup} from './imports.js';

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

// Struktur um aktive Token zu verwalten, die im lokalen Speicher des Browsers gespeichert werden
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

/**
 * Funktion, die beim Laden der Seite aufgerufen wird.
 * Versucht, den Autorisierungscode aus der aktuellen Browser-Such-URL abzurufen.
 * Wenn ein Code gefunden wird, wird ein Token-Austausch durchgeführt.
 * Entfernt den Code aus der URL, um eine korrekte Weiterleitung zu gewährleisten.
 * Prüft, ob der Nutzer eingeloggt ist.
 * 
 * @returns {boolean} Gibt zurück, ob der Nutzer eingeloggt ist.
 */
export async function onPageLoad(){
   
    // Beim Laden der Seite versuchen, den Autorisierungscode aus der aktuellen Browser-Such-URL abzurufen
    const args = new URLSearchParams(window.location.search);
    const code = args.get('code');

    // Wenn wir einen Code finden, sind wir in einem Callback und es wird ein Token-Austausch durchgeführt
    if (code) {
        console.log("Code found in URL, exchanging for token");
        await getToken(code);

        // Code aus der URL entfernen, damit korrekt weitergeleitet wird
        const url = new URL(window.location.href);
        url.searchParams.delete("code");

        const updatedUrl = url.search ? url.href : url.href.replace('?', '');
        window.history.replaceState({}, document.title, updatedUrl);
    }

    // Prüft, ob der Nutzer eingeloggt ist.
    return (currentToken.access_token && currentToken.access_token != "undefined");
}

/**
 * Leitet den Benutzer zur Spotify-Autorisierung weiter.
 * Generiert einen zufälligen Code-Verifier, erstellt einen Code-Challenge-Hash und leitet den Benutzer zur Autorisierungsseite von Spotify weiter.
 * Der generierte Code-Verifier wird im lokalen Speicher des Browsers gespeichert.
 * 
 */
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
  
    // User zum authorization server weiterleiten
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
}

/**
 * Holt einen Token für die Autorisierung.
 * 
 * @param {string} code - Der Autorisierungscode.
 */
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

/**
 * Erneuert den Access Token mithilfe des Refresh Tokens.
 */
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

/**
 * Funktion zum Auslösen des Spotify-Anmeldevorgangs.
 */
export async function loginWithSpotifyClick() {
    await redirectToSpotifyAuthorize();
}

/**
 * Funktion zum Auslösen des Spotify-Abmeldevorgangs.
 * Aktuelle Token werden gelöscht und der Nutzer wird auf die Startseite weitergeleitet.
 */
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
 * Schickt die gewünschten HTTP-Requests an die Spotify API und verarbeitet die Antworten.
 * @param {*} method 
 * @param {*} url 
 * @param {*} body 
 * @returns - die Antwort der Spotify API je nach Anfrage in Form von JSON-Daten oder einem Response-Objekt
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
        //Tritt nur ein, wenn beim vorherigen versuch den Token zu erneuern ein Fehler aufgetreten ist. Es muss sich daher neu angemeldet werden.
        console.log("Token expired, please sign in again.");
        logoutClick();
        return response;
    }else if (status == 202){
        //Nur für Rquest das Playlist Cover zu setzen. Erfolgreicher Request, Cover wurde gesetzt
        return response;
    }else{
        //Bei Fehlern die Response loggen und zurückgeben
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
    myProfil.imageUrl = data.images?.[1]?.url ?? profilBackup; //Falls kein Bild vorhanden ist, wird das Backup-Profilbild verwendet.
    // console.log(profilBackup);
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
 * Erstellt eine neue Playlist mit einer Mischung aus Top Songs und on Repeat Songs des Nutzers je nach gewähltem Zeitraum.
 * Der Playlist wird außerdem ein Cover hinzugefügt.
 * @param {} timeRange 
 */
export async function setPlaylist(timeRange){
    const profil = await getMe();
    const topSongs = await getTopSongs(timeRange);
    const onRepeat = await getOnRepeat();
    let spotifyUserID = profil.id;
    let playlistName = profil.name + "s unwrapped";
    let zeitInfo = "the last year of your Spotify experience";
    let playlistCoverUrl = playlistCover;
    if(timeRange == "medium_term") {
        zeitInfo = "the last 6 months of your Spotify experience";
        playlistName += " (Mid Term)";
        playlistCoverUrl = playlistCoverMid;
    }
    if(timeRange == "short_term") {
        zeitInfo = "the last 4 weeks of your Spotify experience";
        playlistName += " (Short Term)";
        playlistCoverUrl = playlistCoverShort;
    }
    let body = {
        "name": playlistName, 
        "description": "Your unwrapped playlist based on " + zeitInfo + ".", 
        "public": "false"
    };

    //In den Playlists des Users nach der Playlist suchen, falls vorhanden.
    const userPlaylistsEndpoint = "https://api.spotify.com/v1/users/" + profil.id + "/playlists";
    const userPlaylistsResponse = await callApi("GET", userPlaylistsEndpoint, null);
    let playlistId;
    let playlistExists = false;
    for (const playlist of userPlaylistsResponse.items) {
        if(playlist.name == playlistName){
            playlistId = playlist.id;
            playlistExists = true;
            break;
        }
    }
    if(!playlistExists) {
        playlistId = (await callApi("POST", "https://api.spotify.com/v1/users/" + spotifyUserID + "/playlists", body)).id;
    }

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
    let trackUriListe = {"uris": trackListe};
    const setplaylistRes = await callApi("PUT", "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", JSON.stringify(trackUriListe));
    console.log(setplaylistRes);
    //Cover der Playlist setzen
    if(!playlistExists){
        let base64Cover = await (getBase64Image(playlistCoverUrl));
        let coverRes = await (callApi("PUT", "https://api.spotify.com/v1/playlists/" + playlistId + "/images", base64Cover));
        //Beim Cover setzten scheint Spotify etwas unzuverlässig zu sein, daher wird der Request so lange wiederholt, bis er erfolgreich ist.
        //Kein 100% sauberer Weg, aber zunächst ein ausreichender Workaround.
        while(coverRes.status != 202){
            coverRes = await (callApi("PUT", "https://api.spotify.com/v1/playlists/" + playlistId + "/images", base64Cover));
        }
        if ((coverRes.status == 202) && (setplaylistRes.snapshot_id)) return "Playlist created!";
    }else{
        if (setplaylistRes.snapshot_id) return "Playlist updated!";
    }

}