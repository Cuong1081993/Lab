"use strict";

const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const tableBodyEl = document.getElementById("tbody");

const healthyBtn = document.getElementById("healthy-btn");

const petArr = [];

const data1 = {
  id: "1",
  name: "Jane",
  age: 2,
  type: "Cat",
  weight: 5,
  length: 20,
  color: "Red",
  breed: "Englang",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(2023, 6, 3),
};
const data2 = {
  id: "2",
  name: "Kane",
  age: 4,
  type: "Dog",
  weight: 51,
  length: 2,
  color: "Blue",
  breed: "Viet Nam",
  vaccinated: false,
  dewormed: false,
  sterilized: true,
  date: new Date(2023, 8, 3),
};
petArr.push(data1);
petArr.push(data2);
console.log(petArr);

submitBtn.addEventListener("click", function () {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    date: new Date(),
  };
  const validate = validateData(data);

  if (validate) {
    //thêm pet vào danh sách
    petArr.push(data);
    //Hiển thị danh sách Pet
    renderTableData(petArr);

    //Xóa các dữ liệu nhập trên form
    clearInput();
  }
});
renderTableData(petArr);

function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.value = "Select Breed";
  typeInput.value = "Select Type";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}
function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  petArr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope="row">${pet.id}</th>
							<td>${pet.name}</td>
							<td>${pet.age}</td>
							<td>${pet.type}</td>
							<td>${pet.weight}kg</td>
							<td>${pet.length} cm</td>
							<td>${pet.breed}</td>
							<td>
								<i class="bi bi-square-fill" style="color: ${pet.color}"></i>
							</td>
							<td><i class="bi ${
                pet.vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
              }"></i></td>
							<td><i class="bi ${
                pet.dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
              }"></i></td>
							<td><i class="bi ${
                pet.sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
              }"></i></td>
							<td>${pet.date.getDate()}/${
      pet.date.getMonth() + 1
    }/${pet.date.getFullYear()}</td>
							<td><button class="btn btn-danger" onclick="deletePet('${
                pet.id
              }')">Delete</button>
							</td>`;
    tableBodyEl.appendChild(row);
  });
}
function deletePet(petId) {
  const isDeleted = confirm("Are you sure ?");
  if (isDeleted) {
    for (let i = 0; i < petArr.length; i++) {
      if (petId === petArr[i].id) {
        petArr.splice(i, 1);
        renderTableData(petArr);
      }
    }
  }
}
function validateData(data) {
  let isValidate = true;
  if (data.id.trim() === "") {
    alert("Vui lòng điền ID !");
    isValidate = false;
  }
  if (data.name.trim() === "") {
    alert("Vui lòng điền tên Pet !");
    isValidate = false;
  }
  if (isNaN(data.age)) {
    alert("Vui lòng điền tuổi !");
    isValidate = false;
  }
  if (isNaN(data.weight)) {
    alert("Vui lòng điền cân nặng !");
    isValidate = false;
  }
  if (isNaN(data.length)) {
    alert("Vui lòng điền độ dài !");
    isValidate = false;
  }
  for (let i = 0; i < petArr.length; i++) {
    if (data.id == petArr[i].id) {
      alert("ID must be unique!");
      isValidate = false;
      break;
    }
    if (data.age < 1 || data.age > 15) {
      alert("Age must be between 1 and 15 !");
      isValidate = false;
    }
    if (data.weight < 1 || data.weight > 15) {
      alert("Weight must be between 1 and 15 !");
      isValidate = false;
    }
    if (data.length < 1 || data.lenght > 100) {
      alert("Age must be between 1 and 100 !");
      isValidate = false;
    }
    if (data.type === "Select Type") {
      alert("Please select Type !");
      isValidate = false;
    }
    if (data.breed === "Select Breed") {
      alert("Please select Breed !");
      isValidate = false;
      break;
    }
  }
  return isValidate;
}

let healthyCheck = false;

healthyBtn.addEventListener("click", function () {
  if (healthyCheck === true) {
    const healthyPet = [];

    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized) {
        healthyPet.push(petArr[i]);
      }
    }
  }
  renderTableData(healthyBtn);
  healthyBtn.textContent = 'Show All Pet';
});
