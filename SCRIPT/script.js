function Ola_Mundo(){
    alert ("Projeto Iniciando, You Are G.A.Y!!!!!")
}

escrever = msg => alert(msg);
soma = (a,b) => a + b; 
sub = (a,b) => a - b;
mult = (a,b) => a * b; 
div = (a,b) => a / b;
raiz = a => Math.sqrt(a);
equacao2grau = (a,b,c) => {
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta < 0) return "Não possui raiz Real "
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
            "x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}

escrever(equacao2grau(2,3,5));
