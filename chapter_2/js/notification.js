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
    document.querySelector(`.notification__list > div`).innerHTML = ``

    // Сброс сообщения с информацией
    document.querySelector(`.notification__info`).textContent = ``

    // добовляем все уведомления из локального хранилища в список
    for(let key of Object.keys(localStorage)) {
        document.querySelector(`.notification__list > div`).insertAdjacentHTML(`beforeend`, `
            <div class="notification__item">
                <div>${key} - ${localStorage.getItem(key)}</div>
                <button data-time="${key}">&times;</button>
            </div>
        `)
    }
    // сброс значений полей ввода "input"
    document.querySelector(`.notification__form input`).value = ``
    document.querySelector(`.notification__form textarea`).value = ``

    // удаление звукового уведомления
    if(document.querySelector(`.audioAlert`)) {
        document.querySelector(`.audioAlert`).remove()
    }
}

// ================================================
// Удаление элементов при нажатии на крестик
document.querySelector(`.notification__list`).addEventListener(`click`, function(e) {
    // проверяем объект события
    if(!e.target.dataset.time) {
        return
    }
    localStorage.removeItem(e.target.dataset.time)
    update()
})

// ===========================================
// Срабатывание уведомлений
// для часов
setInterval(() => {
    let currentDate = new Date()
    let currentHour = currentDate.getHours()
    if(currentHour < 10) {
        currentHour = `0`+currentHour
    }

    // для минут
    let currentMinute = currentDate.getMinutes()
    if(currentMinute < 10) {
        currentMinute = `0`+currentMinute
    }

    let currentTime = `${currentHour}:${currentMinute}`
    // обходим локальное хранилище
    for(let key of Object.keys(localStorage)) {
        let keyHour = key.split(`:`)[0]
        let keyMinute = key.split(`:`)[1]

        // Проверка в условии что текущее время совподает с настоящим
        if(key == currentTime || (keyHour == currentHour && keyMinute < currentMinute)) {
            document.querySelector(`button[data-time="${key}"]`).closest(`.notification__item`).classList.add(`notification__warning`)

            // ======================================================
            // Добовление звука
            if(document.querySelector(`.audioAlert`)) {
                document.querySelector(`body`).insertAdjacentHTML(`afterbegin`, `<audio loop class="audioAlert"><source src="../source/alert.mp3" type="audio/mpeg"></audio>`)

                // вызываем метод "play" для звука
                document.querySelector(`.audioAlert`).play()
            }
        }
    }
}, 1000)
