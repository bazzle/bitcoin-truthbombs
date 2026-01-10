export function CurrentYear(){
	const d = new Date
	const year = d.getFullYear()
	const yearelem = document.querySelector('.getyear')
	yearelem.innerHTML = year
}