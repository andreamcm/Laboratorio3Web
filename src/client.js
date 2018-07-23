/* Universidad del Valle de Guatemala
// Autora: Andrea Maria Cordon Mayen
// Carne: 16076
// Fecha: 16/07/2018
// client.js */

// Constante que guarda los estados importantes dentro de la pagina
const state = {
    //tab: ['ALL', 'COMPLETED', 'ACTIVE'],
    tab: 0,
    completed: 0,
};

// Se crea la función render 
const render = listState => {
    // Div de la barra principal
    const upperBar = document.createElement('div');
    upperBar.className = 'upperBar';

    // Botones para llevar a las diferentes pestanas
    const allBtn = document.createElement('button');
    allBtn.className = 'allBtn';
    allBtn.innerHTML = 'ALL';
    upperBar.appendChild(allBtn);

    const completedBtn = document.createElement('button');
    completedBtn.className = 'completedBtn';
    completedBtn.innerHTML = 'COMPLETED';
    upperBar.appendChild(completedBtn);

    const activeBtn = document.createElement('button');
    activeBtn.className = 'activeBtn';
    activeBtn.innerHTML = 'ACTIVE';
    upperBar.appendChild(activeBtn);

    // Div para las tareas
    const taskBar = document.createElement('div');
    taskBar.className = 'taskBar';

    // Div de la lista de tareas
    const tasksList = document.createElement('div');
    tasksList.className = 'taskList';
    taskBar.appendChild(tasksList);

    const addBar = document.createElement('input');
    addBar.className = 'addBar';
    taskBar.appendChild(addBar);
    addBar.innerHTML = 'Ingrese la tarea';

    const addBtn = document.createElement('button');
    addBtn.className = 'addBtn';
    addBtn.innerHTML = 'ADD';
    taskBar.appendChild(addBtn);

    /*const task = document.createElement('button');
    task.className = 'task';
    tasksList.appendChild(task);*/

    const task1 = document.createElement('button');
    task1.className = 'task';
    tasksList.appendChild(task1);

    const task2 = document.createElement('button');
    task2.className = 'task';
    tasksList.appendChild(task2);

    const task3 = document.createElement('button');
    task3.className = 'task';
    tasksList.appendChild(task3);


    // Promises


    // Events
    addBtn.onclick = () => {
        const task = document.createElement('button');
        task.className = 'task';
        task.innerHTML = document.getElementsByClassName('addBar')[0].value;
        addBar.value = '';
        tasksList.appendChild(task);
    }

    allBtn.onclick = () => {

    }

    completedBtn.onclick = () => {

    }

    activeBtn.onclick = () => {

    }

    // A utilizar con promesas segun Samuel...PREGUNTAR
    /*const​​ solicitud​​=fetch​(​'https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json'​);
      solicitud 
      .​then​(resultado ​=>​​resultado​.​json​()) 
      .​then​(resultadoJSON ​=>​​console​.​log​(​"lalalala"​,resultadoJSON​[​1​].title)) 
      .​catch​(error ​=>​​console​.​log​(​"AHORA SI!"​, ​error​));*/
    
    //Main rendering
    root.appendChild(upperBar);
    root.appendChild(taskBar);

}

render(state);