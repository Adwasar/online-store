import {createElementWithClass, getProductChain} from "../features/help-functions";
import {Product} from "../types/product";

export function renderProductPage(productIndex: number, detailsData: Product[]): HTMLElement {
    const {brand, name, images, description, price, quantity, category} = detailsData[productIndex];

    const productPage = document.createElement('div');
    const productCard = createElementWithClass('product');

    const productChain = createElementWithClass('chain', 'span');
    productChain.innerText = getProductChain(productIndex);
    productPage.appendChild(productChain);

    const productTitle = createElementWithClass('product__title');
    const title = createElementWithClass('', 'h1');
    title.innerText = name;
    productTitle.appendChild(title);
    productCard.appendChild(productTitle)

    const productImages = createElementWithClass('product__images');
    const firstImage = document.createElement('div');
    const secondImage = document.createElement('div');
    const thirdImage = document.createElement('div');
    firstImage.style.backgroundImage = `url(${images[0]})`;
    secondImage.style.backgroundImage = `url(${images[1]})`;
    thirdImage.style.backgroundImage = `url(${images[2]})`;
    productImages.appendChild(firstImage);
    productImages.appendChild(secondImage);
    productImages.appendChild(thirdImage);
    productCard.appendChild(productImages);

    const productMainImage = createElementWithClass('product__main-image');
    productMainImage.style.backgroundImage = `url(${images[0]})`;
    productCard.appendChild(productMainImage);

    const productDetails = createElementWithClass('product__details')
    const productDescription = document.createElement('div');
    productDescription.innerHTML = `<p>ОПИСАНИЕ</p>${description}`;
    const productBrand = document.createElement('div');
    productBrand.innerHTML = `<p>БРЕНД</p>${brand}`;
    const productCategory = document.createElement('div');
    productCategory.innerHTML = `<p>КАТЕГОРИЯ</p>${category}`;
    const productQuantity = document.createElement('div');
    productQuantity.innerHTML = `<p>КОЛИЧЕСТВО НА СКЛАДЕ</p>${quantity}`;
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productBrand);
    productDetails.appendChild(productCategory);
    productDetails.appendChild(productQuantity);
    productCard.appendChild(productDetails);

    const productBuyOptions = createElementWithClass('product__buy-options');
    productBuyOptions.innerHTML = `<p>${price}</p>`;
    productBuyOptions.innerHTML += '<button>Добавить в корзину</button>' + '<button>Купить сейчас</button>';
    productCard.appendChild(productBuyOptions);

    productPage.appendChild(productCard);
    return productPage;
}