var lista = [];
var categorias = [];
var produtos = [];

var textCtg = "";
var textProd = "";
var textAdd = "";
var textFinal = "";

function addProduct() {
  var elementoAdd = document.getElementById("adicionarElem");
  textCtg =
    "<div class='entradas'><label>Qual é a categoria do produto?</label><input type='text' id='ctgProd' placeholder='Insira a categoria' list='ctg'><datalist id='ctg'></datalist></div>";
  textProd =
    "<div class='entradas'><label>Qual é o produto a ser adicionado?</label><input type='text' id='newProd' placeholder='Insira o produto' list='prod'><datalist id='prod'></datalist></div>";
  textAdd =
    "<button onclick='acrescLista()' id='pushList'>Acrescentar</button>";
  elementoAdd.innerHTML = textCtg + textProd + textAdd;
}

function acrescLista() {
  var elementoCtg = document.getElementById("ctgProd").value;
  var elementoProd = document.getElementById("newProd").value;

  lista.push({ name: elementoProd, categoria: elementoCtg });

  if (!categorias.includes(elementoCtg)) {
    categorias.push(elementoCtg);
  }

  if (!produtos.includes(elementoProd)) {
    produtos.push(elementoProd);
  }

  var options1 = "";

  for (var i = 0; i < categorias.length; i++) {
    options1 += "<option value='" + categorias[i] + "' />";
  }

  document.getElementById("ctg").innerHTML = options1;

  var options2 = "";

  for (var i = 0; i < produtos.length; i++) {
    options2 += "<option value='" + produtos[i] + "' />";
  }

  document.getElementById("prod").innerHTML = options2;

  document.getElementById("ctgProd").value = "";
  document.getElementById("newProd").value = "";
}

function nAddProduct() {
  var elementoLista = document.getElementById("listaUl");
  var elementoFinal = document.getElementById("listaFinal");

  for (var i = 0; i < categorias.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(categorias[i]));
    item.setAttribute("id", categorias[i]);
    elementoLista.appendChild(item);
  }

  for (var n = 0; n < categorias.length; n++) {
    var elementoLinha = document.getElementById(categorias[n]);
    let item = document.createElement("ul");
    item.appendChild(document.createTextNode(""));
    item.setAttribute("id", categorias[n] + "Ul");
    elementoLinha.appendChild(item);
  }

  for (var j = 0; j < lista.length; j++) {
    for (var n = 0; n < categorias.length; n++) {
      if (lista[j].categoria == categorias[n]) {
        var elementoLinha2 = document.getElementById(categorias[n] + "Ul");
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(lista[j].name));
        item.setAttribute("id", lista[j].name);
        elementoLinha2.appendChild(item);
      }
    }
  }
}