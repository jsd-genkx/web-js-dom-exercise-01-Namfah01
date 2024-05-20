document.addEventListener
    const button = document.getElementById('onclick');   //กำหนดให้ปุ่ม click me id = 'onclick'
    const helloWorldText = document.getElementById('hello'); //กำหนดให้ id ของ text = 'hello'
    const button2 = document.getElementById('back'); //กำหนดให้ปุ่ม Reset id = back

    button.addEventListener('click',function () {         //เมื่อกดปุ่ม click me กำหนดให้เนื้อหาในส่วนของhtml จะเปลี่ยนจาก Hello world เป็น Hello javascript innerHTML
        helloWorldText.innerHTML = 'Hello JavaScript innerhtml!';
    });

    button2.addEventListener('click',function () {         //เมื่อกดปุ่ม Reset กำหนดให้เนื้อหาในส่วนของhtml จะเปลี่ยนจาก Hello javascript innerHTML เป็น Hello world
        helloWorldText.innerHTML = 'Hello World!'
    }
)

