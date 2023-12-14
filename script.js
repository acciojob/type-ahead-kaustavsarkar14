//your JS code here. If required.
const input = document.getElementById('typeahead')
const ul =  document.getElementById('suggestions-list')
let timer = null
input.addEventListener('input',(e)=>{
	clearTimeout(timer)
	timer = setTimeout(()=>{
		fetch(`https://api.frontendexpert.io/api/fe/glossary-suggestions?text=${e.target.value}`)
		.then(data=>data.json())
		.then(data=>{
			ul.innerHTML = ''
			data.forEach(el=>{
				const li = document.createElement('li')
				li.innerText = el
				li.addEventListener('click',e=>{
					input.value = e.target.innerText
					ul.innerHTML = ''
				})
				ul.appendChild(li)
			})
		})
		.catch(err=>console.log(err))
	},500)
})