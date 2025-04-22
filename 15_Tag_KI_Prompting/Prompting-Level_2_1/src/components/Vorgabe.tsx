type VorgabeProbs = {
  label: string;
}


const Vorgabe = ({ label }:VorgabeProbs) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
    {label}
  </button>
  )


export default Vorgabe 
