console.log("ทดสอบ JavaScript");

function showWelcomeMessage() {
    console.log("ยินดีต้อนรับเข้าสู่ร้าน MiniShop!");
    console.log("วันนี้เรามีโปรโมชันพิเศษลด 50%");
}

showWelcomeMessage(); 

for (let i = 1; i <= 3; i++) {
    console.log("รอบที่ " + i + " : MiniShop ยินดีต้อนรับครับ!"); 
}

let product1 = {
    name: "สมาร์ตโฟนหน้าจอพับ",
    price: 32900
};

let product2 = {
    name: "หูฟังไร้สาย",
    price: 5900
};

console.log(product1.name);
console.log(product1.price);
console.log(product2.name);
console.log(product2.price);

let myCart = [];
myCart.push(product1);
myCart.push(product2);
console.log(myCart);

let totalAmount = 600;
// ถ้าลูกค้ามียอดซื้อมากกว่า 500 บาท ให้ระบบแจ้งว่าได้ของแถม
if (totalAmount > 500) {
    console.log("ยินดีด้วย! คุณได้รับสิทธิ์รับของแถมฟรี"); 
}

let cartTotal = 850;
if (cartTotal >=1000){
    console.log("ยอดชำระของคุณคือ " + cartTotal + " บาท (จัดส่งฟรี)"); 
} else {
    let finalPrice = cartTotal + 50; 
    console.log("รวมค่าจัดส่ง 50 บาท ยอดสุทธิคือ: " + finalPrice + " บาท"); 
}

let memberType = "agent"; 
// ตรวจสอบประเภทสมาชิกเพื่อแจ้งส่วนลด

if (memberType == "premium") {
    console.log("ลูกค้า Premium ได้รับส่วนลด 15%"); 
} else if (memberType == "agent") {
    console.log("ตัวแทนจำหน่าย ได้รับส่วนลด 10%"); 
} else {
    console.log("ลูกค้าทั่วไป ไม่มีส่วนลดเพิ่มเติม"); 
}

let priceList = [25900, 5900, 1890]; 
priceList.forEach(function(price) {
    console.log(price);
});
priceList.forEach(function(price, index){
    console.log("ลำดับที่ " + (index + 1) + " : ราคา " + price + " บาท");
});

let totalSum = 0;
priceList.forEach(function(itemPrice) {
    totalSum = totalSum + itemPrice; 
});
console.log("ยอดรวมราคาสินค้าทั้งหมดในตะกร้า: " + totalSum + " บาท"); 

let productList = [
    { name: "iPhone", price: 25900, category: "Mobile" },
    { name: "Fan", price: 5900, category: "Appliances" },
    { name: "Book", price: 1890, category: "Books" }
];

productList.forEach(function(product, index) {
    console.log("ชิ้นที่ " + (index + 1) + ": " + product.name + " ราคา " + product.price + " บาท (" + product.category + ")");
});

// สร้างฟังก์ชันแจ้งเตือนการหยิบสินค้าลงตะกร้า โดยรอรับชื่อสินค้าเข้ามา
function addToCartAlert(productName) {
    console.log("ระบบได้เพิ่ม " + productName + " ลงในตะกร้าของคุณแล้ว");
}
// เรียกใช้งานพร้อมส่งข้อความชื่อสินค้าเข้าไปในวงเล็บ
addToCartAlert("สมาร์ตโฟนหน้าจอพับ");
addToCartAlert("หูฟังไร้สาย");

// สร้างฟังก์ชันคำนวณภาษีมูลค่าเพิ่ม (VAT 7%) โดยรอรับตัวเลขยอดเงิน
function calculateVat(price) {
    let vatAmount = price * 0.07; // คำนวณหา 7% ของยอดเงิน
    return vatAmount;             // ส่งผลลัพธ์ตัวเลขที่คำนวณเสร็จแล้วกลับออกไป
}

// เรียกใช้ฟังก์ชัน โดยส่งยอดเงิน 1000 บาทเข้าไปคำนวณ
let myTax = calculateVat(1000);
console.log("ภาษีที่คุณต้องจ่ายคือ: " + myTax + " บาท");

// ค้นหาเป้าหมายรหัส priceDisplay แล้วสั่งเปลี่ยนข้อความด้านในใหม่
document.getElementById("priceDisplay").innerText = "ราคาสินค้า: 25,900 บาท";

// 1. ค้นหาปุ่มกดรหัส buyBtn แล้วเก็บใส่กล่องตัวแปรชื่อ myButton
let myButton = document.getElementById("buyBtn");

// 2. สั่งให้ปุ่มกดรอรับคำสั่งเมื่อถูกคลิก (onclick)
myButton.onclick = function() {
    alert("เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว!");
};

// 1. ค้นหาปุ่มคำนวณและเตรียมพร้อมรอรับการคลิก
let calcButton = document.getElementById("calcBtn");

calcButton.onclick = function() {
    
    // 2. ไปดึง "ตัวเลข" ที่ลูกค้าพิมพ์ไว้ในช่อง input (ต้องใช้ .value เสมอ)
    let quantity = document.getElementById("qtyInput").value;
    
    // 3. กำหนดราคาสินค้าคงที่ (เช่น โน้ตบุ๊กราคา 25900 บาท)
    let price = 25900;
    
    // 4. นำจำนวนที่ลูกค้ากรอกมาคูณ (*) กับราคา
    let totalPrice = price * quantity;
    
    // 5. นำผลลัพธ์ยอดรวม โยนกลับไปแสดงที่หน้าเว็บ
    document.getElementById("totalDisplay").innerText = "ยอดชำระทั้งหมด: " + totalPrice + " บาท";
};

