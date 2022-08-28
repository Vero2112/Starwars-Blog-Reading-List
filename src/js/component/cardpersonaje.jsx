import React, { useEffect, useState, useContext } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

//create your first component
const CardPersonaje = () => {


    const [personajesCards, obtenerpersonajesCards] = useState([]);
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const URL = "https://www.swapi.tech/api/people";
    const getCharacter = (id) => {
        return fetch(`${URL}/${id}`);
    }
    console.log("id: ", id);

    // const getAllCharacters = () => {
    //     setLoading(true);
    //     getCharacters()
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             actions.setCharacters(data.results);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         }).finally(() => {
    //             setLoading(false);
    //         });
    // };

    const getCharacterInfo = () => {
        
        getCharacter(id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                actions.setCharacterInfo(data);
                // console.log("setCharacterInfo(): ", data.result.properties);
                console.log("data: ", data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    useEffect(() => {
        // getAllCharacters(); 
        getCharacterInfo();
    }, []);


    return (
        <>
            <div>
                <h1 className="ms-3">Characters</h1>
                <div className="container-fluid">
                    <div className="row flex flex-nowrap overflow-scroll">
                        {store.characterInfo.map((character) => (
                            <Card
                                key={character.uid}
                                id={parseInt(character.uid)}
                                name={character.name}
                                type="character"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardPersonaje;