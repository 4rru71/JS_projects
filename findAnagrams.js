/*
---Ejemplo de Entrada---
findAnagrams('Orchestra', [
      'cashregister',
      'Carthorse',
      'radishes',
    ]);
*/

export const findAnagrams = (objetivo,candidatos) => {
    let resultado=[];
    objetivo=objetivo.toLowerCase();
    for (let index = 0; index < candidatos.length; index++) {
      let prueba=candidatos[index];
      prueba=prueba.toLowerCase();
      //Probamos si el objetivo y el candidato son del mismo tamaño
      //&& Se comprueba que no son anagramas de si mismas
      if(objetivo.length=== prueba.length && objetivo!==prueba){
        //Recorremos el candidato para ver las coincidencias
        for (let j = 0; j < objetivo.length; j++) {
          //Busca la letra dentro de la palabra de candidatos
          let coincidencia=prueba.search(objetivo[j]);
          if ( coincidencia != - 1) {
            //Se crea una nueva cadena sin la coincidencia
            prueba=prueba.replace(objetivo[j],"");
          }else{
            //Si no hay coincidencia entonces se descarta esa prueba
            j=objetivo.length;
          }
        }
      }
      //Si se vacio la cadena de prueba entonces se agrega el candidato al resultado
      if (prueba.length===0) {
        resultado.push(candidatos[index]);
      }
    }
    //Devuelve el arreglo con los anagramas o vacio
    return resultado;
  };