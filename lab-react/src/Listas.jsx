import Cards from "./Cards";
import { useState } from "react";

const  Listas = () => {
    const musics = [
        {id: 1, nombre: 'babymonster', imagen: 'babymonster.jpg'},
        {id: 2, nombre: 'hwasa', imagen: 'hwasa.jpg'},
        {id: 3, nombre: 'jennie', imagen: 'jennie.jpg'}
    ];

    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");

    const musicasFiltradas = musics.filter((music) => 
        music.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div
            style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h1>Total de Likes Musicas Favoritas: {total}</h1>

            <input 
                style={{
                    padding: "10px", 
                    marginBottom: "10px", 
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }} 
                type="text" 
                placeholder="Ingrese nombre de la música"
                value={busqueda}
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }}
            />

            <div style={{display: "flex", gap: '10px'}}>
                
                {musicasFiltradas.length === 0 && (
                    <p style={{ color: "#ccc", fontSize: "20px"}}>
                        No se encontraron musicas con el nombre "{busqueda}"
                    </p>
                )}

                {musicasFiltradas.map((music)=> {
                    return (
                        <Cards 
                            key={music.id} 
                            nombre={music.nombre} 
                            img={music.imagen} 
                            onLine={() => {
                                setTotal(total + 1);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Listas;