let formm = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    formm.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    console.log("form submitted");
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    formm.reset();
    this.renderUi();
  },
  renderUi: function () {
    const usersContainer = document.querySelector(".users");
    usersContainer.innerHTML = "";

    this.users.forEach((user, index) => {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center mb-4";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Delete Button
      const delBtn = document.createElement("button");
      delBtn.textContent = "Remove";
      delBtn.className =
        "mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600";
      delBtn.onclick = () => this.removeUser(index);
      card.appendChild(delBtn);

      // Append card
      usersContainer.appendChild(card);
    });
  },
  removeUser: function (index) {
    this.users.splice(index, 1); // remove from array
    this.renderUi(); // re-render UI
  },
};

userManager.init();
