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
    background-color: DarkOrchid;
    color: white;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.root__chat{}

.user{
    background: DarkOrchid;
    justify-self: flex-start;
}
.rasa{
    background: DarkSlateGrey;
    justify-self: flex-end !important;
}

.message{
    color: white;
    border-radius: 15px;
    width: 80%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    margin: 5px;
}

.message__author{
    font-weight: 700;
}
.message__content{}
.message__created-at{
    font-style: italic;
}
</style>
<div class="root">
    <div class="root__bar">
        <p>Wirtualny asystent rekrutacji</p>
        <button>&#8645;</button>
    </div>
    <div class="root__chat"></div>
</div>
`

// .root{
//     font-family: 'Arial',sans-serif;
//     background: #f4f4f4;
//     width: 500px;
//     display: grid;
//     grid-template-columns: 1fr 2fr;
//     grid-gap: 10px;
//     margin-bottom: 15px;
//     border-bottom: darkorchid 5px solid;
// }

// .user-card img{
//     width: 100%;
// }

// .user-card button{
//     cursor: pointer;
//     background: darkorchid;
//     color: #fff;
//     border:0;
//     border-radius: 5px;
//     padding: 5px 10px;
// }
