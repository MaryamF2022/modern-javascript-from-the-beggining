const slideshow = {
    items: [],
    timmy: 0,
    delay: 3000,
    init: function(){
        if(document.querySelector('.slideshow')){
            let divC = document.createElement('div');
            divC.className = 'content';
            document.querySelector('.slideshow').appendChild(divC);


            //load the CSS file for slideshow
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'slideshow.css';
            document.head.appendChild(link);

            //get the slideshow content
            let url = 'slideshow.json';
            fetch(url)
            .then((response) => {
                return response.json()
            })
            .then(slideshow.loadContents)
            .catch(err => {
                console.log('ERROR:', err)
            })
        }
    },
    loadContents: function(data){
        let df = new DocumentFragment();
        let df2 = new DocumentFragment();
        data.items.forEach((item, idx)=>{
            let div = slideshow.createItem(item, idx);
            df.appendChild(div)
            let idxDiv = slideshow.createIndex(idx + 1);
            df2.appendChild(idxDiv); 
        })
    
        document.querySelector('main').appendChild(df2);
        document.querySelectorAll('main .container').forEach(item => {
            item.addEventListener('click', slideshow.getSlide);
        });
        //add slideshow items to the page
        document.querySelector('.slideshow .content').appendChild(df);
        document.querySelector('.slideshow-item').classList.add('current');
        slideshow.items = Array.from(document.querySelectorAll('.slideshow-item'));
        slideshow.start();
    },
    createIndex: function(index){
        let div = document.createElement('div');
        div.classList.add('container');
        let span = document.createElement('span');
        span.textContent = index;
        div.appendChild(span);
        return div;
    },
    createItem: function(item, index){
        let div = document.createElement('div');
        div.classList.add('slideshow-item');
        div.setAttribute('data-index', index);
        let title = document.createElement('h1');
        title.textContent = item.title;
        div.appendChild(title);
        let img = document.createElement('img');
        img.src = item.img;
        div.appendChild(img);
        let p = document.createElement('p');
        p.textContent = item.msg;
        div.appendChild(p);
        return div;
    },
    switchItem: function(index, ev){
        if (ev){
            ev.preventDefault();
            clearInterval(slideshow.timmy);
            document.querySelectorAll('.slideshow-item').forEach(item => {
                item.classList.remove('current');
                item.classList.remove('leaving');
            })
            slideshow.items[0].classList.add('current');
            setTimeout(() => {
                slideshow.start()
            }, 10000);
            return;
        }
        let current = document.querySelector('.current');
        current.classList.remove('current');
        current.classList.add('leaving');
        slideshow.items[index].classList.add('current');
        setTimeout(() => {
            current.classList.remove('leaving');
        }, 800);
    },
    start: function(){
        slideshow.timmy = setInterval(() => {
            let [first, ...rest] = slideshow.items;
            slideshow.items = [...rest, first];
            slideshow.switchItem(0);
        }, slideshow.delay);
    },
    getSlide: function(ev){
        clearInterval(slideshow.timmy);
        let spanId = ev.currentTarget.querySelector('span').textContent - 1;
        if (document.querySelector('.current').getAttribute('data-index') != spanId){
            let current = document.querySelector('.current');
            let leaving = document.querySelector('.leaving');
            if (leaving){
                leaving.classList.remove('leaving')
            }

            current.classList.remove('current');
            // current.classList.add('leaving');
            document.querySelectorAll('.slideshow-item').forEach(elem => {
                if (elem.getAttribute('data-index') == spanId){
                    elem.classList.add('current');
                }
            });
            current = document.querySelector('.current')
         
            let currentind = slideshow.items.findIndex(item => item.dataset.index == current.dataset.index)
            
            
            let items = slideshow.items.reduce((acc, item, index) =>{
                if (index > currentind){
                    acc.first.push(item);
                } else if (index < currentind){
                    acc.last.push(item);
                } else {
                    acc.first.unshift(item);
                }

                return acc;
            }, {first:[], last:[]})
            
            slideshow.items = [...items.first, ...items.last];
            // setTimeout(() => {
            //     current.classList.remove('leaving');
            // }, 800);
        }
        setTimeout(slideshow.start, 1000);
    }
}

document.addEventListener('DOMContentLoaded', slideshow.init);

document.querySelector('.stop-btn').addEventListener('click', function(ev){
    slideshow.switchItem(0, ev);
});





