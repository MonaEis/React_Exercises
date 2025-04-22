type CardProps = {
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick: () => void;
  };
  
  const CardVorher = ({ title, description, buttonLabel, onButtonClick }: CardProps) => (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm transition duration-300 hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onButtonClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        {buttonLabel}
      </button>
    </div>
  );
  
  export default CardVorher;