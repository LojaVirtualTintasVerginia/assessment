var chaveNota = document.getElementsByTagName("title")[0].textContent
        
//nps =  chaveNota.replace(/\D/gim, '').replace(/[^0-9]/g,'')


console.log(chaveNota, "teste aqui")


input.addEventListener("input", event => {
	link.href = "https://www.google.com/?q=" + input.value;
	link.textContent = input.value;
});