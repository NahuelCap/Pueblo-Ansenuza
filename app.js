import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCL2GOoYrOC6Rt73oZ6VCGtqKz880ARSrI",
  authDomain: "app-restaurante-f2a8d.firebaseapp.com",
  databaseURL: "https://app-restaurante-f2a8d-default-rtdb.firebaseio.com",
  projectId: "app-restaurante-f2a8d",
  storageBucket: "app-restaurante-f2a8d.firebasestorage.app",
  messagingSenderId: "612743851779",
  appId: "1:612743851779:web:51c37e51ef2d49eda24336"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getDatabase(appFirebase);

const menu = {

entradas:[
{nombre:"Empanada Criolla o JyQ",precio:3000},
{nombre:"Papas Fritas",precio:12000},
{nombre:"Omelette",precio:12000},
{nombre:"Provoleta a la Parrilla",precio:18000},
{nombre:"Rabas a la Romana",precio:35000}
],

infantil:[
{nombre:"Tallarines",precio:15000},
{nombre:"Milanesa con Fritas",precio:15000},
{nombre:"Suprema con Fritas",precio:15000}
],

clasicos:[
{nombre:"Milanesa",precio:16000},
{nombre:"Milanesa Napolitana",precio:20000},
{nombre:"Suprema",precio:15000},
{nombre:"Suprema Napolitana",precio:20000},
{nombre:"Lomito",precio:18000},
{nombre:"Lomo al Plato",precio:18000},
{nombre:"Hamburguesa",precio:12000},
{nombre:"Tostado",precio:7000},
{nombre:"Sandwich Jamon Crudo y Rucula",precio:15000},
{nombre:"Sandwich de Milanesa",precio:18000},
{nombre:"Picada Caliente",precio:15000}
],

pastas:[
{nombre:"Tallarines",precio:15000},
{nombre:"Ñoquis",precio:15000},
{nombre:"Ravioles Carne y Verdura",precio:16000},
{nombre:"Raviolones de Zapallo",precio:18000},
{nombre:"Sorrentinos JyQ",precio:18000},
{nombre:"Sorrentinos de Bondiola",precio:18000},
{nombre:"Sorrentinos de Nutria",precio:20000}
],

carnes:[
{nombre:"Matambre de Cerdo",precio:30000},
{nombre:"Churrasco de Cerdo",precio:28000},
{nombre:"Costilla Banderita",precio:28000},
{nombre:"Bife de Chorizo",precio:28000},
{nombre:"Entraña",precio:28000},
{nombre:"Bondiola de Cerdo",precio:25000},
{nombre:"Osobuco al Disco",precio:25000},
{nombre:"Parrilla 5 Cortes",precio:25000}
],

pescados:[
{nombre:"Pejerrey a la Romana",precio:18000},
{nombre:"Pejerrey al Champignon o Roquefort",precio:22000},
{nombre:"Peje-raba",precio:40000},
{nombre:"Trucha al Champignon Criolla o Roquefort",precio:25000}
],

pollos:[
{nombre:"Patamuslo",precio:12000},
{nombre:"Bife de Pollo",precio:10000},
{nombre:"Pollo al Champignon",precio:18000}
],

pizzas:[
{nombre:"Muzzarella",precio:18000},
{nombre:"Napolitana",precio:20000},
{nombre:"Especial",precio:20000},
{nombre:"Rucula y Jamon Crudo",precio:25000}
],

ensaladas:[
{nombre:"Rucula y Queso",precio:8000},
{nombre:"Cesar",precio:15000},
{nombre:"Completa",precio:15000}
],

postres:[
{nombre:"Helado",precio:5000},
{nombre:"Chocotorta",precio:5000},
{nombre:"Tiramisu",precio:5000},
{nombre:"Coctel de Frutas",precio:5000},
{nombre:"Flan",precio:5000},
{nombre:"Budin de Pan",precio:5000}
],

bebidasSinAlcohol:[
{nombre:"Agua Mineral 500cc",precio:3000},
{nombre:"Agua Saborizada 500cc",precio:5000},
{nombre:"Soda 500cc",precio:2000},
{nombre:"Agua Mineral 1.5L",precio:6000},
{nombre:"Agua Saborizada 1.5L",precio:7000},
{nombre:"Limonada",precio:10000},
{nombre:"Coca Cola 350cc",precio:5000},
{nombre:"Coca Cola Zero 350cc",precio:5000},
{nombre:"Sprite 350cc",precio:5000},
{nombre:"Fanta 350cc",precio:5000},
{nombre:"Coca Cola 1.25L",precio:8000},
{nombre:"Coca Cola Zero 1.25L",precio:8000},
{nombre:"Sprite 1.25L",precio:8000},
{nombre:"Fanta 1.25L",precio:8000}
],

cervezas:[
{nombre:"Brahma 473cc",precio:6000},
{nombre:"Quilmes 473cc",precio:6000},
{nombre:"Quilmes Cero 473cc",precio:6000},
{nombre:"Quilmes Stout 473cc",precio:6000},
{nombre:"Heineken 473cc",precio:6000},
{nombre:"Stella Artois 473cc",precio:6000},
{nombre:"Santa Fe 473cc",precio:6000},
{nombre:"Budweiser 473cc",precio:6000},
{nombre:"Corona 330cc",precio:8000},
{nombre:"Heineken 710cc",precio:8000},
{nombre:"Corona 710cc",precio:10000},
{nombre:"Brahma 1L",precio:10000},
{nombre:"Santa Fe 1L",precio:10000},
{nombre:"Budweiser 1L",precio:10000},
{nombre:"Stella 1L",precio:12000},
{nombre:"Quilmes 1L",precio:10000},
{nombre:"Quilmes Stout 1L",precio:12000},
{nombre:"Heineken 1L",precio:12000}
],

vinosBlancos:[
{nombre:"Estancia Mendoza",precio:6000},
{nombre:"Lopez Sauvignon Blanc",precio:8000},
{nombre:"Etchard Privado Chardonnay",precio:8000},
{nombre:"Otro Loco Mas Chardonnay",precio:8000},
{nombre:"Benjamin Nicto",precio:9000},
{nombre:"Santa Julia Chardonnay",precio:10000},
{nombre:"Santa Julia Chenin Dulce",precio:12000},
{nombre:"Latitud 33 Chardonnay",precio:15000}
],

vinosTintos:[
{nombre:"Estancia Mendoza",precio:6000},
{nombre:"Otro Loco Mas Malbec",precio:8000},
{nombre:"Cordero Piel de Lobo Malbec",precio:9000},
{nombre:"Santa Julia Malbec",precio:10000},
{nombre:"Santa Julia Tinto Dulce",precio:12000},
{nombre:"Latitud 33 Malbec",precio:14000},
{nombre:"La Linda Malbec",precio:15000},
{nombre:"Alambrado Malbec",precio:15000},
{nombre:"Famiglia Bianchi Malbec",precio:17000},
{nombre:"Trumpeter Malbec",precio:18000},
{nombre:"Saint Felicien Malbec",precio:26000},
{nombre:"Luigi Bosca Malbec",precio:30000},
{nombre:"Catena Dv Cabernet Malbec",precio:35000}
],

espumantes:[
{nombre:"Federico De Alvear",precio:20000},
{nombre:"Chandon Extra Brut",precio:35000},
{nombre:"Baron B Extra Brut",precio:50000}
],

tragos:[
{nombre:"Gancia",precio:3500},
{nombre:"Cinzano",precio:3500},
{nombre:"Ginebra",precio:4000},
{nombre:"Fernet Servido",precio:6000},
{nombre:"Whisky White Horse o JB",precio:10000},
{nombre:"Especiales",precio:10000}
]

};

let pedido = [];
let total = 0;

window.mostrarCategoria = function(categoria){

  let contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  let caja = document.createElement("div");
  caja.style.width = "100%";
  caja.style.display = "flex";
  caja.style.flexDirection = "column";
  caja.style.alignItems = "center";

  let titulo = document.createElement("div");
  titulo.innerText = categoria.toUpperCase();
  titulo.style.background = "orange";
  titulo.style.color = "white";
  titulo.style.padding = "10px 20px";
  titulo.style.borderRadius = "10px";
  titulo.style.fontWeight = "bold";
  titulo.style.marginBottom = "15px";
  titulo.style.fontSize = "20px";

  caja.appendChild(titulo);

  let contProductos = document.createElement("div");
  contProductos.style.display = "flex";
  contProductos.style.flexWrap = "wrap";
  contProductos.style.justifyContent = "center";
  contProductos.style.gap = "10px";

  menu[categoria].forEach(p => {

    let btn = document.createElement("button");

    btn.innerText = p.nombre + " $" + p.precio;

    btn.style.background = "white";
    btn.style.color = "black";
    btn.style.border = "2px solid orange";
    btn.style.borderRadius = "8px";
    btn.style.padding = "10px";
    btn.style.cursor = "pointer";

    btn.onclick = () => agregar(p.nombre, p.precio);

    contProductos.appendChild(btn);
  });

  caja.appendChild(contProductos);
  contenedor.appendChild(caja);
};

window.onload = async function(){
  let mesa = sessionStorage.getItem("mesa");
  let mozo = sessionStorage.getItem("mozo");
  let titulo = document.getElementById("mesa");

  if(titulo){
    titulo.innerText = "Mesa " + mesa;
  }

  if(mozo && mesa){
    const snapshot = await get(child(ref(db), "mesas/" + mozo + "/" + mesa));

    if(snapshot.exists()){
      const data = snapshot.val();
      pedido = data.pedido || [];
      total = Number(data.total) || 0;
      mostrar();
    }
  }
};

window.agregar = function(nombre, precio){

  precio = Number(precio);

  let producto = pedido.find(p => p.nombre === nombre);

  if(producto){
    producto.cantidad++;
    producto.subtotal += precio;
  }else{
    pedido.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1,
      subtotal: precio
    });
  }

  total += precio;
  mostrar();
};

function mostrar(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  pedido.forEach((p, index) => {

    let li = document.createElement("li");

    li.innerHTML =
      p.nombre +
      (p.detalle ? " (" + p.detalle + ")" : "") +
      " x" + p.cantidad +
      " - $" + p.subtotal +
      " <button onclick='sumar(" + index + ")'>➕</button>" +
      " <button onclick='restar(" + index + ")'>➖</button>" +
      " <button onclick='agregarDetalle(" + index + ")'>✏️</button>" +
      " <button onclick='eliminarProducto(" + index + ")'>❌</button>";

    lista.appendChild(li);
  });

  document.getElementById("total").innerText = "Total: $" + Number(total);
}

window.sumar = function(index){
  let precio = Number(pedido[index].precio);

  pedido[index].cantidad++;
  pedido[index].subtotal += precio;
  total += precio;

  mostrar();
};

window.restar = function(index){
  let precio = Number(pedido[index].precio);

  pedido[index].cantidad--;
  pedido[index].subtotal -= precio;
  total -= precio;

  if(pedido[index].cantidad <= 0){
    pedido.splice(index,1);
  }

  mostrar();
};

window.eliminarProducto = function(index){
  total -= pedido[index].subtotal;
  pedido.splice(index,1);
  mostrar();
};

window.enviarPedido = async function(){

  let mesa = sessionStorage.getItem("mesa");
  let mozo = sessionStorage.getItem("mozo");

  if(!mozo){
    alert("No hay mozo logueado");
    return;
  }

  if(pedido.length === 0){
    alert("No hay productos");
    return;
  }

  const datos = {
    mesa: mesa,
    mozo: mozo,
    pedido: pedido,
    total: Number(total)
  };

  await set(ref(db, "mesas/" + mozo + "/" + mesa), datos);

  alert("Pedido enviado");

  pedido = [];
  total = 0;

  window.location.href = "mesas.html";
};

window.volverMenu = function(){
  document.getElementById("lista").scrollIntoView();
};

window.cerrarMesa = function(){
  pedido = [];
  total = 0;
  alert("Mesa cerrada");
  window.location.href = "mesas.html";
};

window.agregarDetalle = function(index){

  let texto = prompt("Agregar detalle (ej: sin tomate, sin sal, etc):");

  if(texto === null) return;

  pedido[index].detalle = texto;

  mostrar();
};