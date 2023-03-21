interface Product {
    id: number;
    sku: string;
    width: number;
    height: number;
    depth: number;
    weight: number;
  }
  
  interface Pallet {
    id: number;
    width: number;
    height: number;
    depth: number;
    weightLimit: number;
  }
  
  function calculateProductVolume(product: Product): number {
    return product.width * product.height * product.depth;
  }
  
  function calculatePalletVolume(pallet: Pallet): number {
    return pallet.width * pallet.height * pallet.depth;
  }
  
  function calculateMaxProductsOnPallet(product: Product, pallet: Pallet): number {
    const maxByVolume = Math.floor(calculatePalletVolume(pallet) / calculateProductVolume(product));
    const maxByWeight = Math.floor(pallet.weightLimit / product.weight);
    return Math.min(maxByVolume, maxByWeight);
  }
  
  // Example usage
  const products: Product[] = [
    { id: 1, sku: 'SKU-001', width: 10, height: 20, depth: 15, weight: 2 },
    { id: 2, sku: 'SKU-002', width: 15, height: 15, depth: 20, weight: 3 },
  ];
  
  const pallet: Pallet = {
    id: 1,
    width: 120,
    height: 150,
    depth: 100,
    weightLimit: 1000,
  };
  
  products.forEach(product => {
    const maxProductsOnPallet = calculateMaxProductsOnPallet(product, pallet);
    console.log(`For SKU ${product.sku}, you can fit ${maxProductsOnPallet} items on the pallet.`);
  });


// In this program, we define two interfaces: Product and Pallet. The Product interface has dimensions and weight, and the Pallet interface has dimensions and a weight limit. The calculateProductVolume and calculatePalletVolume functions compute the volumes of the products and pallets, respectively. The calculateMaxProductsOnPallet function calculates the maximum number of products that can fit on a pallet based on volume and weight constraints.

// In the example usage, we define two products with their dimensions and weights, and a pallet with dimensions and a weight limit. The program calculates how many of each product SKU can fit on the pallet and outputs the results.
