const productProfitArray = [
  {product: 'Product A', sales: -22},
  {product: 'Product B', sales: 37},
  {product: 'Product C', sales: -81},
  {product: 'Product D', sales: -1},
  {product: 'Product E', sales: -52},
  {product: 'Product F', sales: -73},
]; 


function topProduct(productProfitArray){

  let topProduct = 'No Data';
  let highestSales = -Infinity;

  for (let i = 0; i < productProfitArray.length; i++) {

    const productData = productProfitArray[i];
    
    if (productData.sales > highestSales) {
      topProduct = productData.product;
      highestSales = productData.sales;
    }
  }
  return topProduct;
}



function bottomProduct(productProfitArray) {

  let bottomProduct = 'No Data';
  let lowestSales = Infinity;

  for (let i = 0; i < productProfitArray.length; i++) {

    const productData = productProfitArray[i];

    if (productData.sales < lowestSales) {
      bottomProduct = productData.product;
      lowestSales = productData.sales;
    }
  }
  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {

  let zeroProfitProduct = 'No Data'
  let zeroSales = Infinity;

  for (let i = 0; i < productProfitArray.length; i++) {

    const productData = productProfitArray[i];
    const zero = productData.sales
    const difference = Math.abs(zero);

    if (difference < Math.abs(zeroSales)) {
      zeroProfitProduct = productData.product;
      zeroSales = zero;
    }
  }

  return zeroProfitProduct;

}

const topProductSales = topProduct(productProfitArray);
const bottomProductSales = bottomProduct(productProfitArray);
const zeroProfitProductSales = zeroProfitProduct(productProfitArray);

console.log(`The top product is ${topProductSales}`);
console.log(`The bottom product is ${bottomProductSales}`);
console.log(`The product close to zero is ${zeroProfitProductSales}`);