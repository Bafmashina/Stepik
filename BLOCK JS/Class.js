class People {
    /**
     * 
     * @param {String} fio по формату "Фамилия Имя Отчество"
     * @param {String} birthday день рождение по формату "24.11.1994"
     * @param {String} numbers "номер", если больше 2 номеров то по формату "номер1, номер2"
     * @param {Number} room комната
     */
    constructor(fio, birthday, numbers="", room="") {
        let name = fio.toLowerCase().split(" ");
        this.name = {};
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

        let date = birthday.split(".")
        this.date = {};
        this.date.d = +date[0]
        this.date.m = +date[1]
        this.date.g = +date[2]

        let phone = numbers.split(", ")
        this.numbers = [];
        for(let i=0; i<phone.length; i++) {
            this.numbers.push(phone[i])
        }
        this.room = +room
    }
    static month = ["января", "февряля", "марта", "апреля", "мая", "июня", "июля", "августа", "снтября", "октября", "ноября", "декабря"];
    /**
     * Вывести ФИО
     * @return {String} Строка формата "Фамилия Имя Отчество"
     */
    getFio() {
        return `${this.name.f} ${this.name.i} ${this.name.o}`
    }
    /**
     * Вывести день рожения
     * @return {String} Строка формата "22 июля 1998"
     */
    getBirthday() {
        return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.g}`
    }
    /**
     * Вывести Фамилия_Имя_ОТчество.расширение
     * @param {String} extention расширение, например "jpg" или "png"
     * @return {String} для названия изоброжения
     */
    getImgSrc(extention) {
        return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
    }
    /**
     * Вывести все номера телефона или тоько первы номер
     * @param {Boolean} allNumbers если true то все номера, если false только первый номер
     * @return {String} Строка формата: "89005557744","89098378241"
     */
    getNumberList(allNumbers) {
        if(this.numbers.length == 0 || this.numbers[0].length == 0)
        return undefined
        if(allNumbers == true) {
            return this.numbers.join(", ")
        } else {
            return this.numbers[0];
        }
    }
}
let people1 = new People("Кузьмин Александр Игоревич","18.08.1998", "9984, 8847, 5478", 542)
let people2 = new People("Иванов Сергей Петрович", "23.08.1996", "8421", "4750", "5182", 331)
let people3 = new People("Петров Игорь Васильевич", "26.08.1963")