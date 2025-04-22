# 🧾 Aufgabenbeschreibung

Nutze einen KI-basierte Chat-Assistenten deiner Wahl, z. B. [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [DeepSeek](https://chat.deepseek.com/) …

### Ausgangsprompt:

> Meine Seite hängt sich auf und ich weiß nicht warum.
> 

**Aufgabe:**

- Verwende folgenden fehlerhaften React-Code als Ausgangspunkt:
    
    ```tsx
    import { useState, useEffect } from "react";
    
    const ProductList = () => {
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
        };
        fetchData();
      }, [products]);
    
      return (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      );
    };
    
    ```
    
- Kopiere diesen Code in eine Vite-App in den Ordner „vorher“ und öffne sie in VS Code.
- Gib den Code in deinen KI-Chat ein – mit einem Prompt deiner Wahl – und analysiere, wie die KI den Fehler identifiziert.
- Verbessere den Prompt schrittweise so, dass:
    - genauer auf useEffect hinweist
    - um eine Erklärung bittest, warum das passiert
    - eine saubere, funktionierende Lösung mit Begründung anforderst
- Übernimm die korrigierte Version in den Ordner „nachher“ und teste sie in deiner React-App.

# ✍️ Prompts

## ✍️ Mein Prompt 1
das ist meine Componente:
"import { useState, useEffect } from "react";

const ProductListVorher = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, [products]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};
export default ProductListVorher"

Meine Seite hängt sich auf und ich weiß nicht warum?
![alt text](<Bildschirmfoto 2025-04-22 um 15.51.37.png>)
![alt text](<Bildschirmfoto 2025-04-22 um 15.51.46.png>)



# 🧠 Reflexion

## 🧠 Was hat gut funktioniert?
Es hat super funktioniert. Bereits nach dem ersten Prompt, wurde der Fehler erkannt und einfach erklärt, woran der Fehler liegt. Ich musste gar nicht danach fragen. Aber wahrscheinlich liegt das daran, dass ich ChatGPT dahin schon gut trainiert habe ;).

## 🧠 Was war schwierig oder musste verbessert werden?
-