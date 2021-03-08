let confirmRemove = (evento,formulario) => {
    evento.preventDefault()

    Swal.fire({
        title: '¿Estás seguro?',
        text: "Esto es irrecuperable",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borralo!!'
      })
      .then((result) => {
        if (result.isConfirmed) {
         formulario.submit()
        }
      })
}

const $ = (e) => {
    return document.querySelector(e)
}

window.onload = function(){

    console.log('Javascript está vinculado correctamente');

    const $modo = document.getElementById('modo');

  /*   $modo.onclick = function(){
        document.body.classList.toggle('temaOscuro')
        document.querySelectorAll('.card').forEach((el) => el.classList.toggle('temaOscuroCard'))
    } */

    $modo.addEventListener('click',()=>{
        document.body.classList.toggle('temaOscuro')
        document.querySelectorAll('.card').forEach((el) => el.classList.toggle('temaOscuroCard'))
    })

    $('nav').addEventListener('mouseover',()=> {
        $('#marca').style.color = "red"
    })
    $('nav').addEventListener('mouseout',()=> {
        $('#marca').style.color = 'black'
    })
}


