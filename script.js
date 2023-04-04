// 1
const el1 = document.querySelector('.page-title')
el1.textContent = 'Новий заголовок'
// 2
const el2 = document.querySelector('.paragraph')
el2.textContent = 'Це абзац тексту.'
// 3
const el3 = document.querySelectorAll("ol.list")
console.log(el3)
// 4
const el4 = document.querySelectorAll('.image')
for(let u = 0;u<el4.length;u++){
    el4[u].src = 'https://upload.wikimedia.org/wikipedia/commons/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg'
}
// 5
const ell5 = document.querySelectorAll('.section-title')
const el5 = ell5[ell5.length-1]
el5.textContent = "Новий заголовок"
// 6
const ell6 = document.querySelectorAll('.table-cell')
const el6 = ell6[ell6.length-1]
el6.textContent = "Оновлене значення"
// 7
const el7 = document.querySelectorAll('.image')
for(let u = 0;u<el7.length;u++){
    el7[u].className = 'highlight'
}
el7.forEach(function(element) {
    element.style.backgroundColor = 'red';
  });
// 8
const el8 = document.querySelector('.navigation')
el8.innerHTML = `      <nav class="navigation" style = "background-color :lightblue">
                        <ul class="nav-menu">
                        
                          <li class="nav-item"><a class="nav-link" href="#">Пункт 1</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Пункт 2</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Пункт 3</a></li>
                        </ul>
                        
</nav>`