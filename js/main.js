// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio)
const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=1",
        author: {
            name: "Utente1",
            image: "https://unsplash.it/300/300?image=1"
        },
        likes: 80,
        created: "01-01-2021"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=2",
        author: {
            name: "Utente2",
            image: "https://unsplash.it/300/300?image=2"
        },
        likes: 124,
        created: "02-02-2021"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=3",
        author: {
            name: "Utente3",
            image: "https://unsplash.it/300/300?image=3"
        },
        likes: 59,
        created: "03-03-2021"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        author: {
            name: "Utente4",
            image: "https://unsplash.it/300/300?image=4"
        },
        likes: 40,
        created: "04-04-2021"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=5",
        author: {
            name: "Utente5",
            image: "https://unsplash.it/300/300?image=5"
        },
        likes: 87,
        created: "05-05-2021"
    },
    {
        id: 6,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=6",
        author: {
            name: "Utente6",
            image: "https://unsplash.it/300/300?image=6"
        },
        likes: 367,
        created: "06-06-2021"
    },
    {
        id: 7,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        author: {
            name: "Utente7",
            image: "https://unsplash.it/300/300?image=7"
        },
        likes: 22,
        created: "07-07-2021"
    },
    {
        id: 8,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=8",
        author: {
            name: "Utente8",
            image: "https://unsplash.it/300/300?image=8"
        },
        likes: 213,
        created: "08-08-2021"
    },
    {
        id: 9,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=9",
        author: {
            name: "Utente9",
            image: "https://unsplash.it/300/300?image=9"
        },
        likes: 32,
        created: "09-09-2021"
    },
];

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Devo prelevare il Container dei posts
const postsContainer = document.getElementById('container');

//Richiamo la funzione per stampare i posts nel DOM 
printPosts(postsContainer, posts);


// FUNCTIONS

/**
  
 * Description // FUNZIONE PER STAMPARE I POSTS NEL DOM 
 * @param {any} container -> il container di tutti i posts
 * @param {any} printPost -> i posts da stampare
 * 
 */
function printPosts(container, printPosts) {
    postsContainer.innerHTML = '';

    // // Ciclo forEach per scorrere tutti gli object dell'array dei post
    const printPost = posts.forEach(posts => {
        // Creo il div post
        const postDiv = document.createElement('div');
        // Aggiungo la classe post al div 
        postDiv.classList.add('post');
        // innerHTML per creare il template literal con la struttura del post
        postDiv.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts.author.image}" alt="${posts.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts.author.name}</div>
                    <div class="post-meta__time">${posts.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts.content}</div>
        <div class="post__image">
            <img src="${posts.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${posts.likes}  </b> persone
                </div>
            </div> 
        </div>
        `
        // Appendo il div al container dei posts
        postsContainer.append(postDiv);

    })
    return printPost;
}

