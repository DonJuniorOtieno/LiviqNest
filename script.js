const properties = [
    {
        id: 1,
        title: "3-Bedroom Townhouse — Kilimani",
        price: 12000000,
        brief: "Modern townhouse near Nairobi amenities.",
        cover: "https://images.unsplash.com/photo-1560185127-6ed8f3d70fc9?q=80&w=1200&auto=format&fit=crop",
        sphere: "https://pannellum.org/images/cerro-toco-0.jpg"
    },
    {
        id: 2,
        title: "2-Bedroom Apartment — Westlands",
        price: 7200000,
        brief: "Quiet block with secure parking.",
        cover: "https://images.unsplash.com/photo-1572120360610-d971b9b1f6a8?q=80&w=1200&auto=format&fit=crop",
        sphere: "https://pannellum.org/images/alma.jpg"
    },
    {
        id: 3,
        title: "4-Bedroom Villa — Karen",
        price: 25000000,
        brief: "Spacious villa with a large garden.",
        cover: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
        sphere: "https://pannellum.org/images/bma-1.jpg"
    },
    {
        id: 4,
        title: "1-Bedroom Studio — CBD",
        price: 5500000,
        brief: "Compact studio in the heart of the city.",
        cover: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
        sphere: "https://pannellum.org/images/bma-2.jpg"
    },
    {
        id: 5,
        title: "5-Bedroom Mansion — Runda",
        price: 55000000,
        brief: "Luxurious mansion with a swimming pool.",
        cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        sphere: "https://pannellum.org/images/from-field.jpg"
    },
    {
        id: 6,
        title: "3-Bedroom Bungalow — Lavington",
        price: 18000000,
        brief: "Charming bungalow with a mature garden.",
        cover: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
        sphere: "https://pannellum.org/images/kitchen.jpg"
    }
];

const propertyList = document.querySelector(".gallery-grid");

if (propertyList) {
    properties.forEach(p => {
        const el = document.createElement("div");
        el.classList.add("property-card");
        el.innerHTML = `
            <img src="${p.cover}" alt="${p.title}">
            <div class="property-content">
                <h3>${p.title}</h3>
                <p>${p.brief}</p>
                <div class="price">KES ${p.price.toLocaleString("en-KE")}</div>
                <button class="view-btn" onclick="openModal(${p.id})">View 360°</button>
                <button class="contact-btn" onclick="alert('Contact agent for ${p.title}')">Contact</button>
            </div>
        `;
        propertyList.appendChild(el);
    });
}


function openModal(id) {
    const property = properties.find(p => p.id === id);
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").textContent = property.title;
    document.getElementById("modal-price").textContent = `KES ${property.price.toLocaleString("en-KE")}`;

    pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: property.sphere,
        autoLoad: true,
        showZoomCtrl: false
    });

    modal.style.display = "flex";
}

const closeModalButton = document.getElementById("close-modal");
if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    });
}
