document.addEventListener("DOMContentLoaded", function () {
    // تابع برای محاسبه جمع کل
    function calculateTotal() {
        let total = 0;

        // گرفتن تمامی مقادیر قیمت‌ها
        document.querySelectorAll(".product-subtotal .amount").forEach(function (priceElement) {
            // حذف کاراکتر دلار و تبدیل به عدد
            let price = parseFloat(priceElement.textContent.replace("$", ""));
            if (!isNaN(price)) {
                total += price;
            }
        });

        // نمایش جمع کل در بخش مربوطه
        const totalElement = document.querySelector(".checkout-top.checkout-item .price");
        if (totalElement) {
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    }

    // گوش دادن به تغییرات تعداد (input[type="number"])
    document.querySelectorAll(".product-quantity input").forEach(function (input) {
        input.addEventListener("change", function () {
            const row = input.closest("tr");
            const priceElement = row.querySelector(".product-price .amount");
            const subtotalElement = row.querySelector(".product-subtotal .amount");

            // گرفتن قیمت واحد و تعداد
            const unitPrice = parseFloat(priceElement.textContent.replace("$", ""));
            const quantity = parseInt(input.value);

            if (!isNaN(unitPrice) && !isNaN(quantity)) {
                // محاسبه جمع هر محصول
                const subtotal = unitPrice * quantity;
                subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
            }

            // محاسبه مجدد جمع کل
            calculateTotal();
        });
    });

    // محاسبه اولیه جمع کل
    calculateTotal();
});

document.addEventListener("DOMContentLoaded", function () {
    // انتخاب تمام دکمه‌هایی با کلاس remove-button
    const removeButtons = document.querySelectorAll(".remove-button");

    // اضافه کردن رویداد کلیک به هر دکمه
    removeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // پیدا کردن سطر (tr) والد دکمه و حذف آن
            const row = button.closest("tr");
            if (row) {
                row.remove();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // تابع برای محاسبه جمع کل
    function calculateTotal() {
        let total = 0;

        // گرفتن تمامی مقادیر قیمت‌ها
        document.querySelectorAll(".product-subtotal .amount").forEach(function (priceElement) {
            // حذف کاراکتر دلار و تبدیل به عدد
            let price = parseFloat(priceElement.textContent.replace("$", ""));
            if (!isNaN(price)) {
                total += price;
            }
        });

        // نمایش جمع کل در بخش مربوطه
        const totalElement = document.querySelector(".checkout-top.checkout-item .price");
        if (totalElement) {
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    }

    // گوش دادن به دکمه‌های حذف
    document.querySelectorAll(".product-remove button").forEach(function (button) {
        button.addEventListener("click", function () {
            const row = button.closest("tr"); // گرفتن سطر محصول
            if (row) {
                row.remove(); // حذف محصول
                calculateTotal(); // به‌روزرسانی جمع کل
            }
        });
    });

    // محاسبه اولیه جمع کل
    calculateTotal();
});



// document.addEventListener("DOMContentLoaded", function () {
//     // گرفتن دکمه و فیلد ورودی
//     const discountButton = document.querySelector(".ed-primary-btn");
//     const discountInput = document.querySelector(".form-control");

//     discountButton.addEventListener("click", function () {
//         const enteredCode = discountInput.value.trim(); // مقدار وارد شده در فیلد ورودی
//         const totalElement = document.querySelector(".checkout-top.checkout-item .price"); // عنصر نمایش قیمت کل

//         if (enteredCode === "121212") {
//             // گرفتن قیمت کل و تبدیل به عدد
//             let currentTotal = parseFloat(totalElement.textContent.replace("$", ""));
//             if (!isNaN(currentTotal)) {
//                 // کاهش 200 از قیمت کل
//                 const newTotal = Math.max(currentTotal - 200, 0); // اطمینان از عدم منفی شدن
//                 totalElement.textContent = `$${newTotal.toFixed(2)}`; // به‌روزرسانی نمایش قیمت
//                 alert("کد تخفیف اعمال شد! مبلغ 200 دلار از کل کم شد.");
//             }
//         } else {
//             alert("کد تخفیف نامعتبر است.");
//         }
//     });
// });

