const qs = (el) => {
    return document.querySelector(el)
}

const add_task_btn = qs('#add-task-btn')
const results_container = qs('.results-container')
const select = qs('#filter-select')
const edit_task_container =  qs('.edit-task-container')
const add_task_container =  qs('.add-task-container')
const find_and_filter_container =  qs('.find-and-filter-container')
const btn_clean_all_container = qs('.btn-clean-all-container')
var total_tasks = 0
var arr_tarefas = []
var id;
verificarLocalStorage()

function verificarLocalStorage(){
    let tarefas = localStorage.getItem('tarefas')
    let tarefas_json;
    if (tarefas){
        tarefas_json = JSON.parse(tarefas)
        if (tarefas_json.length > 0 ){
            for (el of tarefas_json){
                adicionarTarefa(el.tarefa, el.finalized, el.id)
            }
            id = tarefas_json[tarefas_json.length - 1].id + 1
            arr_tarefas = tarefas_json
        } else {
            id = 0
            arr_tarefas = []
        }
    } else {
        id = 0
    }
}


// ADICIONAR TAREFA ->

function adicionarTarefa(valor, classe, ide){
    if (valor){
        var task_result = qs('.task').cloneNode(true)
        task_result.classList.remove('hide2')
        if (classe === false){
            task_result.classList.remove('finalized')
        } else {
            task_result.classList.add('finalized')
        }
        var paragraph = task_result.children[0]
        paragraph.innerHTML = valor
        task_result.setAttribute('id', ide)
        results_container.appendChild(task_result)
        btn_clean_all_container.classList.remove('hide')
        total_tasks += 1
    } else {
        var task_input_value = qs('#task-input').value
        if (task_input_value){
            var task_result = qs('.task').cloneNode(true)
            task_result.classList.remove('hide2')
            task_result.classList.remove('finalized')
            var paragraph = task_result.children[0]
            paragraph.innerHTML = `${task_input_value}`
            task_result.setAttribute('id', id)
            results_container.appendChild(task_result)
            qs('#task-input').value = ''
            qs('#find-input').value = ''
            select[0].selected = true
            filtrarTodas()
            btn_clean_all_container.classList.remove('hide')
            total_tasks += 1
            salvarTarefaLocalStorage(task_input_value)
            id += 1
        }
    }
}

function enviarTarefa(e){
    if (e.keyCode === 13){
        adicionarTarefa()
    }
}

function salvarTarefaLocalStorage(valor){
    arr_tarefas.push({id: id, tarefa: valor, finalized: false})
    localStorage.setItem('tarefas', JSON.stringify(arr_tarefas))
}


// ENCONTRAR TAREFA ->

function findTask(){
    valor_do_input = qs('#find-input').value
    if (valor_do_input){
        filtrarTodas()
        qs('#task-input').value = ''
        select[0].selected = true
        arr = [...results_container.children]
        resultado = []
        for (el of arr){
            if (el.children[0].innerHTML == valor_do_input){
                resultado.push(el)
            }
        }
        if (resultado != []){
            for (el of arr){
                el.classList.add('hide')
            }
            for (el of resultado){
                el.classList.remove('hide')
            }
        }
        btn_clean_all_container.classList.add('hide')
    }
}

function enviarFind(e){
    findTask()
    if (e.keyCode == 13){
        findTask()
        qs('#find-input').value = ''
    }
    if(e.keyCode == 8){
        LimparBusca()
    }
}

function cleanFindTask(){
    LimparBusca()
    qs('#find-input').value = ''
}

function LimparBusca(){
    arr = [...results_container.children]
    for (el of arr){
        el.classList.remove('hide')
    }
    select[0].selected = true
    if (total_tasks != 0){
        btn_clean_all_container.classList.remove('hide')
    }
}


// FILTRAR TAREFA ->

function realizarFiltragem(){
    qs('#task-input').value = ''
    qs('#find-input').value = ''

    let opcoes = select[select.selectedIndex].text
    switch (opcoes){
    case 'Todas':
        filtrarTodas()
        break
    case 'Feitas':
        filtrar('Feitas')
        break
    case 'A Fazer':
        filtrar()
        break
    }
}

function filtrarTodas(){
    let tasks = [...results_container.children]
    for (el of tasks){
        el.classList.remove('hide')
    }
    if (total_tasks != 0){
        btn_clean_all_container.classList.remove('hide')
    } else{
        btn_clean_all_container.classList.add('hide')
    }
}

function filtrar(situacao){
    filtrarTodas()
    let tasks = [...results_container.children]
    if (situacao == 'Feitas'){
        for(task of tasks){
            if (!task.classList.contains('finalized')){
                task.classList.add('hide')
            }
        }
        btn_clean_all_container.classList.add('hide')
    } else {
        for(task of tasks){
            if (task.classList.contains('finalized')){
                task.classList.add('hide')
            }
        }
        btn_clean_all_container.classList.add('hide')
    }
}


// TASK BTNS AÇÕES ->->->
// FINALIZAR TAREFA ->

function finalizarTask(obj){
    let task = obj.parentNode.parentNode
    task.classList.toggle('finalized')
    for (el of arr_tarefas){
        if (el.id == task.id){
            if (task.classList.contains('finalized')){
                el.finalized = true
                break
            } else{
                el.finalized = false
                break
            }
        }
    }
    localStorage.setItem('tarefas', JSON.stringify(arr_tarefas))
}


// EDITAR TAREFA ->

function editarTask(obj){
    add_task_container.classList.add('hide')
    find_and_filter_container.classList.add('hide')
    edit_task_container.classList.remove('hide')
    btn_clean_all_container.classList.add('hide')

    let tasks = results_container.children
    for (task of tasks){
        task.classList.add('hide')
    }

    let task_a_ser_editada = obj.parentNode.parentNode
    task_a_ser_editada.classList.remove('hide')
}

function realizarEdicao(){
    novo_valor = qs('#edit-task-input').value
    let alterar_task_localst;
    if (novo_valor){
        let tasks = results_container.children
        for (task of tasks){
            if (!task.classList.contains('hide')){
                task.children[0].innerHTML = novo_valor
                alterar_task_localst = task
            }
        }
        for (el of arr_tarefas){
            if (el.id == alterar_task_localst.id){
                el.tarefa = novo_valor
            }
        }
        localStorage.setItem('tarefas', JSON.stringify(arr_tarefas))
        qs('#edit-task-input').value = ''
        finishEdit()
    }
}

function EnviarEdicao(e){
    if (e.keyCode == 13){
        realizarEdicao()
    }
}

function finishEdit(){
    let tasks = results_container.children
    for (task of tasks){
        task.classList.remove('hide')
    }

    if (total_tasks != 0){
        btn_clean_all_container.classList.remove('hide')
    }
    edit_task_container.classList.add('hide')
    add_task_container.classList.remove('hide')
    find_and_filter_container.classList.remove('hide')
    select[0].selected = true
    qs('#edit-task-input').value = ''
}


// EXCLUIR TAREFA

function excluirTask(obj){
    let task = obj.parentNode.parentNode
    task.remove(true)
    total_tasks -= 1
    if (total_tasks === 0){
        btn_clean_all_container.classList.add('hide')
        id = 0
        arr_tarefas = []
        localStorage.setItem('tarefas', JSON.stringify(arr_tarefas))
    }
    excluirTarefaLocalStorage(task)
}

qs('#btn-clean-all').addEventListener('click', ()=>{
    let tasks = results_container.children
    let ciclo = tasks.length
    while (ciclo > 0){
        tasks[ciclo - 1].remove(true)
        ciclo--
    }
    btn_clean_all_container.classList.add('hide')
    total_tasks = 0
    id = 0
    qs('#find-input').value = ''
    qs('#task-input').value = ''
    arr_tarefas = []
    localStorage.setItem('tarefas', arr_tarefas)
})


function excluirTarefaLocalStorage(task){
    for (el of arr_tarefas){
        if (el.id == task.id){
            arr_tarefas.splice(arr_tarefas.indexOf(el), 1)
        }
    }
    console.log(arr_tarefas)
    localStorage.setItem('tarefas', JSON.stringify(arr_tarefas))
}