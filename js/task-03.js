const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galleryEl = document.querySelector(".gallery")

const imgAddFunc = ({url, alt}) => {
  return `<li width="30%"><img src=${url} alt=${alt} width="100%"></img></li>`
}

const galleryItems = images.map(imgAddFunc)

galleryEl.insertAdjacentHTML("afterbegin", galleryItems.join(""));
galleryEl.style.display = 'flex'
galleryEl.style.justifyContent = "space-between"
galleryEl.style.alignItems = 'center'
galleryEl.style.listStyle = 'none'
