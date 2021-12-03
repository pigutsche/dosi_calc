# Übersicht der Vue-Komponenten

> Alles was mindestens 2 mal genutzt wird soll in eine Komponente ausgelagert werden.

* Buttons/Listenelemente für Optionauswahl -> ListView & itemTemplate ist zusammengesetzt von Button und Label *ODER* https://v7.docs.nativescript.org/angular/ui/overview#radautocompletetextview
* Buttons/Listenelemente für Kategorieauswahl -> ListView & itemTemplate ist zusammengesetzt von Button und Label *ODER* https://v7.docs.nativescript.org/angular/ui/overview#radautocompletetextview
* Info button (i) -> icon einfügen in itemTemplate https://v6.docs.nativescript.org/ui/components/icon-fonts, vielleicht https://fontawesome.com/v5.15/icons/info-circle?style=solid
* Zusatzsymbole Screen 1 -> icon einfügen in itemTemplate https://v6.docs.nativescript.org/ui/components/icon-fonts
* Inputfelder von Screen 1 und 3 zusammenfassen zu einer Komponente -> SearchBar
* Dialogs für Abfrage, ob wirklich zurück zur Startseite

Screens können mithilfe von TabView leichter switchbar gestaltet werden (verzicht auf Startseite-Button)