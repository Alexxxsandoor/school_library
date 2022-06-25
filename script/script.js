// Юзеры которых можно добавить
var user = [
	{
		name: "Анна",
		lastName: "Юр",
		login: "1",
		password: "1",
		dateLogin: "",
		date: "",
		class: 11,
	},
	{
		name: "Поліна",
		lastName: "Станченко",
		login: "2",
		password: "2",
		dateLogin: "",
		date: "",
		class: 10,
	},
]

//Выбор юзера которому хотим рекомендовать
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var userId;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

var url = "img/"
var pdf = "pdf/"

// Предметы
var lessonName = [
	{ ukr: "Алгебра", eng: "algebra" },
	{ ukr: "Біологія", eng: "biology" },
	{ ukr: "Геометрія", eng: "geometry" },
	{ ukr: "Українська література", eng: "ukrainianLiterature" },
	{ ukr: "Математика", eng: "mathematics" },
	{ ukr: "Хімія", eng: "chemistry" },
	{ ukr: "Фізика", eng: "physics" },
	{ ukr: "Географія", eng: "geography" },
	{ ukr: "Українська мова", eng: "ukrainianLanguage" },
	{ ukr: "Англійська мова", eng: "englishLanguage" },
	{ ukr: "Художня література", eng: "fiction" },
	{ ukr: "Навчальна література", eng: "educationalLiterature" },
]

var myFavoriteBooks = [

]
var myFavoriteGenre = []

// БД библиотеки
const librayBook = [
	{
		id: 0,
		name: "Біологія анатоміяанатоміяанатомія",
		grade: "11 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Задорожний К.М.",
		class: 11,
		img: url + "bio11.jpg",
		pdf: pdf + "bio11.pdf",
		year: "2019",
		rating: 0,
		topic: "анатомія",
	},
	{
		id: 1,
		name: "Географія",
		grade: "11 клас",
		lessonTitle: "geography", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Паламарчук Л.Б.",
		class: 11,
		img: url + "geo11.jpg",
		pdf: pdf + "geo11.pdf",
		year: "2011",
		rating: 2,
		topic: "",
	},
	{
		id: 2,
		name: "Геометрія",
		grade: "11 клас",
		lessonTitle: "geometry", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Мерзляк А.Г.",
		class: 11,
		img: url + "geom11.jpg",
		pdf: pdf + "geom11.pdf",
		year: "2019",
		rating: 4,
		topic: "",
	},
	{
		id: 3,
		name: "Українська мова",
		grade: "11 клас",
		lessonTitle: "ukrainianLanguage", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Бондаренко Н.В.",
		class: 11,
		img: url + "ukr11.jpg",
		pdf: pdf + "ukr11.pdf",
		year: "2011",
		rating: 6,
		topic: "",
	},
	{
		id: 4,
		name: "Навчальна література",
		grade: "11 клас",
		lessonTitle: "educationalLiterature", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Мерзляк А.Г.",
		class: 11,
		img: url + "geom11dop.jpg",
		pdf: pdf + "geom11dop.pdf",
		year: "2010",
		rating: 6,
		topic: "",
	},
	{
		id: 5,
		name: "Анна Кареніна",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Толстой Л.Н.",
		class: 11,
		img: url + "karenina.jpg",
		pdf: pdf + "karenina.pdf",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 6,
		name: "Гамлет",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Вільям Шекспір",
		class: 11,
		img: url + "hamlet.jpg",
		pdf: pdf + "hamlet.pdf",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 7,
		name: "Портрет Доріана Грея",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Оскар Вайльд",
		class: 11,
		img: url + "doriangrey.jpg",
		pdf: pdf + "doriangrey.pdf",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 8,
		name: "Портрет ",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Оскар",
		class: 11,
		img: "",
		pdf: "",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 9,
		name: "1984",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Джордж Орвелл",
		class: 11,
		img: url + "1984.jpg",
		pdf: pdf + "1984.pdf",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 10,
		name: "451 градус за Фаренгейтом",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Рей Бредбері",
		class: 11,
		img: url + "451.jpg",
		pdf: pdf + "451.pdf",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 11,
		name: "Маленький Принц",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Антуан де Сент-Екзюпері",
		class: 11,
		img: url + "littleprince.jpg",
		pdf: pdf + "littleprince.pdf",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 12,
		name: "Гордість і упередження",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Джейн Остін",
		class: 11,
		img: "",
		pdf: "",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 13,
		name: "Старий і море",
		grade: "художня література",
		lessonTitle: "fiction", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Ернест Хемінгуей",
		class: 11,
		img: "",
		pdf: "",
		year: "",
		rating: 6,
		topic: "",
	},
	{
		id: 14,
		name: "Біологія",
		grade: "11 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Соболь В.",
		class: 11,
		img: url + "bio11_2.jpg",
		pdf: pdf + "bio11_2.pdf",
		year: "2019",
		rating: 5,
		topic: "анатомія",
	},
	{
		id: 15,
		name: "Біологія",
		grade: "11 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Кучеренко М.",
		class: 11,
		img: url + "bio11_3.jpg",
		pdf: pdf + "bio11_3.pdf",
		year: "2006",
		rating: 2,
		topic: "",
	},
	{
		id: 16,
		name: "Біологія",
		grade: "8 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Матяш М.",
		class: 8,
		img: url + "bio8.jpg",
		pdf: pdf + "bio8.pdf",
		year: "2006",
		rating: 2,
		topic: "",
	},
	{
		id: 17,
		name: "Біологія",
		grade: "8 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Межжерін С.",
		class: 8,
		img: url + "bio8_2.jpg",
		pdf: pdf + "bio8_2.pdf",
		year: "2008",
		rating: 0,
		topic: "анатомія",
	},
	{
		id: 17,
		name: "Біологія",
		grade: "7 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Остапченко С.",
		class: 7,
		img: url + "bio7.jpg",
		pdf: pdf + "bio7.pdf",
		year: "2020",
		rating: 0,
		topic: "",
	},
	{
		id: 18,
		name: "Біологія",
		grade: "11 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Остапченко С.",
		class: 11,
		img: "",
		pdf: "",
		year: "",
		rating: 0,
		topic: "",
	},
	{
		id: 19,
		name: "Біологія",
		grade: "11 клас",
		lessonTitle: "biology", //biology, algebra, geometry, mathematics, chemistry, geography, ukrainianLanguage, englishLanguage
		author: "Остапченко С.",
		class: 11,
		img: "",
		pdf: "",
		year: "",
		rating: 0,
		topic: "",
	},
]

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------Подумай-------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const root = document.querySelector(".root")

// Создаем хедер, вверхний блок с инфой о юзере
function header(user) {
	const header = document.createElement("div")
	header.className = "header"


	const logo = document.createElement("h1")
	logo.className = "logo"
	logo.innerHTML = "єБібліотека"
	logo.setAttribute("onclick", "books(librayBook)")

	const userName = document.createElement("h3")
	userName.innerHTML = `${user.lastName} ${user.name} ${user.class} клас`

	header.append(logo)
	header.append(userName)

	root.append(header)
}

// Поиск книги по названию
function searchBook(librayBook) {
	const inputSearch = document.querySelector(".inputSearch").value

	if (inputSearch) {
		let newArrLibray = []
		for (let i = 0; i < librayBook.length; i++) {
			if (inputSearch == librayBook[i].name) {
				newArrLibray[i] = librayBook[i]
			}
		}
		newArrLibray = newArrLibray.filter(Boolean);
		books(newArrLibray, "rating")
	} else books(librayBook)

}

// Создаем поле для ввода поиска по названию и кнопка для всплывающего меню
function buttonFunction() {
	const searchDiv = document.createElement("div")
	searchDiv.className = "search"

	const search = document.createElement("input")
	search.className = "inputSearch"

	const searchButton = document.createElement("button")
	searchButton.innerHTML = "Знайти"
	searchButton.setAttribute("onclick", "searchBook(librayBook)")

	const searchButtonRating = document.createElement("button")
	searchButtonRating.innerHTML = "Рейтинг"
	searchButtonRating.setAttribute("onclick", "books(librayBook, 'rating')")

	const myBooks = document.createElement("button")
	myBooks.innerHTML = "Улюблені книги"
	myBooks.setAttribute("onclick", "books(myFavoriteBooks, 'rating')")

	const myGenre = document.createElement("button")
	myGenre.innerHTML = "Улюблені жанри"
	myGenre.setAttribute("onclick", "genre()")

	const searchMenuButton = document.createElement("button")
	searchMenuButton.innerHTML = "Меню"
	searchMenuButton.setAttribute("onclick", "menu(lessonName)")

	searchDiv.append(search)
	searchDiv.append(searchButton)
	searchDiv.append(searchButtonRating)
	searchDiv.append(myBooks)
	searchDiv.append(myGenre)
	searchDiv.append(searchMenuButton)


	root.append(searchDiv)
}

// Создаем само меню
function menu(lessonName) {

	const searchMenuDiv = document.querySelector(".menu")

	if (!searchMenuDiv) {
		const menu = document.createElement("div")
		menu.className = "menu"
		root.append(menu)

		const menuButton = document.createElement("button")
		menuButton.innerHTML = "Пошук за варіантами"
		menuButton.className = "searchMenu"
		menuButton.setAttribute("onclick", "options(librayBook, `button`)")
		menu.append(menuButton)

		const recommendationButton = document.createElement("button")
		recommendationButton.innerHTML = "Мої рекомендації"
		recommendationButton.className = "recommendationMenu"
		recommendationButton.setAttribute("onclick", "optionsUser(librayBook, user)")
		menu.append(recommendationButton)

		const titleYesLessonsMenu = document.createElement("h2")
		titleYesLessonsMenu.innerHTML = "Оберіть предмет:"

		menu.append(titleYesLessonsMenu)

		for (let i = 0; i < lessonName.length; i++) {
			const divLessonName = document.createElement("div")
			divLessonName.className = "divLessonName"

			const inputLesson = document.createElement("input")

			inputLesson.className = "lesson"
			inputLesson.setAttribute("type", "radio")
			inputLesson.setAttribute("name", "lessons")
			inputLesson.setAttribute("value", lessonName[i].eng)
			inputLesson.setAttribute("id", `lessons${i}`)

			const labelLesson = document.createElement("label")
			labelLesson.setAttribute("for", `lessons${i}`)
			labelLesson.innerHTML = lessonName[i].ukr

			divLessonName.append(inputLesson)
			divLessonName.append(labelLesson)

			menu.append(divLessonName)
		}


		const titleClassMenu = document.createElement("h2")
		titleClassMenu.innerHTML = "Оберіть клас:"
		menu.append(titleClassMenu)

		for (let i = 1; i < 12; i++) {
			const divClassName = document.createElement("div")
			divClassName.className = "divClassName"

			const inputClass = document.createElement("input")

			inputClass.className = "class"
			inputClass.setAttribute("type", "radio")
			inputClass.setAttribute("name", "class")
			inputClass.setAttribute("id", `class${i}`)
			inputClass.setAttribute("value", i)

			const labelClass = document.createElement("label")
			labelClass.setAttribute("for", `class${i}`)
			labelClass.innerHTML = `${i} Класс`

			divClassName.append(inputClass)
			divClassName.append(labelClass)

			menu.append(divClassName)
		}

		const titleNoLessonsMenu = document.createElement("h2")
		titleNoLessonsMenu.innerHTML = "Не цікавить"
		titleNoLessonsMenu.style.color = "red"
		menu.append(titleNoLessonsMenu)

		for (let i = 0; i < lessonName.length; i++) {
			const divNoLessonName = document.createElement("div")
			divNoLessonName.className = "divLessonName"

			const inputNoLesson = document.createElement("input")

			inputNoLesson.className = "lessonNo"
			inputNoLesson.setAttribute("type", "radio")
			inputNoLesson.setAttribute("name", "lessonsNo")
			inputNoLesson.setAttribute("value", lessonName[i].eng)
			inputNoLesson.setAttribute("id", `lessonsNo${i}`)

			const labelNoLesson = document.createElement("label")
			labelNoLesson.setAttribute("for", `lessonsNo${i}`)
			labelNoLesson.innerHTML = lessonName[i].ukr

			divNoLessonName.append(inputNoLesson)
			divNoLessonName.append(labelNoLesson)

			menu.append(divNoLessonName)
		}




	} else searchMenuDiv.remove()


}

// Главный блок по созданию книг
function books(librayBook, type) {

	if (!type == "rating") librayBook.sort(() => Math.random() - 0.5);
	else if (!type) librayBook.sort(() => Math.random() - 0.5);
	else {
		librayBook.sort(function (a, b) {
			return b.rating - a.rating
		})
	}

	const searchBooks = document.querySelector(".books")

	if (searchBooks) searchBooks.remove()


	if (librayBook.length == 0) {
		const books = document.createElement("div")
		books.className = "books"


		const noBooks = document.createElement("h2")
		noBooks.className = "nobooks"
		noBooks.innerHTML = "Книг немає!"
		books.append(noBooks)
		root.append(books)

	} else {

		const books = document.createElement("div")
		books.className = "books"

		root.append(books)

		for (let i = 0; i < librayBook.length; i++) {


			if (i % 4 == 0) {
				var divBooks = document.createElement("div")
				divBooks.className = `divbook${i}`
			}



			const book = document.createElement("div")

			divBooks.append(book)
			books.append(divBooks)



			book.className = `book`
			book.setAttribute("id", librayBook[i].id)

			book.innerHTML = `${librayBook[i].grade}<h3>${librayBook[i].name}</h3><h3>${librayBook[i].author}</h3>`


			const bookImg = document.createElement("img")

			if (librayBook[i].img) bookImg.setAttribute("src", librayBook[i].img)
			else bookImg.setAttribute("src", "img/noIMGBook.jpg")

			book.append(bookImg)

			const rating = document.createElement("p")
			rating.className = "rating"
			rating.innerHTML = `Рейтинг: ${librayBook[i].rating} ⭐`
			book.append(rating)

			const year = document.createElement("p")
			year.innerHTML = librayBook[i].year

			book.append(year)
			if (librayBook[i].pdf) {
				const buttonRead = document.createElement("a")
				buttonRead.innerHTML = "Читати"
				buttonRead.setAttribute("target", `_blank"`)
				buttonRead.setAttribute("href", `${librayBook[i].pdf}`)
				book.append(buttonRead)
			}
			else {
				const buttonRead = document.createElement("h3")
				buttonRead.innerHTML = "Книга відсутня!"
				book.append(buttonRead)
			}

			const details = document.createElement("details")
			const summary = document.createElement("summary")
			summary.innerHTML = "Знайти схожі книжки по"

			details.append(summary)
			const button = document.createElement("p")
			button.className = "searchBooks"
			button.innerHTML = "предмету"
			button.setAttribute("onclick", `options(librayBook, "book", "${librayBook[i].lessonTitle}", "")`)
			details.append(button)

			const button1 = document.createElement("p")
			button1.className = "searchBooks"
			button1.innerHTML = "класу"
			button1.setAttribute("onclick", `options(librayBook, "book", "", "${librayBook[i].class}")`)
			details.append(button1)


			const buttonTopic = document.createElement("p")
			buttonTopic.className = "searchBooks"
			buttonTopic.innerHTML = "темі"
			buttonTopic.setAttribute("onclick", `topic(librayBook,"${librayBook[i].topic}")`)
			details.append(buttonTopic)

			book.append(details)

			const button2 = document.createElement("p")
			button2.className = "searchBooks"
			button2.innerHTML = "Додати в улюблене"
			button2.setAttribute("onclick", `addBook(librayBook,${librayBook[i].id})`)
			book.append(button2)


		}

	}



}

// Блок сортировки по выбору предмета и книги
function options(librayBook, type, lessons, classB, topic) {
	const searchMenuDiv = document.querySelector(".menu")

	var l = lessons
	var c = classB
	var t = topic

	let allLesson, allClass, noLessonValue
	var lessonChoice, classChoice, newLibrayBooks, noLesson, topicChoice

	if (type == "button") {
		allLesson = document.querySelectorAll(".lesson")
		allClass = document.querySelectorAll(".class")
		noLesson = document.querySelectorAll(".lessonNo")



		for (let i = 0; i < allLesson.length; i++) {
			if (allLesson[i].checked) lessonChoice = allLesson[i].value
		}

		for (let i = 0; i < allClass.length; i++) {
			if (allClass[i].checked) classChoice = allClass[i].value
		}
		for (let i = 0; i < noLesson.length; i++) {
			if (noLesson[i].checked) {
				noLessonValue = noLesson[i].value


			}
		}
	}
	else if (type == "book") {
		lessonChoice = l
		classChoice = c
		topicChoice = t
	}


	if (noLessonValue == lessonChoice) {
		const searchMesseg = document.querySelector(".messeng")
		if (searchMesseg) searchMesseg.remove()
		else {
			const messeng = document.createElement("div")
			messeng.className = "messeng"
			messeng.style.background = "red"
			messeng.innerHTML = "Ви обрали однакові предмети"
			root.append(messeng)
			menu(lessonName)

			setTimeout(() => {
				const searchMesseg = document.querySelector(".messeng")
				searchMesseg.remove()

			}, 5000);
		}


	}
	else {
		if (noLessonValue) {
			var newlibrayBook = librayBook.filter((item) => item.lessonTitle !== noLessonValue);
			if (lessonChoice) {
				if (classChoice) {
					let arr = newlibrayBook.filter(elem => elem.lessonTitle == lessonChoice);
					arr = arr.filter(elem => elem.class == classChoice);
					books(arr, "rating")
				}
				else {
					newLibrayBooks = newlibrayBook.filter(elem => elem.lessonTitle == lessonChoice);
					books(newLibrayBooks, "rating")
				}
			} else {
				newLibrayBooks = newlibrayBook.filter(elem => elem.class == classChoice);
				books(newLibrayBooks, "rating")
			}
			if (type == "button") searchMenuDiv.remove()
		}
		else {
			if (lessonChoice) {
				if (classChoice) {
					let arr = librayBook.filter(elem => elem.lessonTitle == lessonChoice);
					arr = arr.filter(elem => elem.class == classChoice);
					books(arr, "rating")
				}
				else {
					newLibrayBooks = librayBook.filter(elem => elem.lessonTitle == lessonChoice);
					books(newLibrayBooks, "rating")
				}
			} else {
				newLibrayBooks = librayBook.filter(elem => elem.class == classChoice);
				books(newLibrayBooks, "rating")
			}
			if (type == "button") searchMenuDiv.remove()
		}
	}
}

function topic(librayBook, topic) {


	const newlibrayBook = librayBook

	let arr = newlibrayBook.filter(elem => elem.topic == topic);



	books(arr, "rating")

}
// Блок сортировки по классу юзера
function optionsUser(librayBook, user) {

	console.log(librayBook)
	console.log(user)

	const searchMenuDiv = document.querySelector(".menu")
	const newLibrayBooksUser = librayBook.filter(elem => elem.class == user[userId].class);
	books(newLibrayBooksUser, "rating")
	searchMenuDiv.remove()
}
// Блок для регестрации
function loginDiv(user) {

	const windowLoginAndPassword = document.createElement("div")
	windowLoginAndPassword.className = "windowLoginAndPassword"

	const inputLogin = document.createElement("input")
	inputLogin.setAttribute("placeholder", "Логін")
	inputLogin.className = "login"

	const inputPassword = document.createElement("input")
	inputPassword.setAttribute("placeholder", "Пароль")
	inputPassword.setAttribute("type", "password")
	inputPassword.className = "password"


	const button = document.createElement("button")
	button.innerHTML = "Увійти"
	button.setAttribute("onclick", "login(user)")

	windowLoginAndPassword.append(inputLogin)
	windowLoginAndPassword.append(inputPassword)
	windowLoginAndPassword.append(button)
	root.append(windowLoginAndPassword)
}
//Блок проверки логина и пароля
function login(user) {
	const login = document.querySelector(".login").value
	const password = document.querySelector(".password").value

	for (let i = 0; i < user.length; i++) {
		if (user[i].login == login && user[i].password == password) {
			const window = document.querySelector(".windowLoginAndPassword")
			userId = i
			window.remove()
			header(user[i])
			buttonFunction()
			books(librayBook)
		}
	}

}
//Добавить книги в любимые
function addBook(librayBook, id) {
	for (let i = 0; i < librayBook.length; i++) {

		if (librayBook[i].id == id) myFavoriteBooks[myFavoriteBooks.length] = librayBook[i]

	}
	myFavoriteBooks = myFavoriteBooks.reduce((o, i) => {
		if (!o.find(v => v.id == i.id)) {
			o.push(i);
		}
		return o;
	}, []);
}


//Добавление жанров доставая с книги
function genre() {
	for (let i = 0; i < myFavoriteBooks.length; i++) {
		myFavoriteGenre[myFavoriteGenre.length] = { lessonTitle: myFavoriteBooks[i].lessonTitle }
		myFavoriteGenre = myFavoriteGenre.reduce((o, i) => {
			if (!o.find(v => v.lessonTitle == i.lessonTitle)) {
				o.push(i);
			}
			return o;
		}, []);
	}
	giveBooksForGenre(librayBook)
}

//создаем массив по моим выбраным книгам и их жанрам
var newBooksForGenre = []
var arrBook = []
function giveBooksForGenre(librayBook) {

	for (let i = 0; i < myFavoriteGenre.length; i++) {
		newBooksForGenre[i] = librayBook.filter(elem => elem.lessonTitle == myFavoriteGenre[i].lessonTitle);

		arrBook.push(...newBooksForGenre[i])
	}

	arrBook = arrBook.reduce((o, i) => {
		if (!o.find(v => v.id == i.id)) {
			o.push(i);
		}
		return o;
	}, []);

	books(arrBook, "rating")

	const searchMesseg = document.querySelector(".messeng2")
	if (searchMesseg) searchMesseg.remove()
	else {
		const messeng = document.createElement("div")
		messeng.className = "messeng2"
		messeng.innerHTML = "Ваші улюбленні жанри:"


		for (let i = 0; i < myFavoriteGenre.length; i++) {
			const genreList = document.createElement("p")
			genreList.innerHTML = myFavoriteGenre[i].lessonTitle
			messeng.append(genreList)
		}

		root.append(messeng)


		setTimeout(() => {
			const searchMesseg = document.querySelector(".messeng2")
			searchMesseg.remove()

		}, 10000);
	}

}



loginDiv()



// buttonFunction()
// books(librayBook)









