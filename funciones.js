function getSeniales(leido){
  const leido = "100_200_50_330_250_180_190_200_150_90_165_240_20_340"; 
  return leido.split('_');
}

function getCuadrantes(seniales) {
    let cuadrantes = [];
    for (let senial of seniales) {
      let cuadrante = '';
      if (senial >= 0 || senial <= 90) {
        cuadrante = 'E';
      } 
      if (senial > 90 && senial <= 180) {
        cuadrante = 'N';
      } 
      if (senial > 180 && senial <= 270) {
        cuadrante = 'O';
      } 
      if (senial > 270 && senial <= 360) {
        cuadrante = 'S';
      }
      cuadrantes.push(cuadrante);
    }
    return cuadrantes.join('');
}

function contarCiclos(cuadrantes) {
    const ciclosCompletos = ['NESO', 'NOSE', 'OSEN', 'ESON', 'SENO', 'SONE', 'ENOS', 'ONES'];
    let ciclo= cuadrantes.replace(/ /g, "");
    for (let i = 0; i < ciclosCompletos.length; i++) {
      if (ciclo.match(ciclosCompletos[i]) != null) {
        ciclos++;
      }
    }
    return ciclos;
}

function porcentajeCuadrante(cuadrantes) {
    let secuencia = cuadrantes.replace(/ /g, ""); 
    const total = secuencia.length;
    const letras = {
      0: 'N',
      1: 'E',
      2: 'S',
      3: 'O'
    };
    for (let letra in letras) {
      letras[letra] = ((ciclo[letra] / total) * 100).toFixed(2);    
    }
    return letras;
}

function main(){
    const seniales = getSeniales(leido);
    const secuencia = getCuadrantes(seniales);
    const ciclos = contarCiclos(secuencia);
    const porcentajes = porcentajeCuadrante(secuencia);
    console.log("Señales ingresadas: " + seniales.join("_"))
    console.log("Secuencia de cuadrantes: " + secuencia);
    console.log("Cantidad de ciclos completos: " + ciclos);
    console.log("Porcentaje de ocurrencia de cada cuadrante:");
    console.log("Norte: ", porcentajes[0] + "%");
    console.log("Este: ", porcentajes[1] + "%");
    console.log("Sur: ", porcentajes[2] + "%");
    console.log("Oeste: ", porcentajes[3] + "%");
}