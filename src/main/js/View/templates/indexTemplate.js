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
    width: 50%;
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
.message__content{}

</style>
<div class="root">
    <div class="root__bar">
        <p class="root__bar_header">Wirtualny asystent rekrutacji</p>
        <button class="root__bar_button">&#8645;</button>
    </div>
    <div class="root__chat"></div>
</div>
`
