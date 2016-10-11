'use strict';
let imgFolder = 'img/';
let imgCarousel = [
	{id:1, title: 'test1', image: 'FitLogic_BF6100.jpeg'},
	{id:2, title: 'test2', image: 'SpiritXT185.png'},
	{id:3, title: 'test3', image: 'USA_Style_(SS-401).jpeg'},
	{id:4, title: 'test4', image: 'USA_Style_(SS-1365).jpeg'}];
let startIndex = 0;

let sliderLeftHandler = document.getElementById('prev');
let sliderRightHandler = document.getElementById('next');
let imgHolders = Array.from(document.getElementById('slider_img').getElementsByTagName('a'));//присваиваем переменной по id все теги а

function assignImages() {
	let source = imgCarousel.slice(startIndex, startIndex+4);//хранятся 4 изображения
	imgHolders.forEach((element,  index) => {
		element.firstElementChild.src = imgFolder + source[index].image;//берем src наших картинок
		element.lastElementChild.innerHTML = source[index].title;//берем title
	});
}

function slide(direction) {
	if (direction === 'left' && startIndex > 0) {startIndex--}//если клацаем влево и доходим до начала ничего не происходит
	if (direction === 'right' && startIndex < imgCarousel.length-4) {startIndex++}//если клацаем вправо и доходим до конца ничего не происходит
		assignImages();
}

sliderLeftHandler.addEventListener('click', () => {slide('left')});
sliderRightHandler.addEventListener('click', () => {slide('right')});

assignImages();

//table
let list = [
	{id:1, title: 'test1', image: 'FitLogic_BF6100.jpeg'},
	{id:2, title: 'test2', image: 'Spirit_XT185.jpeg'},
	{id:3, title: 'test3', image: 'USA_Style_(SS-401).jpeg'},
	{id:4, title: 'test4', image: 'USA_Style_(SS-1365).jpeg'},
	{id:5, title: 'test5', image: 'footbal.png'},
	{id:6, title: 'test6', image: 'aboutUs_2.png'},
	{id:7, title: 'test7', image: 'catalog.png'},
	{id:8, title: 'test8', image: 'USA_Style_(SS-1365).jpeg'},
	{id:9, title: 'test9', image: 'sliderImg5.png'},
	{id:10, title: 'test10', image: 'hockey.png'},
	{id:11, title: 'test11', image: 'golf.png'},
	{id:12, title: 'test12', image: 'footbal.png'},
	{id:13, title: 'test13', image: 'catalog.png'},
	{id:14, title: 'test14', image: 'basketball.png'},
	{id:15, title: 'test15', image: 'aboutUs_3.png'},
	{id:16, title: 'test16', image: 'aboutUs_2.png'},
	{id:17, title: 'test17', image: 'aboutUs_1.png'},
	{id:18, title: 'test18', image: 'FitLogic_BF6100.jpeg'},
	{id:19, title: 'test19', image: 'Spirit_XT185.jpeg'},
	{id:20, title: 'test20', image: 'USA_Style_(SS-401).jpeg'},
	{id:21, title: 'test21', image: 'USA_Style_(SS-1365).jpeg'},
	{id:22, title: 'test22', image: 'hockey.png'},
	{id:23, title: 'test23', image: 'basketball.png'},
	{id:24, title: 'test24', image: 'aboutUs_1.png'},
	{id:25, title: 'test25', image: 'aboutUs_3.png'},
	{id:26, title: 'test26', image: 'sliderImg5.png'},
	{id:27, title: 'test27', image: 'catalog.png'},
	{id:28, title: 'test28', image: 'FitLogic_BF6100.jpeg'},
	{id:29, title: 'test29', image: 'golf.png'},
	{id:30, title: 'test30', image: 'sliderImg5.png'},
	{id:31, title: 'test31', image: 'aboutUs_3.png'},
	{id:32, title: 'test32', image: 'USA_Style_(SS-1365).jpeg'},
	{id:33, title: 'test33', image: 'aboutUs_1.png'},
	{id:34, title: 'test34', image: 'USA_Style_(SS-1365).jpeg'},
	{id:35, title: 'test35', image: 'aboutUs_1.png'},
	{id:36, title: 'test36', image: 'aboutUs_1.png'},
	{id:37, title: 'test37', image: 'aboutUs_1.png'},
	{id:38, title: 'test38', image: 'aboutUs_1.png'},
	{id:39, title: 'test39', image: 'aboutUs_1.png'},
	{id:40, title: 'test40', image: 'aboutUs_1.png'},
	{id:41, title: 'test41', image: 'aboutUs_1.png'}];
let offset = 0;

let tablePaginator = document.getElementById('product_table_pagination')//пагинатор таблицы
let goodsTable = document.getElementById('product_table')//сама таблица

let pages = Math.ceil(list.length / 10);//

//пагинатор
function createPaginator() {
	for (let i=1; i<=pages; i++) {
		tablePaginator.insertAdjacentHTML('beforeend', `<span class="catalog_pagination" data-page="${i}">${i}</span>`);//создаем span с атрибутом data-page в котором номер страницы и в спане номер страницы
	}
	tablePaginator.addEventListener('click', switchThePage);
}

function switchThePage() {
	if(event.target.tagName !== 'SPAN') {return;}//обязательно большими буквами
	let page = event.target.getAttribute('data-page');
	offset = page * 10 - 10;
	renderTheTable();
}

//таблица
function renderTheTable() {
	product_table.innerHTML = '';
	let items = list.slice(offset, offset+10);//в таблице будет 10 строк
	items.forEach(item => {
		let tr = document.createElement('tr');
		tr.classList.add('bg_color');
		let td = document.createElement('td');
		td.innerHTML = item.title;

		//создаем минус
		let minusTd = document.createElement('td');
		minusTd.classList.add('delete_img');
		let minusButton = document.createElement('a');
		minusButton.classList.add('catalog_table_button_delete');
		minusButton.addEventListener('click', () => {removeItemFromSlider(item.id)});
		minusTd.appendChild(minusButton);

		//создаем плюс
		let plusTd = document.createElement('td');
		plusTd.classList.add('add_img');
		let plusButton = document.createElement('a');
		plusButton.classList.add('catalog_table_button_add');
		plusButton.addEventListener('click', () => {addItemToSlider(item.id)});
		plusTd.appendChild(plusButton);

		tr.appendChild(td);
		tr.appendChild(minusTd);
		tr.appendChild(plusTd);
		product_table.appendChild(tr);
	});
}

//из табл в слайдер
function removeItemFromSlider(id) {
	if (imgCarousel.findIndex(el => el.id === id) === -1 || imgCarousel.length === 4) {return;}
	let myElem = imgCarousel.findIndex(el => el.id === id);
	imgCarousel.splice(myElem, 1);
	assignImages();
}

function addItemToSlider(id) {//id из строчки 133
	//1. найти элемент с этим id в list
	//2. запушить в imgCarousel
	//3. перендерить карусель
	/*let elementToPush;
	list.forEach(elem => {//Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.
		if (elem.id === id) {
			elementToPush = elem;
		}
	});
	assignImages();*/
	//or we do this (the same as top)
	if (imgCarousel.findIndex(el => el.id === id) !== -1) {return;}
	let myElem = list.find(el => el.id === id);
	imgCarousel.unshift(myElem);
	assignImages();
}

renderTheTable();

createPaginator();

//contact form
function httpRequest(url, method, data=null) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open(method, url, true);
		req.send(data);
		req.onreadystatechange = function() {
			if(req.readyState !== 4) return;
			if(req.status !== 200) {
				reject(req.status + ': ' + req.statusText);
			} else {
				resolve(req.responseText);
			}
		}
	});
}

let myForm = document.getElementById('contactForm');
myForm.addEventListener('submit', submitForm);

function submitForm() {
	event.preventDefault();
	let data = {
		name: myForm.name.value,
		email: myForm.email.value,
		message: myForm.message.value,
	};
	httpRequest('/concat', 'POST', JSON.stringify(data))
	.then();
}