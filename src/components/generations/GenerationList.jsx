import GenerationCard from "./GenerationCard";
import Spinner from "../layout/Spinner";
import { getEntity } from "../../context/pokemonActions";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GenerationList() {
  const [generations, setGenerations] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const loadGenerations = async () => {
      const generations = await getEntity("generation", "", "[]");
      setGenerations(generations.results);
    };
    loadGenerations();
    setLoading(false);
  }, []);

  if (!loading) {
    return (
      <div className="generation-container">
        {generations &&
          generations.map((generation, index) => {
            console.log(generation);
            return <GenerationCard key={index} generation={generation} />;
          })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default GenerationList;
