interface Pallet {
    id: number;
    width: number;
    height: number;
    depth: number;
  }
  
  interface Equipment {
    id: number;
    name: string;
    width: number;
    height: number;
    depth: number;
  }
  
  // Equipment types with dimensions (width, height, depth)
  const equipmentTypes: Equipment[] = [
    { id: 1, name: "53' Dry Van", width: 100, height: 150, depth: 635 },
    { id: 2, name: "26' Box Truck", width: 200, height: 200, depth: 310 },
    { id: 3, name: "24' Box Truck", width: 300, height: 250, depth: 287 },
    { id: 4, name: "15' LB Sprinter Van", width: 69, height: 75, depth: 179 },
    { id: 5, name: "13.75' EB Sprinter Van", width: 69, height: 75, depth: 162 },
    { id: 6, name: "10.25' RB Sprinter Van", width: 69, height: 64, depth: 122 },
  
  
  ];
  
  function sortPalletsByVolume(pallets: Pallet[]): Pallet[] {
    return pallets.slice().sort((a, b) => (b.width * b.height * b.depth) - (a.width * a.height * a.depth));
  }
  
  function canFitPallet(equipment: Equipment, pallet: Pallet): boolean {
    return equipment.width >= pallet.width && equipment.height >= pallet.height && equipment.depth >= pallet.depth;
  }
  
  function findOptimalStacking(pallets: Pallet[], equipmentTypes: Equipment[]): Equipment[][] {
    const sortedPallets = sortPalletsByVolume(pallets);
    const equipmentInstances: Equipment[][] = equipmentTypes.map(() => []);
    let currentEquipmentType = 0;
  
    for (const pallet of sortedPallets) {
      while (currentEquipmentType < equipmentTypes.length) {
        const equipment = { ...equipmentTypes[currentEquipmentType] };
        if (canFitPallet(equipment, pallet)) {
          equipmentInstances[currentEquipmentType].push(pallet);
          break;
        }
        currentEquipmentType++;
      }
  
      if (currentEquipmentType === equipmentTypes.length) {
        console.log("Not enough equipment types to store all pallets.");
        return equipmentInstances;
      }
    }
  
    return equipmentInstances;
  }
  
// Example Below

//   const userInput: Pallet[] = [
//     { id: 1, width: 80, height: 120, depth: 90 },
//     { id: 2, width: 90, height: 130, depth: 80 },
//     { id: 3, width: 60, height: 100, depth: 70 },
//     { id: 4, width: 75, height: 110, depth: 85 },
//   ];
  
//   const equipmentInstances = findOptimalStacking(userInput, equipmentTypes);
  
//   equipmentInstances.forEach((instances, index) => {
//     if (instances.length > 0) {
//       console.log(`Equipment Type ${equipmentTypes[index].name} contains pallets: ${instances.map(pallet => pallet.id).join(', ')}`);
//     } else {
//       console.log(`Equipment Type ${equipmentTypes[index].name} is empty.`);
//     }
//   });
  