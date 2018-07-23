/* Universidad del Valle de Guatemala
// Autora: Andrea Maria Cordon Mayen
// Carne: 16076
// Fecha: 16/07/2018
// client.js */

// Constante que guarda los estados importantes dentro de la pagina
const state = {
    //tab: ['ALL', 'COMPLETED', 'ACTIVE'],
    tab: 0,
    taskList: []
};

// Promises
const promesa = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
promesa
    .then(resultado => resultado.json())
    .then(resultadoJSON => {
        for (let i = 0; i < resultadoJSON.length; i += 1){
            state.taskList.push([resultadoJSON[i].title, resultadoJSON[i].isCompleted])
        }
        console.log(state.taskList)
        render(state);
    });

// Se crea la función render 
const render = listState => {

    if(root.hasChildNodes()){
        root.innerHTML = null;
    }

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

    // Events
    allBtn.onclick = () => {
        state.tab = 0;
        render(state);
        console.log(state.tab);
    }

    completedBtn.onclick = () => {
        state.tab = 1;
        render(state);
        console.log(state.tab);
    }

    activeBtn.onclick = () => {
        state.tab = 2;
        render(state);
        console.log(state.tab);
    }

    // Agregar objetos (nuevas cosas)
    addBtn.onclick = () => {
        const task = document.createElement('button');
        task.className = 'task';
        task.innerHTML = document.getElementsByClassName('addBar')[0].value;
        addBar.value = '';
        tasksList.appendChild(task);
    }

    //Para agregar las actividades a la lista y ordenarlas segun se desee filtrar
    if (state.tab == 0){
        for(let i = 0; i < state.taskList.length; i += 1){
            const task = document.createElement('button');
            task.className = `task ${state.taskList[i][1]}`;
            task.innerHTML = state.taskList[i][0];
            tasksList.appendChild(task);
        }
    }

    if (state.tab == 1){
        for(let i = 0; i < state.taskList.length; i += 1){
            if (state.taskList[i][1] == true) {
                const task = document.createElement('button');
                task.className = `task ${state.taskList[i][1]}`;
                task.innerHTML = state.taskList[i][0];
                tasksList.appendChild(task);
            }
        }
    }

    if (state.tab == 2){
        for(let i = 0; i < state.taskList.length; i += 1){
            if (state.taskList[i][1] == false) {
                const task = document.createElement('button');
                task.className = `task ${state.taskList[i][1]}`;
                task.innerHTML = state.taskList[i][0];
                tasksList.appendChild(task);
            }
        }
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
render(render);