const color_palette = {
	main: 'DarkOrchid',
	user: 'DarkOrchid',
	rasa: 'DarkSlateGrey',
	text: 'white',
}

export const indexTemplate = document.createElement('template')
indexTemplate.innerHTML = `
<style>
.root{
    width: 30%;
    min-width: 400px;
    border: 1px solid black;
    position: fixed;
    right: 0;
    bottom: 0;
}

.root__bar{
    background-color: ${color_palette.main};
    color: ${color_palette.text};
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.root__bar_header{
    font-size: 1.4rem;
    font-weight: 800;
}
.root__bar_button{
    padding: 2px 15px;
}

.root__chat{
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 50vh;
    overflow-y: auto;
}

.user{
    background: ${color_palette.user};
    align-self: flex-start;
}
.rasa{
    background: ${color_palette.rasa};
    align-self: flex-end;
}

.message{
    color: ${color_palette.text};
    border-radius: 15px;
    width: 80%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    box-sizing: border-box;
}

.message__header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}

.message__header_author{
    font-weight: 700;
}
.message__header_created-at{
    font-style: italic;
}
.message__content{
    display: flex;
    flex-direction: column;
}
.message__content_btn-box{
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.message__content_btn-box_button{
    background-color: ${color_palette.text};
    color: ${color_palette.rasa};
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    margin: 2px;
}
.message__content_btn-box_button:hover{
    box-shadow: 4px 4px 4px ${color_palette.text};
    text-shadow: 4px 4px 4px ${color_palette.rasa};
    cursor: pointer;
}


.root__form{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid black;
}
.root__form_input{
    width: 70%;
    height: 100%;
    box-sizing: border-box;
}
.root__form_button{
    width: 30%;
    height: 100%;
    box-sizing: border-box;
}
</style>
<div class="root">
    <div class="root__bar">
        <p class="root__bar_header">Wirtualny asystent rekrutacji</p>
        <button class="root__bar_button" id="toggle_chat">&#8645;</button>
        <button class="root__bar_button" id="close_chat">&#9746;</button>
    </div>
    <div class="root__chat"></div>
    <form class="root__form" id="form">
        <input class="root__form_input" name="user_input">
        <button type="submit" class="root__form_button">Wyślij</button>
    </form>
</div>
`
