import { useState } from "react";

function NewsletterForm() {
    const [mail, setMail] = useState("");
    const [checked, setChecked] = useState(false);
    const [output, setOutput] = useState("");

    function sendEmail(event: React.FormEvent) {
        event.preventDefault();

        if (mail !== "" && checked !== false) {
            setMail("");
            setChecked(false);
            setOutput("Thank you! You are now subscribed.")
        } else{
            setOutput("Please enter a valid email and agree to the terms.")
        }
    }

    return (
        <div>
            <form>
                <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Your email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor="agree">I agree to receive the newsletter</label>
                <button onClick={sendEmail} type="submit">
                    Send
                </button>
            </form>
            <p>{output}</p>
        </div>
    );
}

export default NewsletterForm;
