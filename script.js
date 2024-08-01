document.addEventListener('DOMContentLoaded', function() {
    const priceCardData = {
      title: "Pro Plan",
      price: "$49.99",
      description: "Unlock all the premium features with our Pro Plan.",
      buttonText: "Subscribe Now"
    };
  
    const priceCardDiv = document.getElementById('priceCard');
  
    priceCardDiv.innerHTML = `
      <h2>${priceCardData.title}</h2>
      <div class="price">${priceCardData.price}</div>
      <div class="description">${priceCardData.description}</div>
      <button>${priceCardData.buttonText}</button>
    `;
  });
  