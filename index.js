
const handWorks = [
    {id: 1, name: 'Instalacion AA de 2000 a 3000 kcal/h(hasta 1/4 y 3/8) sin adicional', price: 35000},
    {id: 2, name: 'Instalacion AA de 3200 a 4500 kcal/h(hasta 1/4 y 1/2) sin adicional', price: 40000},
    {id: 3, name: 'Instalacion AA hasta 6000 kcal/h(hasta 1/4 y 5/8) sin adicional', price: 50000},
    {id: 4, name: 'Desinstalacion de Equipos Split', price: 15000},
    {id: 5, name: 'Visita tecnica hasta 30 km', price: 5000},
    {id: 6, name: 'Desinstalacion y limpieza de Equipos Split', price: 20000},
    {id: 7, name: 'Carga de gas para Equipos Split hasta 3000 Kcal/h', price: 15000},
    {id: 8, name: 'Cambio de capacitor', price: 14000},
    {id: 9, name: 'Recambio de plaqueta Split', price: 30000},
    {id: 10, name: 'Recambio robinete 1/4... 5/8(DESINST + ROBIN + GAS + INST) ', price: 50000},
    {id: 11, name: 'Presurizacion con nitrogeno h/6000 Kcal/h ', price: 6000},
  ];
  
  //filter filtra todos los elementos que cumplan la condicion
  
  let maxPrice = parseInt(prompt("Ingrese cuanto querria gastar"));
  let filtered = handWorks.filter(work => work.price <= maxPrice);
  
  let mensaje
  filtered.forEach((item) => {
    mensaje += `
    name: ${item.name}
    $${item.price}\n
  `;
  
  });
  alert(mensaje);