const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "R\xe9union",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Cura\xe7ao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "\xc5land Islands",
    status: "Inactive",
  },
];

function renderCustomers(e) {
  let t = document.getElementById("customer-table-body");
  (t.innerHTML = ""),
    e.forEach((e) => {
      let n = document.createElement("tr");
      n.classList.add("table__row"),
        (n.innerHTML = `
      <td class="table__cell">${e.name}</td>
      <td class="table__cell">${e.company}</td>
      <td class="table__cell">${e.phone}</td>
      <td class="table__cell">${e.email}</td>
      <td class="table__cell">${e.country}</td>
      <td class="table__cell">
        <button class="status-button ${e.status.toLowerCase()}">${
          e.status
        }</button>
      </td>
    `),
        t.appendChild(n);
    });
}
(window.onload = function () {
  renderCustomers(customers);
}),
  document.querySelectorAll(".sidebar__item").forEach((e) => {
    e.addEventListener("click", () => {
      let t = e.getAttribute("data-href");
      t && (window.location.href = t);
    });
  });
const user = {
  name: "Evano",
  trade: "Project Manager",
  photo: "path/to/user-photo.jpg",
};

function displayGreeting(e) {
  let t = document.getElementById("greeting"),
    n = document.getElementById("user-name"),
    a = document.getElementById("user-trade"),
    o = document.getElementById("user-photo");
  (t.innerText = `Hello, ${e.name}`),
    (n.innerText = `${e.name}`),
    (a.innerText = `${e.trade}`),
    (o.src = e.photo);
}
(window.onload = function () {
  displayGreeting(user), renderCustomers(customers);
}),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".pagination"),
      t = e.querySelectorAll(".pagination__button"),
      n = e.querySelector(".pagination__prev"),
      a = e.querySelector(".pagination__next"),
      o = 1;

    function c() {
      t.forEach((e) => {
        e.classList.remove("active"),
          e.textContent == o && e.classList.add("active");
      });
    }
    n.addEventListener("click", () => {
      o > 1 && (o--, c());
    }),
      a.addEventListener("click", () => {
        o < t.length - 2 && (o++, c());
      }),
      t.forEach((e) => {
        e.classList.contains("pagination__prev") ||
          e.classList.contains("pagination__next") ||
          e.addEventListener("click", () => {
            (o = parseInt(e.textContent)), c();
          });
      }),
      c();
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".search-icon"),
      t = document.querySelector(".search-input");
    e.addEventListener("click", () => {
      let e = t.value;
      console.log("Searching for:", e);
    });
  });

function addHorizontalScroll() {
  const tableContainer = document.querySelector(".table-container");
  tableContainer.style.overflowX = "auto";

  const table = document.querySelector(".table");
  table.style.minWidth = "768px";
}

// Виклик функції
addHorizontalScroll();

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const statisticsBlock = document.getElementById("statistics-block");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      if (query === "newest") {
        const totalCustomers = customers.length;
        const activeCustomers = customers.filter(
          (c) => c.status === "Active"
        ).length;
        const inactiveCustomers = customers.filter(
          (c) => c.status === "Inactive"
        ).length;

        document.getElementById(
          "total-customers"
        ).innerText = `Total customers found: ${totalCustomers}`;
        document.getElementById(
          "active-customers"
        ).innerText = `Active customers: ${activeCustomers}`;
        document.getElementById(
          "inactive-customers"
        ).innerText = `Inactive customers: ${inactiveCustomers}`;

        statisticsBlock.style.display = "block";
      } else {
        statisticsBlock.style.display = "none";
      }
    });
  } else {
    console.error("Element with ID 'search-input' not found");
  }
});
