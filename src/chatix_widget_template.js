var chatix_template = function(){

	var container = document.createElement('div');

	container.innerHTML = "<div id='chatixContainer'>\
		<div class='chatixPosition'>\
			<div class='chatixWindow chatixWindow__hidden' id='wrap_chat'>\
				<div class='chatHead'>\
					<div class='chatHead__top' id='chatHead'>\
						<div class='chatHead__top-connected hidden'>\
							<div class='chatHead__avatar' id='manager_ava'></div>\
							<div class='chatHead__info'>\
								<div class='chatHead__info_consult_name' id='manager_name'></div>\
							</div>\
						</div>\
						<div class='chatHead__top-noConnected hidden'>\
							<div class='chatHead__info_chatName' id='chat_name'></div>\
							<div class='chatHead__avatar' id='manager_avas'></div>\
							<div class='chatHead__info_status'></div>\
						</div>\
						<div class='chatHead__arrow'><span class='arrow'><span></span><span></span></span></div>\
					</div>\
					<div class='broadcastBlock hidden'>\
						<div class='broadcastBlock__allow'>\
							<p class='broadcastBlock__text'>Разрешить консультанту наблюдать за вашим экраном?</p>\
							<div class='broadcastBlock__moreBtn'>Подробнее</div>\
							<div class='broadcastBlock__moreText'>\
								<ul>\
									Консультант увидит:\
									<li>Содержимое вкладки браузера</li>\
									<li>Положение мыши</li>\
									<li>Нажатие клавиш клавиатуры и мыши</li>\
								</ul>\
								<ul>\
									Консультант не увидит:\
									<li>Пароли и особые поля форм</li>\
									<li>Содержимое других вкладок и других программ</li>\
									<li>Картинку из web-камеры</li>\
								</ul>\
								<div class='broadcastBlock__mostBtn'>Еще подробнее</div>\
							</div>\
							<div class='broadcastBlock__btns'>\
								<div id='broadcastBlock__allowBtn' class='broadcastBtn'>Да</div>\
								<div id='broadcastBlock__disallowBtn' class='broadcastBtn'>Нет</div>\
							</div>\
						</div>\
						<div class='broadcastBlock__broadcasting hidden'>\
							<div class='broadcastBlock__broadcastingContent'>\
								<p class='broadcastBlock__text'>Идет показ страницы...</p>\
								<div id='broadcastBlock__disconectBtn' class='broadcastBtn'>Прервать</div>\
							</div>\
							<div class='broadcastBlock__broadcastingGradient'></div>\
						</div>\
					</div>\
				</div>\
				<div class='chatHead__error'>Максимальный размер загружаемого файла 10мб</div>\
				<div class='chatBody__viewport' id='wrap_messages_pos'>\
					<div class='chatBody__messages' id='wrap_messages'>\
						<div class='chatBody_messagesList' id='messages_list'>\
						</div>\
					</div>\
				</div>\
				<div class='newMessage'>\
					<div contenteditable='true' class='newMessage__field newMessage__placeholder' id='entry_message_field'></div>\
				</div>\
			</div>\
			<div class='showChatBtn' id='show_chat_btn'>\
				<div class='showChatBtn__newMessage' id='showChatBtn__newMessage'></div>\
			</div>\
		</div>\
		<div class='popupContainer'>\
	      <div class='popupContainer_сontent'>\
	         <div class='popupContainer_bg' id='popupContainer_bg' style='display:none;'></div>\
	         <div class='popupContent' id='popupContent' style='display:none;'>\
	         </div>\
	      </div>\
	   </div>\
		<div id='managerSelected' style='display: none;'></div>\
	</div>"

	document.getElementsByTagName('body')[0].appendChild(container);
}

export default chatix_template;
