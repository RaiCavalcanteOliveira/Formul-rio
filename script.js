function guardaFormulario(){
    //Capturar valores e criar variavel para novo objeto(json)
    var formCliente= new Object();

    formCliente.nome= document.getElementById('nome').value;
    formCliente.sobrenome= document.getElementById('sobrenome').value;
    formCliente.idade= document.getElementById('idade').value;
    formCliente.cpf=document.getElementById('cpf').value;
    formCliente.cep=document.getElementById('cep').value;
    formCliente.email=document.getElementById('email').value;
    formCliente.telefone=document.getElementById('telefone').value;
    formCliente.complemento=document.getElementById('complemento').value;
    

    //Converter para String JSON
    var json= JSON.stringify(formCliente);

    
    window.print(json);
    console.log(formCliente);
    console.log(formCliente.valueof());
    
    

    //Retorn o valor primitivo de um objeto
    

 
   
    

   
    


}