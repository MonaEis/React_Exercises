# 🧾 Aufgabenbeschreibung

### Aufgabe Teil 1: React-Komponente

Erstelle mit Hilfe von Autovervollständigung eine React-Komponente mit etwa 30 Zeilen, die Folgendes erfüllt:

- Zeigt eine Liste von Produkten an (Titel, Preis, Bild)
- Nutzt Props, um die Daten zu übergeben
- Beinhaltet ein einfaches CSS-Styling (z. B. via Tailwind)
- Nutzt keine externe API

Vorgehen:

1. Starte mit Codeium:
    - Aktiviere Codeium, deaktiviere Copilot.
    - Lege eine Datei ProductsCodeium.tsx
    - Beginne mit einem Kommentar oder Funktionsnamen wie:
    // React-Komponente: ProductList, erhält Produkte als Props
    - Beobachte die Vorschläge, arbeite damit weiter und übernimm passenden Code.
    - Speichere das Ergebnis im Ordner „codeium“.
2. Wechsle zu GitHub Copilot:
    - Deaktiviere Codeium, aktiviere Copilot.
    - Wiederhole die Aufgabe mit exakt gleichem Start und Ziel.
    - Speichere das Ergebnis im Ordner „copilot“.

---

### Aufgabe Teil 2: Utility-Funktion

- Lege einen Ordner util an
- Erstelle dort mit Hilfe der Code-Vervollständigung eine Funktion namens getUserActivityPattern, die das Login-Verhalten einer bestimmten Nutzer:in analysiert.
- Eingabedaten:
    
    Ein Array von Objekten mit folgenden Eigenschaften:
    
    - userId (Text)
    - timestamp (Zeitstempel im ISO-Format, z. B. "2025-04-03T09:14:00Z")
    - location (Text - Ort)
    
    Beispiel-Daten:
    
    ```tsx
    userId: "abc123", timestamp: "2025-04-03T09:14:00Z", location: "Berlin"
    userId: "abc123", timestamp: "2025-04-04T03:10:00Z", location: "Tokyo"
    ```
    

Ziel:

Die Funktion soll für eine:n bestimmte:n Nutzer:in analysieren:

- Zu welcher Tageszeit loggt sich die Person typischerweise ein (z. B. „vormittags“, „abends“)
- Ob die meisten Logins vom gleichen Ort stammen (locationConsistency: true/false)
- Ob das Verhalten auffällig wirkt (z. B. viele Orte oder nächtliche Aktivität → suspicious: true)

Rückgabe:

Ein Objekt mit:

- timeOfDay (Text)
- locationConsistency (true/false)
- suspicious (true/false)

# ✍️ Prompt
React-Komponente: ProductList, erhält Produkte als Props

# 🛠️ Tools
Windsurf & Copilot

# 🧠 Reflexion

## 🧠 Was hat gut funktioniert?

# 1. Aufgabe: 
Beide Assistenten geben mir die gleiche Lösung. 
Einziger Unterschied: Windsurf arbeitet mit Types und Copilot mit Interfaces.

# 2. Aufgabe: 
Beide Assistenten geben mir eine ähnliche Lösung. 
Etwas einfacher zu handlen war hier Copilot.