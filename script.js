const avanca=document,querySelectorA11(".btn-proximo");
avanca.forEach(button=>{
  button.addEventlistener('click',function(){
    const atual=document.querySelector('ativo');
    const proximoPasso=' passo-'+ this.getAttribute('data-proximo');

    atual.classlit.remove('ativo');
    document.getElementById(proximoPasso).classlist.add('ativo');
  })
})

           
