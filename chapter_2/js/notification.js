update()

// =============================
// Оброботка клика по кнопке "OK"
document.querySelector(`.notification__form button`).addEventListener(`click`, function() {
    // действия происходящие при нажатии на копку
    // для времени
    let time = document.querySelector(`.notification__form input`).value

    // для сообщения
    let message = document.querySelector(`.notification__form textarea`).value

    // Оброботка события ошибки
    let info = document.querySelector(`.notification__info`)

    if(!time || !message) {
        info.textContent = "Укажите время и сообщение"
        // срабатываение анимации
        info.style.opacity = 1
        setTimeout(()=> {
            info.style.opacity = 0
        },2000)
        setTimeout(()=> {
            info.textContent = ``
        },3000)
        return
    }
    localStorage.setItem(time, message)
    // вызов функции обновления
    update()
})

// ======================================
// Возможность отчистки списка уведомлений
document.querySelector(`.notification__list > button`).addEventListener(`click`, function() {
    // проверка списка уведомлеий на элементы в нем
    if(localStorage.length && confirm("Очистить список уведомлений?")) {
        localStorage.clear()
        // вызывем ункциюобновления
        update()

        // скрывем элемент ".notification__list" если локальное хранилище пустое
        document.querySelector(`.notification__list`).hidden = true
    } else if(!localStorage.length) {
        alert("Уыеломлений нет!")
    }
})

// ===================================
// Функция для обновления всей программы
function update() {
    // проверка на пустое хранилище, если да то скрываем, если ет то показываем
    if(!localStorage.length) {
        document.querySelector(`.notification__list`).hidden = true
    } else {
        document.querySelector(`.notification__list`).hidden = false
    }

    // отчистка контейнера с уведомлениями

}