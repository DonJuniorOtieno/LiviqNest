document.getElementById("year").textContent = new Date().getFullYear();
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
    }
];

const propertyList = document.getElementById("property-list");
properties.forEach(p => {
    const el = document.createElement("div");
    el.classList.add("property");
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

function openModal(id) {
    const property = properties.find(p => p.id === id);
    document.getElementById("modal-title").textContent = property.title;
    document.getElementById("modal-price").textContent = `KES ${property.price.toLocaleString("en-KE")}`;
    
    pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: property.sphere,
        autoLoad: true,
        showZoomCtrl: false
    });

    document.getElementById("modal").style.display = "flex";
}

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});
