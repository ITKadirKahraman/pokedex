# 🟡 Pokédex – PokéAPI

![Pokédex Logo](./assets/icons/pokeLogo.svg)

## 📖 Über das Projekt

Der **Pokédex** ist ein interaktives Frontend-Projekt auf Basis der **PokéAPI**.

Die Anwendung lädt Pokémon-Daten dynamisch über eine REST-API und stellt diese übersichtlich in Karten dar. Benutzer können Pokémon durchsuchen, nach Typen filtern, eine Detailansicht öffnen und sich die jeweiligen Evolutionsketten anzeigen lassen.

Das Projekt wurde entwickelt, um praktische Erfahrungen mit **JavaScript, REST-APIs, `fetch`, `async/await`, DOM-Manipulation, dynamischem Rendering, LocalStorage und Unit Tests** zu sammeln.

Der aktuelle Entwicklungsstand geht dabei über ein einfaches API-Projekt hinaus und beinhaltet bereits mehrere interaktive Funktionen.

> [!NOTE]
> Dieses Projekt ist ein Lern- und Portfolio-Projekt und wird kontinuierlich weiterentwickelt.

---

## 🚀 Aktueller Entwicklungsstand

### Version 2.0

Aktuell umgesetzt:

- ✅ Verbindung zur PokéAPI
- ✅ Dynamisches Laden von Pokémon
- ✅ Laden von 20 Pokémon pro Anfrage
- ✅ "Load more"-Funktion
- ✅ Pokémon-Suchfunktion
- ✅ Suche mit mindestens 3 Zeichen
- ✅ Filterung nach Pokémon-Typ
- ✅ Darstellung verschiedener Pokémon-Typen
- ✅ Dynamische Karten für Pokémon
- ✅ Pokémon-Detailansicht
- ✅ Anzeige von Pokémon-ID
- ✅ Anzeige von Größe und Gewicht
- ✅ Anzeige ausgewählter Statuswerte
- ✅ Anzeige der Pokémon-Typen
- ✅ Evolutionskette
- ✅ Navigation zwischen Pokémon innerhalb der Detailansicht
- ✅ Ladeanimation
- ✅ Fehlerbehandlung bei API-Anfragen
- ✅ Responsive Design
- ✅ CSS Custom Properties für Farben und Größen
- ✅ Favoriten-Funktion vorbereitet
- ✅ Speicherung von Favoriten über LocalStorage
- ✅ Aufteilung der JavaScript-Funktionen auf mehrere Dateien
- ✅ Erste Unit Tests mit Node.js

---

## ✨ Funktionen

### 🔍 Pokémon-Suche

Über das Suchfeld können Pokémon anhand ihres Namens gesucht werden.

Die Suche:

- wandelt Eingaben in Kleinbuchstaben um
- entfernt unnötige Leerzeichen
- startet ab einer Eingabe von mindestens 3 Zeichen
- durchsucht die bereits geladenen Pokémon
- kann über die Enter-Taste ausgeführt werden
- kann über den Suchbutton gestartet werden

Beispiel:

```text
pik
```

Die Suche findet beispielsweise Pokémon wie:

```text
Pikachu
```

> [!IMPORTANT]
> Die Suche arbeitet aktuell mit den bereits geladenen Pokémon. Pokémon, die noch nicht über die "Load more"-Funktion geladen wurden, stehen der Suche noch nicht zur Verfügung.

---

### 🧩 Typfilter

Über das Auswahlmenü können Pokémon nach ihrem Typ gefiltert werden.

Aktuell stehen folgende Filter zur Verfügung:

- All Types
- Fire
- Water
- Grass
- Electric
- Poison

Die Filterung überprüft die Typen jedes geladenen Pokémon und zeigt anschließend nur passende Ergebnisse an.

---

### 📦 Load More

Die Anwendung lädt zunächst eine begrenzte Anzahl von Pokémon.

Mit dem Button:

```text
Load more
```

werden weitere Pokémon über die PokéAPI geladen.

Aktuell werden pro Anfrage:

```javascript
const LOAD_COUNT = 20;
```

Pokémon geladen.

Dadurch werden nicht alle Pokémon gleichzeitig geladen und die Daten können schrittweise aufgebaut werden.

---

### 📋 Pokémon-Karten

Jedes geladene Pokémon wird als eigene Karte dargestellt.

Die Karte enthält:

- Pokémon-ID
- Pokémon-Name
- offizielles Pokémon-Artwork
- Pokémon-Typ bzw. Typen
- typabhängige Hintergrundfarbe

Die Hintergrundfarbe wird anhand des ersten Pokémon-Typs bestimmt.

Beispiel:

```javascript
renderBackgroundColor(pokemon);
```

---

### 🔎 Detailansicht

Durch das Anklicken einer Pokémon-Karte wird eine Detailansicht über ein HTML-`dialog` geöffnet.

Die Detailansicht zeigt unter anderem:

- Pokémon-Name
- Pokémon-ID
- Pokémon-Typen
- Größe
- Gewicht
- Statuswerte
- Pokémon-Artwork
- Evolutionskette
- Navigation zum vorherigen Pokémon
- Navigation zum nächsten Pokémon
- Favoriten-Button

Die Detailansicht wird dynamisch mit JavaScript erzeugt.

---

### 🧬 Evolutionskette

Für jedes Pokémon wird zusätzlich die Evolutionskette geladen.

Dafür werden mehrere API-Anfragen verwendet:

1. Pokémon-Daten laden
2. Species-Daten laden
3. Evolution Chain laden
4. Evolutionsnamen auswerten
5. Daten der einzelnen Entwicklungsstufen laden
6. Evolutionskarten rendern

Beispiel:

```text
Bulbasaur
    ↓
Ivysaur
    ↓
Venusaur
```

Die Evolution Chain wird anschließend dynamisch innerhalb der Detailansicht dargestellt.

> [!NOTE]
> Die Evolutionskette verwendet zusätzliche API-Anfragen, da die benötigten Informationen über mehrere API-Endpunkte verteilt sind.

---

### ❤️ Favoriten

Die Anwendung enthält eine vorbereitete Favoriten-Funktion.

Beim Auswählen des Herz-Buttons kann ein Pokémon als Favorit gespeichert werden.

Die Daten werden als JavaScript-Objekt gespeichert und anschließend über `localStorage` im Browser abgelegt.

Verwendete Funktionen:

```javascript
saveFavorite()
saveToLocalStorage()
getFromLocalStorage()
```

> [!WARNING]
> Die Favoriten-Funktion befindet sich noch in Weiterentwicklung. Die LocalStorage-Verwaltung und die Anzeige gespeicherter Favoriten können noch erweitert und optimiert werden.

---

### ⏳ Loading Screen

Während API-Anfragen ausgeführt werden, wird ein Ladebildschirm angezeigt.

Die Ladeanimation verwendet eine Pokéball-Grafik und eine CSS-Animation.

```javascript
showLoading();
hideLoading();
```

Dadurch erhält der Benutzer direktes visuelles Feedback während des Ladens der Daten.

---

## 🛠️ Verwendete Technologien

### Frontend

- HTML5
- CSS3
- JavaScript
- Vanilla JavaScript
- CSS Custom Properties
- Responsive Web Design

### API

- PokéAPI
- REST API
- `fetch()`
- `async/await`

### Browser-Technologien

- DOM Manipulation
- HTML Dialog Element
- LocalStorage
- CSS Media Queries

### Testing

- Node.js Test Runner
- `node:test`
- `node:assert/strict`

### Entwicklung

- Visual Studio Code
- Git
- GitHub

---

## 🌐 API

Das Projekt verwendet die **PokéAPI** als externe Datenquelle.

Verwendeter Basis-Endpunkt:

```text
https://pokeapi.co/api/v2/pokemon/
```

Die Anwendung verwendet unter anderem Pokémon-Daten für:

- Namen
- IDs
- Bilder
- Typen
- Größe
- Gewicht
- Statuswerte
- Species-Daten
- Evolutionsketten

Die API wird über JavaScript mit `fetch()` angesprochen.

---

## 📂 Projektstruktur

Die aktuelle Projektstruktur ist in verschiedene Verantwortungsbereiche aufgeteilt:

```text
Pokedex/
│
├── assets/
│   └── icons/
│       ├── pokeLogo.svg
│       ├── pokemonBall.svg
│       ├── heart.svg
│       ├── close.svg
│       ├── arrowLeft.svg
│       ├── arrowRight.svg
│       └── ...
│
├── scripts/
│   ├── localStorage.js
│   ├── colors.js
│   ├── templates.js
│   ├── render.js
│   ├── dialog.js
│   ├── search.js
│   └── script.js
│
├── styles/
│   ├── loadingScreen.css
│   ├── root.css
│   ├── standard.css
│   ├── smallCard.css
│   ├── color.css
│   ├── dialogCard.css
│   ├── style.css
│   └── responsive.css
│
├── tests/
│   ├── arrowLeft.js
│   ├── arrowRight.js
│   ├── evolution.js
│   ├── filterType.js
│   └── search.js
│
├── index.html
└── README.md
```

> [!TIP]
> Die Trennung in `templates`, `render`, `dialog`, `search`, `localStorage` und `colors` erleichtert die Wartung und macht einzelne Funktionen besser testbar.

---

## 🧱 Aufbau der Anwendung

Die Anwendung ist in mehrere logische Bereiche unterteilt.

### `templates.js`

Enthält die HTML-Templates für:

- Pokémon-Karten
- Detailansicht
- Evolutionskarten
- Load-More-Button
- Fehlermeldungen
- Footer

Beispielsweise:

```javascript
getSmallPokemonCards()
getDialogPokemonCard()
evolutionChain()
getLoadMoreButton()
getFooter()
```

---

### `render.js`

Verantwortlich für das Einfügen der Inhalte in das DOM.

Unter anderem:

```javascript
renderHeader()
renderFooter()
renderSmallCards()
renderLoadMoreContainer()
```

---

### `dialog.js`

Verantwortlich für die Detailansicht eines Pokémon.

Dazu gehören:

- Dialog öffnen
- Dialog schließen
- Pokémon wechseln
- Evolution Chain laden
- Navigation

---

### `search.js`

Enthält die Logik für die Pokémon-Suche und die Filterung.

Die Anwendung unterstützt:

```text
Search Pokémon
```

und die Typfilterung über das Select-Menü.

---

### `localStorage.js`

Verantwortlich für die Speicherung der Favoriten im Browser.

Die Daten werden mit:

```javascript
localStorage.setItem()
```

gespeichert und mit:

```javascript
localStorage.getItem()
```

ausgelesen.

---

### `colors.js`

Enthält die Zuordnung der Pokémon-Typen zu den jeweiligen CSS-Farben.

Beispielsweise:

```javascript
fire
water
grass
electric
poison
```

---

## 🧪 Unit Tests

Für wichtige Funktionen wurden erste Unit Tests mit dem integrierten Node.js Test Runner erstellt.

Verwendet werden:

```javascript
import test from "node:test";
import assert from "node:assert/strict";
```

Aktuell werden unter anderem folgende Funktionen getestet:

### Navigation

```javascript
leftArrow()
rightArrow()
```

Damit wird überprüft, ob die Navigation korrekt über das Ende bzw. den Anfang der Pokémon-Liste springt.

---

### Evolution Chain

```javascript
evolutionNames()
```

Hier wird geprüft, ob die Namen der Evolutionsstufen korrekt aus der API-Struktur gelesen werden.

Beispiel:

```text
Bulbasaur
Ivysaur
Venusaur
```

---

### Typfilter

```javascript
filterType()
```

Die Funktion soll überprüfen, ob nur Pokémon des ausgewählten Typs zurückgegeben werden.

---

### Suche

```javascript
search()
```

Die Suchfunktion wird als eigene Funktion getestet, damit die Suchlogik unabhängig von der Benutzeroberfläche überprüft werden kann.

> [!WARNING]
> Einige der aktuell vorhandenen Testdateien befinden sich noch in Entwicklung. Insbesondere die Tests für `search()` und `filterType()` müssen noch vervollständigt werden. Außerdem sollten `test.only()`-Aufrufe vor einem vollständigen Testlauf entfernt werden, da dadurch nur einzelne Tests ausgeführt werden.

---

## 📱 Responsive Design

Das Projekt wurde für verschiedene Bildschirmgrößen angepasst.

Über CSS Media Queries wird die Darstellung für kleinere Displays verändert.

Unter anderem werden:

- Pokémon-Karten angepasst
- die Detailansicht verändert
- Informationen innerhalb des Dialogs neu angeordnet
- Schriftgrößen angepasst
- Evolutionsketten auf kleineren Bildschirmen untereinander dargestellt
- Header-Inhalte bei sehr kleinen Displays reduziert

Beispiel:

```css
@media (max-width: 770px) {
    ...
}
```

und:

```css
@media (max-width: 580px) {
    ...
}
```

Dadurch kann die Anwendung auch auf Tablets und Smartphones verwendet werden.

---

## 🎨 Design

Das Design verwendet CSS Custom Properties.

Die zentralen Farben werden in `root.css` definiert.

Beispielsweise:

```css
:root {
    --background-color: rgb(0, 6, 1);
    --section-color: rgb(41, 49, 51);
    --pokemonYellow: rgb(254, 202, 28);
    --pokemonSpan: rgb(55, 97, 168);
}
```

Auch die Farben der Pokémon-Typen werden zentral verwaltet.

Dadurch können Farben und Größen an einer zentralen Stelle angepasst werden.

---

## 💻 Installation und Start

### 1. Repository klonen

```bash
git clone <DEINE-REPOSITORY-URL>
```

### 2. In das Projekt wechseln

```bash
cd Pokedex
```

### 3. Projekt starten

Da es sich um ein Vanilla-JavaScript-Projekt handelt, kann die Anwendung beispielsweise über **Visual Studio Code mit Live Server** gestartet werden.

Anschließend:

```text
index.html
```

im Browser öffnen.

> [!TIP]
> Für die Entwicklung empfiehlt sich die Verwendung von **Live Server**, da die Anwendung externe API-Anfragen ausführt und dadurch eine lokale Entwicklungsumgebung übersichtlicher ist.

---

## 🔄 Datenfluss

Der grundlegende Ablauf der Anwendung:

```text
Start
  │
  ▼
init()
  │
  ├── renderPage()
  │      │
  │      ├── Header rendern
  │      ├── Pokémon laden
  │      └── Footer rendern
  │
  ▼
PokéAPI
  │
  ▼
Pokémon-Daten
  │
  ▼
allPokemons
  │
  ▼
displayedPokemons
  │
  ├── Suche
  │
  ├── Typfilter
  │
  └── Load More
  │
  ▼
Pokémon-Karten
  │
  ▼
Detailansicht
  │
  ├── Eigenschaften
  ├── Statuswerte
  ├── Favorit
  ├── Evolution Chain
  └── Navigation
```

---

## 📚 Lernziele

Mit diesem Projekt vertiefe ich meine Kenntnisse in:

- REST-APIs
- API-Datenverarbeitung
- `fetch()`
- `async/await`
- Promises
- DOM-Manipulation
- dynamischem HTML
- Template Literals
- Arrays und Objekten
- Array-Methoden wie `filter()`, `map()` und `find()`
- Event Handling
- Suchfunktionen
- Filterlogik
- LocalStorage
- HTML Dialog
- Responsive Webdesign
- CSS Custom Properties
- modularer JavaScript-Struktur
- Fehlerbehandlung
- Unit Testing
- Test Driven Development Grundlagen
- Git und GitHub

---

## 🧪 Beispiel einer getesteten Funktion

Die Navigation des Dialogs wurde in eine eigene Funktion ausgelagert:

```javascript
export function rightArrow(currentIndex, allPokemons) {
    currentIndex++;

    if (currentIndex >= allPokemons.length) {
        currentIndex = 0;
    }

    return currentIndex;
}
```

Dadurch kann die Logik unabhängig von der Benutzeroberfläche getestet werden.

Beispiel:

```javascript
assert.equal(rightArrow(1, allPokemons), 2);
```

Diese Trennung zwischen **Anwendungslogik und UI** macht einzelne Funktionen einfacher testbar und wartbar.

---

## 🛠️ Aktuelle Verbesserungsmöglichkeiten

Das Projekt befindet sich weiterhin in Entwicklung.

Geplante bzw. mögliche Verbesserungen:

- 🔍 API-basierte Suche statt Suche nur innerhalb bereits geladener Pokémon
- ❤️ vollständige Favoritenansicht
- 💾 Verbesserung der LocalStorage-Verwaltung
- 🧪 vollständige Testabdeckung
- 🧪 weitere Edge-Case-Tests
- ⚡ Optimierung der API-Anfragen
- 📊 zusätzliche Pokémon-Statistiken
- 🎨 weitere Typfilter
- 🔎 verbesserte Such- und Filterkombination
- 📱 weitere Optimierungen für kleine Displays
- ⏳ verbesserte Ladezustände
- ❌ bessere Fehlermeldungen bei API-Ausfällen
- 🧹 weitere Aufteilung und Optimierung des JavaScript-Codes

---

## ⚠️ Bekannte Punkte im aktuellen Entwicklungsstand

> [!WARNING]
> Das Projekt wird aktiv weiterentwickelt. Einige Bereiche befinden sich noch in der Optimierung.

Aktuell gibt es unter anderem folgende Punkte, die weiter verbessert werden können:

- Die Suchfunktion durchsucht aktuell nur bereits geladene Pokémon.
- Die Favoritenverwaltung benötigt noch eine vollständige Anzeige und Optimierung.
- Einige Unit Tests sind noch nicht vollständig implementiert.
- `test.only()` sollte vor einem vollständigen Testlauf entfernt werden.
- Die Testfälle für Suche und Typfilter benötigen noch konkrete Testdaten.
- Die API verwendet mehrere Requests für Detailinformationen und Evolutionsketten.

Diese Punkte sind Teil des aktuellen Entwicklungsprozesses und werden schrittweise verbessert.

---

## 🗺️ Roadmap

### Version 1.0

- [x] Grundstruktur der Anwendung
- [x] Header
- [x] Footer
- [x] Pokémon-Karten
- [x] Grundlegendes CSS
- [x] PokéAPI-Anbindung

### Version 1.5

- [x] Pokémon laden
- [x] Load More
- [x] Suchfunktion
- [x] Typfilter
- [x] Loading Screen
- [x] Responsive Design

### Version 2.0

- [x] Detailansicht
- [x] Pokémon-Navigation
- [x] Evolution Chain
- [x] Favoriten-Funktion
- [x] LocalStorage
- [x] JavaScript-Aufteilung in mehrere Dateien
- [x] erste Unit Tests

### Version 2.1

- [ ] Favoriten vollständig anzeigen
- [ ] Suchfunktion optimieren
- [ ] Filter und Suche kombinieren
- [ ] Unit Tests erweitern
- [ ] Edge Cases testen
- [ ] API-Aufrufe optimieren
- [ ] Fehleranzeigen verbessern

### Zukünftige Erweiterungen

- [ ] Erweiterte Pokémon-Filter
- [ ] Sortierung
- [ ] zusätzliche Pokémon-Informationen
- [ ] bessere Performance
- [ ] weitere UI-Animationen
- [ ] optimierte Mobile-Version
- [ ] erweiterte Testabdeckung

---

## 🎯 Projektziele

Das Ziel dieses Projekts ist es, eine strukturierte und interaktive Webanwendung zu entwickeln und dabei moderne Frontend-Grundlagen praktisch anzuwenden.

Besonders wichtig sind dabei:

```text
API
 ↓
Datenverarbeitung
 ↓
JavaScript-Logik
 ↓
DOM-Manipulation
 ↓
Benutzeroberfläche
 ↓
Testing
```

Das Projekt dient gleichzeitig als Bestandteil meines persönlichen Entwickler-Portfolios.

---

## 💡 Motivation

Mit diesem Projekt möchte ich meine Fähigkeiten in der Frontend-Entwicklung kontinuierlich erweitern.

Der Fokus liegt nicht nur auf dem Erstellen einer funktionierenden Oberfläche, sondern auch auf:

- sauberer Code-Struktur
- wiederverwendbaren Funktionen
- verständlicher Logik
- API-Verarbeitung
- Fehlerbehandlung
- Responsive Design
- Unit Testing
- kontinuierlicher Verbesserung

Durch die schrittweise Erweiterung des Projekts kann ich neue Konzepte direkt praktisch anwenden und testen.

---

## 👨‍💻 Entwickler

**Kadir Kahraman**

Softwareentwickler

GitHub:

**ITKadirKahraman**

---

## 📌 Projektstatus

**Aktiver Entwicklungsstand**

Das Projekt wird kontinuierlich weiterentwickelt.

Neue Funktionen, Verbesserungen und Tests werden schrittweise ergänzt.

> [!NOTE]
> Dieses Repository dokumentiert gleichzeitig meinen Lernfortschritt in der Frontend-Entwicklung mit JavaScript und REST-APIs.

---

## ⭐ Technologien im Überblick

```text
HTML5
CSS3
JavaScript
Vanilla JavaScript
REST API
PokéAPI
Fetch API
Async/Await
DOM Manipulation
LocalStorage
HTML Dialog
CSS Custom Properties
Responsive Design
Node.js Test Runner
Unit Testing
Git
GitHub
Visual Studio Code
```

---

## 📄 Lizenz

Dieses Projekt wurde zu Lern- und Portfoliozwecken erstellt.

Pokémon und zugehörige Marken, Namen und Inhalte gehören ihren jeweiligen Rechteinhabern.

Die verwendete PokéAPI dient als externe Datenquelle für dieses Lernprojekt.