const converterForm=document.getElementById("search-pokemon");
const inputSearch=document.getElementById("search-input");
const resultPokemon=document.getElementById("result-pokemon");
const postsContainer = document.getElementById("posts-container");//tbody

const pokemonList="https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchPokemon = async () => {
    try {
        const search=(inputSearch.value).toLowerCase();
        const res = await fetch(pokemonList+`/${search}`);
        const data = await res.json();
        despliegue(data);
    } catch (err) {
      console.log(err);
      alert("Pokémon not found");
    }
  };

const typesDestruc = (types) => {
    const typesPokemon = document.getElementById("types");
    typesPokemon.innerHTML = ""; // Limpiar antes de agregar

    types.forEach((el) => {
        const { type } = el;
        const typeName = type.name;
        
        // Crear etiqueta con clase de tipo
        const typeElement = document.createElement("span");
        typeElement.classList.add("type", typeName); // Agrega la clase de color
        typeElement.textContent = typeName;

        typesPokemon.appendChild(typeElement);
    });
};

const statsDestruc=(stats)=>{
    stats.forEach((el)=>{
        const {base_stat,stat}=el;
        const {name}=stat;
        const element=document.querySelector(`#${name}`);
        element.innerHTML=`
            <td>${base_stat}</td>
            `;
    });
    
}

const despliegue=(data)=>{
    const { name, id,weight,height,types,stats,sprites} = data;
    const {front_default}=sprites;
    
    document.getElementById("pokemon-name").textContent = name.toUpperCase();
    document.getElementById("pokemon-id").textContent = `#${id}`;
    document.getElementById("weight").textContent = `Weight: ${weight}`;
    document.getElementById("height").textContent = `Height: ${height}`;

    typesDestruc(types);
    const spritePokemon=document.querySelector(`#sprite`);
    spritePokemon.innerHTML=`<img id="sprite" src=${front_default}>`;
    statsDestruc(stats);

}
  
function formActivity(e){
    e.preventDefault();
    fetchPokemon();
}

converterForm.addEventListener("submit",formActivity);