/* Universidad del Valle de Guatemala
// Autora: Andrea Maria Cordon Mayen
// Carne: 16076
// Fecha: 16/07/2018
// client.js */

// Constante que guarda los estados importantes dentro de la pagina
const state = {
    tab: 0,
    completed: false,
};

// Se crea la función render 
const render = listState => {
    // Div de la barra principal
    const upperBar = document.createElement('div');
    upperBar.className = 'upperBar';

    // Botones para llevar a las diferentes pestanas
    const allBtn = document.createElement('button');
    allBtn.className = 'allBtn';
    upperBar.appendChild(allBtn);

    const completedBtn = document.createElement('button');
    completedBtn.className = 'completedBtn';
    upperBar.appendChild(completedBtn);

    const activeBtn = document.createElement('button');
    activeBtn.className = 'activeBtn';
    upperBar.appendChild(activeBtn);
}