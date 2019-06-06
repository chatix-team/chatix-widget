import ChatixCore from 'chatix-core';

let chatixInit = document.getElementById("chatix_init");
let websiteId = chatixInit.getAttribute("data-websiteid");
let visitorId = chatixInit.getAttribute("data-visitorid");

let chatixPath = chatixInit.getAttribute("src");
let arrchatixPath = chatixPath.split('/');
let fileName = arrchatixPath[arrchatixPath.length-1];
chatixPath = chatixPath.substr(0, chatixPath.length - fileName.length);

// полключаем ядро
// let scriptCore = document.createElement('script');
// scriptCore.src = 'http://localhost:8080/chatix_core.js';
// document.getElementsByTagName('head')[0].appendChild(scriptCore);

// подключаем шаблон
let scriptTemplate = document.createElement('script');
scriptTemplate.src = chatixPath + 'chatix_widget_template.js';
document.getElementsByTagName('head')[0].appendChild(scriptTemplate);

// подключаем css
let css = document.createElement('link');
css.href = chatixPath + 'style.css';
css.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(css);

// Нужна что бы не показывать сообщение о нерабочем времени, если менеджер все таки онлайн
let managerOnline = false;
// перменная нужна для анимации сворачивания\разворачивания чата
let chatHeight;
let allManagers;

window.chatixWidget = {
	visitor: {},
	onConnect: function(){},
	onNewMessageReceived: function(){},
	onNewMessageSent: function(){},
	onManagerConnected: function(){},
	onManagerDisconnected: function(){},
	onVisitorOpenedWindow: function(){},
	onVisitorClosedWindow: function(){}
};

window.onload = function() {
	let core = new ChatixCore(websiteId, visitorId);
	let chatInfo;
	core.start();

	// колбэк при подключении signalR
	core.onSignalrConnected = function(visitor, newVisitorId){
		if (newVisitorId) {
			console.log('Визитор переподключился с новым ID');
		}

		chatixWidget.visitor = Object.assign({}, visitor);
		chatixWidget.setVisitor = function(updateVisitor){
			chatixWidget.visitor = Object.assign(chatixWidget.visitor, updateVisitor);
			if (updateVisitor.uuid) {
				if (updateVisitor.uuid != visitor.uuid) {
					core = new ChatixCore(websiteId, chatixWidget.visitor.uuid);
					core.start();
				}
			}
			core.setVisitor(updateVisitor);
		}

		// core.getWebsiteMessages().then(function(messages){
		// 	// console.log(messages);
		// }).catch(function(){
		// 	console.log('error');
		// });

		core.getWebChatConnectedManagers().then(function(managersOnline){
			if (managersOnline.length > 0) {
				allManagers = managersOnline;
				// показываем блок с подключенными менеджерами
				document.querySelectorAll('.chatHead__top-connected')[0].classList.remove('hidden');

				// отображаем менеджеров
				document.getElementById('manager_ava').innerHTML = '';
				document.querySelectorAll('.chatHead__info_consult_name')[0].innerHTML = '';

				for (let i = 0; i < 3; i++) {
					if (managersOnline[i]) {
						// установка имен менеджеров
						let manager_name = document.createElement('span');
						manager_name.setAttribute('id', 'name-' + managersOnline[i].uuid);
						manager_name.classList.add('chatHead__manager-name');
						if (i + 1 === managersOnline.length) {
							manager_name.innerHTML = managersOnline[i].name;
						}
						else {
							manager_name.innerHTML = managersOnline[i].name + ', ';
						}
						document.querySelectorAll('.chatHead__info_consult_name')[0].appendChild(manager_name);

						// установка аватарок менеджеров
						document.getElementById('manager_ava').appendChild(buildManagerAva(managersOnline[i]));
					}
				}
			}
			else{
				// показываем блок с НЕ подключенными менеджерами
				document.querySelectorAll('.chatHead__top-noConnected')[0].classList.remove('hidden');
			}

			core.getWebChatManagers().then(function(managers){
				allManagers = managers;
				document.getElementById('manager_avas').innerHTML = '';

				// сортируем менеджеров (сначала пол полю is_online, затем по наличию аватара)
				let sortManagers;

				// сортировка по алфавиту
				sortManagers = managers.sort((prev, next) => {
					if(prev.name < next.name) {
						return -1;
					}
					if(prev.name > next.name) {
						return 1;
					}
				});
				// сортировка по наличию аватарки
				sortManagers = sortManagers.sort((prev, next) => {
					if (prev.avatar_thumb300_url) {
						return -1
					}
					else {
						return 1;
					}
				});
				// сортировка по онлайну
				sortManagers = sortManagers.sort((prev, next) => {
					if (prev.is_online) {
						return -1;
					}
					else {
						return 1;
					}
				});

				// отображаем менеджеров
				for (let i = 0; i < 3; i++) {
					if (sortManagers[i]) {
						// установка аватарок менеджеров
						document.getElementById('manager_avas').appendChild(buildManagerAva(sortManagers[i]));
					}
				}
			});
		});

		// запрашиваем информацию о чате. Устанавливаем стили и общие настройки чата
		// получение и установка первоначального списка подключенных менеджеров
		core.getWebChatInfo().then(function(chat){
			chatInfo = chat;
			document.getElementById('chatixContainer').style.display = 'block';
			if (chat) {
				// стили шапки виджета, кнопки открытия\закрытия и блока трансляции экрана
				if (chat.style.header_type === 0){
					document.querySelectorAll('.chatHead')[0].style.backgroundColor = chat.style.header_color;
					document.querySelectorAll('.broadcastBlock')[0].style.backgroundColor = chat.style.header_color;
					document.querySelectorAll('.broadcastBtn').forEach(function(item, i){
						item.style.borderRadius = chat.style.corner_radius[0]/2 + 'px';
					});
					// document.querySelectorAll('.showChatBtn')[0].style.backgroundColor = chat.style.header_color;


					// если цвет фона шапки светлый, то текст в шапке и градиенты делаем темным и наоборот
					let managerNameColor = hexToHSL(chat.style.header_color);
					if (managerNameColor.l < 0.7) {
						let managerNameColor = document.createElement('style');
						managerNameColor.innerHTML = ".chatHead__info, .broadcastBlock {color: #fff !important;} .broadcastBtn:hover {color: #000 !important; background: #fff; border-color: #fff !important}";
						document.querySelector('head').appendChild(managerNameColor);

						document.querySelectorAll('.broadcastBlock__broadcastingGradient')[0].style.background = "-webkit-linear-gradient(left, " + chat.style.header_color + " 0%, #fff 50%, " + chat.style.header_color + " 100%)";
					}
					else {
						let managerNameColor = document.createElement('style');
						managerNameColor.innerHTML = ".chatHead__info, .broadcastBlock {color: #000 !important;} .broadcastBtn:hover {color: #fff !important; background: #000; border-color: #000 !important}";
						document.querySelector('head').appendChild(managerNameColor);

						document.querySelectorAll('.broadcastBlock__broadcastingGradient')[0].style.background = "-webkit-linear-gradient(left, " + chat.style.header_color + " 0%, #000 50%, " + chat.style.header_color + " 100%)";
					}

					// добаляем стиль бордера для аватаров менеджеров
					let managers_ava_border = document.createElement('style');
					managers_ava_border.innerHTML = ".chatHead__avatar-wrap, .chatHead__avatar-online {border: 2px solid " + chat.style.header_color + "}";
					document.querySelector('head').appendChild(managers_ava_border);
				}
				else if (chat.style.header_type === 1) {
					document.querySelectorAll('.chatHead')[0].style.backgroundImage = 'url(' + chat.style.header_image + ')';
					document.querySelectorAll('.chatHead')[0].style.backgroundSize = 'cover';
				}

				// стили тела виджета и поля ввода сообщения
				if (chat.style.background_type === 0){
					document.querySelectorAll('.chatBody__viewport')[0].style.backgroundColor = chat.style.background_color;
					let newMessageFieldColor = lightenDarkenColor(chat.style.background_color, 50);
					document.querySelectorAll('.newMessage')[0].style.backgroundColor = newMessageFieldColor;
					// плейсхолдер поля ввода сообщения
					let placeholerHSL = hexToHSL(chat.style.background_color);
					if (placeholerHSL.l < 0.7) {
						let newMessPlaceholder = document.createElement('style');
						newMessPlaceholder.innerHTML = ".newMessage__placeholder:after {color: #fff !important;}";
						document.querySelector('head').appendChild(newMessPlaceholder);
					}
					else {
						let newMessPlaceholder = document.createElement('style');
						newMessPlaceholder.innerHTML = ".newMessage__placeholder:after {color: #868686 !important;}";
						document.querySelector('head').appendChild(newMessPlaceholder);
					}
				}
				else if (chat.style.background_type === 1) {
					document.querySelectorAll('.chatBody__viewport')[0].style.backgroundImage = 'url(' + chat.style.background_image + ')';
					document.querySelectorAll('.chatBody__viewport')[0].style.backgroundSize = 'cover';
				}

				// общие стили виджета
				document.querySelectorAll('.chatixWindow')[0].style.width = chat.style.width + 'px';
				document.querySelectorAll('.chatixWindow')[0].style.height = chat.style.height + 'px';
				document.querySelectorAll('.chatixWindow')[0].style.borderTopLeftRadius = chat.style.corner_radius[0] + 'px';
				document.querySelectorAll('.chatixWindow')[0].style.borderTopRightRadius = chat.style.corner_radius[1] + 'px';
				document.querySelectorAll('.chatixWindow')[0].style.borderBottomLeftRadius = chat.style.corner_radius[2] + 'px';
				document.querySelectorAll('.chatixWindow')[0].style.borderBottomRightRadius = chat.style.corner_radius[3] + 'px';
				chatHeight = chat.style.height;

				document.querySelectorAll('.chatixWindow')[0].style.bottom = (chatHeight - document.querySelectorAll('.chatHead')[0].offsetHeight)*(-1) + 'px';
				setTimeout(function(){
					document.querySelectorAll('.chatixWindow')[0].classList.add('chatixWindow-animate');
				}, 500);

				// стили сообщений
				let messgesInStyle = document.createElement('style');
				let messgesOutStyle = document.createElement('style');
		      let managerMessBg = chat.style.manager_message_bg_color;
				let managerMessageBorder = chat.style.manager_message_outline_width;
				let managerMessBorderColor = chat.style.manager_message_outline_color;
				let managerMessTextColor = chat.style.manager_message_text_color;
				let visitorMessBg = chat.style.visitor_message_bg_color;
				let visitorMessageBorder = chat.style.visitor_message_outline_width;
				let visitorMessBorderColor = chat.style.visitor_message_outline_color;
				let visitorMessTextColor = chat.style.visitor_message_text_color;
		      messgesInStyle.innerHTML = ".chatBody__inMessage {background: " + managerMessBg + " !important; border: " + managerMessageBorder + "px solid" + managerMessBorderColor + " !important; color: " + managerMessTextColor + " !important;}";
				messgesOutStyle.innerHTML = ".chatBody__outMessage {background: " + visitorMessBg + " !important; border: " + visitorMessageBorder + "px solid" + visitorMessBorderColor + " !important; color: " + visitorMessTextColor + " !important;}";
		      document.querySelector('head').appendChild(messgesInStyle);
				document.querySelector('head').appendChild(messgesOutStyle);
			}

			// установка название чата
			if (chat.organisation_name) {
				document.getElementById('chat_name').innerHTML = chat.organisation_name;
			}


			// установка статуса чата
			let date = new Date();

			// делаем поправку на разницу часовых поясов с менеджером
			let managerTimeDiff = chat.time_zone_utc_offset * 60 * -1;
			let localOffest = date.getTimezoneOffset();
			let managerOffest = (managerTimeDiff * -1 + localOffest) * 60 * 1000;
			let managerDate = new Date(date.getTime() + managerOffest);

		   let managerHour = managerDate.getHours();

			let day = date.getDay() - 1;
			if (day === -1) {
				day = 6;
			}

			let workDay = chat.schedule[day].is_work;
			let workHourStart = +chat.schedule[day].start;
			let workHourEnd = +chat.schedule[day].end;

			// function getWidgetStatus(){
				// let status;
				// if (chat.schedule[day].is_work) {
				// 	let hour;
				// 	let minute;
				// 	let visitorUTC = Math.floor(date.getTime()/1000);
				// 	let timeDiff = (date.getTimezoneOffset()/60)*-1 - (chat.time_zone_utc_offset);
				// 	let workStart = chat.schedule[day].start + timeDiff;
				// 	let workEnd = chat.schedule[day].end + timeDiff;
				// 	let dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), workStart, 0, 0);
				// 	let dateEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), workEnd, 0, 0);
				//
				// 	if (dateStart > date && dateEnd < date) {
				// 		// console.log('Рабочее время');
				// 	}
				// 	else {
				// 		let comperableHour;
				// 		let dayOfset = 0;
				// 		if (dateEnd < date) {
				// 			dayOfset = 1;
				// 			if (chat.schedule[day + dayOfset]) {
				// 				comperableHour = chat.schedule[day + dayOfset].start + timeDiff;
				// 			}
				// 			else {
				// 				comperableHour = chat.schedule[0].start + timeDiff;
				// 			}
				// 		}
				// 		else if(dateStart > date){
				// 			let dateManager = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()-timeDiff, 0, 0);
				// 			if (date.getDate() > dateManager.getDate()) {
				// 				dayOfset = -1;
				// 			}
				//
				// 			if (chat.schedule[day + dayOfset]) {
				// 				comperableHour = chat.schedule[day + dayOfset].start + timeDiff;
				// 			}
				// 			else {
				// 				comperableHour = chat.schedule[6].start + timeDiff;
				// 			}
				// 		}
				//
				// 		let comperableHourDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + dayOfset, comperableHour, 0, 0);
				// 		let hourToStart = (comperableHourDate - date)/1000/60/60;
				// 		hour = Math.abs(Math.trunc(hourToStart));
				// 		minute =  Math.abs(Math.floor(hourToStart*60 - hour*60));
				//
				// 		console.log(comperableHour);
				// 	}
				//
				// 	if (hour < 1) {
				// 		status = 'Будет в сети через ' + minute + 'м.';
				// 	}
				// 	else {
				// 		status = 'Будет в сети через ' + hour + 'ч. и ' + minute + 'м.';
				// 	}
				// }
				// else {
				// 	status = 'Сегодня выходной';
				// }
				//
				//
				// return status;
			// }

			function buildTimeToWork(minutesToWork){
				let result;
				let timeToWork = minutesToWork/60;
				let hour = Math.abs(Math.trunc(timeToWork));
            let minute =  Math.abs(Math.floor(timeToWork*60 - hour*60));

				if (hour < 1) {
	            result = 'Будет в сети через ' + minute + 'м.';
	         }
	         else {
	            result = 'Будет в сети через ' + hour + 'ч. и ' + minute + 'м.';
	         }

				return result;
			}

			// устанавливаем статус
			let status = [];
			if (allManagers) {
				allManagers.forEach(function(item, i){
					status.push(item.is_online);
				});
			}
			status = status.indexOf(true);
			if (status < 0) {
				if (workDay) {
					// если текущий час попадает в диапазон рабочего, то считаем время рабочим
					if (managerHour >= workHourStart & managerHour < workHourEnd) {
						document.querySelectorAll('.chatHead__info_status')[0].innerHTML = 'Консультант ответит в ближайшее время';
					}
					else {
						document.querySelectorAll('.chatHead__info_status')[0].innerHTML = buildTimeToWork(core.getWorkTime());
					}
				}
				else {
					core.getWorkTime();
					document.querySelectorAll('.chatHead__info_status')[0].innerHTML = buildTimeToWork(core.getWorkTime());
				}
			}
			else {
				document.querySelectorAll('.chatHead__info_status')[0].innerHTML = 'Консультант в сети';
			}
		});

		// колбэк который вызывается на сайте
		chatixWidget.onConnect();
	}

	// колбэк на подключение менеджера к диалогу
	core.onManagerConnect = function(manager){
		// показываем блок с подключенными менеджерами
		document.querySelectorAll('.chatHead__top-noConnected')[0].classList.add('hidden');
		document.querySelectorAll('.chatHead__top-connected')[0].classList.remove('hidden');

		// колбэк который вызывается на сайте
		chatixWidget.onManagerConnected(manager);
		let countManagers = document.getElementsByClassName('chatHead__avatar-img').length;

		// установка аватара подключившегося менеджера
		document.getElementById('manager_ava').appendChild(buildManagerAva(manager));

		// установка имени подключившегося менеджера
		let manager_name = document.createElement('span');
		manager_name.setAttribute('id', 'name-' + manager.uuid);
		manager_name.classList.add('chatHead__manager-name');

		// если подключается первый мнеджер, то ему запятую не ставим
		if (document.querySelectorAll('#manager_ava > div').length === 1) {
			manager_name.innerHTML = manager.name;
		}
		else {
			manager_name.innerHTML = ', ' + manager.name;
		}
		document.querySelectorAll('.chatHead__info_consult_name')[0].appendChild(manager_name);

		// удаляем дефолтные значения (нужно при подключении первого менеджера)
		if (document.getElementById('name-default')) {
			document.getElementById('name-default').remove();
		}

		resizeManagerNames();
	}

	// колбэк на отключение менеджера от диалога
	core.onManagerDisconnect = function(manager){
		// колбэк который вызывается на сайте
		chatixWidget.onManagerDisconnected(manager);
		let countManagers = document.querySelectorAll('.chatHead__top-connected .chatHead__avatar-img').length;

		// при отключении последнего менеджера удаляем его данные и ставим дефолтные
		if (countManagers === 1) {
			// core.chat.onManagerConnect(allManagers);
			// показываем блок с подключенными менеджерами
			document.querySelectorAll('.chatHead__top-noConnected')[0].classList.remove('hidden');
			document.querySelectorAll('.chatHead__top-connected')[0].classList.add('hidden');

			// удалеие аватара отключившегося менеджера
			let managerAva = document.getElementById('ava-' + manager.uuid);
			if (managerAva) {
				managerAva.remove();
			}

			// удаление имени отключившегося менеджера
			let managerName = document.getElementById('name-' + manager.uuid);
			if (managerName) {
				managerName.remove();
			}
		}
		else if (countManagers === 2) {
			// удалеие аватара отключившегося менеджера
			let managerAva = document.getElementById('ava-' + manager.uuid);
			if (managerAva) {
				managerAva.remove();
			}

			// удаление имени отключившегося менеджера
			let managerName = document.getElementById('name-' + manager.uuid);
			if (managerName) {
				managerName.remove();
			}

			// при отклюении предпоследнего менеджера, у оставшегося убираем запятую
			let lastManagerName = document.querySelectorAll('.chatHead__manager-name')[0].innerText;
			lastManagerName = lastManagerName.split(',');
			if (lastManagerName[1]) {
				document.querySelectorAll('.chatHead__manager-name')[0].innerText = lastManagerName[1];
			}
		}
		else {
			// удалеие аватара отключившегося менеджера
			let managerAva = document.getElementById('ava-' + manager.uuid);
			if (managerAva) {
				managerAva.remove();
			}

			// удаление имени отключившегося менеджера
			let managerName = document.getElementById('name-' + manager.uuid);
			if (managerName) {
				managerName.remove();
			}
		}

		resizeManagerNames();
	}

	// функция получает новые входящие и отправляенные сообщения
	core.onReceivedWebsiteMessage = function(message){
		// колбэк который вызывается на сайте
		if (!Array.isArray(message)) {
			if (message.sender_flag === 0) {
				chatixWidget.onNewMessageSent(message);
			}
			else if (message.sender_flag === 1) {
				chatixWidget.onNewMessageReceived(message);
			}
		}
	}

	//функция принимает все отсротированные по времени сообщения из ядра
	core.onReceivedWebsiteMessages = function(messages){
		// звук при новом сообщении
		let newMessAudio = new Audio();
		newMessAudio.preload = 'auto';
		newMessAudio.src = 'https://223421.selcdn.ru/chatix-dev/assets/audio/new_message.wav';
		let messagesLength = 0;
		let messageSound = false;

		// проигрываем звук при новых сообщениях
		if (messages.length > messagesLength && messageSound) {
			if (messages[messages.length-1].sender_id != core.chat.visitor.uuid) {
				newMessAudio.play();
				// показываем индикатор нового сообщения
				document.getElementById('showChatBtn__newMessage').style.opacity = '1';
			}
		}
		messageSound = true;
		messagesLength = messages.length;

		if (messages.length === 0 && chatInfo) {
			let onlineGreeting = {
				content: chatInfo.online_greeting_text,
				sender_flag: 1,
				type: 0,
				uuid: '',
			}
			messages.push(onlineGreeting);
		}
		document.getElementById('messages_list').innerHTML = '';
		// при новом или новых сообщениях добавляем в чат
		messages.forEach(function(message, i){
			// сообщение с текстом
			if (message.type == 0) {
			  let mes = document.createElement('div');
			  mes.innerHTML = getLink(message.content);
			  mes.classList.add('chatBody__message');
			  mes.setAttribute('id', message.uuid);

			  if (message.sender_flag === 0) {
				 mes.classList.add('chatBody__outMessage');
			  }
			  else if (message.sender_flag === 1) {
				 mes.classList.add('chatBody__inMessage');
			  }
			  document.getElementById('messages_list').appendChild(mes);
			}
			// сообщение с изображением (старое и новое)
			else if (message.type === 1 || message.type === 4){
				let uploads_files = document.createElement('img');
				let popupImg = document.createElement('img');
				// проверкана доступность изображения в сообщении
				// если изображения по ссылке нет, то показываем заглушку
				let img = new Image();
            img.src = message.thumb_300_url ? message.thumb_300_url : message.content;
            img.onload = function(){
					uploads_files.setAttribute('src', message.thumb_300_url ? message.thumb_300_url : message.content);
					popupImg.setAttribute('src', message.original_url ? message.original_url : message.content);
            };
            img.onerror = function(){
					uploads_files.setAttribute('src', 'https://223421.selcdn.ru/chatix-dev/assets/img/message_no_image.png');
					popupImg.setAttribute('src', 'https://223421.selcdn.ru/chatix-dev/assets/img/message_no_image.png');
            };

			  uploads_files.classList.add('message__uploadImg');
			  let file_in_message = document.createElement('div');
			  file_in_message.appendChild(uploads_files);

			  // создаем блок с сообщением
			  let new_message = document.createElement('div');
			  new_message.classList.add('chatBody__message');
			  new_message.setAttribute('id', message.uuid);
			  new_message.appendChild(file_in_message);
			  if (message.sender_flag == 0) {
				  new_message.classList.add('chatBody__outMessage');
				}
				else if (message.sender_flag == 1) {
				  new_message.classList.add('chatBody__inMessage');
				}

			  document.getElementById('messages_list').appendChild(new_message);

			  new_message.addEventListener('click', popup.bind('windowname', 'popupContent', popupImg));
			}
			// сообщение с файлом (старое и новое)
			else if (message.type === 2 || message.type === 5) {
				let fileUrl = message.file_url ? message.file_url : message.content;
			  let uploads_files = "<a class='chatBody__fileLink' target='_blank' href='" + fileUrl + "'><img class='chatBody__fileIcon' src='" + chatixPath + "img/upload_icon.png' /> Скачать файл</a>";
			  let file_in_message = document.createElement('div');
			  file_in_message.innerHTML = uploads_files;

			  // создаем блок с сообщением
			  let new_message = document.createElement('div');
			  new_message.classList.add('chatBody__message');
			  new_message.setAttribute('id', message.uuid);
			  new_message.appendChild(file_in_message);
			  if (message.sender_flag == 0) {
				  new_message.classList.add('chatBody__outMessage');
				}
				else if (message.sender_flag == 1) {
				  new_message.classList.add('chatBody__inMessage');
				}
			  document.getElementById('messages_list').appendChild(new_message);
			}

			// если data-scrolled не установлен (первоначальная загрузка сообщений), то скролим вниз при загрузке сообщений
			// а если установлен (был скролл до самого верха) то при подгрузке новых осталяем скорлл у самого верхнего сообщения на момент подгрузки
			let dialogBody = document.getElementById('wrap_messages');
			if (dialogBody.getAttribute('data-scrolled') !== 'scrolledTop') {
				document.getElementById('wrap_messages').scrollTop = document.getElementById('wrap_messages').scrollHeight + 200;
			}
			else {
				if (document.getElementById(lastMess)){
					document.getElementById(lastMess).scrollIntoView(true);
				}
			}
		});
	};

	core.onRequestScreenCast = function(){
		document.querySelectorAll('.broadcastBlock')[0].classList.remove('hidden');
		document.querySelectorAll('.broadcastBlock__allow')[0].classList.remove('hidden');
		slideWidget();

		// визитор разрешает просмотр
		document.getElementById('broadcastBlock__allowBtn').addEventListener('click', function(){
			localStorage.setItem('screenBroadcast', true);
			document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
			document.querySelectorAll('.broadcastBlock__broadcasting')[0].classList.remove('hidden');
			core.allowScreenCast(true);
			slideWidget();
		});

		// визитор НЕ разрешает просмотр
		document.getElementById('broadcastBlock__disallowBtn').addEventListener('click', function(){
			localStorage.removeItem('screenBroadcast');
			document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
			document.querySelectorAll('.broadcastBlock')[0].classList.add('hidden');
			core.allowScreenCast(false);
			slideWidget();
		});

		// визитор выключил просмотр
		document.getElementById('broadcastBlock__disconectBtn').addEventListener('click', function(){
			localStorage.removeItem('screenBroadcast');
			document.querySelectorAll('.broadcastBlock')[0].classList.add('hidden');
			document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
			document.querySelectorAll('.broadcastBlock__broadcasting')[0].classList.add('hidden');
			core.interruptScreenCast();

			slideWidget();
		});
	}

	core.onDisconnectManagerFromScreenCast = function(){
		// отключение менеджера от просмотра экрана
		localStorage.removeItem('screenBroadcast');
		document.querySelectorAll('.broadcastBlock')[0].classList.add('hidden');
		document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
		document.querySelectorAll('.broadcastBlock__broadcasting')[0].classList.add('hidden');

		// slideWidget();
	}

	// перевод цвета из HEX в HSL
	function hexToHSL(hex) {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		let r = parseInt(result[1], 16);
		let g = parseInt(result[2], 16);
		let b = parseInt(result[3], 16);
		r /= 255, g /= 255, b /= 255;
		let max = Math.max(r, g, b), min = Math.min(r, g, b);
		let h, s, l = (max + min) / 2;
		if(max == min){
			h = s = 0; // achromatic
		}
		else{
			let d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch(max){
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}
		let HSL = new Object();
		HSL['h']=h;
		HSL['s']=s;
		HSL['l']=l;

		return HSL;
	}

	// функция осветляет\затемняет цвет
   function lightenDarkenColor(col, amt) {
      let usePound = false;
      if (col[0] == "#") {
         col = col.slice(1);
         usePound = true;
      }
      let num = parseInt(col,16);
      let r = (num >> 16) + amt;
      if (r > 255) {
         r = 255;
      }
      else if (r < 0) {
         r = 0;
      }
      let b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) {
         b = 255;
      }
      else if (b < 0) {
         b = 0;
      }
      let g = (num & 0x0000FF) + amt;
      if (g > 255) {
         g = 255;
      }
      else if (g < 0) {
         g = 0;
      }

      return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
   }

	function buildManagerAva(manager){
		let manager_ava = document.createElement('div');
		manager_ava.setAttribute('id', 'ava-' + manager.uuid);
		manager_ava.classList.add('chatHead__avatar-img');
		if (manager.avatar_thumb300_url !== null) {
			manager_ava.innerHTML = "<div class='chatHead__avatar-wrap'><img src='" + manager.avatar_thumb300_url + "' /></div>"
		}
		else {
			manager_ava.innerHTML = "<div class='chatHead__avatar-wrap'><img src='" + chatixPath + "img/default_avatar.png'></div>"
		}

		if (manager.is_online) {
			let onlineIndicator = document.createElement('div');
			onlineIndicator.classList.add('chatHead__avatar-online');
			manager_ava.appendChild(onlineIndicator);
		}

		return manager_ava;
	}

	chatix_template();
	chatScrollBottom();
	resizeMessagesList();

	// ВЫЧИСЛЕНИЕ РАЗМЕРА БЛОКА С СООБЩЕНИЯМИ
	function resizeMessagesList() {
		document.getElementById('wrap_messages').scrollTop = document.getElementById('wrap_messages').scrollHeight + 200;
	}
	// КОНЕЦ ВЫЧИСЛЕНИЯ РАЗМЕРА БЛОКА С СООБЩЕНИЯМИ


	// УБИРАЕМ ПЛЭЙСХОЛДЕР У ПОЛЯ ВВОДА СООБЩЕНИЯ
	let entry_message_field = document.getElementById('entry_message_field');
	function placeholder() {
		if (entry_message_field.innerText.length > 0) {
			entry_message_field.classList.remove('newMessage__placeholder');
		} else {
			entry_message_field.classList.add('newMessage__placeholder');
		}
	};

	entry_message_field.addEventListener("blur", placeholder);
	// КОНЕЦ ПЛЕЙСХОЛДЕРА


	// ОТПРАВКА ПЕЧАТАЕМОГО ТЕКСТА МЕНЕДЖЕРУ
	entry_message_field.addEventListener("input", function(e) {
		placeholder();
		core.visitorType(e.target.innerText);
	});


	// функция парсинга ссыллок в сообщениях
	function getLink(str) {
		let reg = str.match(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g);
		for (let key in reg){
			str = str.replace(reg[key], ' <a href="' + reg[key] + '" target="_blank"> ' + reg[key] + '</a> ')
		}
		return(str);
	}

	entry_message_field.addEventListener("paste", function(e) {
		// отменяем вставку изображения в поле ввода
		// e.preventDefault();
		// e.stopPropagation();

		// удаляем изображения из поля ввода сразу после вставки
      let imgsInText = e.target.getElementsByTagName('img');

      for (let i = 0; i < imgsInText.length; i++) {
         imgsInText[i].remove();
      }

		// получаем содержимое буфера обмена
      let items = e.clipboardData.items;
      if (items) {
         for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") !== -1) {
               // представляем изображение в виде файла
               let clipboardImg = items[i].getAsFile();
					// Преобразуем изображение в base64
					let fileReader = new FileReader();

					fileReader.onload = function(fileLoadedEvent) {
						let img_base64 = fileLoadedEvent.target.result; // изображение в base64

						// создаем блок с доавленными файлами
						let uploads_files = "<img src='" + img_base64 + "' class='message__uploadImg' />";
						let file_in_message = document.createElement('div');
						file_in_message.innerHTML = uploads_files;

						// создаем блок с сообщением и помещаем в него блок с временем
						let new_message = document.createElement('div');
						new_message.classList.add('chatBody__message');
						new_message.classList.add('chatBody__outMessage');
						new_message.innerHTML = '<div class="chatBody__spin"></div>';
						new_message.appendChild(file_in_message);

						// добавляем сообщение в список сообщений
						document.getElementById('messages_list').appendChild(new_message);
						chatScrollBottom();
					}
					fileReader.readAsDataURL(clipboardImg);

					// отправляем сообщение с файлом
					core.sendWebsiteFileMessage(clipboardImg);
            }
         }
      }
	});


	// ОТПРАВКА ПО ENTER
	entry_message_field.addEventListener("keydown", function(e) {
		if((e.key === 'Enter')) {
			e.preventDefault();
			sendMessage(e);
			chatScrollBottom();
		}
	});


	// ПОДГРУЗКА СООБЩЕНИЙ ПРИ СКРОЛЛЕ
	let dialogBody = document.getElementById('wrap_messages');
	let lastMess = null;
	dialogBody.onscroll = function() {
		dialogBody.setAttribute('data-scrolled', '');

		if (dialogBody.scrollTop === 0) {
			dialogBody.setAttribute('data-scrolled', 'scrolledTop');
			lastMess = dialogBody.getElementsByClassName('chatBody__message')[0].getAttribute('id');
			core.getWebsiteMessages(lastMess, 100);
		}
	}


	// функция отправки встречающего сообщения в нерабочее время
	function sendofflineGreeting() {
		let messList = document.getElementById('messages_list');
		let notWorkingMes = messList.getElementsByClassName('not_working_time');
		if (!notWorkingMes.length && managerOnline.length === 0) {
			let mes = document.createElement('div');
			mes.innerHTML = chatInfo.offline_greeting_text;
			mes.classList.add('chatBody__message');
			mes.classList.add('chatBody__inMessage');
			mes.classList.add('not_working_time');
			document.getElementById('messages_list').appendChild(mes);
		}
	}


	// ОТКРЫТИЕ\ЗАКРЫТИЕ ЧАТА
	let show_chat_btn = document.getElementById('show_chat_btn');
	function openChat(){
		// скрываем индикатор нового сообщения
		document.getElementById('showChatBtn__newMessage').style.opacity = '0';
		// проверяем в рабочее ли время отправлено сообщение, если нет, отправляем встречное о информации о рабочем расписании
	   let currentData = new Date();
		let managerTimeDiff = chatInfo.time_zone_utc_offset * 60 * -1;
		let localOffest = currentData.getTimezoneOffset();
		let managerOffest = (managerTimeDiff * -1 + localOffest) * 60 * 1000;
		let managerDate = new Date(currentData.getTime() + managerOffest);

	   let hour = managerDate.getHours();

		let date = new Date();
		date = date.getDay() - 1;
		if (date === -1) {
			date = 6;
		}

		let workDay = chatInfo.schedule[date].is_work;
		let workHourStart = +chatInfo.schedule[date].start;
		let workHourEnd = +chatInfo.schedule[date].end;

		if (workDay) {
			// если текущий час попадает в диапазон рабочего, то считаем время рабочим
			if (hour >= workHourStart & hour < workHourEnd) {
			}
			else {
				sendofflineGreeting();
			}
		}
		else {
			sendofflineGreeting();
		}

		let chat = document.getElementById('wrap_chat');

		// колбэки на открытие\закрытие чата
		if (chat.classList.contains('chatixWindow__hidden')) {
			chatixWidget.onVisitorOpenedWindow();
		}
		else {
			chatixWidget.onVisitorClosedWindow();
		}

		chat.classList.toggle('chatixWindow__hidden');
		show_chat_btn.classList.toggle('chat_active');

		entry_message_field.focus();

		resizeManagerNames();
		resizeMessagesList();
		chatScrollBottom();
	}

	show_chat_btn.addEventListener("click", function(){
		document.querySelectorAll('.chatixWindow')[0].style.display = 'flex';
		document.querySelectorAll('.chatixWindow')[0].classList.remove('chatixWindow__hidden');
	});

	document.getElementById('chatHead').addEventListener("click", function(){
		// скрываем индикатор нового сообщения
		document.getElementById('showChatBtn__newMessage').style.opacity = '0';
		// проверяем в рабочее ли время отправлено сообщение, если нет, отправляем встречное о информации о рабочем расписании
	   let currentData = new Date();
		let managerTimeDiff = chatInfo.time_zone_utc_offset * 60 * -1;
		let localOffest = currentData.getTimezoneOffset();
		let managerOffest = (managerTimeDiff * -1 + localOffest) * 60 * 1000;
		let managerDate = new Date(currentData.getTime() + managerOffest);

	   let hour = managerDate.getHours();

		let date = new Date();
		date = date.getDay() - 1;
		if (date === -1) {
			date = 6;
		}

		let workDay = chatInfo.schedule[date].is_work;
		let workHourStart = +chatInfo.schedule[date].start;
		let workHourEnd = +chatInfo.schedule[date].end;

		if (workDay) {
			// если текущий час попадает в диапазон рабочего, то считаем время рабочим
			if (hour >= workHourStart & hour < workHourEnd) {
			}
			else {
				sendofflineGreeting();
			}
		}
		else {
			sendofflineGreeting();
		}

		let chat = document.getElementById('wrap_chat');

		// колбэки на открытие\закрытие чата
		if (chat.classList.contains('chatixWindow__hidden')) {
			chatixWidget.onVisitorOpenedWindow();
		}
		else {
			chatixWidget.onVisitorClosedWindow();
		}

		entry_message_field.focus();

		resizeManagerNames();
		resizeMessagesList();
		chatScrollBottom();
		slideWidget();
	});
	// КОНЕЦ ОТКРЫТИЯ\ЗАКРЫТИЯ ЧАТА

	// клик на кнопку "Подробнее" при запросе разрешения на трансляцию
	if (document.querySelectorAll('.broadcastBlock__moreBtn')[0]) {
		document.querySelectorAll('.broadcastBlock__moreBtn')[0].addEventListener('click', function(){
			document.querySelectorAll('.broadcastBlock__moreText')[0].classList.toggle('broadcastBlock__moreText-active');

			slideWidget();
		});
	}

	// функция сворачивания/разворачивания виджета
	function slideWidget(){
		document.querySelectorAll('.chatixWindow')[0].classList.toggle('chatixWindow__hidden');
		let headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;
		if (screen.width > 667) {
			if (!document.querySelectorAll('.chatixWindow')[0].classList.contains('chatixWindow__hidden')) {
				document.querySelectorAll('.chatixWindow')[0].style.bottom = 0 + 'px';
			}
			else {
				document.querySelectorAll('.chatixWindow')[0].style.bottom = (chatHeight - headHeight)*(-1) + 'px';
			}
		}
		else {
			document.querySelectorAll('.chatixWindow')[0].style.display = 'none';
			document.querySelectorAll('.chatixWindow')[0].classList.add('chatixWindow__hidden');
		}
	}

	function resizeManagerNames(){
		// устанавливаем размер блока с именами менеджеров,
		// что бы обрезать по краю шапки и поставить многоточие
		let managerNames = document.querySelectorAll('#manager_name')[0];
		let chatHead = document.querySelectorAll('.chatHead')[0];
		let managerAvatars = document.querySelectorAll('#manager_ava')[0];
		managerNames.style.width = chatHead.offsetWidth - managerAvatars.offsetWidth - 50;
	}


	// ОТПРАВКА СООБЩЕНИЯ
	function sendMessage(e){
		e.preventDefault();

		// отправка сообщения
		let text_message = entry_message_field.innerText;

		if (text_message.length > 0) {
			// очищаем поле ввода сообщения
			entry_message_field.innerHTML = '';
			core.sendWebsiteTextMessage(text_message);
			core.visitorType('');

			chatScrollBottom();
			resizeMessagesList();
			placeholder();
		}
		chatScrollBottom();

		let dialogBody = document.getElementById('wrap_messages');
		dialogBody.setAttribute('data-scrolled', '');
	}
	// КОНЕЦ ОТПРАВКИ СООБЩЕНИЯ


	// СКРОЛЛ ВНИЗ ПРИ ДОБАВЛЕНИИ НОВОГО СООБЩЕНИЯ
	function chatScrollBottom() {
	   document.getElementById('wrap_messages').scrollTop = document.getElementById('wrap_messages').scrollHeight + 400;
	}
	// КОНЕЦ СКРОЛЛА ВНИЗ ПРИ ДОБАВЛЕНИИ НОВОГО СООБЩЕНИЯ


	// DRAG AND DROP ФАЙЛА В ПОЛЕ ВВОДЕ СООБЩЕНИЯ
	// файл поднесли
	let file_drop_zone = document.getElementById('wrap_chat');
	let chat_body = document.getElementById('wrap_messages_pos');
	function fileOver(event) {
		event.preventDefault();
		chat_body.classList.add('file_drop_hover');
	}

	// файл убрали
	function fileLeave(event) {
		event.preventDefault();
		chat_body.classList.remove('file_drop_hover');
	}

	// файл бросили в поле
	function overDrop(event) {
		event.preventDefault();
		chat_body.classList.remove('file_drop_hover');
		let output = [];
		let files = event.dataTransfer.files;

		let fileType = files[0].name.split('.');
      let fileExt;
      if (fileType.length) {
         fileExt = fileType[fileType.length - 1].toLowerCase();
      }

		if (fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jpeg') {
			// Преобразуем изображение в base64
			let fileReader = new FileReader();

			fileReader.onload = function(fileLoadedEvent) {
				let img_base64 = fileLoadedEvent.target.result; // изображение в base64

				// создаем блок с доавленными файлами
				let uploads_files = "<img src='" + img_base64 + "' class='message__uploadImg' />";
				let file_in_message = document.createElement('div');
				file_in_message.innerHTML = uploads_files;

				// создаем блок с сообщением и помещаем в него блок с временем
				let new_message = document.createElement('div');
				new_message.classList.add('chatBody__message');
				new_message.classList.add('chatBody__outMessage');
				new_message.innerHTML = '<div class="chatBody__spin"></div>';
				new_message.appendChild(file_in_message);

				// добавляем сообщение в список сообщений
				document.getElementById('messages_list').appendChild(new_message);
			}
			fileReader.readAsDataURL(files[0]);
		}
		else {
			// создаем блок с сообщением и помещаем в него блок с временем
			let new_message = document.createElement('div');
			new_message.classList.add('chatBody__message');
			new_message.classList.add('chatBody__outMessage');
			new_message.innerHTML = '<div class="chatBody__spin"></div> <div><a class="chatBody__fileLink" target="_blank" href="#"><img class="chatBody__fileIcon" src="img/upload_icon.png"> Скачать файл</a></div>';

			// добавляем сообщение в список сообщений
			document.getElementById('messages_list').appendChild(new_message);
		}

		// отправляем сообщение с файлом
		core.sendWebsiteFileMessage(files);

		chatScrollBottom();
	}

	file_drop_zone.addEventListener("dragover", fileOver, false);
	file_drop_zone.addEventListener("dragleave", fileLeave, false);
	file_drop_zone.addEventListener("drop", overDrop, false);
	// КОНЕЦ DRAG AND DROP ФАЙЛА В ПОЛЕ ВВОДЕ СООБЩЕНИЯ



	// ПОПАП ИЗОБРАЖЕНИЙ
	function toggle(div_id) {
		let el = document.getElementById(div_id);

		if (el.style.display === 'none'){
			el.style.display = 'block';
		}
		else {
			el.style.display = 'none';
		}
	}

	function blanket_size(popUpDivlet) {
		let viewportheight;
		let blanket_height;
		if (typeof window.innerWidth != 'undefined') {
			viewportheight = window.innerHeight;
		}
		else {
			viewportheight = document.documentElement.clientHeight;
		}

		if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
			blanket_height = viewportheight;
		}
		else {
			if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
				blanket_height = document.body.parentNode.clientHeight;
			}
			else {
				blanket_height = document.body.parentNode.scrollHeight;
			}
		}

		let blanket = document.querySelectorAll('.popupContainer_bg')[0];
		blanket.style.height = blanket_height + 'px';
		let popUpDiv = document.getElementById(popUpDivlet);
		let popUpDiv_height = blanket_height/2-200;
	}

	function popup(windowname, img) {
		blanket_size(windowname);
		toggle('popupContainer_bg');
		toggle(windowname);
		let popupImg = document.createElement('img');
		popupImg.setAttribute('src', img.getAttribute('src'));
		popupImg.setAttribute('id', 'imgInPopup');
		document.getElementById('popupContent').appendChild(popupImg);

		let popUpDiv = document.getElementById(windowname);
	}

	function closePopup(windowname){
		blanket_size(windowname);
		toggle('popupContainer_bg');
		toggle(windowname);
		if (document.getElementById('imgInPopup') != null) {
			document.getElementById('imgInPopup').remove();
		}
	}


	// ЗАКРЫТИЕ ПОПАПА ПРИ КЛИКЕ НА ФОН
	let blanket = document.querySelectorAll('.popupContainer_bg')[0];
	blanket.addEventListener('click', closePopup.bind('windowname', 'popupContent'));
	// КОНЕЦ ПОПАП ИЗОБРАЖЕНИЙ
}
