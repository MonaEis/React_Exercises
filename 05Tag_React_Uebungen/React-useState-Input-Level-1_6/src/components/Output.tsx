type UserValueProps = {
    vorname: string
    nachname: string
    mail: string
}

const Output = (props: UserValueProps) => {
    console.log(props)
    return (
        <div className="output">
            <p>Vorname: <span>{props.vorname}</span></p>
            <p>Nachname: <span>{props.nachname}</span></p>
            <p>Email: <span>{props.mail}</span></p>
        </div>
    );
};

export default Output;
