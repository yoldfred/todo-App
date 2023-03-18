const ACCIONES = {
    remove: (i) => {
        let lista = []

        bd.map((tarea, index) => {

            if (i != index) {

                lista.push(tarea)

            }
        })

        bd = lista

        renderList(bd)
    },
    accept:(i)=>{
        bd[i].estado = 1
        renderList(bd)
    },
    progress:(i)=>{
        bd[i].estado = 0
        renderList(bd)
    }
}

let bd = [];

let domContainer = {
    mainSection: undefined
}

domContainer.mainSection = document.querySelector('.mainSection');

document.addEventListener('click',function(e){
    console.log(e.target.dataset)
    let dataset = e.target.dataset
    if("index" in dataset){
        let ac = e.target.classList[0]
        ACCIONES[ac](dataset.index)
    }
})

document.formulario.addEventListener('submit', crearTarea);

function crearTarea(e) {
    e.preventDefault();

    bd.push(
        {
            titulo: document.formulario.tarea.value,
            estado: 0

        }
    )
    console.log(bd)

    document.formulario.tarea.value = "";
    renderList(bd)
}


function renderListTodo(obj) {
    return ` 
     <article class="listTodo ${obj.estado ? "accept" : ""}" >
        <span>${obj.index + 1}</span>
        <b>${obj.titulo}</b>
        <button data-index="${obj.index}" class="accept"><i class="fi  fi-sr-check"></i></button>
        <button data-index="${obj.index}" class="progress"><i class="fi   fi-sr-alarm-clock"></i></button>
        <button data-index="${obj.index}" class="remove"><i class="fi  fi-sr-delete"></i></button>
    </article>
`
}

function renderList(bd) {
    let string = "";


    bd.map((item, index) => {

        let tarea = { ...item,index}
        string += renderListTodo(tarea)

        console.log(item, tarea)
    });

    domContainer.mainSection.innerHTML = string
}

/**aplicando mejoras en la funcionabilidad */

