# 🧾 Aufgabenbeschreibung

Nutze einen KI-basierte Chat-Assistenten deiner Wahl, z. B. [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [DeepSeek](https://chat.deepseek.com/) …

**Ausgangssituation:**

Du möchtest eine Card-Komponente erstellen, die stilistisch zu einer bestehenden React-Komponente passt. Ausgangspunkt ist ein Beispiel für einen Button.

```markdown
const Button = ({ label }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
    {label}
  </button>
);
```

**Aufgabe:**

- Überlege, wie du dieses Beispiel in einen Prompt einbauen kannst.
- Dein Ziel: Eine Card-Komponente im gleichen Stil generieren lassen.
- Achte darauf, dass die KI:
    - sich am Stil und Aufbau der Button-Komponente orientiert
    - Tailwind verwendet
    - eine Card mit Titel, Beschreibung und Call-to-Action-Button erstellt
- Übernimm das erste Ergebnis in den Ordner "vorher", öffne es in VS Code und schau es dir im Browser an.
- Verbessere deinen Prompt so, dass der Output deinen Erwartungen besser entspricht.
- Übernimm die finale Version in den Ordner "nachher".

# ✍️ Prompts

## ✍️ Mein Prompt 1
Ich möchte in React TS eine Card-Componente erstellen. Es soll Tailwind verwendet werden. die Card-Componente soll folgende Inhalte haben: Titel, Beschreibung und Call-to-Action-Button. Die Card Componente soll im gleichen Stil und Aufbau wie diese Button-Componente erstellt werden:
"const Button = ({ label }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
    {label}
  </button>
);"
![alt text](<Bildschirmfoto 2025-04-22 um 15.35.32.png>)

Das Ergebnis sieht bereits nach dem 1. Prompt so aus, wie ich es erwartet habe.


# 🧠 Reflexion

## 🧠 Was hat gut funktioniert?
durch meinen sehr ausführlichen Prompt bin ich sofort an mein gewünschtes Ergebnis gekommen.

## 🧠 Was war schwierig oder musste verbessert werden?
-