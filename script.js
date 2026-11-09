// =====================================
// AROMA & GRANO - JAVASCRIPT
// =====================================

// CARTA DE PRODUCTOS

const menu = {
  cafes: [
    {
      name: "Café Americano",
      description: "Café suave, aromático y recién preparado.",
      price: 4500,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
    },
    {
      name: "Capuchino",
      description: "Espresso con leche cremosa y espuma.",
      price: 7000,
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600"
    },
    {
      name: "Latte",
      description: "Deliciosa combinación de café y leche.",
      price: 7500,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
    },
    {
      name: "Mocaccino",
      description: "Café espresso con chocolate y leche.",
      price: 8500,
      image: "https://images.unsplash.com/photo-1579888071069-c107a6f79d82?w=600"
    }
  ],

  frias: [
    {
      name: "Frappé de Café",
      description: "Café frío, leche y hielo triturado.",
      price: 9000,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
    },
    
      {
  name: "Limonada Natural",
  description: "Refrescante limonada preparada al momento.",
  price: 6000,
  image: "https://images.unsplash.com/photo-1665582313032-29058cee9c94?auto=format&fit=crop&w=600&q=85"
},
    
    {
      name: "Malteada de Chocolate",
      description: "Leche cremosa con chocolate.",
      price: 10000,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
    },
    {
      name: "Jugo Natural",
      description: "Jugo de frutas naturales.",
      price: 6500,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600"
    }
  ],

  panaderia: [
    {
      name: "Croissant",
      description: "Pan hojaldrado, dorado y crujiente.",
      price: 5000,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
    },
    {
      name: "Brownie",
      description: "Bizcocho de chocolate suave y delicioso.",
      price: 5500,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
    },
    {
      name: "Cheesecake",
      description: "Postre cremoso con base de galleta.",
      price: 8000,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600"
    },
    {
      name: "Galletas Artesanales",
      description: "Galletas recién horneadas.",
      price: 3500,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600"
    }
  ],

  desayunos: [
    {
      name: "Desayuno Tradicional",
      description: "Huevos, arepa, queso y bebida caliente.",
      price: 14000,
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600"
    },
    {
      name: "Tostadas Especiales",
      description: "Pan tostado con acompañamientos frescos.",
      price: 12000,
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=85"
    },
    {
      name: "Huevos al Gusto",
      description: "Huevos preparados a tu elección.",
      price: 10000,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=85"
    },
    {
      name: "Desayuno Completo",
      description: "Huevos, pan, fruta y café.",
      price: 18000,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600"
    }
  ]
};

// FORMATO DE PRECIOS

function formatPrice(price) {
  return "$" + price.toLocaleString("es-CO");
}

// MOSTRAR PRODUCTOS

const menuGrid = document.getElementById("menuGrid");

function showMenu(category) {
  menuGrid.innerHTML = "";

  menu[category].forEach(product => {
    const card = document.createElement("article");
    card.className = "menu-item";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "menu-info";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatPrice(product.price);

    info.append(title, description, price);
    card.append(image, info);
    menuGrid.appendChild(card);
  });
}

showMenu("cafes");

// PESTAÑAS DE LA CARTA

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));

    tab.classList.add("active");

    showMenu(tab.dataset.category);
  });
});

// MENÚ PARA CELULARES

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("show");
  });
});

// HORARIO AUTOMÁTICO

function checkOpeningStatus() {
  const now = new Date();

  const day = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const openingTime = 7 * 60;
  const closingTime = 20 * 60;

  const status = document.getElementById("openingStatus");

  if (day >= 1 && day <= 6 &&
      currentTime >= openingTime &&
      currentTime < closingTime) {

    status.textContent = "● ABIERTO AHORA";
    status.className = "status-open";

  } else {

    status.textContent = "● CERRADO";
    status.className = "status-closed";
  }
}

checkOpeningStatus();
setInterval(checkOpeningStatus, 60000);

// FECHA MÍNIMA DE RESERVA

const dateInput = document.getElementById("date");

const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

// VALIDACIÓN Y RESERVAS

const reservationForm = document.getElementById("reservationForm");
const reservationResult = document.getElementById("reservationResult");

reservationForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const people = Number(document.getElementById("people").value);

  if (!name || !email || !date || !time) {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (date < localToday) {
    alert("No puedes seleccionar una fecha pasada.");
    return;
  }

  if (!Number.isInteger(people) || people < 1 || people > 10) {
    alert("El número de personas debe estar entre 1 y 10.");
    return;
  }

  if (time < "07:00" || time > "19:30") {
    alert("El horario de reservas es de 7:00 a. m. a 7:30 p. m.");
    return;
  }

  const selectedDate = new Date(date + "T00:00:00");
  const day = selectedDate.getDay();

  if (day === 0) {
    alert("La cafetería permanece cerrada los domingos.");
    return;
  }

  if (date === localToday) {
    const currentMinutes = today.getHours() * 60 + today.getMinutes();
    const selectedMinutes = Number(time.split(":")[0]) * 60 +
      Number(time.split(":")[1]);

    if (selectedMinutes <= currentMinutes) {
      alert("Selecciona una hora posterior a la hora actual.");
      return;
    }
  }

  const formattedDate = selectedDate.toLocaleDateString("es-CO");

  reservationResult.innerHTML = `
    <div class="result-card">
      <h3>¡Reserva preparada con éxito! ☕</h3>
      <p><strong>Nombre:</strong> ${escapeHTML(name)}</p>
      <p><strong>Correo:</strong> ${escapeHTML(email)}</p>
      <p><strong>Fecha:</strong> ${formattedDate}</p>
      <p><strong>Hora:</strong> ${time}</p>
      <p><strong>Personas:</strong> ${people}</p>
      <p>Gracias por elegir Aroma & Grano.</p>
      <p>Para confirmar tu solicitud, envíala por WhatsApp.</p>
      <a class="btn whatsapp-btn" target="_blank" rel="noopener"
        href="https://wa.me/573126020219?text=${encodeURIComponent(
          "Hola, quiero solicitar una reserva en Aroma & Grano.\nNombre: " +
          name + "\nCorreo: " + email + "\nFecha: " +
          formattedDate + "\nHora: " + time +
          "\nPersonas: " + people
        )}">
        Enviar reserva por WhatsApp
      </a>
    </div>
  `;

  reservationResult.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}