# Dokumentation Datenanbindung

> Fürs Erste fällt die Wahl auf eine JSON-Datei. 

## Online
### Vorteile
* Deutlich mehr Möglichkeiten
### Nachteile
* Backend muss gebaut werden
* Online Verbindung notwending, zumindest teilweise
### Umsetzung
* Backend Solution bspw. mit MySQL und REST-Api


## Offline
### Vorteile
* Performance
### Nachteile
* Speicherabhängig vom Gerät
* nicht Large-scale
### Umsetzung
* JSON
* SQLite
* Localstorage
* PouchDB mit sync Funktion (https://pouchdb.com/)