

const numNeighbours = prompt('How many neighbor countries does your country have?');

if (Number(numNeighbours) === 1) {
    console.log("Only 1 border");
}else if(numNeighbours>1){
    console.log("More than 1 border");
}else{
    console.log("No border");
}

// Khi thay đổi == thành === thì sẽ so sánh nghiêm ngặt do đó không thể so sánh chuỗi với number được
// thêm Number để chuyển chuỗi về thành dạng số (ép kiểu)